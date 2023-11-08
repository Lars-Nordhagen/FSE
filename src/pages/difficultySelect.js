{
    defaultBG();
    
    textSize(50);
    textAlign(CENTER, TOP);
    textFont(font);
    text("Level Select", 50, 30, width);

    backButton(back);

    levelSelectButtons(l1, l2, l3);
    
    let instrucButt = new larsButton(buttonImg, "Instructions", 140, 100, 300, 117, instructPage);
    
    function draw() {
    }

    function back() {
        changePage("gameSelect");
    }
    
    function l1() {
        currentLevel = 1;
        changePage(currentGame);
    }
    function l2() {
        currentLevel = 2;
        changePage(currentGame);
    }
    function l3() {
        currentLevel = 3;
        changePage(currentGame);
    }
    function instructPage() {
        changePage("instructions");
    }
}