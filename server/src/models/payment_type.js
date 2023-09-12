const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {

  sequelize.define('payment_type', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    value: DataTypes.STRING

  })

}

