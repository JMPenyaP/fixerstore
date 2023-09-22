const { Router } = require('express');

const CartRouter = Router();


const { addToCartHandler } = require("../handlers/cartHandlers");



CartRouter.post("/", addToCartHandler);




module.exports = CartRouter;

