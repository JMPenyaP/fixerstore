const { CartItem } = require('../db');
const { Op } = require('sequelize');

  // Controlador para agregar un producto al carrito
const cartController = async (req, res) => {

    try {
      const { productId, quantity } = req.body; // Obtiene los datos del producto desde la solicitud
      
      // Valida que el productId y quantity sean válidos
      
      if (!productId || !quantity || isNaN(quantity) || quantity <= 0) {
        return res.status(200).json({ succes:false, error: 'Datos de producto no válidos' });
      }

      // Verifica si ya existe un carrito para el usuario externo (no autenticado)
      const cartExists = await CartItem.findOne({
        where: {
          userId: null, // Puedes usar un valor específico o un criterio para usuarios no autenticados
          productId: productId,
        },
      });

      if (cartExists) {
        // Si el producto ya está en el carrito, actualiza la cantidad
        cartExists.quantity += quantity;
        await CartItem.save();
      } else {
        // Si el producto no está en el carrito, crea un nuevo elemento del carrito
        await CartItem.create({
          userId: null, // Puedes usar un valor específico o un criterio para usuarios no autenticados
          productId: productId,
          quantity: quantity,
        });
      }

      return res.status(200).json({ message: 'Producto agregado al carrito exitosamente' });
    } catch (error) {
      console.error('Error al agregar producto al carrito:', error);
      return res.status(500).json({ error: 'Error interno del servidor' });
    }
};

module.exports =  cartController;