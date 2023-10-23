
//TEST
var x = 0;
function draw() {
  background(x);
  x++;
  if (x > 200) {
    x = 0;
  }
}