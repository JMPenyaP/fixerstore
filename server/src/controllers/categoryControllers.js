const { Category } = require('../db.js');



const createCategory = async (name) => {

    const newCategory = await Category.create({ name });
    return newCategory;

}
const getCategories = async () => {
    const categories = await Category.findAll()
    return categories
}

module.exports = {

    createCategory,
    getCategories

}

