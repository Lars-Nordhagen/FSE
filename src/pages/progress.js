{

    defaultBG();

    textSize(65);
    textAlign(CENTER, TOP);
    textFont(font);
    text("Progress", 50, 5, width);

    backButton(back);


    function draw() {
    }

    function back() {
        changePage("menu");
    }
}