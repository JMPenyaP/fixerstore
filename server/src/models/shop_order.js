const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: 'postgres'
});

const shop_order = sequelize.define('shop_order', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  user_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'users',
      key: 'id'
    }
  },
  order_date: DataTypes.DATE,
  payment_method_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'user_payment_methods',
      key: 'id'
    }
  },
  shipping_address: DataTypes.TEXT,
  shipping_method_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'shipping_methods',
      key: 'id'
    }
  },
  order_total: DataTypes.INTEGER,
  order_status_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'order_statuses',
      key: 'id'
    }
  }
});

// Asociaciones
shop_order.belongsTo(User, { foreignKey: 'user_id' });
shop_order.belongsTo(User_Payment_Method, { foreignKey: 'payment_method_id' });
shop_order.belongsTo(Shipping_Method, { foreignKey: 'shipping_method_id' });
shop_order.belongsTo(Order_Status, { foreignKey: 'order_status_id' });

module.exports = shop_order;
