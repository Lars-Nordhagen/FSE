{
    defaultBG();
    
    textSize(50);
    textAlign(CENTER, TOP);
    textFont(font);
    text("Instructions", 50, 30, width);

    backButton(back);


    let instructText = getInstructionText(currentGame);
    console.log(instructText);
    textSize(33);
    textAlign(CENTER, TOP);
    textFont(font);
    text(instructText, 0, 150, width);
    
    
    function draw() {
    }

    function back() {
        changePage("difficultySelect");
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

    function getInstructionText(name) {
        console.log(name);
        switch (name) {
            case "trace":
                return "Start with your finger on the green dot. Trace your finger along the path until you reach the blue dot. If the path is green, you're doing good. If the path is red... do better.";
            case "basketball":
                return "Put your finger on the ball. Swipe in the right direction at the right speed to get the ball in the hoop. Every ball you get in is 1 point."
            case "bubble":
                return "Tap on the bubbles to pop them. Try to do it in as little time as possible.";
            case "typing":
                return "Type the sentance that is shown at the top of the screen. If the letter is green, it is correct. If it is red, it is wrong. Press backspace to redo a character.";
            default:
                return "";
                isAlpha
        }
    }
}