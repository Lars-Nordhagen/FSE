{

defaultBG();

textSize(65);
textAlign(CENTER, TOP);
textFont(font);
text("Settings", 50, 5, width);

backButton(back);

let optionNameWidth = 120;
let optionNameHeight = 200;
let optionNameX = 100;
let optionNameY = 200;

let optionChangeWidth = 200;
let optionChangeHeight = 150;
let optionChangeX = 200;
let optionChangeY = 150;

let spacing = 110;

let playButton = new larsButton(buttonImg, "Sound", optionNameWidth, optionNameHeight, optionNameX, optionNameY, doNothing);
let progressButton = new larsButton(buttonImg, "S2", optionNameWidth, optionNameHeight, optionNameX, optionNameY + spacing*1, doNothing);
let settingsButton = new larsButton(buttonImg, "S3", optionNameWidth, optionNameHeight, optionNameX, optionNameY + spacing*2, doNothing);


function draw() {
}

function back() {
    changePage("menu");
}
}