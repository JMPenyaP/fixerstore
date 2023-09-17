const server = require("./src/server");
const { conn } = require('./src/db.js');
const PORT = process.env.PORT || 3001;

server.listen(PORT, () => {
    conn.sync({ force: false });
    console.log(`Success conextion to Port: ${PORT}`);
});
   