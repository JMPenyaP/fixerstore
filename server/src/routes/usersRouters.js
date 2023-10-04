const { Router } = require("express");
const usersRouters = Router();
const { getAllUsersHandler, getUserEmailHandler } = require("../handlers/usersHandlers");
const { createUserHandler, updateUserController, deleteUser } = require('../controllers/usersControllers');
const { pagoOrder } = require("../controllers/mercadoPagocontrollers");
const { createReview,getReviews } = require("../controllers/reviewsControllers");

usersRouters.post("/register", createUserHandler);
usersRouters.post("/reviews", createReview);
usersRouters.get("/reviews/:id",getReviews );
usersRouters.patch("/:userId", updateUserController);
usersRouters.get("/", getAllUsersHandler);
usersRouters.get("/email", getUserEmailHandler);
usersRouters.delete("/delete", deleteUser);

usersRouters.post("/mercadopago", pagoOrder);

module.exports = usersRouters;
