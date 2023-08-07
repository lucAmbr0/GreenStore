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

document.fonts.load('10pt "Material Icons"').then(function () {
    var iconsToShow = document.querySelectorAll('.hide-icon');
    iconsToShow.forEach(function (icon) {
        icon.classList.remove('hide-icon');
    });
});
