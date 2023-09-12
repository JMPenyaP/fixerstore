const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

  sequelize.define('user_payment_method', {

    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'users',
        key: 'id'
      }
    },
    payment_type_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'payment_types',
        key: 'id'
      }
    },
    provider: DataTypes.STRING,
    account_number: DataTypes.STRING,
    expire_date: DataTypes.DATE,
    is_default: {
      type: DataTypes.STRING(1),
      validate: {
        isIn: [['Y', 'N']]
      }
    }

  }, { timestamps: false })

<<<<<<< HEAD

}
=======
module.exports = User_Payment_Method;
>>>>>>> 813d1675264466ede17e95ac410319eb15bad65a
