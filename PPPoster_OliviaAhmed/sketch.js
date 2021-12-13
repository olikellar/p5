let movers = [];
let scalr;

function setup() {
  createCanvas(windowHeight, windowHeight);
  for (i = 0; i < 10; i++) {
    movers[i] = new Mover(random(width), random(0 - height, 0), (width / 14));

  }
}

function touchStarted() {
  for (i = 0; i < movers.length; i++) {
    movers[i].clicked(mouseX, mouseY);
  }
}
  function windowResized() {
  resizeCanvas(windowHeight, windowHeight);
}

function draw() {
  scalr = width / 1000;
  
  background(221, 255, 51);
  stroke(255);
  strokeWeight(20 * scalr);
  rectMode(CENTER);
  rect(width / 2, width / 2, width * 0.85, width * 0.85);
  noFill();
  rect(width / 2, width / 2, width * 0.60, width * 0.85);
  rect(width / 2, width / 2, width * 0.60, width * 0.45);
  line(width / 2, width * 0.28, width / 2, width * 0.72);


  for (let mover of movers) {
    let gravity = createVector(0, 0.4);
    mover.applyForce(gravity);
    mover.update();
    mover.edges();
    mover.show();
  }
  push();
  fill(255);
  stroke(0);
  strokeWeight(2);
  textStyle(BOLD);
  textSize(170 * scalr);
  textAlign(CENTER, CENTER);
  textFont('Avenir');
  text('HORT', height / 2, height / 1.96);
  textStyle(NORMAL);
  noStroke();
  fill(0);
  textSize(23 * scalr);
  text('THU 25 FEBRUARY', height / 6.15, height / 1.035);
  text('12:00 · ONLINE', height / 1.17, height / 1.035);
  pop();
}
