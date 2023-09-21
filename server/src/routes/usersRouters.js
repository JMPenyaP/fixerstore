const { Router } = require("express");
const usersRouters = Router();
const { getAllUsersHandler, getUserEmailHandler } = require("../handlers/usersHandlers");
const { createUserHandler, updateUserController } = require('../controllers/usersControllers');
//const { config } = require("dotenv");
const { pagoOrder } = require("../controllers/mercadoPagocontrollers");

usersRouters.post("/register", createUserHandler);
usersRouters.patch("/:userId", updateUserController);
usersRouters.get("/", getAllUsersHandler);
usersRouters.get("/email", getUserEmailHandler);
usersRouters.post("/mercadopago", pagoOrder);



module.exports = usersRouters;
