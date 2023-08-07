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
// var nItems = 0;
// function addToCart(product, cartProductName, Price) {
//     var itemCartList = document.getElementById("itemCartList");
//     var quantity = product.querySelector(".quantity");
//     var quantitaValue = quantity.value;
//     var cart = document.getElementById("carrello");
//     // Crea un nuovo div per le informazioni del Product aggiunto al carrello
//     var NewProductDiv = document.createElement("div");
//     if (quantitaValue >= 100) {
//         // Calcola il Price totale per il Product considerando la quantità
//         var totalPrice = parseFloat(Price) * parseInt(quantitaValue) / 100;
//         var shoppingCart = document.querySelector(".shoppingCart");
//         shoppingCart.style.display = "flex";
//         // Aggiungi le informazioni del Product al nuovo div
//         NewProductDiv.innerHTML = `
//           <h4 class="cartProductName">${cartProductName}</h4>
//           <h3  class="cartProductQuantityAndPrice">
//             <span>${quantitaValue}gr.ㅤ</span>
//             <span>${totalPrice.toFixed(2)}€</span>
//           </h3>
//         `;
//         NewProductDiv.style.display = "flex";

//         // Aggiungi il nuovo div al carrello
//         itemCartList.appendChild(NewProductDiv);
//         nItems++;
//         cart.innerHTML = "Carrello (" + nItems + "):";
//     }
//     NewProductDiv.className = "cartItem";
// }

// Funzione per aggiornare l'interfaccia del carrello

var nItems = 0;
var totalPrice;
var nuovoPrezzo;
// Funzione per aggiornare l'interfaccia del carrello
function updateCartUI(nuovoPrezzoA) {
    var carrelloDiv = document.getElementById("itemCartList");
    var carrello = JSON.parse(localStorage.getItem("carrello")) || [];

    // Svuota il contenuto precedente del carrello
    carrelloDiv.innerHTML = "";
    nItems = 0;

    // Crea gli elementi per visualizzare i prodotti nel carrello
    carrello.forEach(function (prodotto) {
        var NewProductDiv = document.createElement("div");
        NewProductDiv.className = "cartItem";
        // totalPrice = parseFloat(prodotto.prezzo) * parseInt(prodotto.quantita) / 100;
        console.log(totalPrice);
        totalPrice = nuovoPrezzo;
        console.log(totalPrice);
        NewProductDiv.innerHTML = `
        <h4 class="cartProductName">${prodotto.nome}</h4>
        <h3 class="cartProductQuantityAndPrice">
          <span>${prodotto.quantita}gr.ㅤ</span>
          <span>${totalPrice}€</span>
        </h3>
      `;
// DA RIMETTERE .toFixed(2) A RIGA ${totalPrice} PER VISUALIZZARE PREZZO ALLA PRIMA AGGIUNTA
        NewProductDiv.style.display = "flex";
        carrelloDiv.appendChild(NewProductDiv);

        nItems++;
    });

    var cart = document.getElementById("carrello");
    cart.innerHTML = "Carrello (" + nItems + "):";
}

// Costante per il rapporto tra grammi ed euro

// Funzione per aggiungere il prodotto al carrello
function addToCart(product, cartProductName, Price) {
    var itemCartList = document.getElementById("itemCartList");
    var quantity = product.querySelector(".quantity");
    var quantitaValue = quantity.value;
    var cart = document.getElementById("carrello");

    // Crea un nuovo oggetto rappresentante il prodotto da aggiungere al carrello
    var prodotto = {
        nome: cartProductName,
        quantita: quantitaValue,
        prezzo: Price
    };

    // Ottieni il carrello dal localStorage o crea un array vuoto se non esiste ancora
    var carrello = JSON.parse(localStorage.getItem("carrello")) || [];

    // Cerca se il prodotto è già presente nel carrello
    var prodottoPresente = carrello.find(function (item) {
        return item.nome === cartProductName;
    });

    if (prodottoPresente) {
        // Se il prodotto è già presente, aggiorna quantità e prezzo
        var quantitaPrecedente = parseInt(prodottoPresente.quantita);
        var quantitaAggiunta = parseInt(quantitaValue);
        prodottoPresente.quantita = quantitaPrecedente + quantitaAggiunta;
        
        var prezzoProdotto = parseFloat(Price);
        var prezzoTotaleAggiornato = ((quantitaPrecedente + quantitaAggiunta) * prezzoProdotto / 100);
        console.log(prezzoTotaleAggiornato);
        nuovoPrezzo = prezzoTotaleAggiornato.toFixed(2);
        updateCartUI(nuovoPrezzo);
    }     
    else {
        if (quantitaValue >= 100) {
            // Se il prodotto non è già presente, calcola il prezzo totale per il nuovo prodotto
            var totalPrice = parseFloat(Price) * parseInt(quantitaValue) / 100;
            console.log(totalPrice);
            prodotto.prezzo = totalPrice.toFixed(2);
            nuovoPrezzo = prodotto.prezzo;
            updateCartUI(nuovoPrezzo)
            // Aggiungi il prodotto al carrello
            carrello.push(prodotto);
        } else {
            // Se la quantità è inferiore a 100g, esci senza aggiungere nulla
            return;
        }
    }
    
    // Salva il carrello aggiornato nel localStorage
    localStorage.setItem("carrello", JSON.stringify(carrello));

    // Aggiorna l'interfaccia del carrello
    updateCartUI();

    // ... (il resto del tuo codice)
}

updateCartUI();