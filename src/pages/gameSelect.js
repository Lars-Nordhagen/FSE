{
    defaultBG();
    
    textSize(50);
    textAlign(CENTER, TOP);
    textFont(font);
    text("Game Select", 50, 30, width);

    backButton(back);
    
    let gameButWidth = 200;
    let gameButHeight = 250;
    let gameButXPos = 100;
    let gameButYPos = 250;
    let gameButSpace = 150;
    
    let g1Button = new larsButton(buttonImg, "Game 1 Name", gameButWidth, gameButHeight, (width/2) - gameButXPos, gameButYPos, g1);
    let g2Button = new larsButton(buttonImg, "Game 2 Name", gameButWidth, gameButHeight, (width/2) + gameButXPos, gameButYPos, g2);
    let g3Button = new larsButton(buttonImg, "Game 3 Name", gameButWidth, gameButHeight, (width/2) - gameButXPos, gameButYPos + gameButSpace, g3);
    let g4Button = new larsButton(buttonImg, "Game 4 Name", gameButWidth, gameButHeight, (width/2) + gameButXPos, gameButYPos + gameButSpace, g4);
    
    
    function draw() {
    }

    function back() {
        changePage("menu");
    }
    
    function g1() {
        currentGame = "ray";
        changePage("difficultySelect");
    }
    
    function g2() {
        currentGame = "ray";
        changePage("difficultySelect");
    }
    
    function g3() {
        currentGame = "ray";
        changePage("difficultySelect");
    }

    function g4() {
        currentGame = "menu";
        changePage("difficultySelect");
    }
    
    
}