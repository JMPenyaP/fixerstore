const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {

  sequelize.define('shopping_cart_item', {

    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    shopping_cart_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'shopping_carts',
        key: 'id'
      }
    },
    product_item_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'product_items',
        key: 'id'
      }
    },
    qty: DataTypes.INTEGER


  }, { timestamps: false })

}

