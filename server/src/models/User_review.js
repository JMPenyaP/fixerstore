const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: 'postgres'
});

const User_Review = sequelize.define('User_Review', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  rating_value: {
    type: DataTypes.INTEGER
  },
  comment: {
    type: DataTypes.TEXT
  }
});

// Define associations
User_Review.belongsTo(User, { foreignKey: 'user_id' });
User_Review.belongsTo(Order_Line, { foreignKey: 'ordered_product_id' });

module.exports = User_Review;