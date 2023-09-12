const { DataTypes } = require('sequelize');



module.exports = (sequelize) => {

  const category = sequelize.define('category', {

    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,

    }

  }, { timestamps: false })

  return category;
}

