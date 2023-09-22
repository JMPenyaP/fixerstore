const { Router } = require("express");
const fs = require('fs');
const usersRouters = require("./usersRouters");
const productsRouters = require("./productsRouters.js");
const categoryRouter = require("./categoryRouters.js");
const loginRouters = require('./loginRouters')
const paginationRouters = require("./paginationRouters");
const whatsappRouters = require("./whatsappRouters");
const filtrosPreciosRouters = require('../routes/filtrosPreciosRouters');
const CartRouter = require('../routes/cartRouters');

const { requestPasswordReset, resetPassword } = require('../controllers/passwordResetControllers');
const router = Router();


router.use("/users", usersRouters);
router.use("/auth", loginRouters);
router.use("/products", productsRouters);
router.use("/categories", categoryRouter);
router.use("/pagination", paginationRouters);
router.use("/car-shop", CartRouter)
router.use("/message", whatsappRouters);
router.use("/filtros", filtrosPreciosRouters);
router.use("/request-reset", requestPasswordReset);
router.use("/reset/:token", resetPassword);


module.exports = router; // Exportamos el router configurado
