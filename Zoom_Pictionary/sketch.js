let ax;
let ay;
let bx;
let by;
let cx;
let cy;
let dx;
let dy;
let ex;
let ey;
let fx;
let fy;
let gx;
let gy;
let hx;
let hy;

let s;
let s2;
let c;

let colourR;
let colourG;
let colourB;


// let t1 = 'Rules:'
// let t2 = '- the artist gets a word from the host'
// let t3 = '- they then have 20 seconds to draw their word'
// let t4 = '- refresh the page to restart the timer'
// let t5 = '- the audience must write down their guess on paper'
// let t6 = '- any correct guesses earn 1 point'

let t1 = 'Guess what Noah is drawing in the chat, first to guess correctly wins!'
let t2 = ''
let t3 = ''
let t4 = ''
let t5 = ''
let t6 = ''

let time;

function setup() {
  s = windowHeight/500;
  s2 = s;
  
  ax = random(100,200);
  bx = random(200,300);
  cx = random(300,400);
  dx = random(300,400);
  ex = random(300,400);
  fx = random(200,300);
  gx = random(100,200);
  hx = random(100,200);
  
  ay = random(100,200);
  by = random(100,200);
  cy = random(100,200);
  dy = random(200,300);
  ey = random(300,400);
  fy = random(300,400);
  gy = random(300,400);
  hy = random(200,300);
  
  colourR =random(30,240);
  colourG =random(30,240);
  colourB =random(30,240);
  
  c = createCanvas(windowHeight, windowHeight);
  background(255);
  fill(colourR, colourG, colourB);
  noStroke();
  beginShape();
  vertex(s2*ax,s*ay);
  vertex(s2*bx,s*by);
  vertex(s2*cx,s*cy);
  vertex(s2*dx,s*dy);
  vertex(s2*ex,s*ey);
  vertex(s2*fx,s*fy);
  vertex(s2*gx,s*gy);
  vertex(s2*hx,s*hy);
 
  endShape();
}



function draw() {
  textAlign(LEFT);
    strokeWeight(0);
    fill(0);
    textFont('Avenir');
    textStyle(BOLD);
    textSize(14.5*s);
    text(t1, 15*s, 25*s);
  textStyle(NORMAL);
  textSize(8*s);
  text(t2, 5*s, 40*s);
  text(t3, 5*s, 50*s);
  text(t4, 5*s, 60*s);
  text(t5, 5*s, 70*s);
  text(t6, 5*s, 80*s);
  
  // if(millis()<1000){
  //   time = 20;
  // }else if(millis()<2000){
  //   time = 19;
  // }else if(millis()<3000){
  //   time = 18;
  // }else if(millis()<4000){
  //   time = 17;
  // }else if(millis()<5000){
  //   time = 16;
  // }else if(millis()<6000){
  //   time = 15;
  // }else if(millis()<7000){
  //   time = 14;
  // }else if(millis()<8000){
  //   time = 13;
  // }else if(millis()<9000){
  //   time = 12;
  // }else if(millis()<10000){
  //   time = 11;
  // }else if(millis()<11000){
  //   time = 10;
  // }else if(millis()<12000){
  //   time = 9;
  // }else if(millis()<13000){
  //   time = 8;
  // }else if(millis()<14000){
  //   time = 7;
  // }else if(millis()<15000){
  //   time = 6;
  // }else if(millis()<16000){
  //   time = 5;
  // }else if(millis()<17000){
  //   time = 4;
  // }else if(millis()<18000){
  //   time = 3;
  // }else if(millis()<19000){
  //   time = 2;
  // }else if(millis()<20000){
  //   time = 1;
  // }else if(millis()>20000){
  //   time = '';
  // }
  
  // textSize(30*s);
  // strokeWeight(0);
  // fill(255);
  // rect(6*s,41*s,34*s,25*s)
  // noStroke();
  // fill(150);
  // text(time, 5*s, 65*s);
  
  strokeWeight(6);
  stroke(0);
  //time allowed for drawing given here in milliseconds : 30000 = 30 seconds
  if (mouseIsPressed === true && millis() < 300000) {
    line(pmouseX, pmouseY, mouseX, mouseY);
  }
  
  // strokeWeight(1);
  // noFill();
  // beginShape();
  // vertex(20*s,17*s);
  // vertex(20*s,7*s);
  // vertex(5*s,7*s);
  // vertex(5*s,17*s);
  // endShape(CLOSE);
  // beginShape();
  // vertex(20*s,17*s);
  // vertex(20*s,7*s);
  // vertex(8*s,7*s);
  // vertex(7.5*s,17*s);
  // endShape(CLOSE);
  // beginShape();
  // vertex(16*s,7*s);
  // vertex(15*s,5.7*s);
  // vertex(10*s,5.7*s);
  // vertex(9*s,7*s);
  // endShape(CLOSE);
  // ellipse(13.5*s,12*s,8*s);
  // ellipse(13.5*s,12*s,6.5*s);
  // ellipse(18.5*s,8.5*s,1*s);
  // beginShape();
  // vertex(27*s,7*s);
  // vertex(27*s,16.5*s);
  // vertex(30*s,13*s);
  // vertex(27*s,16.5*s);
  // vertex(24*s,13*s);
  // vertex(27*s,17*s);
  // vertex(30*s,17*s);
  // vertex(24*s,17*s);
  // endShape();
}


// function mousePressed(){

//   if(mouseX<(30*s) && mouseX>(5*s) && mouseY>(7*s) && mouseY<(17*s)){
// saveCanvas('myCanvas', 'jpg');
// }
// }

