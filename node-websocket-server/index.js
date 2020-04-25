const express = require("express");
const requestApi = require('./requestApi')
const socketIo= require("socket.io");

//settings
const app = express();
app.set('port', process.env.PORT || 3000)

//request
app.get('/hola', function (req, res) {
  res.send('[GET]Saludos desde express');
});

//start the serve
const server = app.listen(app.get('port'), () => {
 console.log("Servidor en puerto",app.get('port'));
});

//websockets
const io= socketIo(server);

io.on('connection',(socket)=>{
  console.log("New connection to the socket");

  //listen
  socket.on('data',(data)=>{
    requestApi.requestApi(function(response){
            //emit response api laravel
            io.sockets.emit('data',response)
        });
        
  })

})