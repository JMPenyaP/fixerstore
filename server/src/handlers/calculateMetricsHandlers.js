const { ordersByMenOrWoman, howManyOrderMonthControllers, getBuyTopUsersControllers, calculateMetricsControllers, getTopSoldProductsControllers } = require("../controllers/calculateMetricsControllers");



const ordersByMenOrWomanHandlers = async (req, res) => {

    try {

        const countMenOrWorman = await ordersByMenOrWoman();

        return res.status(200).json(countMenOrWorman)

    } catch (error) {

        return res.status(400).json({ error: error.message });

    }

}

// Ordenes por mes 
const howManyOrderMonthHandlers = async (req, res) => {

    const { month } = req.query;

    try {

        const howManyMonth = await howManyOrderMonthControllers(month)

        return res.status(200).json(howManyMonth);

    } catch (error) {

        return res.status(404).json({ error: error.message });

    }


}

// usuarios que mas han comprado
const getBuyTopUsersHandlers = async (req, res) => {

    try {

        const response = await getBuyTopUsersControllers();

        return res.status(200).json(response);

    } catch (error) {

        return res.status(404).json({ error: error.message });

    }


}

// Producto mas vendido
const getTopSoldProductsHandlers = async (req, res) => {

    const { date, datetwo } = req.query;

    try {

        const topSoldProducts = await getTopSoldProductsControllers(date, datetwo)

        return res.status(200).json(topSoldProducts)

    } catch (error) {


        return res.status(404).json({ error: error.message });

    }


}


// cantidad de usuarios registrados, productos, ordenes

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
    getBuyTopUsersHandlers,
    howManyOrderMonthHandlers,
    ordersByMenOrWomanHandlers

}