// Kosárba rakom gomb működése
document.getElementById('addToCartButton').addEventListener('click', function() {
    const selectedColor = document.getElementById('colorSelect').value; // Kiválasztott szín
    const product = {
        name: 'Adidas Játékvezetői Mezek',
        price: 12990,
        color: selectedColor
    };
    
    // Kosárba rakás
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));

    alert('A termék hozzáadva a kosárhoz!');
    // Kosár oldalra navigálás
    window.location.href = 'kosar.html';
});
