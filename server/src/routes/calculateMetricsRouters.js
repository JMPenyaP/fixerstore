const { Router } = require('express');

const calculateMetricsRouter = Router();


const { howManyOrderMonthHandlers, calculateMetricsHandlers, getTopSoldProductsHandlers, getBuyTopUsersHandlers } = require("../handlers/calculateMetricsHandlers");


calculateMetricsRouter.get("/", calculateMetricsHandlers);
calculateMetricsRouter.get('/top-sold-products', getTopSoldProductsHandlers);
calculateMetricsRouter.get('/buy-top-users', getBuyTopUsersHandlers);
calculateMetricsRouter.get('/ordermonth', howManyOrderMonthHandlers);



module.exports = calculateMetricsRouter;