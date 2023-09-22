const { addToCartController } = require('../controllers/cartController');

const addToCartHandler = async (req, res) => {
    const { userId, products } = req.body; // Extraemos userId y products del cuerpo de la solicitud

    try {

        const resp = await addToCartController(userId, products);


        return res.status(201).json(resp);

    } catch (error) {
        return res.status(500).json({ message: 'Error interno del servidor' });
    }
};

module.exports = {

    addToCartHandler,
    // Agrega más funciones aquí según tus necesidades
};
