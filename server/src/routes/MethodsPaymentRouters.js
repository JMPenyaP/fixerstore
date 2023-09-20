const { Router } = require('express');
const methodsPaymentRouter = Router();

const createMethodPayments = require("../handlers/createMpHandlers.js")


methodsPaymentRouter.post('/', createMethodPayments);



module.exports = methodsPaymentRouter

