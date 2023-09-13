const { Router } = require("express");
const categoryRouter = Router();

const { categoryHandler } = require('../handlers/categoryHandlers.js');


categoryRouter.post("/", categoryHandler);
categoryRouter.get("/", getCategoryHandler);


module.exports = categoryRouter;