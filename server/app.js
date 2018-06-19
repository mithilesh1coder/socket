const express = require('express');
const path = require('path');
const http = require('http');
const socketIO = require('socket.io');

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
     
    socket.emit('newMessage',{
        from:'Admin',
        text:'welcome to the app',
        createdAt:new Date().getTime()
    }
    );
    
    socket.broadcast.emit('newMessage',{
        from:'Admin',
        text:'new user joined',
        createdAt:new Date().getTime()
    })

    socket.on('createMessage',(message) => {
        console.log(message);

        io.emit('newMessage', {

           email:message.email,
           text:message.text,
            createdAt:new Date().getTime()
            });

        //socket.broadcast.emit('newMessage', {

          //  email:message.email,
          //  text:message.text,
          //  createdAt:new Date().getTime()
          //  })   
        
    })

    socket.on('disconnect',() => {
        console.log('User disconnected');
    })
})
