const { calculateMetricsControllers, getTopSoldProductsControllers } = require("../controllers/calculateMetricsControllers");


const getTopSoldProductsHandlers = async (req, res) => {

    const { date, datetwo } = req.query;

    try {

        const topSoldProducts = await getTopSoldProductsControllers(date, datetwo)

        return res.status(200).json(topSoldProducts)

    } catch (error) {


        return res.status(404).json({ error: error.message });

    }


}



const calculateMetricsHandlers = async (req, res) => {



    try {


        const response = await calculateMetricsControllers();


        res.status(200).json({ response: response });


    } catch (error) {

        res.status(404).json({ error: error.message });

    }




}



module.exports = {

    calculateMetricsHandlers,
    getTopSoldProductsHandlers

}