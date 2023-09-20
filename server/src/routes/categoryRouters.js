const { Router } = require("express");
const categoryRouter = Router();

const { categoryHandler, getCategoryHandler, getCatProductsHandler } = require('../handlers/categoryHandlers.js');


categoryRouter.post("/", categoryHandler);
categoryRouter.get("/", getCategoryHandler);
categoryRouter.get("/catprod", getCatProductsHandler);


module.exports = categoryRouter;