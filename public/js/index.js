 var socket = io();

        socket.on('connect',function(){
            console.log('connected to the server');

           
            })
   

        socket.on('newMessage',function(msg){
            console.log('New message',msg)
        })

        socket.on('disconnect',function(){
            console.log('Dissconeted from the server');
        });

