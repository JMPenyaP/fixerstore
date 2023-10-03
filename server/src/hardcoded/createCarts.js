const { Cart, User, Product } = require("../db");

const userData = [
    { email: "usuario@gmail.com" },
    { email: "admin@gmail.com" }
];

const productData = [
    { id: 2, name: "Cordones Reflectivos", precio: 30000, cantidad: 30 },
    { id: 6, name: "Cepillo Para Gamuza", precio: 21500, cantidad: 3 },
    { id: 7, name: "Limpiador Express", precio: 100000, cantidad: 10 },
    { id: 1, name: "Protector Adhesivo Suelas", precio: 95000, cantidad: 30 },
    { id: 3, name: "Hormas Plasticas", precio: 45000, cantidad: 3 },
    { id: 8, name: "Shields Antiarrugas", precio: 55000, cantidad: 10 }
];

const createCarts = async () => {

    await new Promise(resolve => setTimeout(resolve, 3000));

    for (const userItem of userData) {

        const user = await User.findOne({ where: { email: userItem.email } });



        if (user) {

            let contador = 1;
            for (const productItem of productData) {


                await Cart.create({ UserId: user.id, ProductId: productItem.id, quantity: contador++ });

            }
        }
    }
};

module.exports = {
    createCarts,
};
