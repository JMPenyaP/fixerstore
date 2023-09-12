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
  user_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'users',
      key: 'id'
    }
  },
  payment_type_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'payment_types',
      key: 'id'
    }
  },
  provider: DataTypes.STRING,
  account_number: DataTypes.STRING,
  expire_date: DataTypes.DATE,
  is_default: {
    type: DataTypes.STRING(1),
    validate: {
      isIn: [['Y', 'N']]
    }
  }
});

// Asociaciones
User_Payment_Method.belongsTo(User, { foreignKey: 'user_id' });
User_Payment_Method.belongsTo(Payment_Type, { foreignKey: 'payment_type_id' });

module.exports = User_Payment_Method;

