const { Router } = require("express");
const usersRouters = Router();
const { createUsersHandler, getAllUsersHandler } = require("../handlers/usersHandlers")

usersRouters.post("/", createUsersHandler);
usersRouters.get("/", getAllUsersHandler);

module.exports = usersRouters;
