{

    let fr = 30;

    let timer = 0.0;
    stroke(0);
    fill(0, 0, 0);
    strokeWeight(7);
    rect(0, 0, width, height);

    textSize(30);
    textWrap(WORD);
    textAlign(LEFT);
    fill(0);
    stroke(0, 0, 0, 0);
    strokeWeight(0);
    
    frameRate(fr);

    let bubbleCount = 5;
    let bubbleSize = 30;
    if (currentLevel == 1) {
        bubbleCount = 5;
        bubbleSize = 80;
    } else if (currentLevel == 2) {
        bubbleCount = 10;
        bubbleSize = 60;
    } else {
        bubbleCount = 12;
        bubbleSize = 30;
    }

    let bubblesPopped = 0;


    let bubbles = [];
    for (let i = 0; i < bubbleCount; i++) {
        let randX = random(40, width - 40);
        let randY = random(40, height-40);
        let newBubble = new larsBubble(bubbleImg, bubbleSize, bubbleSize, randX, randY, popBubble);
        bubbles.push(newBubble);
    }


    function draw() {
        if (bubblesPopped >=bubbleCount) {
            finished();
        }

        background(200);

        push();

        fill(0, 0, 0, 0);
        stroke(0);
        strokeWeight(7);
        rect(0, 0, width, height);


        pop();

        for (let i = 0; i < bubbles.length; i++) {
            bubbles[i].redraw();
        }

        push();

        textSize(40);
        stroke(0, 0, 0, 0);
        fill(0);
        text("Time: " + floor(timer*10/fr)/10, 20, 10);

        pop();

        timer += 1.0;
    }


    function mousePressed() {
        for (let i = 0; i < bubbleCount; i ++) {
            if (bubbles[i].mouseOnFunc(mouseX, mouseY)) {
                bubbles[i].changePos(-200, -200);
                bubblesPopped++;
                break;
            }
        }
    }


    function popBubble() {
        console.log("POP");
    }
    function finished() {
        let secs = floor(timer*10/fr)/10;
        score = secs;
        scoreStr = "Time: " + secs + " seconds";
        changePage("complete");
    }
}