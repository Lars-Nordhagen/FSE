{

let button;

background(200);
button = createButton('click me');
button.position(100,100);
button.mousePressed(change);


function change() {
    changePage('Ray');
}

function draw() {
    //background(150);
    console.log("BUT DRAW");
}

}