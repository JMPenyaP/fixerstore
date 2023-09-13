const { Router } = require("express");
const usersRouters = require("./usersRouters");
const productsRouters = require("./productsRouters.js");
const categoryRouter = require("./categoryRouters.js");
<<<<<<< HEAD
const loginRouters = require('./loginRouters')

=======
const paginationRouters = require("./paginationRouters");
>>>>>>> c845bd738a7ec0ef2068a047c449f2ab31c298fe
const router = Router(); // Creamos una instancia de Router

// Creamos la redirección al router correspondiente
router.use("/users", usersRouters);
router.use("/auth", loginRouters);
router.use("/products", productsRouters);
router.use("/categories", categoryRouter);
router.use("/pagination", paginationRouters);

module.exports = router; // Exportamos el router configurado
