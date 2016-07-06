//http
var http = require("http");
//crear un servidor basico
var server = http.createServer(function(req, res){
   //armar la respuesta http
   //armar un encabezado http
   res.writeHead(200,{
       "Content-Type" : "Text/Plain",
       "Server" : "ITGAM@4.2.4"
   });
   //enviamos la respuesta
   res.write("hola mundo");
   //cerrar la conexion
   res.end();
});
//poer a trabajar al server
server.listen(3000, '127.0.0.1', function(){
console.log(">Server Listening @http://localhost:3000 ...");
});