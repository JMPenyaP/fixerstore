const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: 'postgres'
});

const variation_option = sequelize.define('variation_option', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  variation_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'variations',
      key: 'id'
    }
  },
  name: DataTypes.STRING
});

// Asociaciones
variation_option.belongsTo(Variation, { foreignKey: 'variation_id' });

module.exports = variation_option;
