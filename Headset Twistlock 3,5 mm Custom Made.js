// Kosárba tétel és localStorage használata
document.querySelector('.buy-btn').addEventListener('click', function() {
    let product = {
        name: "Headset Twistlock 3,5 mm Custom Made",
        price: 130.589,
        image: "Headset Twistlock 3,5mm Custom Made.avif",
        quantity: 1
    };

    // Kosár adatainak tárolása
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));

    // Átirányítás a kosár oldalra
    window.location.href = 'kosar.html';
});
