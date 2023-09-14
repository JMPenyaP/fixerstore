const { Router } = require("express");
const usersRouters = Router();
const { getAllUsersHandler } = require("../handlers/usersHandlers");
const { createUserHandler } = require('../controllers/usersControllers');

usersRouters.post("/register", createUserHandler);
usersRouters.get("/", getAllUsersHandler);

module.exports = usersRouters;