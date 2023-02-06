// console.log ("Hola Mundo");

// var variable1 = true;
// var variable2 = "Felipe";
// var variable3 = 35;

// console.log(variable1);
// console.log(variable2);
// console.log(variable3);

// let variableLet1 = "Soy la variable let 1";

// console.log(variableLet1);

// variableLet1 = "Ya no soy la variable let 1";

// console.log(variableLet1);

// const variableConstUno = 23;

// console.log(variableConstUno);

// console.log(typeof(variableConstUno));

// let numeroUno = 23;
// let numeroDos = 32;

// let suma = numeroUno + numeroDos;

// console.log(suma);

// let resta = numeroUno - numeroDos;

// console.log(resta);

// let incrementarUno = ++numeroUno;

// console.log(incrementarUno);

// let decrecerUno = --numeroUno;

// console.log(decrecerUno);

// console.log(-"4");
// console.log(+"5");

// let variableSuma = 45;

// variableSuma += 5;

// console.log(variableSuma);

// let comparaUno = 5
// let comparaDos = "5"

// console.log(comparaUno == comparaDos);

// console.log(comparaUno === comparaDos);

// console.log(comparaUno != comparaDos);

// console.log(comparaUno !== comparaDos);

// if(comparaUno === comparaDos){
//     console.log("Los dos números son iguales")

// } else if (comparaUno == comparaDos) {
//     console.log("Los números son iguales, pero los tipos no")

// } else {
//     console.log("Los dos números son diferentes")
// }

// if(comparaUno === comparaDos || comparaUno == comparaDos){
//     console.log("Los dos números son iguales")

// } else if (comparaUno == comparaDos) {
//     console.log("Los números son iguales, pero los tipos no")

// } else {
//     console.log("Los dos números son diferentes")
// }

// if(comparaUno === comparaDos && comparaUno == comparaDos){
//     console.log("Los dos números son iguales")

// } else if (comparaUno == comparaDos) {
//     console.log("Los números son iguales, pero los tipos no")

// } else {
//     console.log("Los dos números son diferentes")
// }

// let nota = 8

// let nota = parseInt(prompt("¿Cuál es tu nota?"))

// if(nota < 0) {
//     console.log ("El valor es inválido")
// } else if(nota >= 0 && nota < 5) {
//     console.log ("Insuficiente")
// } else if(nota >= 5 && nota <= 6) {
//     console.log ("Suficiente")
// } else if(nota >= 7 && nota <= 8) {
//     console.log ("Notable")
// } else if(nota >= 9 && nota <= 10) {
//     console.log ("Sobresaliente")
// } else if(nota > 10) {
//     console.log ("El valor excede el rango")
// } else {
//     console.log ("Introduce un valor válido")
// }

// let num1 = parseInt(prompt("Introduce el primer número"));
// let num2 = parseInt(prompt("Introduce el segundo número"));
// let oper = prompt("Introduce la operación a realizar (suma, resta, multiplicación o división)");
// const invalidOperator = oper !== 'suma' && oper !== 'resta' && oper !== 'multiplicación' && oper !== 'división'

// if (invalidOperator){
//     console.log ("valor inválido");
// } else if (oper === 'suma'){
//     let suma = num1 + num2;
//     console.log (suma);
// } else if (oper === 'resta'){
//     let resta = num1 - num2;
//     console.log (resta);
// } else if (oper === 'multiplicación'){
//     let multiplicación = num1 * num2;
//     console.log (multiplicación)
// } else {
//     let división = num1 / num2;
//     console.log (división);
// }


// //EJEMPLO CON IF ELSE//

// let numero1 = 100;

// if(numero1 > 50){
//     console.log("Numero1 es un número grande");
// }else {
//     console.log("numero1 es un número pequeño");
// };

// //EJEMPLO CON TERNARIA//

// let resultado = (numero1 > 50) ? "Número1 es grande" : "Número1 no es grande";
//     console.log(resultado);

// WHILE
// let contador = 0;

// while(contador < 20){
//     contador++;
//     console.log (contador);
// };

// DO WHILE (la primera vez, siempre entra)

// let numero = 100;

// do {

//     console.log("Hola, qué tal estás?");

// } while (numero < 101);

// FOR

// for(let i = 0; i <= 100; i++){
//     console.log (i);
// }


// Pida un número por prompt y acto seguido 
// irá restando ese número hasta llegar a cero usando un bucle
// cada uno de los números que devuelva la resta en el bucle hay que decir 
// por console si ese numero es par

// let num = parseInt(prompt("Introduce un número"));

// for (let i = num; i > 0; i--){
//     if(i%2 === 0){
//         console.log(i);
//     }
// }

// let num = parseInt(prompt("Introduce el número"));

// while(num > 0){

//     if (num %2 === 0){
//     console.log ("Es par ", num);
//     }
//     num--;
// };


// //EJEMPLO CON TERNARIA//


