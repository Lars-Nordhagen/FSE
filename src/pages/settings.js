{

    defaultBG();

    textSize(65);
    textAlign(CENTER, TOP);
    textFont(font);
    text("Settings", 50, 5, width);

    backButton(back);

    let optionNameWidth = 120;
    let optionNameHeight = 200;
    let optionNameX = 100;
    let optionNameY = 220;

    let optionChangeWidth = 200;
    let optionChangeHeight = 150;
    let optionChangeX = 200;
    let optionChangeY = 150;

    let spacing = 110;

    let soundTxt = new larsButton(buttonImg, "Sound", optionNameWidth, optionNameHeight, optionNameX, optionNameY, doNothing);
    //let s2Txt = new larsButton(buttonImg, "S2", optionNameWidth, optionNameHeight, optionNameX, optionNameY + spacing*1, doNothing);
    let dataTxt = new larsButton(buttonImg, "Data", optionNameWidth, optionNameHeight, optionNameX, optionNameY + spacing*1.5, doNothing);

    let sndWidth = 80;
    let sndIncBut = new larsButton(buttonImg, "+", sndWidth, optionNameHeight, optionNameX + 255, optionNameY, sndIncrease);
    let sndDecBut = new larsButton(buttonImg, "-", sndWidth, optionNameHeight, optionNameX + 105, optionNameY, sndDecrease);
    push();
    textSize(23);
    textAlign(CENTER, CENTER)
    text((round(sound * 100)) + "%", optionNameX + 180, optionNameY);
    pop();

    let butWdth = 175;
    let dataButton = new larsButton(buttonImg, "Clear Data", butWdth, optionNameHeight, optionNameX + (optionChangeWidth + butWdth)/2, optionNameY + spacing*1.5, clrData);


    function draw() {
    }

    function back() {
        changePage("menu");
    }

    function sndIncrease() {
        sound += 0.1;
        vPlay(beepSnd);
        if (sound > 1) {
            sound = 1;
        }
        changePage("settings");
    }
    function sndDecrease() {
        sound -= 0.1;
        vPlay(beepSnd);
        sound = round(sound*10)/10;
        if (sound < 0) {
            sound = 0;
        }
        changePage("settings");
    }

    function clrData() {
        clearStorage();
        changePage("menu");
    }
}