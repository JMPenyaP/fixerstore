const { emptyCart, addToCartController } = require('../controllers/cartController');

const addToCartHandler = async (req, res) => {
    const { userId, products } = req.body; // Extraemos userId y products del cuerpo de la solicitud

    try {

        const resp = await addToCartController(userId, products);

        return res.status(201).json(resp);

    } catch (error) {

        return res.status(500).json({ message: 'Error interno del servidor' });

    }
};

const emptyCartHandler = async (req, res) => {

    const { userId } = req.body;

    try {

        const emptyCar = await emptyCart(userId);

        return res.status(201).json(emptyCar);

    } catch (error) {

        return res.status(404).json({ error: message.error });

    }


}

module.exports = {

    emptyCartHandler,
    addToCartHandler,

};
