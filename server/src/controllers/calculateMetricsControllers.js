const { Order, User, conn, Product, OrderItems } = require('../db');
const { Op } = require('sequelize');



const getBuyTopUsersControllers = async () => {


    const buyCounts = await Order.findAll({
        attributes: [
            'UserId', // ID del usuario
            [conn.fn('COUNT', conn.col('id')), 'totalOrders'], // Conteo de órdenes por usuario
        ],
        group: ['UserId'], // Agrupar por ID de usuario
    });

    // Mapear los resultados para obtener información adicional de los usuarios
    const userBuyCounts = await Promise.all(
        buyCounts.map(async (result) => {
            const userId = result.UserId;
            const totalOrders = parseInt(result.dataValues.totalOrders);
            const user = await User.findByPk(userId);
            return {
                user,
                totalOrders,
            };
        })
    );

    return userBuyCounts;

}

const getTopSoldProductsControllers = async (date, datetwo) => {



    const topSoldProducts = await OrderItems.findAll({
        attributes: [
            'ProductId', // ID del producto
            [conn.fn('SUM', conn.col('quantity')), 'totalSold'], // Suma de la cantidad vendida
        ],
        where: {
            createdAt: {
                [Op.gte]: date + ' 00:00:00', // Fecha de inicio del día
                [Op.lte]: datetwo + ' 23:59:59', // Fecha de fin del día
            },
        },
        group: ['ProductId'], // Agrupa por ID de producto
        order: [[conn.literal('SUM(quantity)'), 'DESC']], // Ordena por cantidad vendida en orden descendente
        limit: 10, // Limita la cantidad de resultados a 10 (puedes ajustarlo)
    });


    // Mapea los resultados para obtener información adicional de los productos
    const productDetails = await Promise.all(
        topSoldProducts.map(async (result) => {
            const productId = result.ProductId;
            const totalSold = parseInt(result.dataValues.totalSold);
            const product = await Product.findByPk(productId);
            return {
                product,
                totalSold,
            };
        })
    );

    return productDetails;


}





const calculateMetricsControllers = async () => {

    const totalOrders = await Order.count()
    const totalUsers = await User.count();

    return { orders: totalOrders, users: totalUsers };

}


module.exports = {

    calculateMetricsControllers,
    getTopSoldProductsControllers,
    getBuyTopUsersControllers

}



