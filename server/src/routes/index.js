const { Router } = require("express");
const fs = require('fs');
const usersRouters = require("./usersRouters");
const productsRouters = require("./productsRouters.js");
const categoryRouter = require("./categoryRouters.js");
const loginRouters = require('./loginRouters')
const paginationRouters = require("./paginationRouters");
const whatsappRouters = require("./whatsappRouters");
<<<<<<< HEAD
const router = Router(); 
const cartRouters = require("../routes/cartRouters");
=======
const filtrosPreciosRouters = require('../routes/filtrosPreciosRouters')
const router = Router();
>>>>>>> dev


router.use("/users", usersRouters);
router.use("/auth", loginRouters);
router.use("/products", productsRouters);
router.use("/categories", categoryRouter);
router.use("/pagination", paginationRouters);
<<<<<<< HEAD
router.use("/message", whatsappRouters)
router.use("/cart", cartRouters);

=======
router.use("/message", whatsappRouters);
router.use("/filtros", filtrosPreciosRouters);
>>>>>>> dev



module.exports = router; // Exportamos el router configurado
