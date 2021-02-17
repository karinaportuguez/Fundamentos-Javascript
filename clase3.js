let edad = 27
edad += 1 //incremento

let peso = 80
peso -= 2 //decrimento

//Suma de números
let sandwich = 1
peso += sandwich

//Resta de números
let juagarFutbol = 3
peso -= juagarFutbol

//Decimales
let precioVino = 200.3
let total = Math.round(precioVino * 3) / 100 //Redondear sin impor los decimales
let totalStr = total.toFixed(2) // agregar decimales, convierte el valor en un string
let total2 = parseFloat(totalStr) // convierte el string nuevamente en un número

let pizza = 8
let personas = 2
let cantidadPorcionesPorPersona = pizza / personas

/* 
    Operadores con numeros:
    para sumar se usa +
    para restar se usa -
    para multiplicar se usa *
    para dividir se usa /
*/

var edad = 24

edad += 1 //lo que ya tenia edad mas 1 (edad vale 25)
edad ++ //lo que vale edad mas 1 (edad vale 26)
edad -= 1 //lo que ya tenia edad menos 1 (edad vale 25)
edad -- //lo que ya tenia edad menos 1 (edad vale 24)

var precioDeVino = 200.3

var total = Math.round(precioDeVino * 100 * 3) / 100 //redondear una cantidad con Math.round()
var totalStr = total.toFixed(2) //toFixed(n) para tomar en cuenta n cantidad de decimales que queremos
var total2 = parseFloat(totalStr) //parsear de un string a un float (convertir de texto a numero decimal)


var pizza = 8
var persona = 2
var cantidadDePorcionesPorPersona = pizza / personas