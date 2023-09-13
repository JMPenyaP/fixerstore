const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {

  sequelize.define('order_status', {

    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    status: DataTypes.STRING

  }, { timestamps: false })



}

