const { Router } = require("express");
const categoryRouter = Router();

const { categoryHandler } = require('../handlers/categoryHandlers.js');


categoryRouter.post("/", categoryHandler);


module.exports = categoryRouter;