const { Order, User, conn, Product, OrderItems } = require('../db');
const { Op } = require('sequelize');
const { format } = require('date-fns-tz');

// Configura la zona horaria en español (por ejemplo, 'es-ES')
const spanishTimeZone = 'es-ES';

/* Cuantos pedidos se hicieron este mes*/



const howManyOrderMonthControllers = async (month) => {




    const monthMappings = {
        enero: 'January',
        febrero: 'February',
        marzo: 'March',
        abril: 'April',
        mayo: 'May',
        junio: 'June',
        julio: 'July',
        agosto: 'August',
        septiembre: 'September',
        octubre: 'October',
        noviembre: 'November',
        diciembre: 'December',
    };



    const englishMonth = monthMappings[month].toLowerCase();
    if (!englishMonth) {
        throw new Error('Nombre de mes no válido');
    }

    // Obtiene el año actual
    const year = new Date().getFullYear();

    // Formatea las fechas en español
    const startDate = format(new Date(`${englishMonth} 1, ${year}`), 'yyyy-MM-dd', { timeZone: spanishTimeZone });
    const endDate = format(new Date(`${englishMonth} 31, ${year}`), 'yyyy-MM-dd', { timeZone: spanishTimeZone });

    const orders = await Order.findAll({
        where: {
            createdAt: {
                [Op.between]: [startDate, endDate],
            },
        },
    });

    return orders;

}




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
    getBuyTopUsersControllers,
    howManyOrderMonthControllers

}



