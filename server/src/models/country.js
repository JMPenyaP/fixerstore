const { DataTypes } = require('sequelize');


<<<<<<< HEAD
module.exports = (sequelize) => {

  sequelize.define('country', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }

  }, { timestamps: false })

}
=======
module.exports = Country;
>>>>>>> 813d1675264466ede17e95ac410319eb15bad65a
