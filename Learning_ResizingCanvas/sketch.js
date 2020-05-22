let cinzel;

function preload(){
cinzel = loadFont('CinzelDecorative-Regular.ttf');
}

function setup() {
  if (windowWidth > windowHeight) {
    createCanvas(windowHeight - 5, windowHeight - 5);
  }
  if (windowWidth < windowHeight) {
    createCanvas(windowWidth - 5, windowWidth - 5);
  }
}

function windowResized() {
  if (windowWidth > windowHeight - 5) {
    resizeCanvas(windowHeight - 5, windowHeight - 5)
  }
  if (windowWidth + 5 < windowHeight) {
    resizeCanvas(windowWidth - 5, windowWidth - 5)
  }
}

function draw() {
  background(30,133,133);
  fill(255);
  textFont(cinzel);
  textSize(width/7);
  textAlign(CENTER, CENTER);
  text('resize', width/2, height/2);
}
