//CR: mensaje "¡Hola Mundo!".
/*console.log("¡Hola Mundo!");

var request = new XMLHttpRequest();

request.open('GET', 'https://reqres.in/api/users', true );

request.send(null);

request.onreadystatechange = function( state ){ 
    console.log(request); 
}*/

/*console.log("¡Hola Mundo!");
var request = new XMLHttpRequest();
request.open('GET', 'https://reqres.in/api/users', true );
request.send(null);
request.onreadystatechange = function( state ){
    if (request.readyState === 4) {
        //CR: la respuesta obtiene un string.
        var resp = request.response;
        //CR: enviamos el resultado a la consola.
        console.log( resp );
    } 
    
}*/

/*console.log("¡Hola Mundo!");
var request = new XMLHttpRequest();
request.open('GET', 'https://reqres.in/api/users', true );
request.send(null);
request.onreadystatechange = function( state ){
    if (request.readyState === 4) {
        //FIC: la respuesta obtiene un string.
        var resp = request.response;
        //FIC: ahora transformamos la cadena en formato 
        var respObj = JSON.parse(resp);
        //FIC: enviamos el resultado a la consola.
        console.log( respObj );
    } 
    
}

//CR: obtenemos solo la pagina actual.
console.log(respObj.page);

//CR: obtenemos solo la data de los usuarios.
console.log( respObj.data);*/

console.log("¡Hola Mundo!");
var request = new XMLHttpRequest();
request.open('GET', 'https://reqres.in/api/users', true );
request.send(null);
request.onreadystatechange = function( state ){
    if (request.readyState === 4) {
        //CR: la respuesta obtiene un string.
        var resp = request.response;
        //CR: ahora transformamos la cadena en formato.
        var respObj = JSON.parse(resp);
        //CR: enviamos el resultado a la consola.
        console.log( respObj );
        //CR: obtenemos solo la pagina actual.
        console.log( respObj.page);
        //CR: obtenemos solo la data de los usuarios.
        console.log( respObj.data);
    }    
}
