{
    defaultBG();
    
    textSize(50);
    textAlign(CENTER, TOP);
    textFont(font);
    text("Game Select", 50, 30, width);

    backButton(back);

    gameSelectButtons(g1, g2, g3, g4);
    
    
    function draw() {
    }

    function back() {
        changePage("menu");
    }
    
    function g1() {
        currentGame = "trace";
        changePage("difficultySelect");
    }
    
    function g2() {
        currentGame = "basketball";
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