const { Router } = require("express");
const usersRouters = require("./usersRouters");
const productsRouters = require("./productsRouters.js");
const productCategoriesRouters = require("./productCategoriesRouters");
const promotionsRouters = require("./promotionsRouters");

const router = Router(); // Creamos una instancia de Router

// Creamos la redirección al router correspondiente
router.use("/users", usersRouters);
router.use("/products", productsRouters);
router.use("/productCategories", productCategoriesRouters);
router.use("/promotions", promotionsRouters);

module.exports = router; // Exportamos el router configurado
