const { DataTypes } = require('sequelize');


<<<<<<< HEAD

module.exports = (sequelize) => {

  sequelize.define('shipping_method', {

    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: DataTypes.STRING,
    price: DataTypes.INTEGER


  }, { timestamps: false })

}

=======
module.exports = shipping_method;
>>>>>>> 813d1675264466ede17e95ac410319eb15bad65a
