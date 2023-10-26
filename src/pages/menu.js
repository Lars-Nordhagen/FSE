{

let playButton, progressButton, settingsButton;

background(150);

textSize(80);
textAlign(CENTER, TOP);
textFont(font);
text("Strelpe", 0, 30, width);

let lBut = new larsButton(buttonImg, "LARS BUTTON", 20, 20, 200, 200);

playButton = createButton("Menu");
playButton.position(width/2, 100);

progressButton = createButton("Progress");
progressButton.position(width/2, 150);

settingsButton = createButton("Settings");
settingsButton.position(width/2, 200);

function draw() {
}



}