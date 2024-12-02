// Kosárba rakom gomb funkció
document.getElementById('addToCartButton').addEventListener('click', function() {
    alert('A termék hozzáadva a kosárhoz!');
    // Az adatokat átadjuk a kosár oldalnak
    localStorage.setItem('cart', JSON.stringify([{ name: 'Fox 40 Official Classic CMG Síp', price: 4500 }]));
    // Új oldalra navigálunk
    window.location.href = 'kosar.html';
});
