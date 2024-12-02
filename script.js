// Kép váltás nyíllal
let image1 = document.getElementById("image1");
let image2 = document.getElementById("image2");
let prevButton = document.getElementById("prev");
let nextButton = document.getElementById("next");
let earpieceOptions = document.getElementById("earpiece-options");
let earpieceSelection = document.getElementById("earpiece-selection");
let priceElement = document.getElementById("price");

let currentImage = 1;

// Nyilak eseménykezelői
prevButton.addEventListener("click", function() {
    if (currentImage === 2) {
        image1.classList.add("active");
        image1.classList.remove("hidden");
        image2.classList.add("hidden");
        image2.classList.remove("active");
        currentImage = 1;
        earpieceOptions.classList.add("hidden");
    }
});

nextButton.addEventListener("click", function() {
    if (currentImage === 1) {
        image2.classList.add("active");
        image2.classList.remove("hidden");
        image1.classList.add("hidden");
        image1.classList.remove("active");
        currentImage = 2;
        earpieceOptions.classList.remove("hidden");
    }
});

// Kezdeti állapot
if (currentImage === 2) {
    earpieceOptions.classList.remove("hidden");
}

// Árváltoztatás a fülpárna kiválasztása alapján
earpieceSelection.addEventListener("change", function() {
    let selectedOption = earpieceSelection.value;
    let basePrice = 179999; // Alapár

    if (selectedOption === "custom") {
        basePrice += 10000; // Custom Ear Peac esetén 10,000 Ft emelés
    }

    priceElement.textContent = basePrice.toLocaleString() + " Ft"; // Frissített ár megjelenítése
});

// Kosárba tétel és localStorage használata
document.querySelector('.buy-btn').addEventListener('click', function() {
    let selectedOption = earpieceSelection.value;
    let basePrice = 179999;

    if (selectedOption === "custom") {
        basePrice += 10000; // Custom fülpárna esetén
    }

    // Kosár adatokat összegyűjtjük
    let product = {
        name: "Spintso Refcom II & Headset Twistlock 3,5mm",
        price: basePrice,
        earpiece: selectedOption,
        image: currentImage === 1 ? "spintso-refcom2.jpg" : "headset-twistlock.jpg"
    };

    // Kosár mentése localStorage-ba
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));

    // Átirányítás a kosár oldalra
    window.location.href = 'kosar.html';
});
