let deadpool = {
    name: 'Wade',
    surname: 'Wilson Winston',
    power: 'Regeneracion',
    getData: function() {
        return `${ this.name } ${ this.surname } - poder: ${ this.power }`;
    }
}

console.log(deadpool.getData());

// let name = deadpool.name;
// let surname = deadpool.surname;
// let power = deadpool.power;

let { name: firstName, surname, power } = deadpool;

console.log(firstName, surname, power);