let cart = [];
let totalPrice = 0;

function addToCart(productName, productPrice) {
    cart.push({ name: productName, price: productPrice });
    totalPrice += productPrice;
    
    updateCart();
}

function updateCart() {
    const cartCount = document.getElementById('cart-count');
    cartCount.textContent = cart.length;
}
