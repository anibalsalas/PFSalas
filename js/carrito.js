
const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
const listaProductos = document.querySelector('#lista-productos');


cargarEventListeners()
function cargarEventListeners(){
    listaProductos.addEventListener('click', agregarProducto);
}
// const cargarEventListeners = () => {
//     listaProductos.addEventListener('click', agregarProducto);
// }

//FUNCIONES
function agregarProducto(e){
    e.preventDefault();

    if(e.target.classList.contains('agregar-carrito')){
        const productoSeleccionado = e.target.parentElement.parentElement;
        leerDatosProducto(productoSeleccionado);
    }
}

//Lee 
function leerDatosProducto(producto){
  
    console.log(producto)
    //crea un objeto con el contenido actual
    const infoProducto = {
        imagen: producto.querySelector('img').src,
        titulo: producto.querySelector('h5').textContent,
        precio: producto.querySelector('h4').textContent
    }
    console.log(infoProducto)

}