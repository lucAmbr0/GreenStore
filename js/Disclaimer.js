let egg = 0;
var hiddenInputDiv = document.getElementById("hiddenDiv");
function easterEggCounter() {
    if (egg >= 5) {
        console.log("you did it");
        hiddenInputDiv.style.display = "flex";
    }
    else { egg++; }
}
function confirmHidden() {
    var inputValue = document.getElementById("hiddenInput").value;
    if (inputValue === "cookies") {
        const link = "https://www.youtube.com/watch?v=NHKFyGHKqgw&ab_channel=StephCurry";
        window.open(link);
    }
    else {
        const wrongText = document.getElementById("hiddenConfirmButton");
        wrongText.innerHTML = "i thought it was easy... CHECK THE CODE";
    }
}