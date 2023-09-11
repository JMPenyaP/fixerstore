const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: 'postgres'
});

const Shopping_Cart_Item = sequelize.define('Shopping_Cart_Item', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  shopping_cart_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'shopping_carts',
      key: 'id'
    }
  },
  product_item_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'product_items',
      key: 'id'
    }
  },
  qty: DataTypes.INTEGER
});

module.exports = Shopping_Cart_Item;