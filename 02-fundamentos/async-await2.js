let empleados = [
    { id: 1, name: 'Nic' },
    { id: 2, name: 'Mel' },
    { id: 3, name: 'Juan' },
];

let salarios = [
    { id: 1, sal: 1000 },
    { id: 2, sal: 2000 },
];

let getEmpleado = async(id) => {
    let empleadoDB = empleados.find(empleado => empleado.id === id);
    if (!empleadoDB) {
        throw new Error(`No existe el empleado con id ${ id }`);
    } else {
        return empleadoDB;
    }
}

let getSalario = async(empleado) => {
    let salarioDB = salarios.find(salario => salario.id === empleado.id);
    if (!salarioDB) {
        throw new Error(`No existe salario para el empleado ${ empleado.name }`);
    } else {
        return {
            name: empleado.name,
            salario: salarioDB.sal,
            id: empleado.id
        };
    }
}

let getInfo = async(id) => {
    let empleado = await getEmpleado(id);
    let resp = await getSalario(empleado);
    return `${resp.name} tiene un salario de ${resp.salario}$`;
}

getInfo(1).then(resp => console.log(resp))
    .catch(e => console.log(e));