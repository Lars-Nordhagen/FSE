function doNothing() {}

function defaultBG() {
    background(200);
}
function backButton(backFunc) {
    let backButton = new larsButton(buttonImg, "Back", 100, 180, 55, 55, backFunc);
}

let traceGameName = "Tracer";

let currentGame = "g1";
let currentLevel = "l1";

let score = "";

let sound = 0.5;