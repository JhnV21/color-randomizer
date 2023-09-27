let myInterval;
const startButton = document.querySelector(".start");
const stopButton = document.querySelector(".stop");
const bodyColor = document.querySelector("body");

function colorRandomizer() {
    for (let i = 0; i < 3; i++) {
        let colors = ["red", "green", "blue"];
        let randomizer = Math.floor(Math.random() * 3);
        bodyColor.style.backgroundColor = colors[randomizer];
    }
}

function startColorRandomizer() {
    if ( !myInterval ) {
        myInterval = setInterval(colorRandomizer, 500);
    }
}

function stopColorRandomizer() {
    clearInterval(myInterval)
    myInterval = null;
    bodyColor.style.backgroundColor = "white";
}

startButton.addEventListener("click", startColorRandomizer)
stopButton.addEventListener("click", stopColorRandomizer)