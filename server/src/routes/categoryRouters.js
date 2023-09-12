const { Router } = require("express");
const categoryRouter = Router();

const { categoryHandler } = require('../handlers/categoryHandler.js');


categoryRouter.post("/", categoryHandler);


module.exports = categoryRouter;