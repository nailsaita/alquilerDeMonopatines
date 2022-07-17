import { Producto } from "./class_producto.js";
import { productos, productosCarrito } from "./variables.js"

const listadoCarrito = document.getElementById ("listadoCarrito")

cargarMonopatines ()
listarMonopatines ()
agregarAlCarrito ()
removerDelCarrito ()
seleccionarProducto ()
calcularSubtotal()
finalizarPedido()

/* funciones iniciales de carga */

function cargarMonopatines() {
    productos.push(new Producto(6545, "Monop1", 1500, "./assets/img/monop22.jfif"));
    productos.push(new Producto(4568, "Monop2", 2200, "./assets/img/monop11.jfif"));
    productos.push(new Producto(6874, "Monop3", 2000, "./assets/img/monop33.jpg"));
}

function listarMonopatines() { 
    let bloqueProductos = "<tr>"
    productos.forEach( (producto) => {
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
        bloqueProductos +=columna
    })
    bloqueProductos +="</tr>"
    document.querySelector("tbody").innerHTML = bloqueProductos
}

function seleccionarProducto(productoId) {
    let posicion = $("#customer").offset().top;
    $("html, body").animate({ scrollTop: posicion }, 1000);
    $("#monopatines").val(productoId).change();
  }


function agregarAlCarrito (){
    productos.forEach ((producto) => {
        let divisionMonopatin = document.getElementById (`${producto.id}`)
        divisionMonopatin.onclick = (e)=> {
            let decision = confirm (`¿Querés agregar el producto al carrito? id=${producto.id}`)
            alert(`La decisión es ${decision}`)
        } 
    });
}
function removerDelCarrito () {
    productos.forEach ((producto) => {
        let divisionMonopatin = document.getElementById (`${producto.id}`)
        divisionMonopatin.onclick = (e) => {
            let decision = confirm ("¿Querés eliminar este producto del carrito?` id=${producto.nombre}")
            alert(`La decisión es ${decision}`)
        }
    });
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

  function finalizarPedido() {
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
  }

  



