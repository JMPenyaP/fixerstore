

const { DataTypes } = require("sequelize");


module.exports = (sequelize) => {

    sequelize.define("Favorites", {

        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,

        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        categoryId: {
            type: DataTypes.INTEGER,
            allowNull: false,

        },
        firstImage: {
            type: DataTypes.STRING,
            allowNull: false,

        },
        carrouselImage: {
            type: DataTypes.ARRAY(DataTypes.STRING),
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        date: {
            type: DataTypes.STRING,
            allowNull: true
        },
        priceOfList: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        statusOffer: {
            type: DataTypes.BOOLEAN,
            allowNull: false

        },
        offer: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        stock: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        status: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },

    }, { timestamps: false })


}