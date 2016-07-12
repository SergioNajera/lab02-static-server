//http
var http = require("http");
var fs = require('fs');
var config = require("./config/config.js");
var colors = colors;
var staticServer = require('./internals/static-server.js');
//obteniendo las configuraciones del modulo de configuracion
var PORT = config.PORT;
var IP = config.IP;
if(IP=='127.0.0.1'){
    console.log(">---EJECUTANDO EN MODO LOCAL");
}else{
    console.log(">---EJECUTANDO DESDE EL SERVER");
}
//crear un servidor basico
var server = http.createServer(function(req, res){
   //obtener URL del archivo
   var url = req.url;
   if(url == "/"){
       //sirve el index
       url = "/index.html";
   }
   console.log(`>URL solicitada: ${url}...`.yellow);
   //sirvo url con mi servidor estatico
   staticServer.serve(url, res);
   
});


//poner a trabajar al server
server.listen(PORT, IP, function(){
console.log(`>Server Listening @http://${IP}: ${PORT} ...`);
});