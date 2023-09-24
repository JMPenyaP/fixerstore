const { Router } = require('express');

const CartRouter = Router();


const { addToCartHandler, emptyCartHandler } = require("../handlers/cartHandlers");




CartRouter.post("/", addToCartHandler);
CartRouter.post("/emptycart", emptyCartHandler);



module.exports = CartRouter;

