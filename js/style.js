let productos = [] 

cargarMonopatines ()
listarMonopatines ()

//const monopatines = ["Monop1", "Monop2", "Monop3"];
for (let index = 0; index < 3; index++) {
   // alert(monopatines[index]);
}

const carrito = [] 

function mostrarEnConsola() {
    console.table(monopatines)
}

//agregar productos al array
function agregarMonopatines() {
    let id = creoID()
    let nombre = prompt("Ingresá el nombre del monopatín")
    let precio = parseInt("ingresá el precio x hora")
    productos.push(new Producto(id, nombre, precio))
}

function creoID() {
    return parseInt(Match.random() + 10000)
}


function cargarMonopatines() {
    productos.push(new Producto(6545, "Monop1", 1500, "./assets/img/monop22.jfif"));
    productos.push(new Producto(4568, "Monop2", 2200, "./assets/img/monop11.jfif"));
    productos.push(new Producto(6874, "Monop3", 2000, "./assets/img/monop33.jpg"));
}

function listarMonopatines() {
    document.querySelector("tbody").innerHTML +=`<section class="coder-pet bg-dark" id="coder-pet">
    <h2 class="coder-pet__title text-light">Opciones</h2>
    <article class="coder-pet__container">`
    productos.forEach( (producto) => {
        console.log(producto.nombre)
        //const fila = `<tr>
        //            <td> ${producto.id}</td>
        //            <td> ${producto.nombre}</td>
        //            <td> ${producto.precio}</td>
        //            </tr>`
        const fila = `<div class="coder-pet__content">
        <div class="coder-pet__content-img">
            <img src="${producto.direccionDeImagen}" alt="monopp">
        </div>
        <h3 class="coder-pet__content-title">${producto.nombre}</h3>
        <p>Apto para principiantes ❤</p>
        <small> $${producto.precio} x media hora</small>
        </div>`
        document.querySelector("tbody").innerHTML +=fila
    })
    document.querySelector("tbody").innerHTML +=`</article></section>`
}



//Eliminar el ultimo
// const monopatines = ["Monop1", "Monop2", "Monop3"]
// monopatines.pop ()
//buscador de monopatines
/*let aBuscar = prompt("Ingrese el tipo del monopatín")
aBuscar  =aBuscar.toUpperCase ()
let resultadoporId = productos.find((producto) => producto.id === parseInt(aBuscar))
let resultadoPorNombre = productos.find((producto) => producto.nombre === (aBuscar))
let resultadoPorPrecio = productos.find((producto) => producto.precio.includes(aBuscar))

console.clear()
if (resultadoporId !== undefined) {
    console.table(resultadoPorId)
} else if (resultadoPorNombre !== undefined) {
    console.table(resultadoPorNombre)
} else if (resultadoPorPrecio !== undefined) {
    console.table(resultadoPorPrecio)
}
*/
//calculo del alquiler x hora
/*let nombre = parseFloat(prompt ("ingresá el que querés alquilar"))
let cantidadDeHoras = parseFloat(prompt ("ingresá la cantidad de horas"))

function calcularAlquiler(nombre, cantidadDeHoras) {
    return (nombre * cantidadDeHoras).toFixed(2)
}*/
/*
let resultado = calcularAlquiler(nombre, cantidadDeHoras);
alert("El valor del alquiler es de" + resultado)
*/
//if (resultado >= 7000) {
//    alert("Te descontamos $500")
//} else if (resulado <= 6999) {
//    alert("Muchas gracias por elegirnos")
//}

//eventos NO ANDA NO ANDA NO ANDA ¿??¿ PREGUNTAQRLE A JULIO POR QUE

const img = document.querySelector("img")
      img.addEventListener("click", ()=>{
        alert ("Detectar el evento")
      })

