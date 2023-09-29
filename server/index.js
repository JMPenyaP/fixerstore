const server = require("./src/server");
const { conn } = require('./src/db.js');
const PORT = process.env.PORT || 3001;
const { createCategories } = require("./src/hardcoded/categories")
const { createProducts } = require("./src/hardcoded/products")
const { createAdmin } = require("./src/hardcoded/user")
conn
   .sync({ force: false })
   .then(() => {
      server.listen(PORT, () => {
         console.log(`Server listening on port ${PORT}`);
      })
      createCategories()
      createProducts()
      createAdmin()
   })
