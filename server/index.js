const server = require("./src/server");
const { conn } = require('./src/db.js');
const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
    conn.sync({ force: true });
    console.log(`Success conextion to Port: ${PORT}`);
});
