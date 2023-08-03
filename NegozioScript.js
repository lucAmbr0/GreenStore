// FILTER ALGORITHM IN NEGOZIO.HTML
var filterAll = document.getElementById("filterAll");
var filterFresh = document.getElementById("filterFresh");
var filterDried = document.getElementById("filterDried");
var filterVegetables = document.getElementById("filterVegetables");

const FRESHFRUIT = document.querySelectorAll(".FRESHFRUIT");
const DRIEDFRUIT = document.querySelectorAll(".DRIEDFRUIT");
const VEGETABLES = document.querySelectorAll(".VEGETABLES");

filterForEverything();
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
};

// SORTER ALGORITHM IN NEGOZIO.HTML
var sortAZ = document.getElementById("sortAZ");
var sortZA = document.getElementById("sortZA");
var sortECRE = document.getElementById("sortECRE");
var sortEDEC = document.getElementById("sortEDEC");

FsortAZ();
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
};