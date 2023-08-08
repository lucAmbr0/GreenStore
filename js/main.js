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
    // VACATION POPUP ---------------------
    setTimeout(function () {
        if (vacationPopupShown === null || vacationPopupShown === "false") {
            vacationPopup.style.display = "block";
            vacationNotice.style.display = "block";
        }
    }, 600);
    // VACATION POPUP ---------------------
}
setTimeout(function () {
    if (popupShown === null || popupShown === "false") {
        popup.style.display = "block";
        cookiesNotice.style.display = "block";
    }
}, 1000);

// --------- VACATION POPUP 
var vacationPopup = document.getElementById("vacationPopup");
var vacationPopupShown = localStorage.getItem("vacationPopupShown");
var vacationNotice = document.getElementById("vacationNoticeBoxStyle");
function closeVacationPopup() {
    vacationPopup.style.animation = "0.4s disappear";
    setTimeout(function () {
        vacationPopup.style.display = "none";
        localStorage.setItem("vacationPopupShown", "true");
    }, 400);
}

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
