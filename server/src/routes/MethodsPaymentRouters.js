const { Router } = require('express');
const methodsPaymentRouter = Router();

const createMethodPayments = require("../handlers/createMethodPaymentsHandlers")


methodsPaymentRouter.post('/', createMethodPayments);



module.exports = methodsPaymentRouter

