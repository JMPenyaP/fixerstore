const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

  sequelize.define('variation_option', {

    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    variation_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'variations',
        key: 'id'
      }
    },
    name: DataTypes.STRING

  }, { timestamps: false })

}