const { Sequelize, Op } = require("sequelize");
const { Product } = require("../db");
//! Crear Producto
const createProduct = async (name, categoryId, firstImage, carrouselImage, description, date, priceOfList, statusOffer, offer, status, stock) => {
  console.log(carrouselImage)
  return await Product.findOrCreate({ where: { name, categoryId, firstImage, carrouselImage, description, date, priceOfList, statusOffer, offer, status, stock } });


};


//! Obtener todos los Productos
const getAllProducts = async () => {
  const allProducts = await Product.findAll();
  return allProducts;

};

//! Obtener Producto por Nombre
const getProductByName = async (name) => {

  const productName = await Product.findAll({
    where: {
      name: {
        [Op.iLike]: '%' + name + '%',
      },
    },
  });
  console.log(productName)
  return productName;
};

const getProductById = async (id) => {
  const productId = await Product.findByPk(id)
  console.log(productId)

  return productId
}
module.exports = {
  createProduct,
  getAllProducts,
  getProductByName,
  getProductById
};
