const { Order, User, OrderItems, Cart, Product } = require('../db');

const createOrders = async () => {

    await new Promise(resolve => setTimeout(resolve, 5000));

    const userData = await User.findOne({ where: { email: "usuario@gmail.com" } });
    const userAdmin = await User.findOne({ where: { email: "admin@gmail.com" } });
    const userMaria = await User.findOne({ where: { email: "maria2@gmail.com" } });
    const userRaul = await User.findOne({ where: { email: "raulcastro@gmail.com" } });

    const cartDataUser = await Cart.findAll({ where: { UserId: userData.id } });
    const cartDataAdmin = await Cart.findAll({ where: { UserId: userAdmin.id } });
    const cartDataMaria = await Cart.findAll({ where: { UserId: userMaria.id } });
    const cartDataRaul = await Cart.findAll({ where: { UserId: userRaul.id } });

    const ordersData = [

        {

            idMp: "231289120812",
            totalAmount: 25000,
            UserId: userRaul.id,
            name: "Raul",
            surname: "Castro",
            phone: "3178783829",
            cc: "222222",
            payment: "Banesco",
            payStatus: "approved",
            retiro: "local centro de Bogotá",
            city: "Bogotá",
            address: "Dirección 123",
            department: "Antioquia"
        },

        {

            idMp: "231289120812",
            totalAmount: 65000,
            UserId: userMaria.id,
            name: "Maria",
            surname: "Perez",
            phone: "041278783829",
            cc: "222222",
            payment: "Banesco",
            payStatus: "approved",
            retiro: "local centro de Bogotá",
            city: "Bogotá",
            address: "Dirección 123",
            department: "Antioquia"

        },

        {
            idMp: "291289120812",
            totalAmount: 25000,
            UserId: userData.id,
            name: "Ansony",
            surname: "Rojas",
            phone: "04128093829",
            cc: "222222",
            payment: "Banesco",
            payStatus: "approved",
            retiro: "local centro de Bogotá",
            city: "Bogotá",
            address: "Dirección 123",
            department: "Cundinamarca"
        },
        {


            idMp: "291289120812",
            totalAmount: 85000,
            UserId: userData.id,
            name: "Ansony",
            surname: "Rojas",
            phone: "04128093829",
            cc: "222222",
            payment: "Banesco",
            payStatus: "approved",
            retiro: "local centro de Bogotá",
            city: "Bogotá",
            address: "Dirección 123",
            department: "Cundinamarca"

        },
        {
            idMp: "291289120812",
            totalAmount: 25000,
            UserId: userAdmin.id,
            name: "Fabian",
            surname: "Idarraga",
            phone: "2212321321",
            cc: "2219392292",
            payment: "Banplus",
            payStatus: "approved",
            retiro: "local centro de Bogotá # 2",
            city: "Bogotá",
            address: "Dirección 123",
            department: "Cundinamarca"
        },
        {
            idMp: "291289120812",
            totalAmount: 55000,
            UserId: userAdmin.id,
            name: "Fabian",
            surname: "Idarraga",
            phone: "2212321321",
            cc: "2219392292",
            payment: "Banplus",
            payStatus: "approved",
            retiro: "local centro de Bogotá # 2",
            city: "Bogotá",
            address: "Dirección 123",
            department: "Cundinamarca"
        },
        {
            idMp: "291289120812",
            totalAmount: 515000,
            UserId: userAdmin.id,
            name: "Fabian",
            surname: "Idarraga",
            phone: "2212321321",
            cc: "2219392292",
            payment: "Banplus",
            payStatus: "approved",
            retiro: "local centro de Bogotá # 2",
            city: "Bogotá",
            address: "Dirección 123",
            department: "Cundinamarca"
        }
    ];

    for (const orderData of ordersData) {
        const order = await Order.create(orderData);

        let cartData;

        if (orderData.UserId === userData.id) {
            cartData = cartDataUser;
        } else if (orderData.UserId === userAdmin.id) {
            cartData = cartDataAdmin;
        } else if (orderData.UserId === userMaria.id) {
            cartData = cartDataMaria;
        } else if (orderData.UserId === userRaul.id) {
            cartData = cartDataRaul;
        }

        for (const cartItem of cartData) {
            const product = await Product.findByPk(cartItem.ProductId);

            if (product) {
                await OrderItems.create({
                    OrderId: order.id,
                    ProductId: cartItem.ProductId,
                    quantity: cartItem.quantity,
                    price: product.priceOfList,
                });
            }
        }
    }
};

module.exports = {
    createOrders,
};
