const monopatines = ["Monop1", "Monop2", "Monop3"];
for (let index = 0; index < 3; index++) {
    alert(monopatines[ubdex]);
}

const carrito = [] 

const hero__title = document.getElementsByClassName("hero__title")
const parrafoPrincipal = document.getElementsByClassName("parrafoPrincipal")

hero__title.innerText = "EcoPaseos"
parrafoPrincipal.innerText = "Alquilamos monopatines para pasear por el centro de Córdoba"

function listarMonopatines() {
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

//quitar elementos del array
function monopatines() {
    productos.push(new Producto(6545, "Monop1", 1500));
    productos.push(new Producto(4568, "Monop2", 2200));
    productos.push(new Producto(6874, "Monop3", 2000));
}

function listarMonopatines() {
    productos.forEach((producto) => {
        console.log(producto.nombre)
    });
}

//Eliminar el ultimo
// const monopatines = ["Monop1", "Monop2", "Monop3"]
// monopatines.pop ()


//buscador de monopatines
let aBuscar = prompt("Ingrese el tipo del monopatín").toUpperCase()
let res ultado = monopatines.find((producto) => monopatines.id === parseInt(aBuscar))
let resultado = monopatines.find((producto) => monopatines.nombre === (aBuscar))
let resultado = monopatines.find((producto) => monopatines.precio.includes(aBuscar))

if (resultado !== undefined) {
    console.clear()
    console.table(resultado)
}

//calculo del alquiler x hora
let nombre = parseFloat(prompt "ingresá el que querés alquilar")
let cantidadDeHoras = parseFloat(prompt "ingresá la cantidad de horas")

function calcularAlquiler(nombre, cantidadDeHoras) {
    return (nombre * cantidadDeHoras).toFixed(2)
}

let resultado = calcularAlquiler(nombre, cantidadDeHoras);
alert("El valor del alquiler es de" + resultado)

if (resultado >= = 7000) {
    alert("Te descontamos $500")
} else if (resulado <= = 6999) {
    alert("Muchas gracias por elegirnos")
}