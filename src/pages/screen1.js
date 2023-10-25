{

createCanvas(400, 500);
background(0);

let x = 2;
function draw() {
  //background(60);
  console.log("S1 DRAW");
  //background(x);
  x++;
  if (x > 250) {
    x = 0;
  }
}


}