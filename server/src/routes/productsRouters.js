const { Router } = require("express");
const productsRouters = Router();
const { createProductsHandler, getAllProductsHandler,getProductIdHandler } = require("../handlers/productsHandlers");

productsRouters.post("/", createProductsHandler);
productsRouters.get("/", getAllProductsHandler);
productsRouters.get("/:id", getProductIdHandler);

module.exports = productsRouters;