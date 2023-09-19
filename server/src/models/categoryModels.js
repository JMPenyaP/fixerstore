const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define("Category", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,

    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,

    }

  }, { timestamps: false })
}

