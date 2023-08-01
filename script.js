const moreReviewsBox = document.getElementById("moreReviewsBox");
let moreReviewsText = document.getElementById("moreReviewsText");
let moreReviewsSwitch = 0;
function moreReviews() {
    moreReviewsSwitch++
    if (moreReviewsSwitch % 2 !== 0) {
        moreReviewsBox.style.display = "block";
        moreReviewsBox.style.opacity = "1";
        moreReviewsText.innerHTML = "▲ Leggi meno recensioni ▲";
    }
    else {
        moreReviewsBox.style.display = "none";
        moreReviewsText.innerHTML = "▼ Leggi altre recensioni ▼";
    }
};
moreReviewsBox.style.display = "none";

const expandImgRev02 = document.getElementById("expandImgRev02");
function expandImgRev02F() {
    overlay.style.display = "block";
    expandImgRev02.style.display = "block";
};
function CloseRevImg02 () {
    overlay.style.animation = "0.4s disappear";
    setTimeout(function () {
        overlay.style.display = "none";
        expandImgRev02.style.display = "none";
        overlay.style.animation = "0.6s opacity";
    }, 400);
};

const expandImgRev03 = document.getElementById("expandImgRev03");
function expandImgRev03F() {
    overlay.style.display = "block";
    expandImgRev03.style.display = "block";
};
function CloseRevImg03 () {
    overlay.style.animation = "0.4s disappear";
    setTimeout(function () {
        overlay.style.display = "none";
        expandImgRev03.style.display = "none";
        overlay.style.animation = "0.6s opacity";
    }, 400);
};


function startCountdown(duration, display) {
    var timer = duration, hours, minutes, seconds;
    setInterval(function () {
        hours = parseInt(timer / 3600, 10);
        minutes = parseInt((timer % 3600) / 60, 10);
        seconds = parseInt(timer % 60, 10);

        hours = hours < 10 ? "0" + hours : hours;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = hours + "h " + minutes + "m " + seconds + "s";
        if (--timer < 0) {
            display.textContent = "Scaduto!";
        }
    }, 850);
}

var timerDuration = 3 * 60 * 60 + 23 * 60 + 14;
var display = document.getElementById('countdown');
startCountdown(timerDuration, display);

function cambiaColore() {
    var timer = document.getElementById("timer");
    if (timer.classList.contains("red")) {
        timer.classList.remove("red");
        timer.classList.add("yellow");
        timer.classList.remove("big");
        timer.classList.add("small");
    } else {
        timer.classList.remove("yellow");
        timer.classList.add("red");
        timer.classList.remove("small");
        timer.classList.add("big");
    }
}

setInterval(cambiaColore, 400);

// --------- LA MIA PROVA
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
    localStorage.removeItem("popupShown");
    popupLogout.style.display = "block";
    logout.style.display = "block";
}
function closeLogoutPopup() {
    popupLogout.style.display = "none";
    location.reload();
}