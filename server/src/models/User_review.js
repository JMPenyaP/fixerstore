const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {

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
