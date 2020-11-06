// setTimeout(function() {
//     console.log('Callback!');
// }, 3000);

let getUserId = (id, callback) => {
    let user = {
        name: 'Nic',
        id
    }

    if (id === 20) {
        callback(`El usuario con id ${ id } no existe en la DB`);
    } else {
        callback(null, user);
    }
}

getUserId(15, (err, user) => {

    if (err) {
        return console.log(err);
    }
    console.log('Usuario DB', user);
});