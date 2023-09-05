const { Product } = require("../db");

//! Crear Producto
const createProduct = async (name, description) => {
    return await Product.create({ name, description });
};

//! Obtener todos los Productos
const getAllProducts = async () => {
    const allProducts = await Product.findAll();
    return allProducts;
};

//! Obtener Producto por Nombre
const getProductByName = async (name) => {
    const productName = await Product.findAll({ where: { name: name } });
    return productName;
};

module.exports = {
    createProduct,
    getAllProducts,
    getProductByName,
};
