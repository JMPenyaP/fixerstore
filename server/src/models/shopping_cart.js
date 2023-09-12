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

<<<<<<< HEAD
  }, { timestamps: false })

}
=======
module.exports = Shopping_Cart;
>>>>>>> 813d1675264466ede17e95ac410319eb15bad65a
