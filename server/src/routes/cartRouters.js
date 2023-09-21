<<<<<<< Updated upstream
=======
// routes/cart.js

>>>>>>> Stashed changes
const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartControllers');

// Ruta para agregar un producto al carrito
<<<<<<< Updated upstream
router.post('/', cartController);

module.exports = router;
=======
router.post('/', cartController.addToCart);

module.exports = router;
>>>>>>> Stashed changes
