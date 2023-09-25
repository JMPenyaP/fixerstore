const { DataTypes } = require('sequelize');



module.exports = (sequelize) => {

    sequelize.define('Order', {
      id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
      },
      status:{
        type:DataTypes.ENUM('pending','in progress','delivered'),
        allowNull:false,
        defaultValue:'pending'
      },
      totalAmount:{
        type:DataTypes.DECIMAL(10,2),
        allowNull:false
      },
      UserId:{
        type:DataTypes.UUID,
        allowNull:true
      }
   })


} 