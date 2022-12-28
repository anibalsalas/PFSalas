const abrirCarrito = document.querySelector('#cesta-carrito');
const cart = document.querySelector('.car')
const cerrarCarrito = document.getElementById('close-cart');



abrirCarrito.onclick = () => {
    cart.classList.add('active');
};


cerrarCarrito.addEventListener('click', () => {
    cart.classList.remove('active');
});
// cerrarCarrito.addEventListener('click', () => {
//     cart.classList.remove('active');
// });

