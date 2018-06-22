 var socket = io();

        socket.on('connect',function(){
            console.log('connected to the server');

           
            })
   

        socket.on('newMessage',function(msg){
            console.log('New message',msg)
            
            var li = jQuery('<li></li>');
            li.text(`${msg.from} : ${msg.text}`);
            jQuery('#messages').append(li);
             
        })
       
        jQuery('#message-form').on('submit',function(e){
            e.preventDefault();
            })
            jQuery('button').on('click',function(){
            
            
            var inpuser = jQuery('#message-user').val();
            var inpmsg = jQuery('#message-input').val();
            jQuery('#message-user').attr('disabled','disabled');
            
            socket.emit('createMessage',{
            from:inpuser,
            text:inpmsg
        },function(data){
        console.log('Message sent',data);
        }
        );
        })
       

        
        

        

        socket.on('disconnect',function(){
            console.log('Dissconeted from the server');
        });

