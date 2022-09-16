TypeScript - Functiones
Objetivos: Convertir las funciones existentes de JavaScript a Type-
Script, Entender las funciones como tipos, Convierte funciones específicamente
tipificadas a funciones más flexibles genéricas
Ejercicio 3.1
Dado el siguiente codigo:
1 function add(x, y) {
2 return x + y;
3 }
4
5 function sumArray(numbers) {
6 return numbers.reduce(add, 0);
7 }
8
9 const someSum = sumArray(['3', '6', '9']);
10
11 console.log('[Ejercicio 3.1]', `3 + 6 + 9 === ${someSum}`);
1 Agregue tipos explícitos a los parámetros y el tipo de retorno
2 Solucione cualquier error resultante de tipos inválidos
Ejercicio 3.2
Dado el siguiente codigo:
1 const bankAccount = {
2 money: 0,
3 deposit(value, message) {
4 this.money += value;
5 if (message) {
6 console.log(message);
7 }
8 }
9 };
10
11 bankAccount.deposit(20);
12 bankAccount.deposit(10, 'Deposit received')
13
14 console.log('[Exercise 3.2]', `Account value: $${bankAccount.money}`);
1 Agregue tipos explícitos a los parámetros y el tipo de retorno a la funcion ‘deposit‘
2 Haz que el parámetro de ‘message‘ sea *optional*
© 2022 San Cristobal Seguros, CC BY-SA license 11
San Cristobal Seguros Práctica de San Cristobal Seguros - Frontend
Ejercicio 3.3
Para una palabra dada, calculamos su puntuación en Scrabble®
1 function computeScore(word) {
2 const letters = word.toUpperCase().split('');
3 return letters.reduce((accum, curr) => accum += getPointsFor(curr), 0);
4 }
5
6 function getPointsFor(letter) {
7 const lettersAndPoints = [
8 ['AEOIULNRST', 1],
9 ['DG', 2],
10 ['BCMP', 3],
11 ['FHVWY', 4],
12 ['K', 5],
13 ['JX', 8],
14 ['QZ', 10],
15 ];
16
17 return lettersAndPoints.reduce((computedScore, pointsTuple) => {
18 const [letters, score] = pointsTuple;
19 if (letters.split('').find((ll) => ll === letter)) {
20 return computedScore += score;
21 }
22 return computedScore;
23 }, 0);
24 }
25
26 console.log('[Ejercicio 3.3]', `zoologico vale ${computeScore('zoo')} puntos.`);
1 Añadir anotaciones de tipo siempre que sea posible
Ejercicio 3.4
Dado el siguiente codigo:
1 function greet(greeting) {
2 return greeting.toUpperCase();
3 }
4
5 const defaultGreeting = greet();
6 const portugueseGreeting = greet('Oi como vai!');
7
8 console.log('[Ejercicio 3.4]', defaultGreeting, portugueseGreeting);
1 Añadir tipos explícitos a los parámetros y tipo de retorno
2 Añadir un saludo predeterminado: ”hola”
Ejercicio 3.5
1 function layEggs(quantity, color) {
2 console.log(
3 `[Ejercicio 3.5] Acabas de poner ${quantity} huevos ${color}. Buen trabajo!`);
12 © 2022 San Cristobal Seguros, CC BY-SA license
San Cristobal Seguros Práctica de San Cristobal Seguros - Frontend
4 }
5
6 layEggs();
1 Añadir anotación de tipo de parámetro
2 A pesar de que esta función no vuelve, agregue un tipo de retorno explícito
Ejercicio 3.6
Aquí hemos inicializado dos variables con tipos de funciones. Posteriormente les asignamos
funciones.
1 let multiply: (val1: number, val2: number) => number;
2 let capitalize: (val: string) => string;
3
4 multiply = function (value: string): string {
5 return `${value.charAt(0).toUpperCase()}${value.slice(1)}`;
6 }
7
8 capitalize = function (x: number, y: number): number {
9 return x * y;
10 }
11
12 console.log('[Ejercicio 3.6]', capitalize(`habil ${multiply(5, 10)}`));
1 Arreglar los errores
Ejercicio 3.7
Actualmente, nuestra función ‘pushToCollection‘ acepta *cualquier* elemento y lo agrega, (indiscriminadamente)
a *cualquier* tipo de matriz.
Un par de problemas con esto:
1 El tipo ‘any‘ hace que perdamos toda la información de tipos en nuestros parámetros.
2 Esta holgura se ha vuelto en nuestra contra durante el tiempo de ejecución (mira a ‘incrementByTwo‘)
Dado el siguiente codigo:
1 const numberCollection: number[] = [];
2 const stringCollection: string[] = [];
3
4 function pushToCollection(item, collection) {
5 collection.push(item);
6 return collection;
7 }
8
9 // Anadir algunas cosas a las colecciones
10 pushToCollection(false, stringCollection);
11 pushToCollection('hi', stringCollection);
12 pushToCollection([], stringCollection);
13
14 pushToCollection('1', numberCollection);
15 pushToCollection('2', numberCollection);
© 2022 San Cristobal Seguros, CC BY-SA license 13
San Cristobal Seguros Práctica de San Cristobal Seguros - Frontend
16 pushToCollection('3', numberCollection);
17
18 const incrementedByTwo = numberCollection.map((num) => num + 2);
19
20 console.log('[Ejercicio 3.7]', `[${incrementedByTwo}] debe ser igual a [3,4,5]`);
1 Implementar ‘pushToCollection‘ como una función genérica. (Esto debería crear errores
en tiempo de compilación en lugares donde se agregan valores incorrectos a una colección
determinada. Fije estos valores a los tipos correctos)
2 Una vez hecho genérico, ‘pushToCollection‘ debe ser suficientemente *generic* para operar
en artículos y colecciones de cualquier tipo mientras se continúa aplicando que conicidan
14 © 2022 San Cristobal Seguros, CC BY-SA license
San Cristobal Seguros Práctica de San Cristobal Seguros - Frontend