const { Router } = require("express");
const productItems = Router();
const { createProductItemHandler, getAllProductItemsHandler } = require("../handlers/usersHandlers")

usersRouters.post("/", createProductItemHandler);
usersRouters.get("/", getAllProductItemsHandler);

module.exports = productItems;