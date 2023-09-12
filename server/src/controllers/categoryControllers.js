const { category } = require('../db.js');



const createCategory = async (name) => {

    const newCategory = await category.create({ name });
    return newCategory;

}


module.exports = {

    createCategory

}