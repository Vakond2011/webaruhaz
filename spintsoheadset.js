// Kosárba tétel és localStorage használata
document.querySelector('.buy-btn').addEventListener('click', function() {
    let product = {
        name: "Headset Twistlock 3,5 mm Set",
        price: 82.929,
        image: "headset-twistlock.jpg",
        quantity: 1
    };

    // Kosár adatainak tárolása
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));

    // Átirányítás a kosár oldalra
    window.location.href = 'kosar.html';
});
