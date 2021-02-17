var nombre = 'Karina', apellido = 'Portuguez';
// Transformar string en mayuscula
var nombreEnMayusculas = nombre.toUpperCase();
//Transformar un string a minúsculas
var apellidoMinusculas = apellido.toLocaleLowerCase();
//Extraer primer letra de la variable
var primeraLetraDelNombre = nombre.charAt(0);
//Cantidad de letras
var cantidadDeLetrasDelNombre = nombre.length;

//CONCATENAR
  var nombreCompleto = nombre + " " + apellido;
  //interpolacion de texto
  var todoElNombre = `${nombre} ${apellido.toUpperCase()}`;
  
//substring
  var str = nombre.substr(1,2);
  //RETO PLATZI
  //Mostrar al usuario la ultima letra de su nombre

  var ultimaLetra = todoElNombre.charAt(todoElNombre.length -1) 

  var UltimaMetraSlice = todoElNombre.slice(-1);
