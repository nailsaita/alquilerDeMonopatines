import {
  Producto
} from "./class_producto.js";
import {
  productos,
  productosCarrito,
  calculoTotalCarrito,
  URL_PRODUCTOS
} from "./variables.js"

const listadoCarrito = document.getElementById("listadoCarrito")

cargarMonopatines()
listarMonopatines()
/*agregarAlCarrito ()*/
agregarEventoAgregarAlCarrito()
/*removerDelCarrito ()*/
actualizarTotal()
//calcularSubtotal()
//finalizarPedido()
listarMonopatinesCarrito()
agregarEventoremoverDelCarrito()
agregarEventoCantidadHorasCarrito()


/* funciones iniciales de carga */

function cargarMonopatines() {
  /*
  productos.push(new Producto(6545, "Monop1", 1500, "./assets/img/monop22.jfif"));
  productos.push(new Producto(4568, "Monop2", 2200, "./assets/img/monop11.jfif"));
  productos.push(new Producto(6874, "Monop3", 2000, "./assets/img/monop33.jpg"));*/

  /*
    Se traen los monopatines con FETCH... la información está en el archivo monopatines.json
  */
  fetch(URL_PRODUCTOS)
  .then((response) => response.json())
  .then((data) => {
    for(let productoJson of data) {
      let producto = new Producto(
        productoJson["id"], 
        productoJson["nombre"], 
        productoJson["precio"],
        productoJson["direccionDeImagen"]
      );
    productos.push(producto);
    }
  })
  .catch((error) => {alert(error)})
  .finally((e) => {
    listarMonopatines();
    agregarEventoAgregarAlCarrito();
  });
}

function listarMonopatines() {

  let bloqueProductos = "<tr>"
  productos.forEach((producto) => {
    console.log(producto.nombre)
    //const fila = `<tr>
    //            <td> ${producto.id}</td>
    //            <td> ${producto.nombre}</td>
    //            <td> ${producto.precio}</td>
    //            </tr>`
    const columna = `<td> <div id="${producto.id}" class="coder-pet__content">
        <div class="coder-pet__content-img">
            <img src="${producto.direccionDeImagen}" alt="monopp">
        </div>
        <h3 class="coder-pet__content-title">${producto.nombre}</h3>
        <p>Apto para principiantes ❤</p>
        <small> $${producto.precio} x media hora</small>
        </div></td>`
    bloqueProductos += columna
  })
  bloqueProductos += "</tr>"
  document.querySelector("#catalogoMonopatines").innerHTML = bloqueProductos
}


function agregarEventoAgregarAlCarrito() {
  productos.forEach((producto) => {
    let divisionMonopatin = document.getElementById(`${producto.id}`)
    divisionMonopatin.onclick = (e) => {
      let decision = confirm(`¿Querés agregar el producto al carrito? id=${producto.nombre}`)
      //alert(`La decisión es ${decision}`)
      if (decision) {
        let productoEstaEnCarritoCompras = monopatinYaEstaEnCarrito(producto);

        if (productoEstaEnCarritoCompras) {
          alert("El producto ya está en el carrito");
        } else {
          productosCarrito.push(producto)
          listarMonopatinesCarrito()
          agregarEventoremoverDelCarrito()
          agregarEventoCantidadHorasCarrito()
          actualizarTotal()
          alert("Agregué el producto al carrito")
        }
      }
    }
  });
}

function agregarEventoremoverDelCarrito() {
  productosCarrito.forEach((producto) => {
    let divisionMonopatin = document.getElementById(`eliminar-${producto.id}`)
    divisionMonopatin.onclick = (e) => {
      let decision = confirm(`¿Querés eliminar este producto del carrito? nombre=${producto.nombre}`)
      alert(`La decisión es ${decision}`)
      if (decision) {
        const productosRestantes = productosCarrito.filter(eliminar => eliminar.id != producto.id)

        vaciarCarrito();

        productosRestantes.forEach(producto => {
          productosCarrito.push(producto);
        });

        listarMonopatinesCarrito()
        agregarEventoremoverDelCarrito()
        agregarEventoCantidadHorasCarrito()
        actualizarTotal()
      }
    }

  });
}

