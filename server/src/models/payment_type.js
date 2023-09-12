const { DataTypes } = require('sequelize');


<<<<<<< HEAD
module.exports = (sequelize) => {

  sequelize.define('payment_type', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    value: DataTypes.STRING

  })

}

=======
module.exports = Payment_Type;
>>>>>>> 813d1675264466ede17e95ac410319eb15bad65a
