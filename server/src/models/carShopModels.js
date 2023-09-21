
const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

    sequelize.define("CarShop", {

        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false

        },
        qty: {

            type: DataTypes.INTEGER,
            allowNull: false,

        },
        purchaseOrderId: {

            type: DataTypes.INTEGER,
            allowNull: false

        },
        userId: {
            type: DataTypes.UUID,
            default: null,
            allowNull: true,
        },
        Total: {

            type: DataTypes.DOUBLE,
            allowNull: false
        }

    }, { timestamps: false })

}







