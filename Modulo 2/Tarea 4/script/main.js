//BOTON DE HOME DE LEER MAS O LEER MENOS
let i = 0
function read(){

  if(!i){
    document.getElementById("read").innerHTML = "Read less";
    i = 1;
  }
  else{
    document.getElementById("read").innerHTML = "Read more";
    i = 0;
    }
}

