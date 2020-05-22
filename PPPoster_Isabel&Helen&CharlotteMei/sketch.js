var moon = ([202, 202, 185]);
let bubbles = [];

let t1 = 'ISABEL + HELEN'
let t1x = '•'
let t1a = 'CHARLOTTE MEI'
let t2 = 'Professional Practice Talks'
let t4 = 'Sallis Benney Theatre'
let t5 = 'Thursday 5th March'
let t6 = '16:30'


function setup() {
  noCursor();

  createCanvas(800, 800);
  for (let i = 0; i < 10; i++) {
    let x = random(width);
    let y = random(height);
    let r = random(10, 40);
    bubbles[i] = new Bubble(x, y, r);
  }

  if (windowWidth > windowHeight) {
    size = windowHeight-5;
  } else size = windowWidth-5;

  //cursor('pointer');
  noCursor();

  let cnv = createCanvas(size, size - (size - (size)));
  //cnv.position((windowWidth - (windowWidth * 0.95)) / 2, (windowWidth - (windowWidth * 0.95)) / 2);

}

function windowResized() {
  if (windowWidth > windowHeight) {
    size = windowHeight;
  } else size = windowWidth;
  let cnv = createCanvas(size, size - (size - (size)));
  // cnv.position((windowWidth - (windowWidth * 0.95)) / 2, (windowWidth - (windowWidth * 0.95)) / 2);
}


function touchStarted() {
  let r = random(10, 50);
  let b = new Bubble(mouseX, mouseY, r, 1, 1, random(width / 1000, width / 2500));
  bubbles.push(b);


}

function draw() {
  background(110, 170, 255);
  //background(255, 220, 240);
  let w = width;
  let q = w * 0.001;
  let g = w / 25;

  // fill(80, 110, 220);
  // rect(0, w / 1.49, w, w / 2);

  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].move();
    bubbles[i].show();



    noStroke();
    rectMode(CORNER);
    fill(205, 150, 118);
    rect(0, w / 1.25, w / 1.394, w / 5);

    fill(222, 222, 208);
    beginShape();
    vertex(w / 3.1, w / 1.25);
    vertex(w / 4, w / 1.145);
    vertex(w / 4, w / 3.1);
    vertex(w / 3.1, w / 6);
    endShape(CLOSE);

    beginShape();
    vertex(w / 1.393, w / 2.7);
    bezierVertex(w / 1.01, w / 70.00, -w / 40.00, 10, w / 3.54 + g, w / 2.6);
    bezierVertex(w / 3.41 + g, w / 15.00, w / 1.39, w / 11.00 + g, w / 1.393, w / 3);
    endShape();

    fill(moon);
    rect(0, 0, w / 3.54, w);
    rect(w / 1.393, 0, w / 3.54, w);
    rect(0, w / 1.19, w, w / 5);
    rect(0, 0, w, w / 6.6);
    rect(w / 1.47, w / 40, w, w / 6.7);
    beginShape();
    vertex(w / 1.393, w / 2.7);
    bezierVertex(w / 1.01, w / 70.00, -w / 40.00, 10, w / 3.54, w / 2.7);
    bezierVertex(w / 3.41, w / 15.00, w / 1.39, w / 11.00, w / 1.393, w / 2.7);
    endShape();


    // if (mouseIsPressed) {
    //   let r = random(10, 50);
    //   let b = new Bubble(mouseX, mouseY, r, 1, 1, q);
    //   bubbles.push(b);
    // }

    textAlign(LEFT);
    strokeWeight(0);
    fill(155, 110, 78);
    textFont('Avenir');
    textStyle(BOLD);
    textSize(w / 44);
    text(t1, w / 3.56, w / 1.155, w, w);
    textAlign(RIGHT);
    text(t1a, w / 4.42, w / 1.155, w / 2, w);
    textSize(w / 66);
    text(t4, w / 4.47, w / 1.11, w / 2, w);
    textSize(w / 66);
    textAlign(LEFT);
    text(t1x, w / 2.02, w / 1.15, w, w);
    text(t6, w / 2.1, w / 1.11, w, w);
    textSize(w / 66);
    text(t5, w / 3.56, w / 1.11, w, w);


  }


}

class Bubble {
  constructor(x, y, r, n, m, q) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.n = n;
    this.m = m;
    this.q = q;
  }

  move() {
    // this.x = this.x + random(0,1);
    this.n = this.n + 0.01;
    this.y = this.y - this.n + this.n / 1.7;
    this.x = this.x + this.n;
  }

  show() {
    //   stroke(255);
    //   strokeWeight(4);
    //   noFill();
    //   ellipse(this.x, this.y, this.r * 2);

    let w = this.q

    stroke(0);
    angleMode(DEGREES);
    fill(255);

    ellipse(this.x - this.q * 8, this.y - this.q * 1, this.q * 23, this.q * 13);
    ellipse(this.x + this.q * 8, this.y - this.q * 1, this.q * 23, this.q * 13);

    noStroke();
    fill(110, 170, 255);
    ellipse(this.x + this.q * 9, this.y + this.q * 1, this.q * 21, this.q * 13);
    ellipse(this.x - this.q * 9, this.y + this.q * 1, this.q * 21, this.q * 13);


  }
}
