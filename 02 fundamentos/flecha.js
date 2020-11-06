function sumar(a, b) {
    return a + b;
}

let sumarFlecha = (a, b) => {
    return a + b;
}

let sumaFlechaSimple = (a, b) => a + b;

let saludar = () => {
    return 'Hola Mundo!';
}

let saludarPersona = (nombre) => {
    return `Hola ${nombre}!`;
}

let saludarPersonaSimple = nombre => `Hola ${nombre}!`;



console.log(sumar(10, 20));
console.log(sumarFlecha(15, 40));
console.log(sumaFlechaSimple(82, 90));
console.log(saludar());
console.log(saludarPersona('Nic'));
console.log(saludarPersonaSimple('Nic'));


let deadpool = {
    name: 'Wade',
    surname: 'Wilson Winston',
    power: 'Regeneracion',
    getData() {
        return `${ this.name } ${ this.surname } - poder: ${ this.power }`;
    }
}

console.log(deadpool.getData());