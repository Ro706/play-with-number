const scoreEle = document.getElementById('score'),
    banner = document.getElementById('banner');
// Function to retrieve the score from the URL query parameter
function getScoreFromURL() {
    var urlParams = new URLSearchParams(window.location.search);
    var score = urlParams.get('score');
    return score;
}

// Get the score and display it on the page
var score = getScoreFromURL();
scoreEle.innerHTML = score;

if (score <= 0) {
    banner.src = 'better_luck.png'
} else if (score < 10) {
    banner.src = '1star.png';
} else if (score < 20) {
    banner.src = '2star.png';
} else if (score < 30) {
    banner.src = '3star.png';
}

// function playsound(audioNAme,loop) {
//     const audio = new Audio(audioName,);
//     audio.loop = loop;
//     audio.play(); 
// }
// playsound("../play-with-number/bgaudio.mp3",true)