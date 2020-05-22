let on = 0;
let A1 = 50;
let A2 = 50;
let light = 200;
let d = 0;
let size = 600;
let p = 0;
let r = 33;
let g = 112;
let b = 228;
let glow = 0;

let t1 = 'Anywways Creative'
let t2 = 'Professional Practice'
let t3 = '4:30pm'
let t4 = 'Sallis Benney Theatre'
let t5 = 'Thursday 27th February · 4:30pm'

let onsound;
let offsound;

let onstat = 0;
let offstat = 1;


function setup() {
  if (windowWidth > windowHeight) {
    size = windowHeight-5;
  } else size = windowWidth-5;

  cursor('pointer');
  noCursor();

  let cnv = createCanvas(size, size - (size - (size)));
  //cnv.position((windowWidth - (windowWidth * 0.95)) / 2, (windowWidth - (windowWidth * 0.95)) / 2);

  soundFormats('m4a','mp3');
  onsound = loadSound('on');
  onsound.setVolume(0.3);
  offsound  = loadSound('off')
  offsound.setVolume(0.3);

}

function windowResized() {
  if (windowWidth > windowHeight) {
    size = windowHeight;
  } else size = windowWidth;
  let cnv = createCanvas(size, size - (size - (size)));
  // cnv.position((windowWidth - (windowWidth * 0.95)) / 2, (windowWidth - (windowWidth * 0.95)) / 2);
}

