const { Router } = require("express");
const usersRouters = require("./usersRouters");
const productsRouters = require("./productsRouters.js");
const categoryRouter = require("./categoryRouters.js");
const loginRouters = require('./loginRouters')

const router = Router(); // Creamos una instancia de Router

// Creamos la redirección al router correspondiente
router.use("/users", usersRouters);
router.use("/auth", loginRouters);
router.use("/products", productsRouters);
router.use("/categories", categoryRouter);

module.exports = router; // Exportamos el router configurado
