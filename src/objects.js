class larsButton {

    constructor(img, txt, wdth, hgt, x, y, func) {
        push();

        /*this.button = createButton(txt);
        this.button.position(x-(wdth/2), y-(hgt/2));
        this.button.size(wdth, hgt);

        this.button.elt.src = "HELLo";*/
        //this.button.size(wdth, hgt);

        this.xpos = x;
        this.ypos = y;

        ssrc.resize(wdth, hgt);
        image(ssrc, x - (wdth/2), y - (hgt/2));

        textSize(wdth/5);
        textAlign(CENTER, CENTER);
        textFont(font);
        text(txt, x - (wdth/2), y, wdth);

        this.hgtAdj = 1.5;
        this.wdthAdj = 1;
        this.mouseRead = createDiv();
        this.mouseRead.size(wdth/this.wdthAdj, hgt/this.hgtAdj);
        this.mouseRead.position(x-(wdth/(2*this.wdthAdj)), y-(hgt/(2*this.hgtAdj)));

        this.mouseRead.mouseClicked(func);
        this.mouseRead.elt.id = "TESTTT";


        pop();
    }
}