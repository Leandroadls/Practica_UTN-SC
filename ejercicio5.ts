TypeScript - Clases
Objetivos: Crear clases con propiedades y métodos con tipos, Añadir
modificadores de acceso a los miembros de la clase.
Ejercicio 5.1
Dado el siguiente codigo:
1 class MC {
2 greet(event = 'party') {
3 return `Bienvenido al ${event}`;
4 }
5 }
6
7 const mc = new MC();
8 console.log('[Ejercicio 5.1]', mc.greet('espectaculo'));
1 Añadir tipo de parámetro de forma explícita en método ‘greet‘
2 Agregar el tipo de retorno explicito al metodo greet
Ejercicio 5.2
Dado el siguiente codigo:
1 class Person {
2 constructor(name, age) {
3 this.name = name;
4 this.age = age;
5 }
6 }
7
8 const jane = new Person('Juan', 31);
9
10 console.log('[Ejercicio 5.2]', `El nombre de la nueva persona es ${jane.name}.`);
1 Añadir tipos de parámetros explícitos al constructor
2 Agregue parámetros con tipos para almacenar valores
Ejercicio 5.3
Dado el siguiente codigo:
1 class Employee {
2 title: string;
3 salary: number;
4 constructor(title: string, salary: number) {
5 this.title = title;
6 this.salary = salary;
7 }
© 2022 San Cristobal Seguros, CC BY-SA license 15
San Cristobal Seguros Práctica de San Cristobal Seguros - Frontend
8 }
9
10 const employee = new Employee('Ingeniero', 100000);
11
12 console.log('[Ejercicio 5.3]', `El titulo del nuevo empleado es ${employee.title} y gana $ ${employee.1 Hacer que las propiedades de title y salary estén explícitamente disponibles públicamente
2 Reduzca la clase a tres líneas de código manteniendo la funcionalidad
Ejercicio 5.4
Dado el siguiente codigo:
1 class Animal {
2 constructor(name) { }
3 move(meters) {
4 console.log(`${this.name} se movio ${meters}m.`);
5 }
6 }
7
8 class Snake {
9 move(meters) {
10 console.log('Deslizandose...');
11 // debe invocar al metodo `move` del padre, con un deslizamiento predeterminado
12 // de 5 metros
13 }
14 }
15
16 class Pony {
17 move(meters) {
18 console.log('Galopando...');
19 // debe invocar al metodo `move` del padre con un galope predeterminado
20 // de 60 metros
21 }
22 }
23
24 // La clase Animal no debe ser instanciable.
25 // Eliminar o comentar una vez que se logra el error deseado.
26 const andrew = new Animal("Andrew el Animal");
27 andrew.move(5);
28
29 const sammy = new Snake("Sammy la serpiente");
30 sammy.move();
31 console.log(sammy.name); // debe devolver error
32
33 const pokey = new Pony("Pokey el pony");
34 pokey.move(34);
35 console.log(pokey.name); // Should devolver error
1 Añadir tipos
2 Hacer que la clase Snake herede de Animal
2 Hacer que la clase Pony herede Animal
16 © 2022 San Cristobal Seguros, CC BY-SA license
San Cristobal Seguros Práctica de San Cristobal Seguros - Frontend
2 Hacer que el miembro del nombre no pueda ser accedido públicamente
Ejercicio 5.5
Dado el siguiente codigo:
1 class Furniture {
2 constructor(manufacturer: string = 'IKEA') { }
3 }
4
5 class Desk extends Furniture {
6 kind() {
7 console.log('[Ejercicio 5.5]', `Este es un escritorio hecho por ${this.manufacturer}`);
8 }
9 }
10
11 class Chair extends Furniture {
12 kind() {
13 console.log('[Ejercicio 5.5]', `Esta es una silla hecha por ${this.manufacturer}`);
14 }
15 }
16
17 const desk = new Desk();
18 desk.kind();
19 desk.manufacturer; // debe devolver error
20
21 const chair = new Chair();
22 chair.kind();
23 chair.manufacturer; // debe devolver error
24 }
1 Hacer que solo las clases Desk y Chair puedan ver el miembro del fabricante
Ejercicio 5.6
Dado el siguiente codigo:
1 class Student {
2 public school: string = 'Harry Herpson High School';
3 constructor(private name: string) { };
4 introduction() {
5 console.log('[Ejercicio 5.6]', `Hola, mi nombre es ${this.name} y asisto a ${Student.school}`);
6 }
7 }
8
9 const student = new Student('Morty');
10 console.log(Student.school);
11 student.introduction();
1 Elimine el error sin cambiar las referencias a ‘Student.school‘
© 2022 San Cristobal Seguros, CC BY-SA license 17
San Cristobal Seguros Práctica de San Cristobal Seguros - Frontend
