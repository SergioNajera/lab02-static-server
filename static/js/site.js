function getFortuneFromServer(){
    //realizando la solicitud get en AJAX
    $.get("/getfortune", function(data, status){
    console.log("> "+ typeof(data));
    console.log("> Estatus de respuesta: " + status);
    //alert(data.mensaje);
    //alert("¡Esta es tu fortuna!");
    swal({
        title: "TU FORTUNA",
        text: data.mensaje,
        imageURL: img/gl.gif
    })
    });
}