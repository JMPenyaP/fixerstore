const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: 'postgres'
});

const product_item = sequelize.define('product_item', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  product_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'products',
      key: 'id'
    }
  },
  qty_in_stock: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  product_image: DataTypes.TEXT,
  price: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
});

// Asociaciones
product_item.belongsTo(Product, { foreignKey: 'product_id' });

module.exports = product_item;