const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {

<<<<<<< HEAD
  sequelize.define('user_review', {

    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    rating_value: {
      type: DataTypes.INTEGER
    },
    comment: {
      type: DataTypes.TEXT
    }


  }, { timestamps: false })

}
=======
module.exports = User_Review;
>>>>>>> 813d1675264466ede17e95ac410319eb15bad65a
