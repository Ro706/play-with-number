const message = document.getElementById('message'),
    scoreEle = document.getElementById('score'),
    option1 = document.getElementById('option1'),
    option2 = document.getElementById('option2'),
    option3 = document.getElementById('option3'),
    number1 = document.getElementById('num1'),
    number2 = document.getElementById('num2'),
    winAudio = document.getElementById("myAudio"),
    looseAudio = document.getElementById("myAudio2");

scoreEle.innerHTML = "Score: 0";

var num1, num2, ans;
var options = [];

var link = sessionStorage.setItem('link', './levels/multiplication.html');
function compareRandom(a, b) {
    return Math.random() - 0.5;
}

// Function to redirect to the result page
function redirectToResult() {
    window.location.href = "result.html?score=" + score;
}

// Function to start the timer
function startTimer() {
    setTimeout(function() {
        redirectToResult();
    }, 60000);
}

// Start the timer when the page loads
window.onload = function() {
    var time = 60;
    setInterval(() => {
        time--;
        document.getElementById("time-remaining").innerHTML = time;
    }, 1000);
    startTimer(60000);
};

// Function to generate equation and create options
function generateEquation() {
    num1 = Math.floor(Math.random() * 20);
    num2 = Math.floor(Math.random() * 20);
    ans = num1 * num2;

    number1.innerHTML = num1;
    number2.innerHTML = num2;

    // Creating options
    options = [];
    options.push(ans)
    for (let _ = 0; _ < 2; _++) {
        do {
            var dummy = Math.floor(Math.random() * 400);
        } while (dummy == ans);
        options.push(dummy);
    }
    options.sort(compareRandom); //randomizing their order

    option1.innerHTML = options[0];
    option2.innerHTML = options[1];
    option3.innerHTML = options[2];
}

var correct = 0, score = 0, range = 3;

// Checking the option selected
function checkOption(selectedOption) {
    const optionElement = document.getElementById("option" + selectedOption);
    if (optionElement.innerHTML == ans) {
        message.textContent = "Correct!!";
        correct = 1;
        score += 1;
        scoreEle.innerHTML = "Score: " + score;
        winAudio.play();
        generateEquation();
    } else {
        message.textContent = "Incorrect!!";
        correct = 0;
        score -= 1;
        scoreEle.innerHTML = "Score: " + score;
        looseAudio.play();
        // generateEquation();
    }
    //CORRECT INCORRECT message disappears within 1 second
    setTimeout(function() {
        message.textContent = "";
    }, 1000);
}
generateEquation();
option1.addEventListener("click", function() { checkOption(1); })
option2.addEventListener("click", function() { checkOption(2); })
option3.addEventListener("click", function() { checkOption(3); })
