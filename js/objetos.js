class Producto {
    constructor (id, nombre, precio, direccionDeImagen) {
        this.id = id; 
        this.nombre = nombre;
        this.precio = precio;
        this.direccionDeImagen = direccionDeImagen;
    }

    info() {
        return `id: ${ this.id }, nombre: ${this.nombre}, precio: ${this.precio}`;
    }
}

