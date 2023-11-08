{

    defaultBG();

    textSize(65);
    textAlign(CENTER, TOP);
    textFont(font);
    text("Progress", 50, 5, width);

    backButton(back);

    levelSelectButtons(l1, l2, l3);


    function draw() {
    }

    function back() {
        changePage("progress");
    }

    function l1() {
        currentLevel = 1;
        changePage("graph");
    }
    function l2() {
        currentLevel = 2;
        changePage("graph");
    }
    function l3() {
        currentLevel = 3;
        changePage("graph");
    }
}