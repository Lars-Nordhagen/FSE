{
    frameRate(60);
    defaultBG();
    stroke(0, 0, 0, 0);
    
    textSize(60);
    textAlign(CENTER, TOP);
    textFont(font);
    text("Done", 0, 50, width);

    backButton(back);
    
    let scoreText = scoreStr;
    saveScore(currentGame, score, scoreStr, currentLevel);

    textSize(45);
    textAlign(CENTER, TOP);
    textFont(font);
    text(scoreText, 0, 200, width);
    
    
    function draw() {
    }

    function back() {
        changePage("difficultySelect");
    }

    function mouseMoved() {}
    function mouseDragged() {}
    function mousePressed() {}
    function mouseReleased() {}
    function mouseClicked() {}
    function doubleClicked() {}
    function mouseWheel() {}

    vPlay(winSnd);

}