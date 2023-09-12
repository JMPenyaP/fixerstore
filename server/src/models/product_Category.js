const { DataTypes } = require('sequelize');



module.exports = (sequelize) => {

  sequelize.define('product_category', {

    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: DataTypes.STRING


  }, { timestamps: false })

}

