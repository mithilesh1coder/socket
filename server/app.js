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

    socket.emit('newEmail',{
        email:"mithi.rocks123@gmail.com",
        text:"hi there",
        createdAt:new Date().getTime()
    });

    socket.on('createEmail',(createEmail) => {
        console.log(createEmail);
    })

    socket.on('disconnect',() => {
        console.log('User disconnected');
    })
})
