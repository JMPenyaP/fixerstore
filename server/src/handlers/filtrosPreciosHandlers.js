const { filtroPreciosControllers } = require('../controllers/filtrosPreciosControllers');



const filtrosPreciosHandlers = async (req, res) => {

    const { tipo } = req.query;

    try {

        const filter = await filtroPreciosControllers(tipo);

        res.status(200).json(filter);


    } catch (error) {


        res.status(404).json(error);

    }



}


module.exports = filtrosPreciosHandlers;