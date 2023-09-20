const { Router } = require("express");
const usersRouters = Router();
const { getAllUsersHandler, getUserEmailHandler } = require("../handlers/usersHandlers");
const { createUserHandler, updateUserController } = require('../controllers/usersControllers');

usersRouters.post("/register", createUserHandler);
usersRouters.patch("/:userId", updateUserController);
usersRouters.get("/", getAllUsersHandler);
usersRouters.get("/email", getUserEmailHandler);


module.exports = usersRouters;
