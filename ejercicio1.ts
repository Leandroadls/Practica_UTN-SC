// Ejercicio 1.1

// Dado el siguiente codigo:
// Usando tu IDE preferido, coloca el cursor sobre las errores en rojo para inspeccionarlos
// Coloca el cursor sobre las variables para inspeccionar sus tipos
// Arregle el error en la linea 2 cambiando el valor de pi al tipo esperado

let pi = '3.14159';
let tau = +pi * 2;
console.log('[Ejercicio 1.1]', `${tau} es ${pi} veces el dos.`);


// Ejercicio 1.2

// Dado el siguiente codigo:
// Inspeccionar el tipo de ‘torta‘
// Añadir una anotación de tipo explícito a ‘torta‘
// Intenta asignar tipos inválidos, por diversión

let torta: object; //se asigna un tipo inválido de acuerdo a la consigna.
torta = 'arandanos';
console.log('[Ejercicio 1.2]', `Me gusta comer torta con sabor a ${torta}.`);


// Ejercicio 1.3

// Dado el siguiente codigo:
// Inspeccione el error, luego corríjalo

let esPablo: boolean = true;
console.log('[Ejercicio 1.3]', `${esPablo ? 'Oh, hola Pablo' : 'Quien sos vos?'}`);


// Ejerecicio 1.4

// Dado el siguiente codigo:
// Añadir anotaciones de tipo (lo más explícitas posible)
// Solucionar errores (si corresponde)

const entero: number = 6;
const decimal: number = 6.66;
const hexadecimal: number = 0xf00d;
const binario: number = 0b1010011010;
const octal: number = 0o744;
const ceroNegativo: number = -0;
const enRealiadadNumero: number = NaN;
const mayorNumero: number = Number.MAX_VALUE;
const elNumeroMasGrande: number = Infinity;
const miembros: number[] = [
    entero,
    decimal,
    hexadecimal,
    binario,
    octal,
    ceroNegativo,
    enRealiadadNumero,
    mayorNumero,
    elNumeroMasGrande
];
miembros[0] = 12345;
console.log('[Ejercicio 1.4]', miembros);


// Ejercicio 1.5

// Dado el siguiente codigo:
// Añadir anotaciones de tipo (lo más explícitas posible)
// Solucionar errores (si corresponde)

const secuencia: number[] = Array.from(Array(10).keys());
const animales: string[] = ['pinguino', 'oso hormiguero', 'zorro', 'jirafa'];
const cadenasYNumeros: (number|string)[] = [1, 'uno', 2, 'dos', 3, 'tres'];
const todosMisArreglos: (number|string)[][] = [secuencia, animales, cadenasYNumeros];
console.log('Ejercicio 1.5', todosMisArreglos);


// Ejercicio 1.6

// Queremos representar un elemento de inventario como una estructura donde la primera entrada
// es el nombre del artículo y la segunda es la cantidad.
// Dado el siguiente codigo:
// Añadir anotaciones de tipo (lo más explícitas posible)
//Solucionar errores (si corresponde)

const elementoInventario: [string, number] = ['tuerca', 11];

// despues lo desestructuramos
const [nombre, cantidad] = elementoInventario;
const mensaje = agregarInventario(nombre, cantidad);
console.log('[Ejercicio 1.6]', mensaje);

function agregarInventario(nombre: string, cantidad: number): string {
return `Se agregaron ${cantidad} ${nombre}s al inventario.`;
}