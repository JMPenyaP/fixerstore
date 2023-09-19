const { Category, Product } = require('../db.js');



const createCategory = async (name) => {

    const newCategory = await Category.create({ name });

    return newCategory;

}
const getCategories = async () => {
    const categories = await Category.findAll()
    return categories
}

const getCatProducts = async (categoryName) => {

    const category = await Category.findOne({
        where: { name: categoryName },
        include: Product,
    })


    const products = category.Products;


    return products;

}

module.exports = {

    createCategory,
    getCategories,
    getCatProducts

}

