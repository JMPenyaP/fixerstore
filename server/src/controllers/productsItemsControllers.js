const { Product_Item } = require('../db');


const getAllProductsItems = async () => {

    const allProducts = await Product_Item.findAll();
    return allProducts;

};

const createProductItem = async (productItem) => {

    const newProductItem = await Product_Item.create(productItem);
    return newProductItem;

};




module.exports = {
    getAllProductsItems,
    createProductItem
}

