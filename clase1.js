var nombre = 'Karina', apellido = 'Portuguez';



console.log("Hola " + nombre + " "+ apellido)

/*
TIPOS DE VARIABLES

var = Una varible global
const = Una varible en la cual no se puede cambiar su contenido
let = Varible que permite declarar variables limitando su alcance

Diferencias entre LET vs VAR

let permite declarar variables limitando su alcance (scope) al bloque, declaración, o expresión donde se está usando. Lo anterior diferencia la expresión let de la palabra reservada var , la cual define una variable global o local en una función sin importar el ámbito del bloque.

Cuando usamos let dentro de un bloque, podemos limitar el alcance de la variable a dicho bloque. Notemos la diferencia a con var, cuyo alcance reside dentro de la función donde ha sido declarada la variable.
*/

var a = 5;
var b = 10;

if (a === 5) {
  let a = 4; // El alcance es dentro del bloque if
  var b = 1; // El alcance es global

  console.log(a);  // 4
  console.log(b);  // 1
} 

console.log(a); // 5
console.log(b); // 1