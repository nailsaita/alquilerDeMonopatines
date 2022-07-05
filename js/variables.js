const monopatines = ["Monop1", "Monop2", "Monop3"];
//const carrito = [] 

const hero__title = document.getElementById ("hero__title")
const parrafoPrincipal = document.getElementById ("parrafoPrincipal")

hero__title.innerText = "EcoPaseos"
parrafoPrincipal.innerText = "Alquilamos monopatines para pasear por el centro de Córdoba"  

function cargarProductos() {
    listadoDeMonopatines.innerHTML = ""
    for (const producto of productos) {
        const li = document.createElement ("li")
              li.className = "collection-item"
              li.innerText = producto
              li.id = producto + "Prod"
              listadoDeMonopatines.append ()
    }
}

