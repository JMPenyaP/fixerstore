const { Router } = require("express");
const productCategoriesRouters = Router();
const { createCategoryHandler, getAllCategoriesHandler } = require("../handlers/usersHandlers")

//usersRouters.post("/", createCategoryHandler);
//usersRouters.get("/", getAllCategoriesHandler);

module.exports = productCategoriesRouters;