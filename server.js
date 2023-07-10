const express =  require("express");
const path = require("path");

const app = express();
const server = require('http').createServer(app);

app.use(express.static(path.join(__dirname+"/public")))
const PORT = 5000;

server.listen(PORT, ()=> {
    console.log('listening to port', PORT);
})