// let number = parseInt(prompt("Introduce un número:"));
// let totalParNumbers = 0;
// while (number > 0) {
//     number%2 != 0 ? (
//         console.log(number + " es un número impar")
//     ) : (
//         console.log(number + " es un número par"),
//         totalParNumbers += number
//     );
//     number--;
// }
// console.log ("La suma total de los números páres es: " + totalParNumbers)


// FUNCIÓN CLÁSICA

// function Sumar (numero1, numero2) {

//     let resultado = numero1 + numero2;

//     return resultado;
// };

// let resultado = Sumar(2, 8);

// ARROW FUNCTION

// const Sumar = (numero1, numero2) => {
    
//     let resultado = numero1 + numero2
    
//     return resultado;
    
// };

// EJEMPLO DE FUNCIÓN

// let num1 = parseInt(prompt("Introduce el primer número"));
// let num2 = parseInt(prompt("Introduce el segundo número"));

// const Dividir = (numero1, numero2) => {
//     let resultado = numero1 / numero2
//     return resultado;
// }
//     console.log(Dividir(num1,num2));



// let alumnos = ["Alvaro", "Alex", "Paula", "Fernando", "Felipe"];

// for(let i = 0; i < alumnos.length; i++){
//     console.log(alumnos[i]);
// };

// let marcos = ["Marcos", 19, "gimnasio", "tenis", 1.83, ["1Nly", "imagine dragons", "lil peep"]];

// console.log(marcos);

// let nombre = prompt("Dame un nombre");

// let nombres = [];

// nombres.push(nombre);

// Genera un programa que te pida 10 nombres y los guarde en un array,
// finalmente muestra los 10 nombres por consola.

// let nombres = [];
// let nombre;

// for (let i = 0; i < 10; i++) {

//     nombre = prompt("Dame un nombre");

//     nombres.push(nombre);

// }

// console.log(nombres);


// let bebidas = ["agua", "zumo de naranja", "vodka", "monster", "bitter kas"];

// let comidas = ["paella", "cocido", "queso", "pizza", "hamburguesa", "doritos", "chocolate"];

// let despensa = bebidas.concat(comidas);

// console.log(despensa);

// let deportes = ["tenis", "baloncesto", "petanca", "e-sports"];

// console.log(deportes);

// let resultados = deportes.join("*");

// console.log(resultados);

// // deportes.reverse();

// deportes.unshift("ajedrez");

// console.log(deportes);

// console.log(deportes.slice(0,3));

// let hobbiesDavid = ["ver series", "viajar money free", "juerga"];
//     hobbiesDavid.splice(1,1, "futbol")


// EJERCICIO DNI

// let comparador = 0
// let dni = parseInt(prompt("Introduce el número del DNI"));
// let letra = prompt("Introduce la letra del DNI").toUpperCase();

// comparador =  dni % 23;

// let formulaDni = ["T","R","W","A","G","M","Y","F","P","D","X","B","N","J","Z","S","Q","V","H","L","C","K","E","T"];

// resultado = formulaDni[comparador];

// if (letra == resultado){
//     console.log("La letra es correcta");
// }else{
//     console.log("La letra es errónea");
// }

// Proposicion de Ejercicio: Genera una aplicación que te pida la edad y el pais donde vives,
// en base a eso te responderá si es legal por tu parte adquirir cerveza,
// además también te dirá si eres o no mayor de edad. 
// Toma como referencias Estados Unidos (21) y Europa (18)

// let edad = parseInt(prompt("¿Qué edad tienes?"));
// let pais = prompt("¿En qué región vives (Europa o USA)").toUpperCase();

// if ((edad >= 18) && ((pais === "EUROPA") || (pais === "INDIANAPOLIS"))){
//     console.log ("Puedes beber cerveza");

// } else if (edad >= 21){
//     console.log("Si puede beber cerveza");
    
// } else {
//     console.log("No puedes beber cerveza");
// };

// // Declaramos como constantes as edades de mayoría de edad legal
// const adultAge_USA = 21;
// const adultAge_UE = 18;
// // Pedimos los datos de edad y país al usuario
// let userCountry = prompt("¿Cuál es tu país de residencia?: (USA, UE)");
// let userAge = parseInt(prompt("¿Qué edad tienes actualmente?: "));
// switch (userCountry) {
//     case "USA":
//         console.log (`Con tu edad de ${userAge} ${(userAge < adultAge_USA) ? "no es" : "es"} legal adquirir cerveza en ${userCountry}`);
//         break;
//     case "UE":
//         console.log (`Con tu edad de ${userAge} ${(userAge < adultAge_UE) ? "no es" : "es"} legal adquirir cerveza en ${userCountry}`);
//         break;
//     default:
//         console.log("Introduce un país correcto.");
// }

// //INTERPOLACION
// let nombre = prompt("Dime un nombre");
// console.log(`Hola ${nombre}`);


// EJERCICIO MARA

// Crea un programa que genere un número aleatorio del 1 al 100. 
// Pide al usuario que adivine el número. 
// El programa debe decir al usuario si el número que ha dicho es mayor o menor
// que el número aleatorio y seguir pidiéndole números hasta que lo adivine.


// let aleatorio = Math.ceil(Math.random() * 100);
// let turno = true;

