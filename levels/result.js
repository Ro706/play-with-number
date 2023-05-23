// Function to retrieve the score from the URL query parameter
function getScoreFromURL() {
    var urlParams = new URLSearchParams(window.location.search);
    var score = urlParams.get('score');
    return score;
}

// Get the score and display it on the page
var score = getScoreFromURL();
document.getElementById('score').innerHTML = score;
