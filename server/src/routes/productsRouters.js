const { Router } = require("express");
const productsRouters = Router();
const { createProductsHandler, getAllProductsHandler, getProductIdHandler, getFilteredProductsHandler } = require("../handlers/productsHandlers");

productsRouters.post("/", createProductsHandler);
productsRouters.get("/", getAllProductsHandler);
productsRouters.get("/prueba", getFilteredProductsHandler);
productsRouters.get("/:id", getProductIdHandler);

module.exports = productsRouters;