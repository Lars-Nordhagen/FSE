// Used to load all assets such as images and fonts
let font;
let buttonImg = "./assets/images/green-button.png";
let ssrc;

function preload() {
    font = loadFont("./assets/fonts/Nunito-Light.ttf");
    ssrc = loadImage("./assets/images/green-button.png");
}

// The setup function that initializes the p5 code and canvas
// Automatically called
function setup() {
    createCanvas(400, 500);
    changePage("difficultySelect");
}

function doNothing() {}
let currentGame = "g1";
let currentLevel = "l1";
function defaultBG() {
    background(200);
}
function backButton(backFunc) {
    let backButton = new larsButton(buttonImg, "Back", 100, 180, 55, 55, backFunc);
}