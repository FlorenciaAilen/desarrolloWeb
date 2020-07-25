
/*EJERCICIO 1*/

var miNombre  = "Florencia" 

console.log(miNombre)

/*EJERCICIO 2*/ 
var miEdad = 19 ;

console.log(miEdad) ;

/*EJERCICIO 3*/ 

var ignasiAge = 32;
var ageDiff;

ageDiff = miEdad - ignasiAge;

/* EJERCICIO 4 */

if (miEdad < 21){
    console.log("No tiene mas de 21 años")
} else {
    console.log("Tiene mas de 21 años");
}

/* EJERCICIO 5 */

if (miEdad < ignasiAge){
    console.log("Ignasi es mayor que usted");
} else if (miEdad > ignasiAge){
    console.log("Ignasi es menor que usted");
} else {
    console.log("Tiene la misma edad que Ignasi");
}

/* funciones de matriz*/
/* ejercicio 1  cree una matriz con todos los nombres de su clase*/

var startNombres = ["Andrea", "Belen", "Branko", "Janneth", "Luana", "Nadine", "Rodri"]; 
//Ordenar la matriz alfabéticamente.
var nombres = startNombres.sort();
//Imprima el primer elemento de la matriz en la consola. 
//Imprima el último elemento de la matriz en la consola.
console.log("Primer Nombre: " + nombres[0]);
console.log("Ultimo nombre: " + nombres[startNombres.length - 1]);

//Imprima todos los elementos de la matriz en la consola.
console.log("Nombres:");
for (var i = 0; i < nombres.length ; i++){

    console.log(nombres[i]);
}

/* ejercicio 2 
 cree una matriz con todas las edades de los estudiantes de su clase.*/

var startEdades = [21, 19, 32, 22, 21, 24, 26] ;

var index = 0 ;

// imprima todas las edades en la consola.
console.log("Edades:");

while (index < startEdades.length){
    
    console.log(startEdades[index]) ;
    index ++ ;
}

//imprimir solo números pares. 
console.log("Numeros pares:");

while (index < startEdades.length){
    
    if(startEdades[index] % 2 == 0){
        console.log(startEdades[index]);
    }
    
    index ++ ;
}

// hacer lo mismo que antes pero con for
for (var i = 0; i < startEdades.length ; i++){

    if(startEdades[i] % 2 == 0){
        console.log(startEdades[i]);
    }
}

/* ejercicio 3 
escriba una función que reciba una matriz como parámetro 
e imprima el número más bajo de la matriz en la consola.*/

function numeroMenor (array) {
    var numMenor = array[0];
   
    for (var i = 0; i < array.length ; i++){
   
       if (array[i] < numMenor){
           numMenor = array[i];
       }   
    }
   
    console.log(numMenor);
}

console.log("Numero menor:");
numeroMenor (startEdades);

/* ejercicio 4 
escriba una función que reciba una matriz como parámetro 
e imprima el mayor número de la matriz en la consola.*/

function numeroMayor (array){
 var numMayor = array[0];

 for (var i = 0; i < array.length ; i++){

    if (array[i] > numMayor){
        numMayor = array[i];
    }   
 }

 console.log(numMayor);
}

console.log("Numero mayor:");
numeroMayor(startEdades);

/* EJERCICIO 5 
escriba una función que reciba dos parámetros, una matriz y un índice. 
La función imprimirá el valor del elemento en la posición dada 
(basada en uno) en la consola.*/

function elementoEnPosicion (array, indice){
    console.log(array[indice - 1]); 
}

/* EJERCICIO 6 
escriba una función que reciba una matriz y solo imprima los valores que se repiten.  */

/*[3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100] */
// [2,3,3,3,5,5,7,8,8] 9 elementos
//  0 1 2 3 4 5 6 7 8   posicion

function numRepetido (array){

    array.sort(function(a, b){return a-b});
    var repetidos = [];

   for (var i = 0 ; i < array.length ; i++){

        for(var y = (1+i); y < array.length ; y ++){

            if (array[i] == array[y] && repetidos[repetidos.length - 1] != array[i]){
                repetidos.push(array[i]);
            }

            
        }
    }

    console.log("Los numeros repetidos son:");
    console.log(repetidos);
}

var arrayEjemplo = [3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100];
console.log("Numeros repetidos de [3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100]:");
numRepetido (arrayEjemplo);

/* EJERCICIO 7 
escriba una función de JavaScript simple para unir 
todos los elementos de la siguiente matriz en una cadena. */

// myColor = ["Red", "Green", "White", "Black"]

function unirElementos(array) {

    console.log(array.join(', '));
}

console.log("Unir elementos de ['red', 'green', 'white', 'black'] : ");
unirElementos(["Red", "Green", "White", "Black"]);


//funciones de cadena de js
//EJERCICIO 1
// escriba una función de JavaScript que invierta un número

function invertirNum (number){
    
    var numero = number.toString().split('').reverse().join('');

    console.log(numero);
}

//otra forma
function invertirNum2 (number){
   
    var numInvertido = [];
    var cantNum = number.toString().length;
   
    for (var i = 0; i < cantNum ; i++){

        numInvertido.push(number % 10);
        number = Math.trunc(number / 10);
    }

    console.log(numInvertido);
    console.log(numInvertido.join(''));
}


//EJERCICIO 2
//escriba una función de JavaScript que devuelva una cadena en orden alfabético.

function alfabeticamente (palabra){

    console.log(palabra.split('').sort().join(''));
}

//otra forma
function alfabeticamente2 (string){

    var aux;
    var array = string.split('');

    for (let i = 0; i < array.length; i++) {
        for (let j= 0; j < array.length - 1; j++) {
            if (array[j] > array[j+1]){
                aux = array[j];
                array[j] = array[j+1];
                array[j+1] = aux;
            }   
        }
    }

    console.log(array.join(''));
}

//EJERCICIO 3 escriba una función de JavaScript que convierta
// la primera letra de cada palabra a mayúsculas.

function letraMayus (palabra){
    return palabra.split(' ').map(e => e[0].toUpperCase() + e.slice(1)).join(" ");
}

//otra forma
function letraMayus2 (string){
    var palabraCambiada = '';
    var arrayPalabra = [];
    var palabra = string.split(' ');

    for (var i = 0; i < palabra.length ; i++){
        palabraCambiada = palabra[i];
        palabraCambiada = palabraCambiada[0].toUpperCase() + palabraCambiada.slice(1)
        arrayPalabra.push(palabraCambiada);
    }

    console.log(arrayPalabra.join(' ' ));
}

//Ejercicio 4: escriba una función de JavaScript que encuentre la palabra más larga en una frase.

function masLarga (string){
 
    var str = string.split(' ');
    var contador = 0;
    var palabraLarga = ' ';
   

    for (var i = 0; i < str.length; i++){
       
        if (str[i].length > contador){
           contador = str[i].length;
           palabraLarga = str[i];
        } 
    }

    console.log(palabraLarga);
} 

