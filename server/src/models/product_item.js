const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

  sequelize.define('product_item', {

    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    product_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'products',
        key: 'id'
      }
    },
    qty_in_stock: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    product_image: DataTypes.TEXT,
    price: {
      type: DataTypes.INTEGER,
      allowNull: false
    }

  })

}

