let t1 = 'JESSICA'
let t1a = 'DANCE'
let t2 = 'Professional Practice Talk    ·    Microsoft Teams    ·    16:30    ·    Thursday 29th October'
let t3 = 'Microsoft Teams'
let t4 = 'Thursday 29th October'
let t5 = '16:30'


// Spring drawing constants for top bar
let springHeight = 32,
  left,
  right,
  maxHeight = 190,
  minHeight = 130,
  over = false,
  move = false;

//bezier curves
let c1x = 0;
let c1y = 0;
let c2x = 0;
let c2y = 0;
let ax = 0;
let ay = 0;
let Lc1x = 0;
let Lc1y = 0;
let Lc2x = 0;
let Lc2y = 0;
let Lax = 0;
let Lay = 0;

//bezier curves
let c1x2 = 0;
let c1y2 = 0;
let c2x2 = 0;
let c2y2 = 0;
let ax2 = 0;
let ay2 = 0;
let Lc1x2 = 0;
let Lc1y2 = 0;
let Lc2x2 = 0;
let Lc2y2 = 0;
let Lax2 = 0;
let Lay2 = 0;

//bezier curves
let c1x3 = 0;
let c1y3 = 0;
let c2x3 = 0;
let c2y3 = 0;
let ax3 = 0;
let ay3 = 0;
let Lc1x3 = 0;
let Lc1y3 = 0;
let Lc2x3 = 0;
let Lc2y3 = 0;
let Lax3 = 0;
let Lay3 = 0;


// Spring simulation constants
let M = 1, // Mass
  K = 0.25, // Spring constant
  D = 0.94, // Damping
  R = 140; // Rest position

// Spring simulation variables
let ps = R, // Position
  vs = 0.0, // Velocity
  as = 0, // Acceleration
  f = 0; // Force


let Anton;
function preload() {
  Anton = loadFont('Anton.ttf');
}

function setup() {
  createCanvas(700, 700);
  rectMode(CORNERS);
  noStroke();
  left = width / 2 - 170;
  right = width / 2 + 170;

  noCursor();
}


function draw() {
  background(255, 205, 200);

  textAlign(LEFT);
  strokeWeight(0);
  fill(255, 255, 240);
  textFont('Anton');
  textStyle(BOLD);
  textSize(204);
  text(t1, 42, 220);
  textSize(264);
  text(t1a, 35, 465);

  textFont('Helvetica');
  textSize(15);
  text(t2, 42, 659);


  stroke(50);
  strokeWeight(6);

  strokeJoin(MITER);

  fill(255, 255, 240);

  rect(70, 600, 630, 625, 0, 0, 100, 100);

  push();
  translate(0, 100);
  updateSpring();
  drawSpring();
  fill(0);
  pop();

  fill(255, 255, 240);
  beginShape();
  vertex(-10, -10);
  vertex(710, -10);
  vertex(710, 710);
  vertex(-10, 710);
  beginContour();
  vertex(20, 20);
  vertex(20, 680);
  vertex(680, 680);
  vertex(680, 20);
  endContour();
  endShape(CLOSE);

}

function drawSpring() {
  // Draw base
  fill(0);
  let baseWidth = 1.2 * ps + -8;

  stroke(50);
  fill(255, 0, 0, 180);

  c1x = width / 2 - baseWidth + 35;
  c1y = ps + springHeight + 20;
  c2x = width / 2 - baseWidth + 60;
  c2y = ps + springHeight;
  ax = width / 2 - baseWidth + 120;
  ay = ps + springHeight;

  Lc1x = width / 2 + baseWidth - 35;
  Lc1y = ps + springHeight + 20;
  Lc2x = width / 2 + baseWidth - 60;
  Lc2y = ps + springHeight;
  Lax = width / 2 + baseWidth - 25;
  Lay = ps + springHeight + 100;

  beginShape();
  vertex(width / 2 - baseWidth + 25, ps + springHeight + 100);
  bezierVertex(c1x, c1y, c2x, c2y, ax, ay);
  vertex(width / 2 + baseWidth - 120, ps + springHeight);
  bezierVertex(Lc2x, Lc2y, Lc1x, Lc1y, Lax, Lay);
  vertex(width / 2 + baseWidth, 500);
  vertex(width / 2 - baseWidth, 500);
  endShape(CLOSE);


  // Set color and draw top bar
  if (over || move) {
    fill(0);
  } else {
    fill(0);
  }

  // rect(left, ps, right, ps + springHeight);
}

function updateSpring() {
  // Update the spring position
  if (!move) {
    f = -K * (ps - R); // f=-ky
    as = f / M; // Set the acceleration, f=ma == a=f/m
    vs = D * (vs + as); // Set the velocity
    ps = ps + vs; // Updated position
  }

  if (abs(vs) < 0.1) {
    vs = 0.0;
  }

  // Test if mouse if over the top bar
  if (mouseX > left && mouseX < right && mouseY > ps + 135 && mouseY < ps + springHeight + 425) {
    over = true;
  } else {
    over = false;
  }

  // Set and constrain the position of top bar
  if (move) {
    ps = mouseY - springHeight / 2;
    ps = constrain(ps, minHeight, maxHeight);
  }
}

function mousePressed() {
  if (over) {
    move = true;
  }
}

function mouseReleased() {
  move = false;
}
