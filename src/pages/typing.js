{
    let textArray=[["I sat there with Sally. We sat there, we two.","I know some good games we would play, Said the cat.","But our fish said, No! No! Make the cat go away!"], 
                    ["I sat there with Sally. We sat there, we two. And I said How I wish We had something to do!","I know some good games we would play, Said the cat. I know some new tricks, said the Cat in the Hat.","But our fish said, No! No! Make the cat go away! Tell that Cat in the Hat You do not want to play. He should not be here."], 
                    ["I sat there with Sally. We sat there, we two. And I said How I wish We had something to do! Too wet to go out And too cold to play ball. So we sat in the house. We did nothing at all.","I know some good games we would play, Said the cat. I know some new tricks, said the Cat in the Hat. A lot of good tricks. I will show them to you.","But our fish said, No! No! Make the cat go away! Tell that Cat in the Hat You do not want to play. He should not be here. He should not be about. He should not be here When your mother is out!"]];


    let fr = 30;

    let disableTyping = false;

    let timer = 0.0;

    let userText = "";

    let mistakes = 0;
    let seeMistake = [];

    let done = false;

    let textXMargins = 15;

    createCanvas(400, 500);
    textSize(30);
    textWrap(WORD);
    textAlign(LEFT);
    fill(0);
    stroke(0, 0, 0, 0);
    strokeWeight(0);
    
    frameRate(fr);

    let arrayTextNum = parseInt(random(0,3));
    targetText = textArray[currentLevel - 1][arrayTextNum];

    if (currentLevel == 1) {
        textSize(35);
    } else if (currentLevel == 2) {
        textSize(30);
    } else {
        textSize(23);
    }


    function draw() {
        background(200);

        push();

        fill(0, 0, 0, 0);
        stroke(0);
        strokeWeight(7);
        rect(0, 0, width, height);


        pop();
        
        printUserText();
        
        textWrap(WORD);
        stroke(0);
        text(targetText, textXMargins, textXMargins, width-(2*textXMargins));
        
        if (done){
            finished();
        } else {
            timer += 1.0;
        }

        text("Time: " + floor(timer*10/fr)/10, textXMargins, height - 50);
    }


    function keyTyped() {
        if(disableTyping) {
        return;
        }
        
        userText += key;
        grade();
    }


    function keyPressed(){
        if(disableTyping) {
            return;
        }
        
        if (keyCode == BACKSPACE)
        {
            userText = userText.substring(0,userText.length-1);
            grade();
        }
    
    }


    function grade(){
        seeMistake=[];
        // # of backspaces and loop checking input vs text
        // loop for goalText
        let userTextIndex = 0;
        for (let i = 0; i < targetText.length; i++)
        {
            for(let b = userTextIndex; b < userText.length; b++)
            {
            userTextIndex++;
            if(targetText[i]!=userText[b])
            { 
                seeMistake.push(b);
                if (keyCode != BACKSPACE)
                {
                if(b == userText.length-1)
                {
                    mistakes++; 
                }
                }
                
                
            } else {
                if (i == targetText.length-1)
                {
                done = true;
                }
                break;
            }
            }
            }
    }

    function printUserText() {
        push();
        
        let textXStart = textXMargins;
        let textYStart = 200;
        
        let textX = textXStart;
        let textY = textYStart;
        
        let textXSpace = 25;
        let textYSpace = 35;
        
        for (let i = 0; i < userText.length; i++) {
            fill(9, 150, 43);
            
            for (let j = 0; j < seeMistake.length; j++) {
                if (seeMistake[j] == i ) {
                    fill(204, 4, 4);
                    break;
                }
            }
            
            text(userText[i], textX, textY);
            textX += textWidth(userText[i]);
            
            if (textX > width-textXStart-textXSpace) {
                textY += textYSpace;
                textX = textXStart;
            }
        }
        
        pop();
    }


    function finished() {
        let secs = floor(timer*10/fr)/10;
        score = secs;
        scoreStr = "Time: " + secs + " seconds" + "\nMistakes: " + mistakes + "\nCurrent Errors: " + seeMistake.length;
        changePage("complete");
    }
}