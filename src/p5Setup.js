// Used to load all assets such as images and fonts
let font;
let buttonImg;

let buzzSnd;
let winSnd;
let beepSnd;
let buttonSnd;
let whooshSnd;

function preload() {
    font = loadFont("./assets/fonts/Nunito-Light.ttf");
    buttonImg = loadImage("./assets/images/green-button.png");
    
    soundFormats('wav');

    buzzSnd = loadSound("./assets/sounds/BuzzSnd");
    winSnd = loadSound("./assets/sounds/WinSnd");
    beepSnd = loadSound("./assets/sounds/BeepSnd");
    buttonSnd = loadSound("./assets/sounds/ButtonSnd");
    whooshSnd = loadSound("./assets/sounds/whooshSnd");
}

// The setup function that initializes the p5 code and canvas
// Automatically called
function setup() {
    createCanvas(400, 500);
    changePage("menu");
}

function mouseClicked() {}