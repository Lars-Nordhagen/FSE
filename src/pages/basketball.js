{
    let fr = 60;
    frameRate(fr);
    angleMode(DEGREES);

    let ballStartRange = 0;
    if (currentLevel == 2) {
        ballStartRange = 50;
    } else if (currentLevel == 3) {
        ballStartRange = 170;
    }
    let ballStartY = 450;
    let ballStartSize = 60;

    let ballX;
    let ballY;
    let ballSize;

    let ballAlpha;
    let fade;

    let hoopY = 150;
    let maxMove = 75;

    let minSpeed = 10;
    let maxSpeed = 17;

    let points = 0;

    let ballGrabbed;
    let grabXOff;
    let grabYOff;
    let grabX;
    let grabY;


    let thrown;
    let speed;
    let framesSinceThrow;
    let throwX;
    let throwY;
    let throwZ;
    let aboveHoop;
    let hitSpot;
    let atHit;

    let extraYSpeed;
    let extraXSpeed;


    let pastPos;
    let pastPosAmmount;
    let currentPos;
    let framesSinceGrab;

    let angle;
    let l1AngAdj = 2.7;
    let l2AngAdj = 2;
    let l3AngAdj = 1.5;

    let timer = 30*fr;



    reset();
    drawCourt();
    drawBall();
    showScore();




    function draw() {
        timer--;
        if (timer < 0) {
            done();
        }


        if (fade) {
            ballAlpha -= 8;
            if (ballAlpha < -50) {
                reset();
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
            ballSize = ballStartSize - throwZ * 0.1
            if (ballSize < 35) {
                ballSize = 35;
            }

            hitSpot = hoopY - (ballSize/2);

            let xAdj1 = 0.65;
            xSpeed = xAdj1 * speed * sin(angle) * 0.6 * extraXSpeed;
            throwX += xSpeed;
            ballX += xSpeed;


            if (aboveHoop) {
                if (!atHit && ySpeed < 0 && ballY > hitSpot) {


                    if (abs(ballX-200) < 28) {
                        points++;
                        vPlay(beepSnd);
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
            vPlay(whooshSnd);
            let distance = dist(pastPos[currentPos-1][0], pastPos[currentPos][0], pastPos[currentPos-1][1], pastPos[currentPos][1]);
            let frames = framesSinceGrab + 0.0;

            angle = -atan((pastPos[currentPos-1][0] - pastPos[currentPos][0])/(pastPos[currentPos-1][1] - pastPos[currentPos][1]));

            let hoopAngle = -atan((200 - ballX)/(hoopY - ballY));

            let angleAdj = 1;
            if (currentLevel == 1) {
                angleAdj = l1AngAdj;
            } else if (currentLevel == 2) {
                angleAdj = l2AngAdj;
            } else {
                angleAdj = l3AngAdj;
            }

            angle = hoopAngle - ((hoopAngle - angle)/angleAdj);


            framesSinceGrab = 0;
            currentPos = 0;

            thrown = true;
            speed = distance/frames;
            if (speed < minSpeed) {
                speed = minSpeed;
            } else if(speed > maxSpeed) {
                speed = maxSpeed;
            }
            framesSinceThrow = 0;
        }

        drawCourt();
        drawBall();
        showScore();
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
        }
    }
    function mouseReleased() {
        ballGrabbed = false;
    }


    function mouseOnBall() {
        return sqrt(sq(mouseX-ballX) + sq(mouseY-ballY)) < ballSize/2;
    }




    function reset() {
        ballX = random(200-ballStartRange, 200+ballStartRange);
        ballY = ballStartY;
        ballSize = ballStartSize;

        ballAlpha = 255;
        fade = false;

        ballGrabbed = false;
        grabXOff = 0;
        grabYOff = 0;
        grabX = 0;
        grabY = 0;

        thrown = false;
        speed = 0.0;
        framesSinceThrow = 0;
        throwX = 0;
        throwY = 0;
        throwZ = 0;
        aboveHoop = false;
        hitSpot = hoopY - (ballSize/2);
        atHit = false;

        extraYSpeed = 0;
        extraXSpeed = 1;


        pastPos = [];
        pastPosAmmount = 20;
        for (let i = 0; i <= pastPosAmmount; i++) {
            pastPos[i] = [ballX, ballY];
        }
        currentPos = 0;
        framesSinceGrab = 0;

        angle = 0;
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
        text("Score: " + points, 200 - 125, 235);

        text("Time: " + ceil(timer/fr), 200 + 125, 235);

        pop();
    }

    function dist(x1, x2, y1, y2) {
        return sqrt(sq(x1 - x2) + sq(y1 - y2));
    }



    function done() {
        score = points;
        scoreStr = "Score: " + score + "points";
        changePage("complete");
    }
}