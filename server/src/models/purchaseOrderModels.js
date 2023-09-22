
const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {

    sequelize.define("PurchaseOrder", {

        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },

        orderDate: {
            type: DataTypes.STRING,
            allowNull: false
        },
        statusOrder: {

            type: DataTypes.STRING,
            allowNull: false
        },
        status: {
            type: DataTypes.BOOLEAN,
            default: true,
            allowNull: false
        },


    })


}


