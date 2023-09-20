const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartControllers');

// Ruta para agregar un producto al carrito
router.post('/', cartController);

module.exports = router;