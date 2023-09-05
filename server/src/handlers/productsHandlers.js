const { createProduct, getAllProducts, getProductByName } = require("../controllers/productsControllers");

//! Crear Producto
const createProductsHandler = async (req, res) => {
    const { name, description } = req.body;

    try {
        const newProduct = await createProduct(name, description);
        res.status(200).json({ success: true, data: newProduct });
    } catch (error) {
        res.status(400).json({ success: false, message: "Error creating new Product. " + error.message });
    };
};

//! Obtener todos los Productos o uno por nombre
const getAllProductsHandler = async (req, res) => {
    const { name } = req.query;

    try {
        if (name) {
            const productByName = await getProductByName(name);
            res.status(200).json({ success: true, data: productByName });
        } else {
            const response = await getAllProducts();
            res.status(200).json({ success: true, data: response });
        }
    }
    catch (error) {
        res.status(400).json({ success: false, message: "Error getting Product(s). " + error.message });
    };

};

module.exports = {
    createProductsHandler,
    getAllProductsHandler,
};
