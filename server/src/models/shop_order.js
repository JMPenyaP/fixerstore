const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {

  sequelize.define('shop_order', {

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
    },
    order_date: DataTypes.DATE,
    payment_method_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user_payment_methods',
        key: 'id'
      }
    },
    shipping_address: DataTypes.TEXT,
    shipping_method_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'shipping_methods',
        key: 'id'
      }
    },
    order_total: DataTypes.INTEGER,
    order_status_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'order_statuses',
        key: 'id'
      }
    }


  }, { timestamps: false })

}

<<<<<<< HEAD
=======
module.exports = shop_order;
>>>>>>> 813d1675264466ede17e95ac410319eb15bad65a
