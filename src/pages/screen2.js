{

createCanvas(400, 700);
background(100);

let x = 2;
function draw() {
  //background(0);
  console.log("S2 DRAW");
  //background(x);
  x++;
  if (x > 250) {
    x = 0;
  }
}


}