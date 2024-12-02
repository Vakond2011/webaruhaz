// Kosárba tétel és localStorage használata
document.querySelector('.buy-btn').addEventListener('click', function() {
    let product = {
        name: "Spintso Referee Watch Pro",
        price: 99999,
        image: "watch.jpg",
        quantity: 1
    };

    // Kosár adatainak tárolása
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));

    // Átirányítás a kosár oldalra
    window.location.href = 'kosar.html';
});
