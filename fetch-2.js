//https://reqres.in/api/users

//CR: Función Fetch  
/*fetch('https://reqres.in/api/users') 
.then(resp => { 
    console.log(resp); 
})*/

//CR: Opcion 1. Funcion Fetch
/*fetch('https://reqres.in/api/users')
.then(resp => {
    //console.log(resp);
    //FIC: Para mandar todo en formato JSON.
    resp.json().then(console.log);
});*/

//CR: Funcion Fetch - Declaracion ideal
fetch('https://reqres.in/api/users')
    .then(resp => resp.json())
    .then(respObj => {
        console.log(respObj);
        console.log(respObj.page);
        console.log(respObj.per_page);
        console.log(respObj.data);
});