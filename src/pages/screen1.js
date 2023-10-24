{
//TEST
let x = 0;
function draw() {
  console.log("S1 DRAW");
  background(x);
  x++;
  if (x > 200) {
    x = 0;
  }
}
}