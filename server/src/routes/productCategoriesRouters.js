const { Router } = require("express");
const usersRouters = Router();
const { createCategoryHandler, getAllCategoriesHandler } = require("../handlers/usersHandlers")

usersRouters.post("/", createCategoryHandler);
usersRouters.get("/", getAllCategoriesHandler);

module.exports = usersRouters;