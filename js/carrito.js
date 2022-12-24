
const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
const listaProductos = document.querySelector('#lista-productos');
let articuloCarrito = []

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
        precio: producto.querySelector('h4').textContent,
        id: producto.querySelector('a').getAttribute('data-id'),
        cantidad: 1
    }
    //agrega elementos al arreglo del carrito
    articuloCarrito = [...articuloCarrito, infoProducto];
    console.log(articuloCarrito);
    carritoHTML();
}

//Muestra el carrito de compras en el HTML

function carritoHTML(){

    //Limpia HTML
    limpiaHTML();
    //Recorre el carrito y genera el HTML
    articuloCarrito.forEach( producto =>{
        const row = document.createElement('tr');
        row.innerHTML = `
        <td>
            <img src="${producto.imagen}" width="100">
        </td>
        <td>
            ${producto.titulo}
         </td>
        <td>
            ${producto.precio}
        </td>
         <td>
            ${producto.cantidad}
        </td>
        `;

        //Agrega el HTML del carrito en el tbody
        contenedorCarrito.appendChild(row);

    });

    //Elimina los cursos del tbody
    function limpiaHTML(){
        //contenedorCarrito.innerHTML = '';

        while(contenedorCarrito.firstChild){
            contenedorCarrito.removeChild(contenedorCarrito.firstChild)
        }
    }
}