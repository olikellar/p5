//Colours
{
  var cactus = ([94, 136, 64]);
  var khaki = ([90, 80, 56]);
  var aqua = ([211, 249, 228]);
  var moon = ([252, 252, 238]);
  var coral = ([248, 91, 79]);
  var mustard = ([229, 162, 68]);
  var ember = ([255, 85, 34]);
  var pitch = ([23, 22, 28]);
  var flint = ([65, 59, 60]);
  var shell = ([250, 209, 194]);
}

var w = 0;
var h = 0;

var x = 0;
var y = 0;

var k = 0;
var l = 0;

var stat = false;
var face = 0;

function setup() {
  if (windowWidth > windowHeight) {
    size = windowHeight;
  } else size = windowWidth;

  cursor('pointer');
  //noCursor();

  let cnv = createCanvas(windowWidth, windowHeight);

  w = height;
  h = height;

  x = w / h
  y = w / h

  k = w / h
  l = w / h


  background(moon);

}

function windowResized() {
  if (windowWidth > windowHeight) {
    size = windowHeight;
  } else size = windowWidth;
  let cnv = createCanvas(windowWidth, windowHeight);

  background(moon);
}

function draw() {


  stroke(255);
  noFill();

  textSize(200)
  //text(face, 100,200);

}


function cupb(a, b) {
  stroke(0);
  angleMode(DEGREES);
  fill(moon)

  ellipse(a, b - 3, x * 200, x * 80);

  beginShape();
  vertex(a - 92, b);
  vertex(a - 70, b + 187);
  vertex(a + 70, b + 187);
  vertex(a + 92, b);
  vertex(a, b - 23);
  endShape(CLOSE);

  arc(a, b, x * 184, x * 64, 180, 0);
  ellipse(a, b + 187, x * 140, x * 44);
  arc(a, b + 177, x * 140, x * 44, 4, 176);
}

function cupf(a, b) {
  stroke(0);
  angleMode(DEGREES);
  fill(moon)

  beginShape();
  vertex(a - 92, b + 10);
  vertex(a - 70, b + 187);
  vertex(a, b + 207);
  vertex(a + 70, b + 187);
  vertex(a + 92, b + 10);
  endShape(CLOSE);

  ellipse(a, b - 3, x * 200, x * 80);
  arc(a, b - 6, x * 184, x * 64, 345, 195);
  arc(a, b - 6, x * 184, x * 64, 260, 325);
  arc(a, b + 187, x * 140, x * 64, 0, 180);
}

function mousePressed() {
  if (mouseIsPressed) {
    face = random(2)
  }

  if (face < 1) {
    cupf(mouseX, mouseY);
  } else {
    cupf(mouseX, mouseY);
  }
}

function touchStarted() {
  if (mouseIsPressed) {
    face = random(1)
  }

  if (face < 1) {
    cupf(mouseX, mouseY);
  } else {
    cupf(mouseX, mouseY);
  }
}
