//CR: Fetch con codigo de promesa simplificada.
/*fetch('Images/coche.png') 
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
});*/

//CR: instanciamos los dos componentes de imagen de la pagina index.html 
let img1 = document.getElementById("IdImg1");
let img2 = document.getElementById("IdImg2");

//CR: Fetch con codigo de promesa simplificada.
fetch('Images/coche.png')
.then(resp => resp.blob())
.then(image => {
    console.log(image);
    //FIC: instancia para imagen 1
    var imgPath1 = URL.createObjectURL(image);
    img1.src = imgPath1;
});
//FIC: Fetch con codigo de promesa normal.
fetch('Images/carro-deportivo.png')
.then(resp => {
    return resp.blob();
})
.then(image => {
    console.log(image);
    //FIC: instancia para imagen 2
    var imgPath2 = URL.createObjectURL(image);
    img2.src = imgPath2;
});
