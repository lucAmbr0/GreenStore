// SORTER ALGORITHM IN NEGOZIO.HTML
var filterAll = document.getElementById("filterAll");
var filterFresh = document.getElementById("filterFresh");
var filterDried = document.getElementById("filterDried");
var filterVegetables = document.getElementById("filterVegetables");
console.log("hgkjhgkla")

function filterForEverything() {
    filterAll.classList.add("filterSelected");
    filterFresh.classList.remove("filterSelected");
    filterDried.classList.remove("filterSelected");
    filterVegetables.classList.remove("filterSelected");
    console.log("jhgkhgkjahglad");
};

function filterForFreshFruit() {
    filterAll.classList.remove("filterSelected");
    filterFresh.classList.add("filterSelected");
    filterDried.classList.remove("filterSelected");
    filterVegetables.classList.remove("filterSelected");
};

function filterForDriedFruit() {
    filterAll.classList.remove("filterSelected");
    filterFresh.classList.remove("filterSelected");
    filterDried.classList.add("filterSelected");
    filterVegetables.classList.remove("filterSelected");
};

function filterForVegetables() {
    filterAll.classList.remove("filterSelected");
    filterFresh.classList.remove("filterSelected");
    filterDried.classList.remove("filterSelected");
    filterVegetables.classList.add("filterSelected");
};