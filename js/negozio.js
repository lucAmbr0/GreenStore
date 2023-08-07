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

function clearCart() {
    localStorage.removeItem("cart");
    updateCartUI();
    shoppingCart.style.display = "none";
}

var cart = [];

function updateCartUI() {
    var cartDiv = document.getElementById("itemCartList");
    cartDiv.innerHTML = "";
    var nItems = 0;

    var groupedProducts = cart.reduce(function (acc, product) {
        var found = acc.find(function (item) {
            return item.name === product.name;
        });
        if (found) {
            found.quantity += product.quantity;
            found.price = (parseFloat(found.price) + parseFloat(product.price)).toFixed(2);
        } else {
            acc.push(product);
        }
        return acc;
    }, []);

    groupedProducts.forEach(function (product, index) {
        var productPrice = parseFloat(product.price);
        var newProductDiv = document.createElement("div");
        newProductDiv.className = "cartItem";
        newProductDiv.innerHTML = `
            <div class="tooltip" onclick="removeItem(${index})">
                <h4 class="cartProductName">${product.name}</h4>
                <h3 class="cartProductQuantityAndPrice">
                    <span>${product.quantity}gㅤ</span>
                    <span>${productPrice.toFixed(2)}€</span>
                </h3>
                <span class="tooltiptext">Remove product</span>
            </div>
        `;
        newProductDiv.style.display = "flex";
        cartDiv.appendChild(newProductDiv);
        nItems++;
    });

    var cartCount = document.getElementById("cart");
    cartCount.innerHTML = "Carrello (Prodotti: " + nItems + "):";
    
    if (nItems === 0) {
        shoppingCart.style.display = "none";
    } else {
        shoppingCart.style.display = "flex";
    }
}

function addToCart(product, productName, price) {
    var quantity = product.querySelector(".quantity");
    var quantityValue = parseInt(quantity.value);

    if (quantityValue > 0) {
        var existingProduct = cart.find(function (item) {
            return item.name === productName;
        });

        if (existingProduct) {
            existingProduct.quantity += quantityValue;
            existingProduct.price = (parseFloat(existingProduct.price) + (parseFloat(price) * quantityValue / 100)).toFixed(2);
        } else {
            var newProduct = {
                name: productName,
                quantity: quantityValue,
                price: (parseFloat(price) * quantityValue / 100).toFixed(2)
            };
            cart.push(newProduct);
        }

        localStorage.setItem("cart", JSON.stringify(cart));
        updateCartUI();
    }
}

function removeItem(index) {
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartUI();
}

cart = JSON.parse(localStorage.getItem("cart")) || [];
updateCartUI();
