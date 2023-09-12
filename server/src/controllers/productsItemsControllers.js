const { Product_Item } = require('../db');


const getAllProductsItems = async () => {

    const allProducts = await Product_Item.findAll();
    return allProducts;

};

const createProductItem = async (productId, qtyInStock, productImage, price) => {

    const newProductItem = await Product_Item.create(productId, qtyInStock, productImage, price);

    return newProductItem;

};




module.exports = {
    getAllProductsItems,
    createProductItem
}

