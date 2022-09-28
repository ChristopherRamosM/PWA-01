//CR: Fetch con codigo de promesa simplificada.
fetch('Images/coche.png') 
.then(resp => resp.blob()) 
.then(image => { 
    console.log(image); 
});

//CR: Fetch con codigo de promesa normal.
fetch('Images/carro-deportivo.png') 
.then(resp => { 
    return resp.blob(); 
}) 
.then(image => { 
    console.log(image); 
});
