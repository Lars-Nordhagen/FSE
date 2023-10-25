// Used to load all assets such as images and fonts
let font;
let buttonImg;

function preload() {
    font = loadFont("./assets/fonts/Nunito-Light.ttf");
    buttonImg = loadImage("./assets/images/green-button.png");
}

// The setup function that initializes the p5 code and canvas
// Automatically called
function setup() {
    createCanvas(400, 500);
    changePage("menu");
}