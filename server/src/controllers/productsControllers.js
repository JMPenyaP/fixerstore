const { Product } = require("../db");

//! Crear Producto
const createProduct = async (product_category_id, name, description, product_image) => {
    return await Product.create({ product_category_id, name, description, product_image });

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
