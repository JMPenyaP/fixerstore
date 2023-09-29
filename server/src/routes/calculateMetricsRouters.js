const { Router } = require('express');

const calculateMetricsRouter = Router();


const { calculateMetricsHandlers, getTopSoldProductsHandlers, getBuyTopUsersHandlers } = require("../handlers/calculateMetricsHandlers");


calculateMetricsRouter.get("/", calculateMetricsHandlers);
calculateMetricsRouter.get('/top-sold-products', getTopSoldProductsHandlers);
calculateMetricsRouter.get('/buy-top-users', getBuyTopUsersHandlers);




module.exports = calculateMetricsRouter;