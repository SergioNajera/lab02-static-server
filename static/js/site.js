var color = 
function hola(){
    alert("Bienvenido a esta pagina...");
}
function changeBkgColor(){
    var color = document.body.style.backgroundColor;
    if(color == "lightseagreen"){
        color = "honeydew";
    }else{
        color = "lightseagreen";
    }
    console.log(">Cambiando el color a :"+ color);
    element.style.backgroundColor = color;
};