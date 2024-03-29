const scoreEle = document.getElementById('score'),
    banner = document.getElementById('banner'),
    winAudio = document.getElementById("myAudio"),
    looseAudio = document.getElementById("myAudio2");
// Function to retrieve the score from the URL query parameter
function getScoreFromURL() {
    var urlParams = new URLSearchParams(window.location.search);
    var score = urlParams.get('score');
    return score;
}

function playAgain() {
    var link = sessionStorage.getItem('link');
    if (link) {
        window.location.href = link;
    } else {
        // Redirect to a default page if the previousPage value is not set
        window.location.href = "../index.html";
    }
}
//check function
var check = 1;
sessionStorage.setItem('check',check);

// Store the previous page's URL in session storage
var currentPage = window.location.href;
sessionStorage.setItem('previousPage', currentPage);

// Get the score and display it on the page
var score = getScoreFromURL();
scoreEle.innerHTML = score;

if (score <= 0) {
    banner.src = 'better_luck.png'
    looseAudio.play();
} else if (score < 10) {
    banner.src = '1star.png';
    winAudio.play();
} else if (score < 20) {
    banner.src = '2star.png';
    winAudio.play();
} else if (score > 20){
    banner.src = '3star.png';
    winAudio.play();
}
