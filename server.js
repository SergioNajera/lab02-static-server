//http
var http = require("http");
//obtener informacion del entorno de ejecucion con respecto al IP y al puerto que debemos usar
var PORT = process.env.PORT || 3000;
var IP = process.env.IP || '127.0.0.1';
if(IP=='127.0.0.1'){
    console.log(">---EJECUTANDO EN MODO LOCAL");
}else{
    console.log(">---EJECUTANDO DESDE EL SERVER");
}
//crear un servidor basico
var server = http.createServer(function(req, res){
   //armar la respuesta http
   //armar un encabezado http
   res.writeHead(200,{
       "Content-Type" : "Text/html",
       "Server" : "ITGAM@4.2.4"
   });
   //enviamos la respuesta
   res.write("hola mundo Najera");
   //cerrar la conexion
   res.end();
});
//poer a trabajar al server
server.listen(PORT, IP, function(){
console.log(`>Server Listening @http://${IP}: ${PORT} ...`);
});