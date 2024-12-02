let cart = [];
let totalPrice = 0;

function addToCart(productName, productPrice) {
    // Hozzáadjuk a terméket a kosárhoz
    cart.push({ name: productName, price: productPrice });
    totalPrice += productPrice;

    // Frissítjük a kosár számát a fejlécben
    updateCart();
}

function updateCart() {
    // Frissítjük a kosár számlálóját a fejlécben
    const cartCount = document.getElementById('cart-count');
    cartCount.textContent = cart.length;
}
