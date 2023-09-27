
const { Order, OrderItems, Cart, Product, Category } = require("../db")


const getOrderForId = async (req, res) => {
  const { id } = req.params;

  try {
    // Busca la orden por su ID, incluyendo los detalles de los productos asociados
    const order = await Order.findByPk(id, {
      include: [
        {
          model: Product,
          through: OrderItems,
          include: Category, // Incluye la relación con la categoría
        },
      ],
    });

    if (order) {
      // Si se encuentra la orden, crea una respuesta JSON con la información requerida

      return res.status(200).json({
        order,
      });
    } else {
      // Si no se encuentra la orden, responde con un mensaje de error
      return res.status(200).json({
        success: false,
        message: "La orden no fue encontrada.",
      });
    }
  } catch (error) {
    console.error(error);
    // En caso de un error, responde con un mensaje de error
    return res.status(500).json({
      success: false,
      message: "Hubo un error al obtener los detalles de la orden.",
      error: error.message,
    });
  }
};




const getOrderId = async (req, res) => {
  const { userId } = req.params;

  try {
    // Primero, verifica si el usuario tiene órdenes
    const orders = await Order.findAll({
      where: { UserId: userId },

    });

    if (orders.length > 0) {
      // Si el usuario tiene órdenes, responde con success = true y las órdenes
      return res.json({
        success: true,
        message: "El usuario tiene órdenes.",
        orders,
      });
    } else {
      // Si el usuario no tiene órdenes, responde con success = false
      return res.json({
        success: false,
        message: "El usuario no tiene órdenes.",
        orders: [],
      });
    }
  } catch (error) {
    // En caso de un error, responde con un mensaje de error
    return res.status(500).json({
      success: false,
      message: "Hubo un error al obtener las órdenes del usuario.",
      error: error.message,
    });
  }
};


const createOrder = async (req, res) => {
  // datos que recibira por body 
  const { id, userId, name, surname, phone, cc, payment, retiro, city, address, department } = req.body



  try {
    const carItems = await Cart.findAll({ where: { UserId: userId } })

    if (carItems.length === 0) {
      return res.status(400).json({ message: 'El carrito está vacío' });
    }
    let totalAmount = 0;
    const order = await Order.create({ id, totalAmount, status: "pending", UserId: userId, name, surname, phone, cc, payment, retiro, city, address, department });
    for (const car of carItems) {
      const product = await Product.findByPk(car.ProductId)
      if (!product) {
        return res.status(200).json({ succes: false, message: "no se encontro el producto" })
      }
      const price = product.priceOfList
      const quantity = car.quantity
      await OrderItems.create({
        OrderId: order.id,
        ProductId: car.ProductId,
        quantity,
        price,
      });
      totalAmount += price * quantity;
      await car.destroy()
    }
    await order.update({ totalAmount })
    res.status(200).json({ message: "Orden creada con exito" })
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

const getAllOrders = async (req, res) => {
  try {

    const allOrders = await Order.findAll()

    allOrders.length ? res.status(200).json(allOrders) :
      res.status(200).json({ message: "no se encontro ninguna orden" })
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

const getOrdersbyId = async (req, res) => {
  const { userId } = req.body;

  try {
    const allOrders = await Order.findAll();
    const usersIdFilt = allOrders.filter((or) => or.UserId === userId);


    let orderPromises = [];

    if (usersIdFilt.length > 0) {
      usersIdFilt.forEach((element) => {

        const orderItemsPromise = OrderItems.findAll({
          where: {
            OrderId: element.id
          },
        });
        orderPromises.push(orderItemsPromise);

      });

      const orders = await Promise.all(orderPromises);
      res.status(200).json(orders);
    } else {
      res.status(200).json({ message: "No se encontraron compras" });
    }

  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};





module.exports = {
  getOrderForId, createOrder, getOrdersbyId, getAllOrders, getOrderId
}