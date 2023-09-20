const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define("PasswordReset", {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull: false,
        },
        token: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        expirationDate: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        status: {
            type: DataTypes.CHAR,
            allowNull: false,
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