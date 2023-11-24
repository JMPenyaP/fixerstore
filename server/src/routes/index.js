const { Router } = require("express");
//const fs = require('fs');
const router = Router();
const usersRouters = require("./usersRouters");
const productsRouters = require("./productsRouters.js");
const categoryRouter = require("./categoryRouters.js");
const loginRouters = require('./loginRouters')
const paginationRouters = require("./paginationRouters");
const whatsappRouters = require("./whatsappRouters");
const filtrosPreciosRouters = require('../routes/filtrosPreciosRouters');
const CartRouter = require('../routes/cartRouters');
const orderRouter = require("../routes/orderRoutes")
const favoriteRouters = require('../routes/favoriteRouters');
const passRouter = require("./passRouters");
const calculateMetricsRouter = require("./calculateMetricsRouters");
const mailingRouters = require('./mailingRouters');

router.use("/users", usersRouters);
router.use("/auth", loginRouters);
router.use("/products", productsRouters);
router.use("/categories", categoryRouter);
router.use("/pagination", paginationRouters);
router.use("/car-shop", CartRouter)
router.use("/message", whatsappRouters);
router.use("/filtros", filtrosPreciosRouters);
router.use("/order", orderRouter);
router.use("/favorites", favoriteRouters);
router.use("/passuser", passRouter);
router.use('/metrics', calculateMetricsRouter);
router.use('/mailing', mailingRouters);

module.exports = router; 
