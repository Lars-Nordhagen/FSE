{

    defaultBG();

    textSize(65);
    textAlign(CENTER, TOP);
    textFont(font);
    text("Progress", 50, 5, width);

    backButton(back);

    gameSelectButtons(g1, g2, g3, g4)


    function draw() {
    }

    function back() {
        changePage("menu");
    }

    function g1() {
        currentGame = "trace";
        changePage("progLevelSelect");
    }
    
    function g2() {
        currentGame = "basketball";
        changePage("progLevelSelect");
    }
    
    function g3() {
        currentGame = "ray";
        changePage("progLevelSelect");
    }

    function g4() {
        currentGame = "menu";
        changePage("progLevelSelect");
    }
}