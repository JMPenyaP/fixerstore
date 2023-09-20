const createMethodPaymentsControllers = require('../controllers/createMethodPaymentsControllers.js');



const createMethodPayments = async (req, res) => {

    try {

        const { method } = req.body;

        const methodPayments = await createMethodPaymentsControllers(method);

        res.status(200).json(methodPayments);

    } catch (error) {

        res.status(404).json({ error: error.message })

    }



}


module.exports = createMethodPayments;