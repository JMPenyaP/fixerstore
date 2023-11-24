const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define("Product", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,

    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    categoryId: {
      type: DataTypes.INTEGER,
      allowNull: false,

    },
    firstImage: {
      type: DataTypes.STRING,
      allowNull: false,

    },
    carrouselImage: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    date: {
      type: DataTypes.STRING,
      allowNull: true
    },
    priceOfList: {
      type: DataTypes.DECIMAL(10, 0), // Hasta 10 dígitos en total, sin decimales
      allowNull: false
    },
    statusOffer: {
      type: DataTypes.BOOLEAN,
      allowNull: false

    },
    offer: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },


  }, { timestamps: false })
}

