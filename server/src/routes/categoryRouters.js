const { Router } = require("express");
const categoryRouter = Router();

const { categoryHandler,  getCategoryHandler} = require('../handlers/categoryHandler.js');


categoryRouter.post("/", categoryHandler);
categoryRouter.get("/", getCategoryHandler);


module.exports = categoryRouter;