 var socket = io();

        socket.on('connect',function(){
            console.log('connected to the server');

            socket.emit('createEmail',{
                to:"pradhan.mithilesh123@gmail.com",
                from:"mithi.rocks123@gmail.com"
            })
        })

        socket.on('newEmail',function(email){
            console.log('New email',email)
        })

        socket.on('disconnect',function(){
            console.log('Dissconeted from the server');
        });

