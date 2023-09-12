const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

  sequelize.define('variation_option', {

<<<<<<< HEAD
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    variation_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'variations',
        key: 'id'
      }
    },
    name: DataTypes.STRING

  }, { timestamps: false })

}
=======
module.exports = variation_option;

// Asociaciones
variation_option.belongsTo(Variation, { foreignKey: 'variation_id' });

module.exports = variation_option;
>>>>>>> 813d1675264466ede17e95ac410319eb15bad65a
