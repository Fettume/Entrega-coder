// Datos de productos simulados
const productos = [
    { id: 1, nombre: 'Producto 1', precio: 10.00, imagen: 'img/product1.jpg' },
    { id: 2, nombre: 'Producto 2', precio: 20.00, imagen: 'img/product2.jpg' },
    { id: 3, nombre: 'Producto 3', precio: 30.00, imagen: 'img/product3.jpg' },
    { id: 4, nombre: 'Producto 4', precio: 40.00, imagen: 'img/product4.jpg' }
];

// Array para el carrito de compras
let carrito = [];

// Función para inicializar la aplicación
function inicializar() {
    mostrarProductos();
    document.getElementById('home-link').addEventListener('click', () => showSection('home'));
    document.getElementById('productos-link').addEventListener('click', () => showSection('productos'));
    document.getElementById('carrito-link').addEventListener('click', () => showSection('carrito'));
    document.getElementById('checkout-button').addEventListener('click', () => showSection('checkout'));
    document.getElementById('checkout-form').addEventListener('submit', procesarPago);
}

// Función para mostrar productos en la página
function mostrarProductos() {
    const productContainer = document.getElementById('product-list');
    productos.forEach(producto => {
        const productDiv = document.createElement('div');
        productDiv.className = 'product';
        productDiv.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}">
            <h3>${producto.nombre}</h3>
            <p>Precio: $${producto.precio.toFixed(2)}</p>
            <button onclick="agregarAlCarrito(${producto.id})">Agregar al Carrito</button>
        `;
        productContainer.appendChild(productDiv);
    });
}

// Función para agregar un producto al carrito
function agregarAlCarrito(id) {
    const producto = productos.find(p => p.id === id);
    if (producto) {
        carrito.push({ ...producto });
        actualizarCarrito();
    }
}

// Función para actualizar la lista de productos en el carrito
function actualizarCarrito() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';
    let total = 0;
    carrito.forEach(item => {
        total += item.precio;
        const listItem = document.createElement('li');
        listItem.innerText = `${item.nombre} - $${item.precio.toFixed(2)}`;
        cartItems.appendChild(listItem);
    });
    document.getElementById('cart-total').innerText = total.toFixed(2);
}

// Función para procesar el pago
function procesarPago(event) {
    event.preventDefault();
    alert('Pago procesado');
    carrito = [];
    actualizarCarrito();
    showSection('home');
}

// Función para mostrar una sección y ocultar las demás
function showSection(sectionId) {
    document.querySelectorAll('.section').forEach(section => {
        section.classList.add('hidden');
    });
    document.getElementById(sectionId).classList.remove('hidden');
}

// Inicializar la aplicación al cargar la página
document.addEventListener('DOMContentLoaded', inicializar);
