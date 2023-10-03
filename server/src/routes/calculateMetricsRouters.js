const { Router } = require('express');

const calculateMetricsRouter = Router();


const { getSalesMetricsByMonthHandlers, ordersByMenOrWomanHandlers, howManyOrderMonthHandlers, calculateMetricsHandlers, getTopSoldProductsHandlers, getBuyTopUsersHandlers } = require("../handlers/calculateMetricsHandlers");


calculateMetricsRouter.get("/", calculateMetricsHandlers);
calculateMetricsRouter.get('/top-sold-products', getTopSoldProductsHandlers);
calculateMetricsRouter.get('/buy-top-users', getBuyTopUsersHandlers);
calculateMetricsRouter.get('/ordermonth', howManyOrderMonthHandlers);
calculateMetricsRouter.get("/count-orders-by-gender", ordersByMenOrWomanHandlers)
calculateMetricsRouter.get("/sales-by-month", getSalesMetricsByMonthHandlers)



module.exports = calculateMetricsRouter;