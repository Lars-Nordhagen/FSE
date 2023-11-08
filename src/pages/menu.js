{

    defaultBG();

    textSize(80);
    textAlign(CENTER, TOP);
    textFont(font);
    text("Strelpe", 0, 30, width);

    let menuButWidth = 200;
    let menuButHeight = 135;

    let playButton = new larsButton(buttonImg, "Play", menuButWidth, menuButHeight, width/2, 250, playButPress);
    let progressButton = new larsButton(buttonImg, "Progress", menuButWidth, menuButHeight, width/2, 350, progButPress);
    let settingsButton = new larsButton(buttonImg, "Settings", menuButWidth, menuButHeight, width/2, 450, settButPress);


    function draw() {
    }

    function playButPress() {
        changePage("gameSelect");
    }

    function progButPress() {
        changePage("progress");
    }

    function settButPress() {
        changePage("settings");
    }


}