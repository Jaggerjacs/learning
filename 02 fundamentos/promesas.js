let empleados = [
    { id: 1, name: 'Nic' },
    { id: 2, name: 'Mel' },
    { id: 3, name: 'Juan' },
];

let salarios = [
    { id: 1, sal: 1000 },
    { id: 2, sal: 2000 },
];

let getEmpleado = (id) => {

    return new Promise((resolve, reject) => {
        let empleadoDB = empleados.find(empleado => empleado.id === id);
        if (!empleadoDB) {
            reject(`No existe el empleado con id ${ id }`);
        } else {
            resolve(empleadoDB);
        }
    });
}

let getSalario = (empleado) => {
    return new Promise((resolve, reject) => {
        let salarioDB = salarios.find(salario => salario.id === empleado.id);
        if (!salarioDB) {
            reject(`No existe salario para el empleado ${ empleado.name }`);
        } else {
            resolve({
                name: empleado.name,
                salario: salarioDB.sal,
                id: empleado.id
            });
        }
    });
}

// Promesas
// getEmpleado(1).then(empleado => {
//     getSalario(empleado).then(resp => {
//         console.log(resp);
//     }, (err) => {
//         console.log(err);
//     })
// }, (err) => {
//     console.log(err);
// });

// Promesas en cadena
getEmpleado(1).then(empleado => {
        return getSalario(empleado);
    })
    .then(resp => {
        console.log(resp);
    })
    .catch(err => console.log(err));