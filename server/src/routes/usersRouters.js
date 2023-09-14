const { Router } = require("express");
const usersRouters = Router();
const { getAllUsersHandler, getUserEmailHandler } = require("../handlers/usersHandlers");
const { createUserHandler } = require('../controllers/usersControllers');

usersRouters.post("/register", createUserHandler);
usersRouters.get("/", getAllUsersHandler);
usersRouters.get("/email", getUserEmailHandler);

module.exports = usersRouters;