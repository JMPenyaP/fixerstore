const { Sequelize } = require("sequelize"); // Importar Sequelize para que JS interactue con la DDBB
require("dotenv").config(); //Dependencia para leer archivo .env
const userModel = require('./models/UserModel');
const ProductModel = require("./models/product.js");
const categoryModel = require("./models/category.js");
// Importar módulos de Node.js

const { DB_USER, DB_PASSWORD, DB_HOST, DB_DATABASE } = process.env;
const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_DATABASE}`, {
    logging: false,
    native: false,
});


ProductModel(sequelize);
userModel(sequelize);
categoryModel(sequelize);

const { product, category } = sequelize.models;

category.hasMany(product);



// Aca vendrian las relaciones/asociaciones
/*Country.belongsToMany(Activity, { through: 'Country_Activities' });
Activity.belongsToMany(Country, { through: 'Country_Activities' });*/



// Exportar los modelos y la conexión a la base de datos
module.exports = {
    ...sequelize.models, // exporta los modelos
    conn: sequelize,     // exporta la conexión { conn } = require('./db.js');
};