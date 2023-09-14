
const { createCategory, getCategories } = require('../controllers/categoryControllers.js');


const categoryHandler = async (req, res) => {
  try {
    const { name } = req.body;

    const newCategory = await createCategory(name);

    if (!newCategory) return res.status(400).send({ message: 'Category not created' });

    res.status(201).send(newCategory);


  } catch (error) {

    res.status(500).send({ message: 'Error creating category', error });


  }

}


const getCategoryHandler = async (req, res) => {
  try {
    const allCategories = await getCategories()
    res.status(200).json(allCategories)
  } catch (error) {
    res.status(400).json({ success: false, message: "Error getting categories " + error.message })
  }
}


module.exports = {

  categoryHandler,
  getCategoryHandler

}