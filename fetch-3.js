//CR: declaramos el objeto.
let usuario = {
    nombre: 'Christopher',
    edad: 22
}

//CR: API POST de usuario.
/*fetch('https://reqres.in/api/users', {
    method: 'POST',
    body: JSON.stringify(usuario),
    headers: {
        'Content-Type': 'application/json'
    }
});*/

//CR: API POST de usuario.
/*fetch('https://reqres.in/', {
    method: 'POST',
    body: JSON.stringify(usuario),
    headers: {
        'Content-Type': 'application/json'
    }
})
.then(resp => resp.json())
.then(console.log);*/

//CR: API POST de usuario.
fetch('https://reqres.in/', {
    method: 'POST',
    body: JSON.stringify(usuario),
    headers: {
        'Content-Type': 'application/json'
    }
})
.then(resp => resp.json())
.then(console.log)
.catch(error => {
    console.log('Error en la peticion API POST');
    console.log(error);
});