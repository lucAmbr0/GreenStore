// FILTER ALGORITHM IN NEGOZIO.HTML
var filterAll = document.getElementById("filterAll");
var filterFresh = document.getElementById("filterFresh");
var filterDried = document.getElementById("filterDried");
var filterVegetables = document.getElementById("filterVegetables");

const FRESHFRUIT = document.querySelectorAll(".FRESHFRUIT");
const DRIEDFRUIT = document.querySelectorAll(".DRIEDFRUIT");
const VEGETABLES = document.querySelectorAll(".VEGETABLES");

var filter = localStorage.getItem("filter");
localStorage.setItem("filter", "everything");

function filterForEverything() {
    filterAll.classList.add("filterSelected");
    filterFresh.classList.remove("filterSelected");
    filterDried.classList.remove("filterSelected");
    filterVegetables.classList.remove("filterSelected");
    FRESHFRUIT.forEach((div) => {
        div.style.display = 'flex';
    });
    DRIEDFRUIT.forEach((div) => {
        div.style.display = 'flex';
    });
    VEGETABLES.forEach((div) => {
        div.style.display = 'flex';
    });
    localStorage.setItem("filter", "everything");
};

function filterForFreshFruit() {
    filterAll.classList.remove("filterSelected");
    filterFresh.classList.add("filterSelected");
    filterDried.classList.remove("filterSelected");
    filterVegetables.classList.remove("filterSelected");
    FRESHFRUIT.forEach((div) => {
        div.style.display = 'flex';
    });
    DRIEDFRUIT.forEach((div) => {
        div.style.display = 'none';
    });
    VEGETABLES.forEach((div) => {
        div.style.display = 'none';
    });
    localStorage.setItem("filter", "freshFruit");
};

function filterForDriedFruit() {
    filterAll.classList.remove("filterSelected");
    filterFresh.classList.remove("filterSelected");
    filterDried.classList.add("filterSelected");
    filterVegetables.classList.remove("filterSelected");
    FRESHFRUIT.forEach((div) => {
        div.style.display = 'none';
    });
    DRIEDFRUIT.forEach((div) => {
        div.style.display = 'flex';
    });
    VEGETABLES.forEach((div) => {
        div.style.display = 'none';
    });
    localStorage.setItem("filter", "driedFruit");
};

function filterForVegetables() {
    filterAll.classList.remove("filterSelected");
    filterFresh.classList.remove("filterSelected");
    filterDried.classList.remove("filterSelected");
    filterVegetables.classList.add("filterSelected");
    FRESHFRUIT.forEach((div) => {
        div.style.display = 'none';
    });
    DRIEDFRUIT.forEach((div) => {
        div.style.display = 'none';
    });
    VEGETABLES.forEach((div) => {
        div.style.display = 'flex';
    });
    localStorage.setItem("filter", "vegetables");
};

if (filter === "freshFruit") {
    filterForFreshFruit();
}
else if (filter === "driedFruit") {
    filterForDriedFruit();
}
else if (filter === "vegetables") {
    filterForVegetables();
}
else {
    filterForEverything
}

// SORTER ALGORITHM IN NEGOZIO.HTML
var sortAZ = document.getElementById("sortAZ");
var sortZA = document.getElementById("sortZA");
var sortECRE = document.getElementById("sortECRE");
var sortEDEC = document.getElementById("sortEDEC");

var sort = localStorage.getItem("sort");
localStorage.setItem("sort", "sortAZ");

function FsortAZ() {
    sortAZ.classList.add("filterSelected");
    sortZA.classList.remove("filterSelected");
    sortECRE.classList.remove("filterSelected");
    sortEDEC.classList.remove("filterSelected");
    const griglia = document.getElementById('productsGrid');
    const products = Array.from(griglia.getElementsByClassName('product'));
    products.sort((a, b) => a.querySelector('h3').innerText.localeCompare(b.querySelector('h3').innerText));
    for (const product of products) {
        griglia.appendChild(product);
    }
    localStorage.setItem("sort", "sortAZ");
};
function FsortZA() {
    sortAZ.classList.remove("filterSelected");
    sortZA.classList.add("filterSelected");
    sortECRE.classList.remove("filterSelected");
    sortEDEC.classList.remove("filterSelected")
    const griglia = document.getElementById('productsGrid');
    const products = Array.from(griglia.getElementsByClassName('product'));
    products.sort((a, b) => b.querySelector('h3').innerText.localeCompare(a.querySelector('h3').innerText));
    for (const product of products) {
        griglia.appendChild(product);
    }
    localStorage.setItem("sort", "sortZA");
};

function extractPrice(str) {
    const match = str.match(/(\d+\.\d+)€\/hg/);
    return match ? parseFloat(match[1]) : NaN;
}

