const { destroyProduct, createProduct, getAllProducts, getProductByName, getProductById, updateProduct, eraseLogicProduct, activeLogicProduct, getFilteredProducts } = require("../controllers/productsControllers");


const destroyPorductHandler = async (req, res) => {

    const { id } = req.params;

    try {

        const destroyProd = await destroyProduct(id);

        res.status(200).json({ message: destroyProd });

    } catch (error) {

        res.status(404).json({ error: error.message });

    }

}

const activeLogicProductHandler = async (req, res) => {

    const { id } = req.params;

    try {

        const response = await activeLogicProduct(id);

        res.status(200).json({ message: response })


    } catch (error) {

        res.status(404).json({ error: error.message });

    }

}

const eraseLogicProductHandler = async (req, res) => {

    const { id } = req.params;

    try {

        const response = await eraseLogicProduct(id);

        res.status(200).json({ message: response })


    } catch (error) {

        res.status(404).json({ error: error.message });

    }

}

const updateProductHandler = async (req, res) => {
    const { id } = req.params;
    const {
        name,
        categoryId,
        firstImage,
        carrouselImage,
        description,
        date,
        priceOfList,
        statusOffer,
        offer,
        status,
        stock,
    } = req.body;

    try {

        const response = await updateProduct(id, name, categoryId, firstImage, carrouselImage, description, date, priceOfList, statusOffer, offer, status, stock);

        return res.status(200).json({ message: response });

    } catch (error) {

        return res.status(500).json({ error: error.message });
    }
};










const createProductsHandler = async (req, res) => {

    const { name, categoryId, firstImage, carrouselImage, description, date, priceOfList, statusOffer, offer, status, stock } = req.body;
    try {
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

const getFilteredProductsHandler = async (req, res) => {
    
    try {
        const result = await getFilteredProducts(req.query)
        res.status(200).json({data: result})
    } catch (error) {
        
    }
}


module.exports = {
    createProductsHandler,
    getAllProductsHandler,
    getProductIdHandler,
    updateProductHandler,
    eraseLogicProductHandler,
    activeLogicProductHandler,
    destroyPorductHandler,
    getFilteredProductsHandler,
};

