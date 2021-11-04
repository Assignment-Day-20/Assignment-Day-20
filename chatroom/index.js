const express= require("express");
const http = require("http");
var app = express();
const server = http.createServer(app);
const io = require('socket.io')(server,{});

app.get("/",(req,res)=>{
    res.sendFile(__dirname + '/home.html')
});

io.on('connection', (socket) => {
    socket.on('chat message', (msg) => {
    io.emit('chat message', msg);
    });
});
server.listen(8080,()=>{
    console.log("CONNECTED!!");
})