function vaciarCarrito() {
  while (productosCarrito.length > 0) {
    productosCarrito.pop();
  }
}

function calcularSubtotal() {
  var cantidad = $("#cantidad").val();
  if (cantidad > 0) {
    $("#error").html("");
    var precio = $("#precio").val();
    var subtotal = parseInt(cantidad) * parseInt(precio);
    $("#subtotal").val(subtotal);
  } else {
    $("#error").html("Debe ingresar cantidad");
    $("#subtotal").val("");
  }
}

/*function finalizarPedido() {
  if ($("#name").val().trim() === "") {
    $("#error-cliente").html("Debe ingresar un nombre");
    return;
  }
  if ($("#whatsapp").val().trim() === "") {
    $("#error-cliente").html("Debe ingresar un teléfono");
    return;
  }
  $("#error-cliente").html("");
  var mensaje = `Muchas gracias por tu reserva ${$(
    "#name"
  ).val()}, estaremos enviando un mail de confirmación al whatsapp ${$(
    "#whatsapp"
  ).val()} en los proximos minutos`;
  $("#detalle-pedido").html(mensaje);
  $("#modal-pedido").modal();
  $("#form-cliente").html("");
}*/


function listarMonopatinesCarrito() {

  let bloqueProductos = "<tr>"
  productosCarrito.forEach((producto) => {
    console.log(producto.nombre)
    //const fila = `<tr>
    //            <td> ${producto.id}</td>
    //            <td> ${producto.nombre}</td>
    //            <td> ${producto.precio}</td>
    //            </tr>`
    const columna = `<td> <div class="coder-pet__content">
        <div class="coder-pet__content-img">
            <img src="${producto.direccionDeImagen}" alt="monopp">
        </div>
        <h3 class="coder-pet__content-title">${producto.nombre}</h3>
        <p>Apto para principiantes ❤</p>
        <small> $${producto.precio} x media hora</small>
        <input id="cantidadHoras-${producto.id}" type="number" min="0" max="100" value ="1"></input>
        <button id="eliminar-${producto.id}"> Eliminar </button>
        </div></td>`
    bloqueProductos += columna
  })
  bloqueProductos += "</tr>"
  document.querySelector("#carritoMonopatines").innerHTML = bloqueProductos
}

function agregarEventoCantidadHorasCarrito() {
  productosCarrito.forEach((producto) => {
    let spinnerHoras = document.getElementById(`cantidadHoras-${producto.id}`);
    spinnerHoras.addEventListener("change", () => {
      alert(spinnerHoras.value);
      actualizarTotal();
    });
  });
}

function actualizarTotal() {
  calcularSubtotal = 0;
  productosCarrito.forEach((producto) => {
    let spinnerHoras = document.getElementById(`cantidadHoras-${producto.id}`);
    calcularSubtotal += spinnerHoras.value * producto.precio;
  });

  let divCalculoSubtotal = document.getElementById("subtotalCarrito");
  divCalculoSubtotal.innerHTML = `<p class= "coder-pet">Subtotal: $ <bold>${calcularSubtotal}</bold></p>`;
}

/**
 * Verifica si un producto ya está en el carrito de compras. True si el carrito ya está. False En caso de que no.
 * @param {Producto} productoAgregar 
 * @returns true, false 
 */
function monopatinYaEstaEnCarrito(productoAgregar) {
  let productoEstaEnCarrito = false;
  productosCarrito.forEach((productoCarrito) => {
    if (productoAgregar.id == productoCarrito.id) {
      productoEstaEnCarrito = true;
    }
  });
  return productoEstaEnCarrito;
};

/*ver si se envían bien los datos por POST a Ajax usando el FORM DATA*/
/*
const data = new FormData(dociment.getElementById("contact"))
fetch(`../post.php`, {
  method: `POST`,
  body: data
})
  .then(fuction(response){
  if(responde.ok){
    return response.text()
  } else {
    throw "error en la llamada Ajax"
  }
  })
  .then (function(texto) {
  console.log(texto);
  })
  .catch(function(err)
  {console.log(err)});

  */
