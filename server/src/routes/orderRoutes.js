const {Router}=require("express");
const {createOrder,getOrdersbyId,getAllOrders}=require("../controllers/orderControllers")
const orderRouter = Router()

orderRouter.post("/",createOrder);
orderRouter.post("/getidorder",getOrdersbyId);
orderRouter.get("/",getAllOrders) 
module.exports = orderRouter