var hr, mn, sc;
var seconds, hours, minutes;


function setup() {
  createCanvas(800, 400);
  angleMode(DEGREES);

}

function draw() {
  background(0);
  translate(200, 200)
  rotate(-90);
  hr = hour();
  mn = minute();
  sc = second();
  
  strokeWeight(8);
  stroke(255, 100, 250);
  noFill();
  seconds = map(sc, 0, 60, 0, 360);
  arc(0, 0, 300, 300, 0, seconds);

  push();
  rotate(seconds);
  stroke(255, 100, 250);
  line(0, 0, 100, 0);
  pop();

  stroke(255, 0, 0);
  minutes = map(mn, 0, 60, 0, 360);
  arc(0, 0, 280, 280, 0, minutes);

  push();
  rotate(minutes);
  stroke(255, 0, 0);
  line(0, 0, 100, 0);
  pop();

  stroke(0, 255, 0);
  hours = map(hr % 12, 0, 12, 0, 360);
  arc(0, 0, 260, 260, 0, hours);

  push();
  rotate(hours);
  stroke(0, 255, 0);
  line(0, 0, 100, 0);
  pop();





  //fill(225)
  //noStroke()
  //text(hr + ":" + mn +":" + sc, 400, 200);

}