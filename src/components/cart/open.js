const abrirCarrito = document.querySelector('#cesta-carrito');
const cart = document.querySelector('.car')
const cerrarCarrito = document.querySelector('#btn-cerrar-carrito');




abrirCarrito.onclick = () => {
    cart.classList.add('active');
};



cerrarCarrito.onclick = () => {
    cart.classList.remove('active');
};
// cerrarCarrito.addEventListener('click', () => {
//     cart.classList.remove('active');
// });

