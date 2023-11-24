

const { DataTypes } = require("sequelize");


module.exports = (sequelize) => {

    sequelize.define("Favorites", {

        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        UserId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        ProductId: {
            type: DataTypes.INTEGER,
            allowNull: false

        }

    })


}