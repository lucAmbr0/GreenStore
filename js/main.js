// --------- COOKIES POPUP
var popup = document.getElementById("popup");
var popupShown = localStorage.getItem("popupShown");
var cookieNotice = document.getElementById("CookiesNoticeBoxStyle");
function closePopup() {
    popup.style.animation = "0.4s disappear";
    setTimeout(function () {
        popup.style.display = "none";
        localStorage.setItem("popupShown", "true");
    }, 400);
}
setTimeout(function () {
    if (popupShown === null || popupShown === "false") {
        popup.style.display = "block";
        cookiesNotice.style.display = "block";
    }
}, 1000);


// --------- LOGOUT POPUP
var popupLogout = document.getElementById("popupLogout");
var logout = document.getElementById("logout");
function Logout() {
    localStorage.clear();
    popupLogout.style.display = "block";
    logout.style.display = "block";
};
function closeLogoutPopup() {
    popupLogout.style.display = "none";
    location.reload();
};


// --------- LOADING GOOGLE ICONS
document.fonts.load('10pt "Material Icons"').then(function () {
    var iconsToShow = document.querySelectorAll('.hide-icon');
    iconsToShow.forEach(function (icon) {
        icon.classList.remove('hide-icon');
    });
});

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
    location.reload();
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
                <span class="tooltiptext">Rimuovi prodotto</span>
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