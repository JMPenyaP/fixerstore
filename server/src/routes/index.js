const { Router } = require("express");
const fs = require('fs');
const usersRouters = require("./usersRouters");
const productsRouters = require("./productsRouters.js");
const categoryRouter = require("./categoryRouters.js");
const loginRouters = require('./loginRouters')
const paginationRouters = require("./paginationRouters");
<<<<<<< Updated upstream
const whatsappRouters = require("./whatsappRouters");
const filtrosPreciosRouters = require('../routes/filtrosPreciosRouters');
const { requestPasswordReset, resetPassword } = require('../controllers/passwordResetControllers');
const router = Router();
const cartRouters = require("../routes/cartRouters");

=======
const cartRouters = require("../routes/cartRouters");
>>>>>>> Stashed changes


router.use("/users", usersRouters);
router.use("/auth", loginRouters);
router.use("/products", productsRouters);
router.use("/categories", categoryRouter);
router.use("/pagination", paginationRouters);
<<<<<<< Updated upstream
router.use("/message", whatsappRouters);
router.use("/filtros", filtrosPreciosRouters);
router.use("/request-reset", requestPasswordReset);
router.use("/reset/:token", resetPassword);

=======
router.use("cart", cartRouters);
>>>>>>> Stashed changes

module.exports = router; // Exportamos el router configurado
