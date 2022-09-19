// Ejercicio 4.0

// TypeScript es inteligente sobre los posibles tipos de una variable, dependiendo de la ruta del
// código.
// Dado el siguiente codigo:


function doStuff(value: any): void {
    if (typeof value === 'string') {
      console.log(value.toUpperCase().split('').join(' '));
    } else if (typeof value === 'number') {
      console.log(value.toPrecision(5));
}

value; // coloque el cursor sobre `valor` aqui
}

doStuff(2);
doStuff(22);
doStuff(222);
doStuff('hello');
doStuff(true);
doStuff({});

console.log('[Ejercicio 4.1]');

// Simplemente inspeccione los tipos posibles moviéndose sobre el ’texto’ para ver cómo
// cambia el tipo inferido si se pueden hacer suposiciones de forma segura sobre los tipos
// posibles dentro de la ruta del código dado


//  Ejercicio 4.2
// Dado el siguiente codigo:

function padLeft(value: string, padding: number | string): string {
        // si padding es un numero
    if (typeof(padding) === 'number'){
        return `${Array(padding + 1).join(' ')}${value}`;
        // si padding es una cadena
    } else {     
        return padding + value;
    }
}  

console.log('[Ejercicio 4.2]', `
${padLeft('', 0)}
${padLeft('', '')}
${padLeft('', '')}
${padLeft('', '')}
${padLeft('', '')}
`);

//  Use un protector de tipo para completar el cuerpo de la función ‘padLeft‘



//  Ejercicio 4.3
// Dado el siguiente codigo:

const numbers = [1, 2, 3, [44, 55], 6, [77, 88], 9, 10];

function flatten<T>(array: (T|T[])[]): T[] {
    const flattened: T[] = [];

    for (const element of array) {
        if (Array.isArray(element)) {
            element; // any[]
            flattened.push(...element);
        } else {
            element; // any
            flattened.push(element);
        }
    }
    return flattened;
}

const flattenedNumbers = flatten(numbers);

console.log('[Ejercicio 4.3]', flattenedNumbers);

// Añadir anotaciones de tipo (‘any‘ excluido)
// Inspeccione el tipo de ‘element‘ en diferentes ramas de código
// Bonificación: convertir ‘flatten‘ en una función genérica



// Ejercicio 4.4
// Dado el siguiente codigo:

interface EggLayer {
    layEggs(): void;
}

interface Flyer {
    fly(height: number): void;
}

interface Swimmer {
    swim(depth: number): void;
}

type BirdLike = EggLayer & Flyer

type FishLike = EggLayer & Swimmer

type Animal = BirdLike | FishLike


 // agregar alias de tipo(s) aqui. 

class Bird implements BirdLike {
    constructor(public species: string) { }

    layEggs(): void {
        console.log('Poniendo huevos de aves.');
}

    fly(height: number): void {
        console.log(`Volando a la altura de ${height} metros.`);
    }
};

class Fish implements FishLike {
    constructor(public species: string) { }

    layEggs(): void {
        console.log('Poniendo huevos de pescado.');
    }

    swim(depth: number): void {
        console.log(`Nadando a una profundidad de ${depth} metros.`);
    }
}

function getRandomAnimal() {
    const animals = [
        new Bird('puffin'),
        new Bird('kittiwake'),
        new Fish('sea robin'),
        new Fish('leafy seadragon'),
    ];

    return animals[Math.floor(Math.random() * animals.length)];
}

function interrogateAnimal(animal = getRandomAnimal()) {
    if (animal instanceof Fish){
        // se llama solo si es un pez
        animal.swim(10)
    }; 
    if (animal instanceof Bird) {
        animal.fly(10);
    } 
     // se llama solo si es un pajaro
    return animal.species;
}

console.log('[Ejercicio 4.4]',`Tenemos un ${interrogateAnimal()} en nuestras manos!`);

// Las aves y los peces ponen huevos. Sólo los pájaros vuelan. Sólo los peces nadan. Defina
// dos tipos nuevos: ‘BirdLike‘ y ‘FishLike‘ basados en estos rasgos
// Crea un alias de tipo para ‘Bird OR Fish‘ llamado ‘Animal‘
// Use ‘instanceof‘ en ‘interrogateAnimal‘ para permitir a los peces nadar y a los pájaros
// volar
// Agregue cualquier anotación de tipo faltante, siendo lo más explícito posible


