//cargar los modulos necesarios para crear servidor estatico
var fs = require('fs'),
config = require('../config/config.js'),
mime = require('mime');

//exportar la fumcion de servidor estatico
exports.serve = function name(url, res){
//acompletar el static - path
var filePath = config.STATIC_PATH + url;
//verificando si existe o no el archivo dentro del servidor
fs.exists(filePath,function(exists){
if(exists){
    //sirvio el archivo
    fs.readFile(filePath, function(err, content){
        if(err){
            console.log(`>Hubo error en la lectura del archivo`)
            //enviar error 500
            res,writeHead(500,{
                'Content-Type' : 'text/html',
                'Server' : 'PilgrimHawks-Server@2.1.2'
            });
            res.end("<h1>Error 500: Recurso Dañado</h1>");
        }else{
            //si no hay error configuramos la respuesta
            var contentType = mime.lookup(filePath);
            //armamos respuesta
            res.writeHead(200,{
                'Content-Type' : contentType,
                'Server' : 'PilgrimHawks-Server@2.1.2'
            });
            res.end(content);
        }
    });
}else{
    //mando un codigo 404
    res.writeHead(404,{
        'Content-Type' : 'text/html',
        'Server' : 'PilgrimHawks-Server@2.1.2'
    });
    res.end("<h1>404: Recurso no encontrado</h1>");
}
});
};