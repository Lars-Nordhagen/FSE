class larsButton {

    xPos;
    ypos;

    button;

    img;

    constructor(img, text, width, height, x, y) {
        //this.img.resize(10, 10);

        this.button = createImg(img, "image");

        this.button.position(this.xPos, this.yPos);
        this.button.position(100, 100);

        textSize(80);
        textAlign(CENTER, TOP);
        textFont(font);
        //text(text, this.xPos, this.ypos, width);
    }
}