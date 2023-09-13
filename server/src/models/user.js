const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {


  const user = sequelize.define('user', {

    id: {

      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {

      type: DataTypes.STRING,
      allowNull: false,

    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,

    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    rol: {
      type: DataTypes.STRING,
      allowNull: false,
    }


  }, { timestamps: false })



  return user;
};