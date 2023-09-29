const { Op } = require("sequelize");
const { Product, Category } = require("../db");
//! Crear Producto

const createProduct = async (
  name,
  categoryId,
  firstImage,
  carrouselImage,
  description,
  date,
  priceOfList,
  statusOffer,
  offer,
  status,
  stock
) => {
  return await Product.findOrCreate({
    where: {
      name,
      categoryId,
      firstImage,
      carrouselImage,
      description,
      date,
      priceOfList,
      statusOffer,
      offer,
      status,
      stock,
    },
  });
};

//! Obtener todos los Productos
const getAllProducts = async () => {
  const allProducts = await Product.findAll();
  return allProducts;
};

//! Obtener Producto por name
const getProductByName = async (name) => {
  const productName = await Product.findAll({
    where: {
      name: {
        [Op.iLike]: "%" + name + "%",
      },
    },
  });

  return productName;
};

const getProductById = async (id) => {
  const productId = await Product.findByPk(id);

  return productId;
};

const getFilteredProducts = async (filters) => {
  const { name, categoryId, order } = filters;
  const query = {};
  if (name) {
    query.name = {
      [Op.iLike]: `%${name}%`,
    };
  }
  
  const products = await Product.findAll({
    where: query,
    include: !categoryId || categoryId === '0'
      ? []
      : [{ model: Category, where: { id: categoryId } }],
    order: order ? [["name", order]] : [],
  });

  return products;
};

/* User.findAndCountAll({
  include: [
    { model: Profile, where: { active: true } }
  ],
  limit: 3
}); */

module.exports = {
  createProduct,
  getAllProducts,
  getProductByName,
  getProductById,
  getFilteredProducts,
};
