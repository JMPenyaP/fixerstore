const { getBuyTopUsersControllers, calculateMetricsControllers, getTopSoldProductsControllers } = require("../controllers/calculateMetricsControllers");



const getBuyTopUsersHandlers = async (req, res) => {

    try {

        const response = await getBuyTopUsersControllers();

        return res.status(200).json(response);

    } catch (error) {

        return res.status(404).json({ error: error.message });

    }


}

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
    getTopSoldProductsHandlers,
    getBuyTopUsersHandlers

}