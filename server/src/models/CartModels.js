const { DataTypes } = require('sequelize');



module.exports = (sequelize) => {

    sequelize.define('Cart', {

        quantity: {

            type: DataTypes.INTEGER,
            allowNull: false,
            defaultVlaue: 1
        }

    })


} 