const moreReviewsBox = document.getElementById("moreReviewsBox");
let moreReviewsText = document.getElementById("moreReviewsText");
let moreReviewsSwitch = 0;
function moreReviews() {
    moreReviewsSwitch++
    if (moreReviewsSwitch % 2 !== 0) {
        moreReviewsBox.style.display = "block";
        moreReviewsBox.style.opacity = "1";
        moreReviewsText.innerHTML = "▲ Leggi meno recensioni ▲"; }
    else { 
        moreReviewsBox.style.display = "none";
        moreReviewsText.innerHTML = "▼ Leggi altre recensioni ▼"; }
};

let overlay = document.getElementById("overlay");
let cookiesAlreadyDone = false;
function closeCookiesNotice() {
    if (cookiesAlreadyDone === false) {
    overlay.style.display = "none";
    cookiesAlreadyDone = true; }
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
    },850);
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

// cookie prova da chatGPT

// Nascondi il overlay
function accettaCookies() {
    // Nascondi il overlay
    document.getElementById("overlay").style.display = "none";
    // Imposta un cookie con scadenza di 365 giorni
    document.cookie = "cookies_accettati=true; expires=" + new Date(new Date().getTime() + 365 * 24 * 60 * 60 * 1000).toUTCString() + "; path=/";
}

// Controlla se il cookie è già stato impostato
function checkCookiesAccettati() {
    var cookiesAccettati = document.cookie.replace(/(?:(?:^|.*;\s*)cookies_accettati\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    if (!cookiesAccettati) {
        // Se il cookie non è presente, mostra il overlay
        document.getElementById("overlay").style.display = "block";
    }
}

// Esegui la funzione di controllo all'avvio della pagina
checkCookiesAccettati();