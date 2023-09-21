const { Op } = require("sequelize");
const { Product } = require("../db");
//! Crear Producto



const createProduct = async (name, categoryId, firstImage, carrouselImage, description, date, priceOfList, statusOffer, offer, status, stock) => {

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
