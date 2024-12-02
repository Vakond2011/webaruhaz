// Kosár adatainak betöltése és megjelenítése
document.addEventListener('DOMContentLoaded', function() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let cartItemsContainer = document.getElementById('cart-items');
    let totalPriceElement = document.getElementById('total-price');
    let total = 0;

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p>Az ön kosara üres.</p>';
    } else {
        cart.forEach(function(product, index) {
            let productDiv = document.createElement('div');
            productDiv.classList.add('cart-item');
            productDiv.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <p><strong>${product.name}</strong></p>
                <p>Ár: ${product.price.toLocaleString()} Ft</p>
                <button class="remove-btn" data-index="${index}">Törlés</button>
            `;
            cartItemsContainer.appendChild(productDiv);
            total += product.price;
        });

        totalPriceElement.textContent = total.toLocaleString() + " Ft";
    }

    // Kosár elemek törlése
    let removeButtons = document.querySelectorAll('.remove-btn');
    removeButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            let index = this.getAttribute('data-index');
            cart.splice(index, 1); // Eltávolítjuk a terméket
            localStorage.setItem('cart', JSON.stringify(cart));
            window.location.reload(); // Az oldal újratöltése a frissített kosárral
        });
    });
});