function draw() {
  //SET UP
  w = width;
  h = height;
  wh = (width + height) / 2;
  s = wh / 145;
  a = s * 0.5;

  stroke(0);

  //BACKGROUND
  background(r, g, b)



  //SWITCH outline
  rectMode(CENTER);
  strokeWeight(a * .395);
  fill(255);
  rect(w / 2, h / 2, s * 34, s * 34, s / 3);

  //SWITCH box
  strokeWeight(s / 50);
  fill(255);
  rect(w / 2, h / 2, s * 34, s * 34, s / 3);
  rect(w / 2, h / 2, s * 33, s * 33, s / 3);

  //SWITCH surround
  fill(70);
  rect(w / 2, h / 2, (s * 7) + a / 2, (s * 12) + a / 2, s / 3);

  //SWITCH
  noStroke();
  fill(255);
  rect(w / 2, h / 2, s * 7, s * 12, s / 3);

  //SCREWS
  stroke(0);
  fill(90);
  ellipse((w / 2) - s * 11, (h / 2), s * 3.2);
  ellipse((w / 2) + s * 11, (h / 2), s * 3.2);

  //SCREWS
  fill(150);
  ellipse((w / 2) - s * 11, (h / 2), s * 2.8);
  ellipse((w / 2) + s * 11, (h / 2), s * 2.8);

  stroke(0);
  fill(130);
  arc((w / 2) - s * 11, (h / 2), s * 2.8, s * 2.8, PI / 3, 1.34 * PI, CHORD);
  arc((w / 2) + s * 11, (h / 2), s * 2.8, s * 2.8, PI / 1.8, 1.55 * PI, CHORD);


  if (mouseIsPressed && mouseY < (h / 2 - s * 1.5) && mouseY > (h / 2 - s * 5.5) && mouseX < (w / 2 + s * 3.5) && mouseX > (w / 2 - s * 3.5)) {
    on = 3;
    d = 'off'
  } else if (mouseIsPressed && mouseY > (h / 2 + s * 1.5) && mouseY < (h / 2 + s * 5.5) && mouseX < (w / 2 + s * 3.5) && mouseX > (w / 2 - s * 3.5)) {
    on = on - (on + 1);
    d = 'on'

  }

  if (onstat == '0' && onsound.isPlaying() == false && mouseIsPressed && mouseY < (h / 2 - s * 1.5) && mouseY > (h / 2 - s * 5.5) && mouseX < (w / 2 + s * 3.5) && mouseX > (w / 2 - s * 3.5)){
    // onsound.playMode('untilDone');
    onsound.play();
    onstat = 1;
    offstat = 0;
  } else if (offstat == '0' && offsound.isPlaying() == false && mouseIsPressed && mouseY > (h / 2 + s * 1.5) && mouseY < (h / 2 + s * 5.5) && mouseX < (w / 2 + s * 3.5) && mouseX > (w / 2 - s * 3.5)){
    // onsound.playMode('untilDone');
    offsound.play();
    offstat = 1;
    onstat = 0;
  }



  if (on < 2) {
    //ON ——————————————————————————————————————————————————————————————————————
    //SWITCH top shadow
    noStroke();
    fill(0, A1);
    rect(w / 2, h / 2 - s * 2.5, s * 7, s * 5, s / 3, s / 3, 0, 0);

    //SWITCH top highlight shoadow
    noStroke();
    fill(0, 90);
    rect(w / 2, h / 2 - s * 5.8, s * 7, s * .7, s / 3, s / 3);

    //SWITCH top highlight
    noStroke();
    fill(246);
    rect(w / 2, h / 2 - s * 5.5, s * 7, s * .6, s / 3, s / 3, 0, 0);

    //SWITCH bottom shadow
    noStroke();
    fill(0, 10);
    //rect(w / 2, h / 2 + s * 3, s * 7, s * 6, 0, 0, s / 3, s / 3);

    glow = 0;
    light = 0;

  } else {
    //OFF ——————————————————————————————————————————————————————————————————————
    //SWITCH bottom shadow
    noStroke();
    fill(0, 85);
    rect(w / 2, h / 2 + s * 3, s * 7, s * 6, 0, 0, s / 3, s / 3);
    //SWITCH bottom hightlight
    fill(255);
    rect(w / 2, h / 2 + s * 2.5, s * 7, s * 5, 0, 0, s / 3, s / 3);
    //SWTICH top shadow
    noStroke();
    fill(0, 10);
    rect(w / 2, h / 2 - s * 3, s * 7, s * 6, s / 3, s / 3, 0, 0);

    glow = 255;
    light = 200;

  }

  strokeWeight(a * .2);
  stroke(10, 50);
  fill(0, 0);
  rect(w / 2, h / 2, (s * 7), (s * 12), s / 3);

  //rectMode(CENTER);
  //stroke(0);
  //fill(0, 0);
  //strokeWeight(a * .395);
  //rect(w / 2, h / 2, w * 0.934, w * 0.934)
  if (d == 'off') {
    textAlign(LEFT);
    strokeWeight(0);
    fill(230);
    textFont('Arial');
    textStyle(BOLD);
    textSize(w * 0.014);
    text(t2, s * 17.8, w - mouseY + s * 45);
    text(t5, s * 56.4, w - mouseY + s * 45);
    //text(t3, mouseX + s * 58.8, w - mouseY + s * 0.5);
    textSize(w * 0.014);
    text(t4, s * 104, w - mouseY + s * 45);
  }
  textAlign(LEFT);
  strokeWeight(0);
  fill(230);
  textFont('Cochin');
  textStyle(BOLD);
  textSize(w * 0.094);
  text(t1, s * 17.8, mouseY - s * 45);


  fill(230)
  ellipse(mouseX,mouseY,s*2.5);
  triangle(mouseX-0.7*s, mouseY-0.8*s, mouseX+0.7*s, mouseY-0.8*s, mouseX,mouseY-3.1*s);
  triangle(mouseX+1*s, mouseY+0.6*s, mouseX+0.8*s, mouseY-0.8*s, mouseX+3*s,mouseY-0.75*s);
  triangle(mouseX-1*s, mouseY+0.6*s, mouseX-0.8*s, mouseY-0.8*s, mouseX-3*s,mouseY-0.75*s);
  triangle(mouseX-1*s, mouseY+0.5*s, mouseX, mouseY+1.3*s, mouseX-1.8*s,mouseY+2.9*s);
  triangle(mouseX+1*s, mouseY+0.5*s, mouseX, mouseY+1.3*s, mouseX+1.8*s,mouseY+2.9*s);


  //SHADE
  fill(5, 10, 30, light);
  rect(w / 2, h / 2, w, h);

  textAlign(LEFT);
  strokeWeight(0);
  fill(200, 255, 200, glow);
  textFont('Cochin');
  textStyle(BOLD);
  textSize(w * 0.094);
  text(t1, s * 17.8, mouseY - s * 45);

  if (d == 'off') {
    textAlign(LEFT);
    strokeWeight(0);
    fill(200, 255, 200, glow);
    textFont('Arial');
    textStyle(BOLD);
    textSize(w * 0.014);
    text(t2, s * 17.8, w - mouseY + s * 45);
    text(t5, s * 56.4, w - mouseY + s * 45);
    //text(t3, mouseX + s * 58.8, w - mouseY + s * 0.5);
    textSize(w * 0.014);
    text(t4, s * 104, w - mouseY + s * 45);
    ellipse(mouseX,mouseY,s*2.5);
    triangle(mouseX-0.7*s, mouseY-0.8*s, mouseX+0.7*s, mouseY-0.8*s, mouseX,mouseY-3.1*s);
  triangle(mouseX+1*s, mouseY+0.6*s, mouseX+0.8*s, mouseY-0.8*s, mouseX+3*s,mouseY-0.75*s);
  triangle(mouseX-1*s, mouseY+0.6*s, mouseX-0.8*s, mouseY-0.8*s, mouseX-3*s,mouseY-0.75*s);
  triangle(mouseX-1*s, mouseY+0.5*s, mouseX, mouseY+1.3*s, mouseX-1.8*s,mouseY+2.9*s);
  triangle(mouseX+1*s, mouseY+0.5*s, mouseX, mouseY+1.3*s, mouseX+1.8*s,mouseY+2.9*s);


  }


}

// function mousePressed(){
//   if (mouseY < (h / 2 - s * 1.5) && mouseY > (h / 2 - s * 5.5) && mouseX < (w / 2 + s * 3.5) && mouseX > (w / 2 - s * 3.5) && on < 2) {
//     onsound.play();
//   } else if (mouseY > (h / 2 + s * 1.5) && mouseY < (h / 2 + s * 5.5) && mouseX < (w / 2 + s * 3.5) && mouseX > (w / 2 - s * 3.5) && on > 2) {
//     offsound.play();
//
//   }
// }
