const { DataTypes } = require('sequelize');


<<<<<<< HEAD

module.exports = (sequelize) => {

  sequelize.define('product_category', {

    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: DataTypes.STRING


  }, { timestamps: false })

}

=======
module.exports = Product_Category;
>>>>>>> 813d1675264466ede17e95ac410319eb15bad65a
