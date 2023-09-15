const { createProduct, getAllProducts, getProductByName, getProductById } = require("../controllers/productsControllers");
const { firstImageFunction, imagesInCarrousel } = require('./utils/functionsCloudinary')
//! Crear Producto



const createProductsHandler = async (req, res) => {



    try {
        let { name, categoryId, firstImage, carrouselImage, description, date, priceOfList, statusOffer, offer, status, stock } = req.body;


        firstImage = await firstImageFunction(firstImage)

        carrouselImage = await imagesInCarrousel(carrouselImage)

        const newProduct = await createProduct(name, categoryId, firstImage, carrouselImage, description, date, priceOfList, statusOffer, offer, status, stock);

        res.status(200).json({ producto: newProduct, create: true });
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

const getProductIdHandler = async (req, res) => {
    const { id } = req.params
    try {
        const productById = await getProductById(id)
        res.status(200).json(productById)
        // res.status(200).send("hello wprlfoknojv")
    } catch (error) {
        res.status(400).json({ success: false, message: "Error getting Product by id. " + error.message })
    }
}
module.exports = {
    createProductsHandler,
    getAllProductsHandler,
    getProductIdHandler
};

