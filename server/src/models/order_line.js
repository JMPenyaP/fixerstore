const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: 'postgres'
});

const Order_Line = sequelize.define('Order_Line', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  product_item_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'product_item',
      key: 'id'
    }
  },
  shop_order_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'shop_order',
      key: 'id'
    }
  },
  qty: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
});

// Asociaciones
Order_Line.belongsTo(Product_Item, { foreignKey: 'product_item_id' });
Order_Line.belongsTo(Shop_Order, { foreignKey: 'shop_order_id' });

module.exports = Order_Line;