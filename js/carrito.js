// let minusBtn = document.querySelector('.input__minus');
// let plusBtn = document.querySelector('.input__plus');
// let userInput = document.querySelector('.input__number');

// let userInputNumber = 0;

// plusBtn.addEventListener('click', (e) =>{
//     if(e.target.classList.contains('input__plus')){
//         userInputNumber++;
//         userInput.value = userInputNumber;
//         console.log(userInputNumber);
//     }
    
// });


// minusBtn.addEventListener('click', () =>{
//     userInputNumber--;
//     if(userInputNumber <= 0){
//         userInputNumber = 0;
//     }
//    userInput.value = userInputNumber;
//     console.log(userInputNumber);
// })



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

    if(e.target.classList.contains('add__producto')){
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
    //Revisa si  ya existe en el carrito
    const existe = articuloCarrito.some( producto => producto.titulo === infoProducto.titulo );
    if(existe){
        const productos = articuloCarrito.map( producto =>{
            if(producto.titulo === infoProducto.titulo){
                producto.cantidad++;
                return producto; //retorna el objeto actualizado
            } else {
                return producto;//retorna los objetos que no son los duplicados
            }
        });
        articuloCarrito = [...productos];
    }else {
        articuloCarrito = [...articuloCarrito, infoProducto];

    }
    //agrega elementos al arreglo del carrito
    console.log(articuloCarrito);
    carritoHTML();
}

//Muestra el carrito de compras en el HTML

function carritoHTML(){

    //Limpia HTML
    limpiaHTML();
    //Recorre el carrito y genera el HTML
    articuloCarrito.forEach( producto =>{
        const { imagen, titulo, precio, cantidad, id } = producto;
        const row = document.createElement('tr');
        row.innerHTML = `
        <td>
            <img src="${imagen}" width="100">
        </td>
        <td>
            ${titulo}
         </td>
        <td>
            ${precio}
        </td>
         <td>
            ${cantidad}
        </td>
        <td>
            <a href="#" class='borrar-curso' data-id='${id}' > X </a>
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