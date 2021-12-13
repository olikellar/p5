var col = 0;
let a = "rifke";
let a1 = "sadleir";
let b = "CODING WORKSHOP WITH";
let c = "MONDAY 3RD FEB 10AM-1PM IN 250";
let d = "#futureselves2020";

function setup() {
  createCanvas(windowHeight, windowHeight);
}

function windowResized() {
  resizeCanvas(windowHeight, windowHeight);
}

function draw() {
  let scalr = height / 900;
  scale(scalr, scalr);
  col = map(mouseX, scalr * 0, scalr * 900, 0, 255);
  background("lightblue");
  noStroke();

  fill(0, 10, 30, col);
  rect(-1, -1, 451, 1001);

  fill(0, 10, 30, 255 - col);
  rect(450, -1, 450, 1001);

  // let pos = map(mouseX, 0, 900*scalr,0,9 );

  fill(255, 215, 0);
  ellipse(mouseX / scalr, 450, 190);
  fill(255, 215, 0, 50);
  ellipse(mouseX / scalr, 450, 200);
  fill("white");
  ellipse(width / scalr - mouseX / scalr, 450, 190);
  fill(255, 50);
  ellipse(width / scalr - mouseX / scalr, 450, 200);

  fill(70, 128, 50);
  rect(350, -2, 200, 1000);

  fill(0, 30, 50, 255 - col);
  rect(450, -1, 100, 1001);

  fill(0, 30, 50, col);
  rect(350, -1, 100, 1001);

  textFont("Optima");
  textStyle();
  textAlign(LEFT);
  textSize(50);
  textLeading(45);
  fill(255, 245, 245, col);
  text(b, 22, 22, 350, 1000);
  fill(0, 30, 50, 255 - col);
  text(b, 22, 22, 350, 1000);

  textSize(24);
  fill(255, 245, 245, col);
  text(d, 22, 855, 350, 1000);
  fill(0, 30, 50, 255 - col);
  text(d, 22, 855, 350, 1000);

  textSize(230);
  fill(255);
  text(a, 15, 260, 350, 1000);
  text(a1, 220, 400, 350, 1000);

  textAlign(RIGHT);
  textSize(50);
  textLeading(45);
  fill(0, 30, 50, col);
  text(c, 560, 697, 328, 1000);
  fill(255, 245, 245, 255 - col);
  text(c, 560, 697, 328, 1000);

  textSize(24);
  textLeading(45);
  fill(0, 30, 50, col);
  text(d, 553, 22, 328, 1000);
  fill(255, 245, 245, 255 - col);
  text(d, 553, 22, 328, 1000);
}
