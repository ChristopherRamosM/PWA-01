//CR: enviar a la consola "Hola Mundo".
console.log('hola mundo');

//CR: funcion que recibe un nuemero y le suma uno.
/*function fcnSumarUno( numero ){
    return numero + 1;
}*/

//CR: llamar la funcion.
/*let Resultado = fcnSumarUno (5);*/

//CR: desplegar el resultado en consola.
/*console.log("Resultado:", Resultado);*/

//CR: funcion que recibe un nuemero y le suma uno. 
function fcnSumarUno( numero, fcnResultadoCallBack ){ 
    setTimeout(function(){ 
       //return numero + 1;  
       fcnResultadoCallBack( numero + 1 ); 
    }, 800); 
}

//CR: llamar la funcion. 
/*fcnSumarUno (5, function(nuevoValor1){ 
    //CR: desplegar el resultado en consola.
    console.log("Resultado:", nuevoValor1); 
});*/

//CR: llamar la funcion.
fcnSumarUno (5, function(nuevoValor1){
    //CR: desplegar el resultado en consola.
    //console.log("Resultado:", nuevoValor1);
    fcnSumarUno(nuevoValor1, function(nuevoValor2){
        //console.log("Resultado:", nuevoValor2);
        fcnSumarUno(nuevoValor2, function(nuevoValor3){
            console.log("Resultado:", nuevoValor3);
        });
    });
});