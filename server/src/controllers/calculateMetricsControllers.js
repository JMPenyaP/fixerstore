const { Order, User, conn, Product, OrderItems } = require('../db');
const { Op } = require('sequelize');




// Configura la zona horaria en español (por ejemplo, 'es-ES')
const spanishTimeZone = "es-ES";

const getUserByGenderRegister = async () => {
  const query = `
      SELECT gender, COUNT(*) as cantidad
      FROM "Users"
      WHERE gender IN ('Hombre', 'Mujer', 'Prefiero no decirlo')
      GROUP BY gender;
    `;

  const result = await conn.query(query, {
    type: conn.QueryTypes.SELECT,
  });

  return result;
};

const getSalesMetricsByMonth = async () => {
  const currentYear = new Date().getFullYear();

  // Crear un arreglo para almacenar las ventas por mes
  const ventasPorMes = [];

  // Array de nombres de los meses
  const nombresMeses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

  // Consultar las ventas por mes
  for (let mes = 1; mes <= 12; mes++) {
    const fechaInicio = new Date(currentYear, mes - 1, 1);
    const fechaFin = new Date(currentYear, mes, 0, 23, 59, 59, 999);

    const ventas = await Order.findAll({
      where: {
        createdAt: {
          [Op.between]: [fechaInicio, fechaFin],
        },
      },
    });

    const totalVentasMes = ventas.reduce((total, venta) => {
      return total + parseFloat(venta.totalAmount);
    }, 0);

    ventasPorMes.push({
      mes: nombresMeses[mes - 1], // Obtener el nombre del mes
      totalVentas: totalVentasMes,
    });
  }

  return { success: true, ventasPorMes: ventasPorMes };
};

const ordersByMenOrWoman = async () => {
  const ordersWithUser = await Order.findAll({
    include: [
      {
        model: User,
        attributes: ["gender"],
      },
    ],
  });

  if (!ordersWithUser) {
    return { hombres: 0, mujeres: 0 };
  }

  const counts = [
    { name: "Hombre", cantidad: 0 },
    { name: "Mujer", cantidad: 0 },
    { name: "Indefinido", cantidad: 0 },
  ];

  ordersWithUser.forEach((order) => {
    const gender = order.User ? order.User.getDataValue("gender") : null;
    if (gender === "Hombre") {
      counts[0].cantidad++;
    } else if (gender === "Mujer") {
      counts[1].cantidad++;
    } else {
      counts[2].cantidad++;
    }
  });

  return counts;
};

/* Cuantos pedidos se hicieron este mes*/

const howManyOrderMonthControllers = async (month) => {

    const monthMappings = {
        enero: 0,
        febrero: 1,
        marzo: 2,
        abril: 3,
        mayo: 4,
        junio: 5,
        julio: 6,
        agosto: 7,
        septiembre: 8,
        octubre: 9,
        noviembre: 10,
        diciembre: 11,
    };

    const lowercaseMonth = month.toLowerCase();
    const monthIndex = monthMappings[lowercaseMonth];

    if (typeof monthIndex === 'undefined') {
        throw new Error('Nombre de mes no válido');
    }

    const currentDate = new Date();
    const year = currentDate.getFullYear();

    const startDate = new Date(year, monthIndex, 1);
    const endDate = new Date(year, monthIndex + 1, 0);

  const orders = await Order.findAll({
    where: {
      createdAt: {
        [Op.between]: [startDate, endDate],
      },
    },
  });

  return orders;
};

// Usuarios que mas han comprado
const getBuyTopUsersControllers = async () => {
  const buyCounts = await Order.findAll({
    attributes: [
      "UserId", // ID del usuario
      [conn.fn("COUNT", conn.col("id")), "totalOrders"], // Conteo de órdenes por usuario
    ],
    group: ["UserId"], // Agrupar por ID de usuario
  });

  // Mapear los resultados para obtener información adicional de los usuarios
  const userBuyCounts = await Promise.all(
    buyCounts.map(async (result) => {
      const userId = result.UserId;
      const totalOrders = parseInt(result.dataValues.totalOrders);
      const user = await User.findByPk(userId);
      return {
        user,
        totalOrders,
      };
    })
  );

  return userBuyCounts;
};

// Producto mas vendido por un rango de fecha / tienes que pasarle 2 fechas desde el inicio que desee que busque
// hasta la fecha que desea encontrar, no puede buscar productos de una fecha que ni siquiera ha pasado,
//

const getTopSoldProductsControllers = async (date, datetwo) => {
  const topSoldProducts = await OrderItems.findAll({
    attributes: [
      "ProductId", // ID del producto
      [conn.fn("SUM", conn.col("quantity")), "totalSold"], // Suma de la cantidad vendida
    ],
    where: {
      createdAt: {
        [Op.gte]: date + " 00:00:00", // Fecha de inicio del día
        [Op.lte]: datetwo + " 23:59:59", // Fecha de fin del día
      },
    },
    group: ["ProductId"], // Agrupa por ID de producto
    order: [[conn.literal("SUM(quantity)"), "DESC"]], // Ordena por cantidad vendida en orden descendente
    limit: 10, // Limita la cantidad de resultados a 10 (puedes ajustarlo)
  });

  // Mapea los resultados para obtener información adicional de los productos
  const productDetails = await Promise.all(
    topSoldProducts.map(async (result) => {
      const productId = result.ProductId;
      const totalSold = parseInt(result.dataValues.totalSold);
      const product = await Product.findByPk(productId);
      return {
        product,
        totalSold,
      };
    })
  );

  return productDetails;
};

// cantidad de ordenes, usuarios y productos que hay actualmente disponibles
const calculateMetricsControllers = async () => {
  const totalOrders = await Order.count();
  const totalUsers = await User.count();
  const totalProduct = await Product.count();

  return { orders: totalOrders, users: totalUsers, products: totalProduct };
};

module.exports = {
  calculateMetricsControllers,
  getTopSoldProductsControllers,
  getBuyTopUsersControllers,
  howManyOrderMonthControllers,
  ordersByMenOrWoman,
  getSalesMetricsByMonth,
  getUserByGenderRegister,
};
