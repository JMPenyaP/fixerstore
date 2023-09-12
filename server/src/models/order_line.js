const { DataTypes } = require('sequelize');



module.exports = (sequelize) => {

  sequelize.define('order_line', {

    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    product_item_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'product_item',
        key: 'id'
      }
    },
    shop_order_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'shop_order',
        key: 'id'
      }
    },
    qty: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false
    }


<<<<<<< HEAD

  }, { timestamps: false })


}

=======
module.exports = Order_Line;
>>>>>>> 813d1675264466ede17e95ac410319eb15bad65a
