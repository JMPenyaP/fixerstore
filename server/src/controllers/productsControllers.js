const { Op } = require("sequelize");
const { Product, Category } = require("../db");
//! Crear Producto


const activeLogicProduct = async (id) => {

  const product = await Product.findByPk(id);

  if (!product) return "No se encontro el producto";

  // se realiza el borrado logico seteando su status 

  product.status = true;
  await product.save();

  return "Se activo el producto correctamente";

}

const eraseLogicProduct = async (id) => {

  const product = await Product.findByPk(id);

  if (!product) return "No se encontro el producto";

  // se realiza el borrado logico seteando su status 

  product.status = false;
  await product.save();


  return "Producto Eliminado Correctamente";


}

const destroyProduct = async (id) => {

  const product = await Product.findByPk(id);

  if (!product) return "No se encontro el producto";

  await product.destroy();


  return "Producto Eliminado Correctamente"


}


const updateProduct = async (id, name, categoryId, firstImage, carrouselImage, description, date, priceOfList, statusOffer, offer, status, stock) => {

  const product = await Product.findByPk(id);

  if (!product) {
    return "Producto no encontrado";
  }



  // Asigna los valores actualizados
  product.name = name;
  product.categoryId = categoryId;
  product.firstImage = firstImage;
  product.carrouselImage = carrouselImage;
  product.description = description;
  product.date = date;
  product.priceOfList = priceOfList;
  product.statusOffer = statusOffer;
  product.offer = offer;
  product.status = status;
  product.stock = stock;

  await product.save();

  return "Producto Actualizado Correctamente";
}

const createProduct = async (name, categoryId, firstImage, carrouselImage, description, date, priceOfList, statusOffer, offer, status, stock) => {

  return await Product.findOrCreate({ where: { name, categoryId, firstImage, carrouselImage, description, date, priceOfList, statusOffer, offer, status, stock } });

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
  const { name, categoryId, order, order2 } = filters;
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
    order: order ? [["name", order]] : order2 ? [["priceOfList", order2]] : [] ,
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
  updateProduct,
  eraseLogicProduct,
  activeLogicProduct,
  destroyProduct,
  getFilteredProducts,
};
