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
      validate: {
        len: {
          args: [10, 45],
          msg: "El nombre del producto debe tener entre 10 y 45 caracteres."
        }
      }
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
      type: DataTypes.FLOAT,
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
    carItemId: {
      type: DataTypes.INTEGER,
    }

  }, { timestamps: false })
}

