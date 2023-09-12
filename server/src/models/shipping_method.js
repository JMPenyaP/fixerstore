const { DataTypes } = require('sequelize');



module.exports = (sequelize) => {

  sequelize.define('shipping_method', {

    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: DataTypes.STRING,
    price: DataTypes.INTEGER


  }, { timestamps: false })

}

