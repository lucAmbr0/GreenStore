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