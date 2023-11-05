{
    defaultBG();
    
    textSize(50);
    textAlign(CENTER, TOP);
    textFont(font);
    text("Level Select", 50, 30, width);

    backButton(back);

    let levelButWidth = 350;
    let levelButHeight = 200;
    let levelButXPos = width/2;
    let levelButYPos = 200;
    let levelButSpace = 110;
    
    let l1Button = new larsButton(buttonImg, "Level 1", levelButWidth, levelButHeight, levelButXPos, levelButYPos, l1);
    let l2Button = new larsButton(buttonImg, "Level 2", levelButWidth, levelButHeight, levelButXPos, levelButYPos + levelButSpace*1, l2);
    let l3Button = new larsButton(buttonImg, "Level 3", levelButWidth, levelButHeight, levelButXPos, levelButYPos + levelButSpace*2, l3);
    
    
    function draw() {
    }

    function back() {
        changePage("gameSelect");
    }
    
    function l1() {
        currentLevel = "l1";
        changePage(currentGame);
    }
    function l2() {
        currentLevel = "l2";
        changePage(currentGame);
    }
    function l3() {
        currentLevel = "l3";
        changePage(currentGame);
    }
}