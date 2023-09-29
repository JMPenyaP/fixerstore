const { Router } = require("express");
const productsRouters = Router();
const { destroyPorductHandler, createProductsHandler, getAllProductsHandler, activeLogicProductHandler, getProductIdHandler, updateProductHandler, eraseLogicProductHandler, getFilteredProductsHandler } = require("../handlers/productsHandlers");

productsRouters.post("/", createProductsHandler);
productsRouters.get("/", getAllProductsHandler);
productsRouters.get("/prueba", getFilteredProductsHandler);
productsRouters.get("/:id", getProductIdHandler);
productsRouters.patch("/update/:id", updateProductHandler)
productsRouters.patch("/soft-delete/:id", eraseLogicProductHandler)
productsRouters.patch("/soft-active/:id", activeLogicProductHandler)
productsRouters.delete('/destroy/:id', destroyPorductHandler)

module.exports = productsRouters;