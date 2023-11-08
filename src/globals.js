function doNothing() {}

function defaultBG() {
    background(200);
}
function backButton(backFunc) {
    let backButton = new larsButton(buttonImg, "Back", 100, 180, 55, 55, backFunc);
}

let traceGameName = "Tracer";
let basketballName = "Basketball"

let currentGame = "g1";
let currentLevel = "l1";

let score = 0;
let scoreStr = "";

let sound = 0.5;


function gameSelectButtons(func1, func2, func3, func4) {
    let gameButWidth = 200;
    let gameButHeight = 250;
    let gameButXPos = 100;
    let gameButYPos = 250;
    let gameButSpace = 150;
    
    let g1Button = new larsButton(buttonImg, traceGameName, gameButWidth, gameButHeight, (width/2) - gameButXPos, gameButYPos, func1);
    let g2Button = new larsButton(buttonImg, basketballName, gameButWidth, gameButHeight, (width/2) + gameButXPos, gameButYPos, func2);
    let g3Button = new larsButton(buttonImg, "Game 3 Name", gameButWidth, gameButHeight, (width/2) - gameButXPos, gameButYPos + gameButSpace, func3);
    let g4Button = new larsButton(buttonImg, "Game 4 Name", gameButWidth, gameButHeight, (width/2) + gameButXPos, gameButYPos + gameButSpace, func4);
}
function levelSelectButtons(func1, func2, func3) {
    let levelButWidth = 350;
    let levelButHeight = 200;
    let levelButXPos = width/2;
    let levelButYPos = 200;
    let levelButSpace = 110;
    
    let l1Button = new larsButton(buttonImg, "Level 1", levelButWidth, levelButHeight, levelButXPos, levelButYPos, func1);
    let l2Button = new larsButton(buttonImg, "Level 2", levelButWidth, levelButHeight, levelButXPos, levelButYPos + levelButSpace*1, func2);
    let l3Button = new larsButton(buttonImg, "Level 3", levelButWidth, levelButHeight, levelButXPos, levelButYPos + levelButSpace*2, func3);
}

function vPlay(file) {
    file.setVolume(sound);
    file.play();
}