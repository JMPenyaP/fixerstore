const { Router } = require("express");
const { createOrder, getOrdersbyId, getAllOrders, getOrderId, getOrderForId,updateOrderStatus  } = require("../controllers/orderControllers")
const orderRouter = Router()

orderRouter.post("/", createOrder);
orderRouter.post("/getidorder", getOrdersbyId);
orderRouter.get("/", getAllOrders)
orderRouter.get("/:userId", getOrderId);
orderRouter.get("/id/:id", getOrderForId);
orderRouter.patch("/update",updateOrderStatus)

module.exports = orderRouter