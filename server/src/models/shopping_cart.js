const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {

  sequelize.define('shopping_cart', {

    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'users',
        key: 'id'
      }
    }

  }, { timestamps: false })

}
