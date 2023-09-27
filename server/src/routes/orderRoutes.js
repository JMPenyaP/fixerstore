const { Router } = require("express");
const { createOrder, getOrdersbyId, getAllOrders, getOrderId, getOrderForId } = require("../controllers/orderControllers")
const orderRouter = Router()

orderRouter.post("/", createOrder);
orderRouter.post("/getidorder", getOrdersbyId);
orderRouter.get("/", getAllOrders)
orderRouter.get("/:userId", getOrderId);
orderRouter.get("/id/:id", getOrderForId)
module.exports = orderRouter