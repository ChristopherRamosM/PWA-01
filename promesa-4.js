//CR: funcion normal que regresa una promesa pero el resultado se obtiene mas lento.
function fcnSumarLento( numero ){
    return new Promise(function(resolve, reject){
        /*if(numero >= 5 ){
            reject('Sumar Lento Fallo');
        }*/
        setTimeout(function(){
            resolve( numero + 1 );
            }, 800);
    });
}

//CR: esta es la manera mas optimizada de definir una funcion pero de tipo arrow (flecha) que tambien regresa una promesa pero
//el resultado se obtiene mas rapido.
let fcnSumarRapido = (numero)=>{
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve( numero + 1 );
            }, 300);
    });
}

//CR: Promise.race
Promise.race([fcnSumarLento(5), fcnSumarRapido(10)])
    .then(respuesta =>{
        console.log('Respuestas:', respuesta);
    });
