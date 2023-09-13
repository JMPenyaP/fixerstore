const { Router } = require("express");
const usersRouters = require("./usersRouters");
const productsRouters = require("./productsRouters.js");
const productCategoriesRouters = require("./productCategoriesRouters");
const promotionsRouters = require("./promotionsRouters");
const loginRouters = require('./loginRouters')

const router = Router(); // Creamos una instancia de Router

// Creamos la redirección al router correspondiente
router.use("/users", usersRouters);
router.use("/products", productsRouters);
router.use("/productCategories", productCategoriesRouters);
router.use("/promotions", promotionsRouters);
router.use("/auth", loginRouters);


module.exports = router; // Exportamos el router configurado
