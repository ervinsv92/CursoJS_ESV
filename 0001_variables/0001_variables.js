/**
 * El código se va ejecutando de arriba hacia abajo, línea por línea
 * Las líneas que tienen comentarios, son omitidas por el interprete del navegador
 */

//Mi primera variable
let nombre
//Se asigna el valor de la variable
nombre = 'Pepe'
console.log(nombre)

//Se reasigna el valor de la variable
nombre = 'Jose'
console.log(nombre)

//El tipo de dato de las variables se especifica segun el valor asignado
//Siempre utilizar la variable con el mismo tipo de dato, nunca asignar otro tipo de dato
//int, es un número entero
let numeroEntero = 10;
numeroEntero = 20;
//numeroEntero = 'asd'; //NO HACER ESTO
console.log(numeroEntero)

//string, contiene texto
let textoString = 'Hola mundo';
console.log(textoString)

//boolean, contiene solo 2 posibles valores, true o false
let esVerdadero = true;
esVerdadero = false;
console.log(esVerdadero)

//float/number, es un número que puede contener decimales
let numeroDecimal = 53.69;
numeroDecimal = 68.3217;
console.log(numeroDecimal);

//undefined, sin tipo de dato asignado
let sinAsignar;
console.log(sinAsignar);

//null, sin valor asignado, espacio vacio en memoria
let sinEspacioEnMemoria = null;
console.log(sinEspacioEnMemoria);

//Contante, puede contener los mismos tipos de dato que las variables let
//por estandar los nombres de las contantes van en mayuscula
//el valor de la constante no se puede reasignar
const SOY_CONSTANTE = 'me llamo constante';
//SOY_CONSTANTE = 'me estoy reasgianando'; //No se puede, porque es una constante
console.log(SOY_CONSTANTE);