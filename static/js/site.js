var color = "honeydew"

function hola(){
    alert("Bienvenido a mi pagina");

}

function changeBkgColor (element, color){
    var color = document.dody.style.backgroundColor;
    if(color == "lightseagreen"){
        color = "honeydew";
    }else{
        color = "lightseagreen";
    }
console.log("> Cambia color a:  " + color );
document.body.style.backgroundColor = color;
}