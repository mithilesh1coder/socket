const express = require('express');
const path = require('path');
const http = require('http');
const socketIO =require('socket.io');

var app = express();
var url = path.join(__dirname,'../public');
const port = process.env.PORT || 4000 ;

var server = http.createServer((app));

app.use(express.static(url));

server.listen(port, () => {
    console.log(`Listening on port ${port}`);
})

var io = socketIO(server);

io.on('connection',(socket) => {
    console.log('user connected');

    socket.on('disconnect',() => {
        console.log('User disconnected');
    })
})
