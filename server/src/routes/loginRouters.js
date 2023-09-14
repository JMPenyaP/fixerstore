const { Router } = require("express");
const authRouter = Router();
const { loginUsers } = require('../controllers/authControllers')

authRouter.post("/login", loginUsers);

module.exports = authRouter;