{
    push();

    defaultBG();

    textSize(65);
    textAlign(CENTER, TOP);
    textFont(font);
    text("Progress", 50, 5, width);

    backButton(back);

    let scores = getGameScores(currentGame, currentLevel);
    console.log(scores);
    console.log(currentGame);
    console.log(currentLevel);
    if (scores.length > 20) {
        let newArr = [];
        for (let i = 0; i < 20; i++) {
            newArr[i] = scores[i + scores.length - 20];
        }
        scores = newArr;
    }

    let graphWidth = width*.85;
    let graphHeight = height*.4;

    let graphX = (width-graphWidth) / 2;
    let graphY = 200;

    fill(240);
    strokeWeight(3);
    stroke(0);
    rect(graphX, graphY, graphWidth, graphHeight);

    let top = 0;

    for (let i = 0; i < scores.length; i++) {
        if (scores[i][0] > top) {
            top = scores[i][0];
        }
    }
    top /= 5;
    top = Math.ceil(top);
    top *= 5;

    strokeWeight(7);
    stroke(200, 50, 0);

    textSize(20);
    textAlign(LEFT, TOP);
    textFont(font);

    push();
    stroke(0, 0, 0, 0);
    fill(0);
    if (scores.length == 0) {
        push();
        textSize(35);
        fill(0);
        strokeWeight(0);
        textAlign(CENTER, CENTER);
        text("No Scores Yet", graphX, graphY + (graphHeight/2), graphWidth);
        pop();
    } else {
        text("Score No.", graphX + (graphWidth/2) - 25, graphY + graphHeight + 35);
    }

    let horCnt = top/5;

    for (let i = 0; i < top/5; i++) {
        if (horCnt >= 10 && (horCnt - i) % 2 == 1) { i++ } 

        let x = graphX;
        let y = graphY + i*(graphHeight/(horCnt));

        
        text(top - i*5, x - 28, y - 15);

        push();
        stroke(125);
        strokeWeight(2);
        line(x+2, y, x + graphWidth-2, y);
        pop();
    }

    pop();

    let lastX = 0;
    let lastY = 0;

    for (let i = 0; i < scores.length; i++) {
        let y = graphY + (graphHeight*((top-scores[i][0])/top));
        let x = graphX + (i+0.5)*(graphWidth/(scores.length))

        let showLine = false;
        if (scores.length <= 10) { showLine = true; }
        else if ((scores.length - i) % 2 == 1) { showLine = true; }

        if (showLine) {
            push();
            stroke(125);
            strokeWeight(2);
            line(x, graphY, x, graphY + graphHeight);

            stroke(0, 0, 0, 0);
            fill(0);
            text(i + 1, x - 6, graphY + graphHeight + 7);
            pop();
        }

        point(x, y);

        if (lastX != 0) {
            push();

            strokeWeight(2);
            line(lastX, lastY, x, y);

            pop();

        }
        lastX = x;
        lastY = y;
    }



    pop();
    function draw() {
    }

}