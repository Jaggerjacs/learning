// let getNombre = async() => {
//     throw new Error('ASYNC Error');
//     return 'Nic';
// }

let getNombre = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Nic');
        }, 3000);
    });
}

let saludo = async() => {
    let name = await getNombre();
    return `Hola ${name}`;
}

saludo().then(resp => console.log(resp))
    .catch(e => console.log(e));