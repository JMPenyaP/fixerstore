// controllers/cartController.js
const { User, Product, Cart } = require('../db');

const addToCartController = async (userId, products) => {

    // Recorremos la lista de productos y los agregamos al carrito
    for (const productData of products) {
        const { id, cantidad } = productData; // Extraemos id y cantidad de cada producto


        const user = await User.findByPk(userId);

        if (!user) {
            return "Usuario no encontrado";
        }

        const product = await Product.findByPk(id);

        if (!product) {
            return `No se Encontraron Productos con el id ${id}`;
        }

        // Verificar si ya existe una entrada en el carrito para el usuario y producto
        let cartItem = await Cart.findOne({
            where: {
                UserId: userId,
                ProductId: id,
            },
        });

        if (cartItem) {
            // Si existe, actualiza la cantidad en lugar de crear una nueva entrada
            cartItem.quantity += cantidad; // Usamos la cantidad del producto en lugar de quantity
            await cartItem.save();
        } else {
            // Si no existe, crea un nuevo registro en la tabla Cart
            await Cart.create({ UserId: userId, ProductId: id, quantity: cantidad }); // Usamos la cantidad del producto en lugar de quantity
        }
    }


    return { message: "Productos agregados al carrito" }

};

module.exports = {
    addToCartController,
    // Agrega más funciones aquí según tus necesidades
};
