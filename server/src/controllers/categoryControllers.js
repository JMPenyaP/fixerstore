const { category } = require('../db.js');



const createCategory = async (name) => {

    const newCategory = await category.create({ name });
    return newCategory;

}
const getCategories = async()=>{
    const categories = await category.findAll()
    return categories 
}

module.exports = {

    createCategory,
    getCategories
 
}

