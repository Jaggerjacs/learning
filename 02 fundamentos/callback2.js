let empleados = [
    { id: 1, name: 'Nic' },
    { id: 2, name: 'Mel' },
    { id: 3, name: 'Juan' },
];

let salarios = [
    { id: 1, sal: 1000 },
    { id: 2, sal: 2000 },
];

let getEmpleado = (id, callback) => {
    let empleadoDB = empleados.find(empleado => empleado.id === id);
    if (!empleadoDB) {
        callback(`No existe el empleado con id ${ id }`);
    } else {
        callback(null, empleadoDB);
    }
}

let getSalario = (empleado, callback) => {
    let salarioDB = salarios.find(salario => salario.id === empleado.id);
    if (!salarioDB) {
        callback(`No existe salario para el empleado ${ empleado.name }`);
    } else {
        callback(null, {
            name: empleado.name,
            salario: salarioDB.sal,
            id: empleado.id
        });
    }
}

getEmpleado(1, (err, empleado) => {
    if (err) {
        return console.log(err);
    }

    getSalario(empleado, (err, resp) => {
        if (err) {
            return console.log(err);
        }

        console.log(`El salario de ${ resp.name } es de ${ resp.salario }$`);
    });


});