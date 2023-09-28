const { Router } = require('express');

const calculateMetricsRouter = Router();


const { calculateMetricsHandlers, getTopSoldProductsHandlers } = require("../handlers/calculateMetricsHandlers");


calculateMetricsRouter.get("/", calculateMetricsHandlers);
calculateMetricsRouter.get('/top-sold-products', getTopSoldProductsHandlers);




module.exports = calculateMetricsRouter;