const { DataTypes } = require('sequelize');


<<<<<<< HEAD
module.exports = (sequelize) => {

  sequelize.define('order_status', {

    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    status: DataTypes.STRING

  }, { timestamps: false })



}

=======
module.exports = Order_Status;
>>>>>>> 813d1675264466ede17e95ac410319eb15bad65a
