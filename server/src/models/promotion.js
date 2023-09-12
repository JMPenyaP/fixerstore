const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

  sequelize.define('promotion', {

    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    discount_rate: DataTypes.INTEGER,
    start_date: DataTypes.DATE,
    end_date: DataTypes.DATE


  }, { timestamps: false })


}
