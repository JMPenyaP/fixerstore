const { product } = require("../db");

//! Crear Producto
const createProduct = async (name, categoryId, firstImage, carrouselImage, description, date, priceOfList, statusOffer, offer, status, stock) => {

    return await product.findOrCreate({ where: { name, categoryId, firstImage, carrouselImage, description, date, priceOfList, statusOffer, offer, status, stock } });


};


//! Obtener todos los Productos
const getAllProducts = async () => {
    const allProducts = await product.findAll();
    return allProducts;

};

//! Obtener Producto por Nombre
const getProductByName = async (name) => {
    const productName = await product.findAll({ where: { name } });
    return productName;
};


module.exports = {
    createProduct,
    getAllProducts,
    getProductByName,
};
