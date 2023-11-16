{
  let dots = [];
  let lastX = 0;
  let lastY = 0;
  
  
  background(0);
  
  strokeWeight(9);
  stroke(255);
  //frameRate();


  let path = [];

  let maxDist = 12;
  let dotDist = 5;
  let goalDist = 20;


  let correctDots = 0;

  
  let bound = 20;
  let epy = bound;
  let pathCl = 255;
  for (let i = 0; i < currentLevel*2 - 1; i++) {
    createPath();
  }
  drawEndNodes();

  let greenLast = true;
  
  function draw() {
    if (mouseIsPressed) {
      let dotX = mouseX;
      let dotY = mouseY;
      if (sqrt(sq(dotX - lastX) + sq(dotY - lastY)) > dotDist) {
        let goalDistance = sqrt(sq(dotX - path[path.length - 1][0]) + sq(dotY - path[path.length - 1][1]));
        if (goalDistance < goalDist) {
          done();
        }

        lastX = dotX;
        lastY = dotY;
        dots.push([dotX, dotY]);

        stroke(255, 0, 0);

        let hgjdf = greenLast;

        for (let i = 0; i < path.length; i++) {

          let distance = sqrt(sq(dotX - path[i][0]) + sq(dotY - path[i][1]));
          if (distance < maxDist) {
            greenLast = true;
            correctDots++;
            stroke(0, 255, 0);
            break;
          } else {
            greenLast = false;
          }
        }
        if (hgjdf && !greenLast) {
          vPlay(buzzSnd);
        }

        drawPoint(dotX, dotY);
      }
    }
  }
  
  function drawPoint(x, y) {
    push();

    strokeWeight(8);
    point(x, y);

    pop();
  }


  function createPath() {

    let startX = random(bound, width-bound);
    if (path.length != 0) {
      startX = path[path.length-1][0];
    }



    let deg = 8;
    let dotNum = 300;

    let contPs = [];

    contPs.push([startX, epy]);

    epy = height - epy;

    for (let i = 1; i < deg-1; i++) {
      contPs.push([random(bound, width-bound), random(bound, height-bound)])
    }

    contPs.push([random(bound, width-bound), epy]);


    let t = 0.0;
    while (t < 1.0) {
      let x = 0;
      let y = 0;
      for (let j = 0; j < deg; j++) {
        let base = pow((1-t), deg - 1 - j) * pow(t, j) * pasc(deg-1, j);
        x += base * contPs[j][0];
        y += base * contPs[j][1];
      }
      drawPath(x, y);
      path.push([x, y]);

      t += 1/dotNum
    }

    pathCl -= 50;
  }


  function pasc(row, num) {
    return fact(row)/(fact(row-num)*fact(num));
  }
  function fact(num) {
    let answer = 1;
    for (let i = 2; i <= num; i++) {
      answer *= i;
    }

    return answer;
  }

  function drawPath(x, y) {
    push();

    stroke(pathCl);
    strokeWeight(13);
    point(x, y);

    pop();
  }
  function drawEndNodes(x, y) {
    push();

    strokeWeight(40);

    stroke(0, 255, 100);
    point(path[0][0], path[0][1]);

    stroke(0, 0, 255);
    point(path[path.length - 1][0], path[path.length - 1][1]);

    pop();
  }
  
  
  document.addEventListener("keypress", function(event) {
    if (event.key == 'p') {
      changePage("complete");
    }
  });


  function done() {
    score = round(correctDots * 1000 / dots.length)/10
    scoreStr = score + "%";
    changePage("complete");
  }
  
}









/*{
let x = [],
  y = [],
  segNum = 20,
  segLength = .1;

for (let i = 0; i < segNum; i++) {
  x[i] = 0;
  y[i] = 0;
}

strokeWeight(9);
stroke(255, 100);

function draw() {
  background(0);
  dragSegment(0, mouseX, mouseY);
  for (let i = 0; i < x.length - 1; i++) {
    dragSegment(i + 1, x[i], y[i]);
  }
}

function dragSegment(i, xin, yin) {
  const dx = xin - x[i];
  const dy = yin - y[i];
  const angle = atan2(dy, dx);
  x[i] = xin - cos(angle) * segLength;
  y[i] = yin - sin(angle) * segLength;
  segment(x[i], y[i], angle);
}

function segment(x, y, a) {
  push();
  translate(x, y);
  rotate(a);
  line(0, 0, segLength, 0);
  pop();
}
}*/