const { Router } = require("express");
const productsRouters = Router();
const { createProductsHandler, getAllProductsHandler } = require("../handlers/productsHandlers");

productsRouters.post("/", createProductsHandler);
productsRouters.get("/", getAllProductsHandler);

module.exports = productsRouters;