const { Router } = require("express");
const usersRouters = require("./usersRouters");
const productsRouters = require("./productsRouters.js");

const router = Router(); // Creamos una instancia de Router

// Creamos la redirección al router correspondiente
router.use("/users", usersRouters);
router.use("/products", productsRouters);

module.exports = router; // Exportamos el router configurado
