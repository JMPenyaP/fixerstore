const { Router } = require("express");
const usersRouters = Router();
const { getAllUsersHandler, getUserEmailHandler } = require("../handlers/usersHandlers");
const { createUserHandler, updateUserController } = require('../controllers/usersControllers');
const { createReview } = require("../controllers/reviewsControllers");

usersRouters.post("/register", createUserHandler);
usersRouters.post("/reviews", createReview);
usersRouters.patch("/:userId", updateUserController);
usersRouters.get("/", getAllUsersHandler);
usersRouters.get("/email", getUserEmailHandler);

module.exports = usersRouters;
