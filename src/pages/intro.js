{
    userStartAudio();
    vPlay(introMus);

    background(0);
    frameRate(15);
    let vidHeight = 300;

    let secCount = 11.0;
    let frameCount = 0;

    textSize(30);
    fill(255);
    textAlign(CENTER);
    function draw() {
        //introGif.resize(width, vidHeight);
        image(introGif, -100, 70);
        introGif.setFrame(frameCount);

        if (frameCount >= secCount*15) {
            changePage("menu");
        }
        frameCount++;
        text("Double tap to skip", 0, 450, width);
    }

    function doubleClicked() {
        changePage("menu");
    }
    /*stop(0);
    vPlay(introMus);

    background(0);
    frameRate(60);
    let vidHeight = 300;
    introVid.size(width, vidHeight);
    introVid.volume(0);
    introVid.loop();
    introVid.play();

    let secCount = 11.0;
    let frameCount = 0;

    textSize(30);
    fill(255);
    textAlign(CENTER);
    function draw() {
        let img = introVid.get();
        image(img, 0, (height-vidHeight)/2);

        if (frameCount >= secCount*60) {
            changePage("menu");
        }
        frameCount++;
        text("Double tap to skip", 0, 450, width);
    }

    function doubleClicked() {
        changePage("menu");
    }*/
}