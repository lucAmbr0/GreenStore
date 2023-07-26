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
// let FATTOH;
// function accettaCookies() {
//     // Nascondi il overlay
//     document.getElementById("overlay").style.display = "none";
//     // Imposta un cookie con scadenza di 365 giorni
//     FATTOH = sessionStorage.setItem('popupFatto', true);
// }

// // Controlla se il cookie è già stato impostato all'avvio della pagina
// if (FATTOH !== true) {
//     overlay.style.display = "block";
// }

// PROVA 2

// Funzione per impostare un cookie
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
  
// Funzione per ottenere il valore di un cookie
function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
}

// Funzione per mostrare il pop-up solo se il cookie non è impostato
function showPopupOnce() {
    var popup = document.getElementById("popup");
    var popupShown = getCookie("popupShown");
  
    if (!popupShown) {
      popup.style.display = "block";
      setCookie("popupShown", true, 30); // Imposta il cookie per 30 giorni
  
      // Chiudi il pop-up quando l'utente fa clic sul pulsante "Chiudi"
      var closePopupBtn = document.getElementById("closePopup");
      if (closePopupBtn) {
        closePopupBtn.addEventListener("click", function() {
          popup.style.display = "none";
        });
    }
  
    // Chiudi il pop-up quando l'utente fa clic al di fuori del contenuto del pop-up
    window.addEventListener("click", function(event) {
        if (event.target === popup) {
          popup.style.display = "none";
        }
      });
    }
}
  
  // Mostra il pop-up una volta caricata la pagina
document.addEventListener("DOMContentLoaded", showPopupOnce); 