const { Router } = require("express");
const fs = require('fs');
const usersRouters = require("./usersRouters");
const productsRouters = require("./productsRouters.js");
const categoryRouter = require("./categoryRouters.js");
const loginRouters = require('./loginRouters')
const paginationRouters = require("./paginationRouters");
const whatsappRouters = require("./whatsappRouters");
const router = Router(); 


router.use("/users", usersRouters);
router.use("/auth", loginRouters);
router.use("/products", productsRouters);
router.use("/categories", categoryRouter);
router.use("/pagination", paginationRouters);
router.use("/message", whatsappRouters)




module.exports = router; // Exportamos el router configurado
