const { DataTypes } = require('sequelize');



module.exports = (sequelize) => {

  sequelize.define('Order', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    idMp: {
      type: DataTypes.STRING,
      allowNull: false
    },
    status: {
      type: DataTypes.ENUM('Pendiente', 'Enviado', 'Entregado'),
      allowNull: false,
      defaultValue: 'Pendiente'
    },
    totalAmount: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false
    },
    UserId: {
      type: DataTypes.UUID,
      allowNull: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    surname: {
      type: DataTypes.STRING,
      allowNull: false
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cc: {
      type: DataTypes.STRING,
      allowNull: false

    },
    payment: {
      type: DataTypes.STRING,
      allowNull: false
    },
    payStatus:{
      type: DataTypes.STRING,
      allowNull:false
    },
    retiro: {
      type: DataTypes.STRING,
      allowNull: true
    },
    city: {
      type: DataTypes.STRING,
      allowNull: true

    },
    address: {
      type: DataTypes.STRING,
      allowNull: true
    },
    department: {
      type: DataTypes.STRING,
      allowNull: true

    },
  })
}
