const fs = require('fs');
const colors = require('colors');

let data = '';

let listarTabla = (base, limite = 10) => {

    console.log('======================'.green);
    console.log(`Tabla del ${base}`.green);
    console.log('======================'.green);

    for (let i = 1; i <= limite; i++) {
        data += `${base} * ${i} = ${ base * i }\n`;
    }
    console.log(data);
}

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor ${base} no es un numero`);
            return;
        }

        let fileName = `tablas/tabla-del-${base}-limite-${limite}.txt`;

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${ base * i }\n`;
        }

        fs.writeFile(fileName, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(fileName);
        });
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}