// let numeroUsuario = parseInt(prompt("Intenta adivinar el número 1 | 100 -- Turno del player 1"));

// let respuesta;
// let intentosP1 = 1;
// let intentosP2 = 1;

// while(numeroUsuario !== aleatorio){

//     if(turno){
//         //Esto es como decir que turno es true.....
//         intentosP1++;
//     } else {
//         intentosP2++;
//     }

//     turno = !turno;

//     respuesta = `${(numeroUsuario > aleatorio) 
//         ? "El número es menor" : "El número es mayor"} | Le toca al ${(turno === true) 
//         ? "player 1" : "player 2 "}`;

//     numeroUsuario = parseInt(prompt(respuesta));
// };


// console.log(`Bravo, el número oculto es ${aleatorio} y lo has acertado!!!.`);
// console.log(`El player que lo ha acertado es ${(turno === true) 
//     ? `player 1 en ${intentosP1} intentos` : `player 2 ${intentosP2} intentos`}.`);


// OBJETOS JAVASCRIPT

// let Alvaro = {

//     nombre : "Alvaro",
//     edad: 29,
//     ciudad: "Almería",
//     hobbies : {
//         hobbie1 : "Videojuegos",
//         hobbie2 : "Lectura",
//         hibbie3 : "Programar"
//     }
// }


// let Paula = {

//     nombre : "Paula",
//     edad: 29,
//     ciudad : "Ontinyent",
//     hobbies : {
//         habbie1 : "Puzzles",
//         hobbie2 : "Bailar folk",
//         hobbie3 : "Programar",
//     }

// }

// let Ruben = {
//     nombre : "Ruben",
//     edad : 41,
//     ciudad : "Vilamarxant",
//     hobbies : {
//         hobbie1: "Tenis",
//         hobbie2: "Trail Running",
//         hobbie3: "Programar",
//     }
// }

// let cartelera = {
//     pelicula1 : {
//         titulo : "Lo que el viento se llevó",
//         edad : 13
//     },
//     pelicula2 : {
//         titulo : "Star Wars",
//         edad : 7
//     },
//     pelicula3 : {
//         titulo: "Pulp Fiction",
//         edad : 18
//     }
// }

// if(Ruben.edad >= cartelera.pelicula1.edad){
//     console.log("Ruben sí puede ver ", cartelera.pelicula1.titulo);
// }

//VERSIÓN CON TERNARIA//

// let resultadoTernaria = (Ruben.edad >= cartelera.pelicula1.edad) ? "Ruben sí puede" : "Ruben no puede";

// console.log(resultadoTernaria);

//ALGO UTIL

//ARRAY DE OBJETOS

// let videojuegos = [
//     {
//         titulo: ["God of war", "Dios de la guerra", "Kratos se enfada"],
//         plataforma: "PS2",
//     },
//     {
//         titulo: ["Dark Souls", "Almas oscuras", "Has muerto"],
//         plataforma: "PC"
//     },
//     {
//         titulo: ["Last of Us", "Ultimo de nosotros"],
//         plataforma: "PS3"
//     },
//     {
//         titulo: ["Quake"],
//         plataforma: "PC"
//     },
//     {
//         titulo: ["Sonic 2", "Erizo", "Tails"],
//         plataforma: "Mega Drive"
//     }
// ];

// let juego = prompt("Dime a qué juego quieres jugar");

// for (let i = 0; i < videojuegos.length; i++){

//     for(let x = 0; x <videojuegos[i].titulo.length; x++){
//             if(juego === videojuegos[i].titulo[x]){
//         console.log(`Sí, lo tenemos disponible para ${videojuegos[i].plataforma}`)
//         }
//     }
// };


// ES6 - 12

// //FUNCIÓN CLÁSICA
// function Suma (a,b) {
//     return a + b
// }

// //FUNCIÓN FLECHA
// const Suma = (a,b) => {
//     return a + b;
// }

// //FUNCIÓN FLECHA EN UNA LÍNEA
// const Suma = (a,b) => a + b;

// //CUANDO SÓLO HAY UN PARÁMETRO NO HACE FALTA PARÉNTESIS
// const Elevar = numero => numero**2;

//Arrow functions que devuelven objetos
//(Cuando devolvemos una función, hay que rodear las {} con paréntesis())
// const Film = (titulo,year,genero) => (
//     {
//         nombrePeli: titulo,
//         año: year,
//         genre: genero,
//     }
// );

// const resultado = Film("La vida es bella", 1997, "Drama");

// console.log(resultado);

// let animal = ["perro", "gato", "loro", "tigre", "mapache", "nutria", "serpiente"];

// let animales = animal.map(bicho => bicho + "s");

// console.log(animales);

// let numeros = [1, 200, 7000000, 357, 0, 2000];

// let multi = numeros.map(operacion => operacion * 10);

// console.log(multi);

// let calculaIva = (precio, tasa = 0.21) => {
//     return precio + precio * tasa;
// }

// let resultado = calculaIva(parseInt(prompt("Introduce el precio del artículo")));

// console.log(resultado);
