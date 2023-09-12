const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {

  sequelize.define('user', {

    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING
    },
    surname: {
      type: DataTypes.STRING
    },
    phone: {
      type: DataTypes.INTEGER
    },
    address: {
      type: DataTypes.TEXT
    },
    neighborhood: {
      type: DataTypes.STRING
    },
    department: {
      type: DataTypes.STRING
    },
    country_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Country',
        key: 'id'
      }
    }


module.exports = User;
