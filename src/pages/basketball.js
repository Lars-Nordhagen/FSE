{
    frameRate(60);
    angleMode(DEGREES);

    let ballStartX = 200;
    let ballStartY = 450;
    let ballStartSize = 60;

    let ballX = ballStartX;
    let ballY = ballStartY;
    let ballSize = ballStartSize;

    let ballAlpha = 255;
    let fade = false;

    let hoopY = 150;
    let maxMove = 75;

    let points = 0;

    let ballGrabbed = false;
    let grabXOff = 0;
    let grabYOff = 0;
    let grabX = 0;
    let grabY = 0;


    let thrown = false;
    let speed = 0.0;
    let framesSinceThrow = 0;
    let throwX = 0;
    let throwY = 0;
    let throwZ = 0;
    let aboveHoop = false;
    let hitSpot = hoopY - (ballSize/2);
    let atHit = false;

    let extraYSpeed = 0;
    let extraXSpeed = 1;


    let pastPos = [];
    let pastPosAmmount = 20;
    for (let i = 0; i <= pastPosAmmount; i++) {
        pastPos[i] = [ballX, ballY];
    }
    let currentPos = 0;
    let framesSinceGrab = 0;

    let angle = 0;



    drawCourt();
    drawBall();

    showScore();







    function draw() {
        console.log(ballX);
        if (fade) {
            ballAlpha -= 8;
            if (ballAlpha < -50) {

            }
        }


        if (thrown) {
            hitSpot = hoopY - (ballSize/2)

            let yAdj1 = 0.65;
            let yAdj2 = 0.2;
            let ySpeed = (yAdj1 * speed) - (yAdj2 * framesSinceThrow) + extraYSpeed;
            ySpeed *= cos(angle);
            ballY -= ySpeed;
            throwY += ySpeed;
            
            let zAdj1 = 0.1;
            throwZ += zAdj1 * speed;
            ballSize = ballStartSize - throwZ * 0.1;

            let xAdj1 = 0.65;
            xSpeed = xAdj1 * speed * sin(angle) * 0.6 * extraXSpeed;
            throwX += xSpeed;
            ballX += xSpeed;


            if (aboveHoop) {
                if (!atHit && ySpeed < 0 && ballY > hitSpot) {


                    if (abs(ballX-200) < 28) {
                        points++;
                    } else if (abs(ballX-200) < 60) {
                        extraXSpeed = 1.3;
                        extraYSpeed = -1.6*ySpeed;
                    }

                    fade = true;
                    atHit = true;
                }

            } else if (ballY < hoopY - 20) {
                aboveHoop = true;
            } else {
                if (ySpeed < 0) {
                    fade = true;
                }
            }

            framesSinceThrow++;
        }
        else if (ballGrabbed) {
            framesSinceGrab++;

            ballX = mouseX - grabXOff;
            ballY = mouseY - grabYOff;

            if (dist(ballX, grabX, ballY, grabY) > maxMove) {
                ballGrabbed = false;
            }

            pastPos[currentPos] = [ballX, ballY];
            pastPos[pastPosAmmount] = pastPos[0];
            currentPos++;
            if (currentPos >= pastPosAmmount) { currentPos = 0; }
        } else if (framesSinceGrab != 0) {
            let distance = dist(pastPos[currentPos-1][0], pastPos[currentPos][0], pastPos[currentPos-1][1], pastPos[currentPos][1]);
            let frames = framesSinceGrab + 0.0;

            angle = -atan((pastPos[currentPos-1][0] - pastPos[currentPos][0])/(pastPos[currentPos-1][1] - pastPos[currentPos][1]));

            framesSinceGrab = 0;
            currentPos = 0;

            thrown = true;
            speed = distance/frames;
            framesSinceThrow = 0;
        }

        drawCourt();
        drawBall();
    }

    function mousePressed() {
        if (mouseOnBall()) {
            framesSinceGrab = 0;
            for (let i = 0; i <= pastPosAmmount; i++) {
                pastPos[i] = [ballX, ballY];
            }
            currentPos = 0;
            ballGrabbed = true;
            grabXOff = mouseX - ballX;
            grabYOff = mouseY - ballY;
            grabX = ballX;
            grabY = ballY;
            console.log("On Ball");
        }
    }
    function mouseReleased() {
        ballGrabbed = false;
    }


    function mouseOnBall() {
        return sqrt(sq(mouseX-ballX) + sq(mouseY-ballY)) < ballSize/2;
    }




    function shoot(speed) {

    }






    function drawBall() {
        push();

        stroke(115, 18, 7);
        strokeWeight(5);
        noFill();

        arc(width/2, hoopY, 75, 22, 180, 360);


        pop();


        push();

        stroke(115, 18, 7);
        strokeWeight(5);
        noFill();

        arc(width/2, hoopY, 75, 22, 360, 180);


        pop();



        push();

        stroke(0, 0, 0, ballAlpha);
        strokeWeight(3);
        fill(238, 103, 48, ballAlpha);

        ellipse(ballX, ballY, ballSize);

        pop();

        if (aboveHoop) {
            push();

            stroke(115, 18, 7);
            strokeWeight(5);
            noFill();

            arc(width/2, hoopY, 75, 22, 360, 180);


            pop();
        }
    }

    function drawCourt() {
        push();
        background(9, 154, 232);

        stroke(0);
        strokeWeight(3);

        fill(7, 92, 31);
        rect(0, 225, width, height);

        fill(223, 187, 133);
        let courtHeight = 200;
        let courtIndent = 75;
        quad(0, height, width, height, width-courtIndent, height-courtHeight, courtIndent, height-courtHeight);

        let poleWidth = 30;
        let poleHeight = 200;
        fill(138);
        rect((width/2) - (poleWidth/2), height - courtHeight + 10, poleWidth, -poleHeight);

        let backWidth = 200;
        let backHeight = backWidth * 0.583;
        let backY = courtHeight - poleHeight + 45
        fill(230);
        rect((width/2) - (backWidth/2), backY, backWidth, backHeight);

        push();
        fill(0, 0, 0, 0);
        stroke(0);
        strokeWeight(4);
        let paintWidth = backWidth * 0.33;
        let paintHeight = backHeight * 0.38;
        rect((width/2) - (paintWidth/2), backY + 50, paintWidth, paintHeight);

        pop();


        push();

        noFill();
        stroke(0);
        strokeWeight(7);
        arc(width/2, height - courtHeight, 175, 300, 360, 180);

        pop();


        pop();
    }

    function showScore() {
        push();

        textSize(30);
        stroke(255);
        strokeWeight(3);
        text("Score: " + points, 75, 235);

        pop();
    }

    function dist(x1, x2, y1, y2) {
        return sqrt(sq(x1 - x2) + sq(y1 - y2));
    }



    function done() {
        score = points;
        scoreStr = score + "points";
        changePage("complete");
    }
}