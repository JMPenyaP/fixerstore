const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: 'postgres'
});

const User_Payment_Method = sequelize.define('User_Payment_Method', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  provider: DataTypes.STRING,
  account_number: DataTypes.STRING,
  expire_date: DataTypes.DATE,
  is_default: DataTypes.STRING(1)
});

// Define associations
User_Payment_Method.belongsTo(User, { foreignKey: 'user_id' });
User_Payment_Method.belongsTo(Payment_Type, { foreignKey: 'payment_type_id' });

module.exports = User_Payment_Method;