function FsortECRE() {
    sortAZ.classList.remove("filterSelected");
    sortZA.classList.remove("filterSelected");
    sortECRE.classList.add("filterSelected");
    sortEDEC.classList.remove("filterSelected");
    const griglia = document.getElementById('productsGrid');
    const products = Array.from(griglia.getElementsByClassName('product'));
    products.sort((a, b) => {
        const prezzoA = extractPrice(a.querySelector('.storeProductPrice').innerText);
        const prezzoB = extractPrice(b.querySelector('.storeProductPrice').innerText);
        return prezzoA - prezzoB;
    });
    for (const product of products) {
        griglia.appendChild(product);
    }
    localStorage.setItem("sort", "sortECRE");
};
function FsortEDEC() {
    sortAZ.classList.remove("filterSelected");
    sortZA.classList.remove("filterSelected");
    sortECRE.classList.remove("filterSelected");
    sortEDEC.classList.add("filterSelected");
    const griglia = document.getElementById('productsGrid');
    const products = Array.from(griglia.getElementsByClassName('product'));
    products.sort((a, b) => {
        const prezzoA = extractPrice(a.querySelector('.storeProductPrice').innerText);
        const prezzoB = extractPrice(b.querySelector('.storeProductPrice').innerText);
        return prezzoB - prezzoA;
    });
    for (const product of products) {
        griglia.appendChild(product);
    }
    localStorage.setItem("sort", "sortEDEC");
};

if (sort === "sortZA") {
    FsortZA();
}
else if (sort === "sortECRE") {
    FsortECRE();
}
else if (sort === "sortEDEC") {
    FsortEDEC();
}
else {
    FsortAZ();
}

let cartSwitch = 0;
function cartExpandSwitch() {
    document.getElementById(cartExpand);
    cartSwitch++;
    if (cartSwitch === 1) {
        cartExpand.innerHTML = "expand_less";
        cartSwitch = -1;
    }
    else {
        cartExpand.innerHTML = "expand_more";
    }
};

var nItems = 0;
var totalPrice;
var nuovoPrezzo;
// Funzione per aggiornare l'interfaccia del carrello
function updateCartUI(prezzoTotale) {
    console.log("prezzoTotale appena passato a updateCartUI " + prezzoTotale);
    var carrelloDiv = document.getElementById("itemCartList");
    var carrello = JSON.parse(localStorage.getItem("carrello")) || [];

    carrelloDiv.innerHTML = "";
    var nItems = 0;

    carrello.forEach(function (prodotto) {
        var NewProductDiv = document.createElement("div");
        NewProductDiv.className = "cartItem";

        var prezzoProdotto = parseFloat(prodotto.prezzo);

        NewProductDiv.innerHTML = `
            <div class="tooltip" onclick="deleteItem()">
                <h4 class="cartProductName">${prodotto.nome}</h4>
                <h3 class="cartProductQuantityAndPrice">
                    <span>${prodotto.quantita}gr.ㅤ</span>
                    <span>${prezzoProdotto.toFixed(2)}€</span>
                </h3>
                <span class="tooltiptext">Rimuovi prodotto</span>
            </div>
        `;

        NewProductDiv.style.display = "flex";
        carrelloDiv.appendChild(NewProductDiv);

        nItems++;
    });

    var cart = document.getElementById("carrello");
    cart.innerHTML = "Carrello (" + nItems + " elementi):";
    if (nItems > 0) {
        var shoppingCart = document.getElementById("shoppingCart");
        shoppingCart.style.display = "flex";
    }
}

function addToCart(product, cartProductName, Price) {
    var itemCartList = document.getElementById("itemCartList");
    var quantity = product.querySelector(".quantity");
    var quantitaValue = parseInt(quantity.value);
    var cart = document.getElementById("carrello");

    if (quantitaValue < 100) {
        return; // Esci se la quantità è inferiore a 100g
    }

    var prodotto = {
        nome: cartProductName,
        quantita: quantitaValue,
        prezzo: (parseFloat(Price) * quantitaValue / 100).toFixed(2)
    };

    var carrello = JSON.parse(localStorage.getItem("carrello")) || [];

    var prodottoPresente = carrello.find(function (item) {
        return item.nome === cartProductName;
    });

    if (prodottoPresente) {
        prodottoPresente.quantita = parseInt(prodottoPresente.quantita) + quantitaValue;
        prodottoPresente.prezzo = (parseFloat(prodottoPresente.prezzo) + parseFloat(prodotto.prezzo)).toFixed(2);
    } else {
        carrello.push(prodotto);
    }

    localStorage.setItem("carrello", JSON.stringify(carrello));
    updateCartUI();
}

updateCartUI();

function emptyCart() {
    localStorage.removeItem("carrello");
    updateCartUI();
    shoppingCart.style.display = "none";
}