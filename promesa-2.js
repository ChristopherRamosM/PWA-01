//CR: enviar a la consola "Hola Mundo".
console.log('¡Hola Mundo!');
//CR: funcion que recibe un nuemero y le suma uno.
/*function fcnSumarUno( numero, fcnResultadoCallBack ){
    setTimeout(function(){
       //return numero + 1; 
       fcnResultadoCallBack( numero + 1 );
    }, 800);
}*/

//CR: funcion que recibe un nuemero y le suma uno.
/*function fcnSumarUno( numero ){
    var promesa = new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve( numero + 1 );
            }, 800);
    });
   return promesa;
}*/

//CR: llamado de la funcion y promesa.
/*fcnSumarUno(5).then( function(nuevoNumero){
    console.log(nuevoNumero);
})*/

//CR: llamado de la funcion y promesa
/*fcnSumarUno(5).then( nuevoNumero=>{
    console.log(nuevoNumero);
});*/

//CR: llamado de la funcion y promesa de forma recursiva de manera encadenada.
/*fcnSumarUno(5).then( nuevoNumero=>{
    console.log("Resultado:",nuevoNumero);
    return fcnSumarUno(nuevoNumero);
}).then( nuevoNumero=>{
    console.log("Resultado:",nuevoNumero);
    return fcnSumarUno(nuevoNumero);
}).then( nuevoNumero=>{
    console.log("Resultado:",nuevoNumero);
});*/

//CR: llamado de la funcion y promesa de forma recursiva de manera optimizada.
/*fcnSumarUno(5)
    .then( fcnSumarUno)
    .then( fcnSumarUno)
    .then( nuevoNumero=>{
    console.log("Resultado:",nuevoNumero);
});*/

//CR: funcion que recibe un nuemero y le suma uno.
function fcnSumarUno( numero ){
    var promesa = new Promise(function(resolve, reject){
        if (numero >= 7 ){
            reject('El numero ya es muy alto');
        }
        setTimeout(function(){
            resolve( numero + 1 );
            }, 800);
    });
   return promesa;
}

//CR: llamado de la funcion y promesa de forma recursiva y optimizada y con validacion de error. 
fcnSumarUno(5) 
    .then( fcnSumarUno) 
    .then( fcnSumarUno) 
    .then( nuevoNumero=>{ 
    console.log("Resultado:", nuevoNumero); 
}) 
.catch(error =>{ 
    console.log('Error en la Promesa', error); 
});