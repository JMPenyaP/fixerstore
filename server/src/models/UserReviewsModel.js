const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define("UserReviews", {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull: false,
        },
        ratingValue: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        comment: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        orderedProductoId: {
            type: DataTypes.UUID,
            allowNull: true,
        },
        userId: {
            type: DataTypes.UUID,
            allowNull: false,
            references: {
                model: 'Users',
                key: 'id',
            },
        },
    })
}