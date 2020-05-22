var x = 200;
var x2 = -150;
var x3 = +550;
var y = 220;
var y2 = 220;
var y3 = 220;

let t1 = 'Our Place Studio'
let t2 = 'Professional Practice'
let t3 = '4:30pm'
let t4 = 'Sallis Benney Theatre'

var k = {
  x:50,
  y:905
}

function setup() {
  createCanvas(1200, 1200);
  angleMode(DEGREES);
}

function draw() {

  let x1 = map(mouseX, 440, 750, 0, 200, true);
  let xl = map(mouseX, 90, 400, 50, 120, true);
  let xr = map(mouseX, 800, 1100, 0, 299, true);

  k.x = map(mouseX, 90, 1300, -360, 1300, true);


 background(255,88,23);
  //background(255,210,200);

  stroke(0);
  strokeWeight(3);
  fill(0,0,0,0);
  rect(40,40,1120,1120);
  fill(55,160,50,0);
  // rect(40,40,1120,100);
  rect(40,1060,1120,100);

  textAlign(LEFT);
  strokeWeight(0);
  fill(0);
  textFont('Avenir');
  textStyle(BOLD);
  textSize(32);
  text(t3, 76, 1097, 700, 80);
  text(t1, 76, 78, 700, 80);

  textAlign(RIGHT);
  text(t4, 790, 1097, 340, 80);
  //textStyle(NORMAL);
  text(t2, 790, 78, 340, 80);



  //Middle

  stroke(0);
  strokeWeight(5);
  ellipse(400+x,400+y,300,300)
  arc(405+x, 170+y, 144, 166, 353, 97, OPEN);
  arc(341+x, 216+y, 148, 153, 274, 33, OPEN);
  arc(489+x, 238+y, 188, 155, 172, 261, OPEN);
  arc(395+x, 185+y, 122, 146, 82, 223, OPEN);

  stroke(0);
  strokeWeight(.8);

  fill(55,160,50);
  arc(395+x, 185+y, 122, 146, 82, 223, OPEN);
  fill(55,120,50);
  arc(341+x, 216+y, 148, 153, 274, 33, OPEN);

  fill(55,160,50);
  arc(405+x, 170+y, 144, 166, 353, 97, OPEN);
  fill(55,140,50);
  arc(489+x, 238+y, 188, 155, 172, 261, OPEN);



  fill(55,130,50);
  ellipse(400+x,255+y,22,22);



  ellipse(400+x,263+y,55,33);
  ellipse(400+x,263+y,33,33);
  ellipse(400+x,263+y,11,33);


  fill(255,130,70);
  ellipse(400+x,400+y,300,300);

  fill(255,200,100);
  noStroke();
  ellipse(400+x,400+y,290,290);

  noStroke();
  fill(255,140,30);
  ellipse(400+x,400+y,270,270);

  stroke(0);
  fill(255,130,40);
  arc(400+x, 400+y, 300, 300, 270, 90, OPEN);

  noStroke();
  fill(255,200,100);
  beginShape();
  vertex(385+x, 290+y);
  vertex(381+x, 277+y);
  vertex(375+x, 272+y);
  vertex(360+x, 270+y);
  vertex(365+x, 265+y);
  vertex(399+x, 260+y)
  vertex(400+x, 540+y);
  vertex(335+x, 529+y);
  vertex(375+x, 530+y);
  vertex(383+x, 527+y);
  vertex(395+x, 440+y);
  vertex(395+x, 360+y);
  endShape(CLOSE);

  stroke(0);
  fill(255,130,40);
  arc(400+x, 400+y, -x1+300, 300, 90, 270, OPEN);

  //Left

  stroke(0);
  strokeWeight(5);
  ellipse(400+x2,400+y2,300,300)
  arc(405+x2, 170+y2, 144, 166, 353, 97, OPEN);
  arc(341+x2, 216+y2, 148, 153, 274, 33, OPEN);
  arc(489+x2, 238+y2, 188, 155, 172, 261, OPEN);
  arc(395+x2, 185+y2, 122, 146, 82, 223, OPEN);

  stroke(0);
  strokeWeight(.8);

  fill(55,160,50);
  arc(395+x2, 185+y2, 122, 146, 82, 223, OPEN);
  fill(55,120,50);
  arc(341+x2, 216+y2, 148, 153, 274, 33, OPEN);

  fill(55,160,50);
  arc(405+x2, 170+y2, 144, 166, 353, 97, OPEN);
  fill(55,140,50);
  arc(489+x2, 238+y2, 188, 155, 172, 261, OPEN);

  fill(55,130,50);
  ellipse(400+x2,255+y2,22,22);

  ellipse(400+x2,263+y2,55,33);
  ellipse(400+x2,263+y2,33,33);
  ellipse(400+x2,263+y2,11,33);

  fill(255,130,70);
  ellipse(400+x2,400+y2,300,300);

  fill(255,200,100);
  noStroke();
  ellipse(400+x2,400+y2,290,290);

  noStroke();
  fill(255,140,30);
  ellipse(400+x2,400+y2,270,270);

  stroke(0);
  fill(255,130,40);
  arc(400+x2, 400+y2, 300, 300, 270, 90, OPEN);

  noStroke();
  fill(255,200,100);
  beginShape();
  vertex(385+x2, 290+y2);
  vertex(381+x2, 277+y2);
  vertex(375+x2, 272+y2);
  vertex(360+x2, 270+y2);
  vertex(365+x2, 265+y2);
  vertex(399+x2, 260+y2)
  vertex(400+x2, 540+y2);
  vertex(335+x2, 529+y2);
  vertex(375+x2, 530+y2);
  vertex(383+x2, 527+y2);
  vertex(395+x2, 440+y2);
  vertex(395+x2, 360+y2);
  endShape(CLOSE);

  stroke(0);
  fill(255,130,40);
  arc(400+x2, 400+y2, -xl+350, 300, 90, 270, OPEN);

  //Right

  stroke(0);
  strokeWeight(5);
  ellipse(400+x3,400+y3,300,300)
  arc(405+x3, 170+y3, 144, 166, 353, 97, OPEN);
  arc(341+x3, 216+y3, 148, 153, 274, 33, OPEN);
  arc(489+x3, 238+y3, 188, 155, 172, 261, OPEN);
  arc(395+x3, 185+y3, 122, 146, 82, 223, OPEN);

  stroke(0);
  strokeWeight(.8);

  fill(55,160,50);
  arc(395+x3, 185+y3, 122, 146, 82, 223, OPEN);
  fill(55,120,50);
  arc(341+x3, 216+y3, 148, 153, 274, 33, OPEN);

  fill(55,160,50);
  arc(405+x3, 170+y3, 144, 166, 353, 97, OPEN);
  fill(55,140,50);
  arc(489+x3, 238+y3, 188, 155, 172, 261, OPEN);



  fill(55,130,50);
  ellipse(400+x3,255+y3,22,22);



  ellipse(400+x3,263+y3,55,33);
  ellipse(400+x3,263+y3,33,33);
  ellipse(400+x3,263+y3,11,33);


  fill(255,130,70);
  ellipse(400+x3,400+y3,300,300);

  fill(255,200,100);
  noStroke();
  ellipse(400+x3,400+y3,290,290);

  noStroke();
  fill(255,140,30);
  ellipse(400+x3,400+y3,270,270);

  stroke(0);
  fill(255,130,40);
  arc(400+x3, 400+y3, 300, 300, 270, 90, OPEN);

  noStroke();
  fill(255,200,100);
  beginShape();
  vertex(385+x3, 290+y3);
  vertex(381+x3, 277+y3);
  vertex(375+x3, 272+y3);
  vertex(360+x3, 270+y3);
  vertex(365+x3, 265+y3);
  vertex(399+x3, 260+y3)
  vertex(400+x3, 540+y3);
  vertex(335+x3, 529+y3);
  vertex(375+x3, 530+y3);
  vertex(383+x3, 527+y3);
  vertex(395+x3, 440+y3);
  vertex(395+x3, 360+y3);
  endShape(CLOSE);

  stroke(0);
  fill(255,130,40);
  arc(400+x3, 400+y3, -xr+300, 300, 90, 270, OPEN);

  //Cover

  stroke(0,0,0,0)
  fill(255,88,23);
  rect(k.x+60,1070,4000,80);
  //knife

  stroke(0);
  strokeWeight(5);
  fill(240);
  beginShape();
  vertex(200+k.x, 58+k.y);
  vertex(177+k.x, 76+k.y);
  vertex(88+k.x, 156+k.y);
  vertex(46+k.x, 200+k.y);
  vertex(37+k.x, 212+k.y);
  vertex(32+k.x, 220+k.y);
  vertex(24+k.x, 234+k.y);
  vertex(40+k.x, 233+k.y);
  vertex(60+k.x, 231+k.y);
  vertex(100+k.x, 215+k.y);
  vertex(150+k.x, 184+k.y);
  vertex(219+k.x, 127+k.y);
  vertex(212+k.x, 111+k.y);
  vertex(208+k.x, 98+k.y);
  vertex(210+k.x, 89+k.y);
  vertex(217+k.x, 79+k.y);
  vertex(250+k.x, 63+k.y);
  vertex(260+k.x, 58+k.y);
  vertex(280+k.x, 49+k.y);
  vertex(300+k.x, 35+k.y);
  vertex(320+k.x, 13+k.y);
  vertex(334+k.x, 15+k.y);
  vertex(339+k.x, 11+k.y);
  vertex(340+k.x, 4+k.y);
  vertex(334+k.x, -10+k.y);
  vertex(322+k.x, -27+k.y);
  vertex(310+k.x, -22+k.y);
  vertex(290+k.x, -10+k.y);
  endShape(CLOSE);

  stroke(0);
  strokeWeight(0);
  fill(226);
  beginShape();
  vertex(200+k.x, 58+k.y);
  vertex(177+k.x, 76+k.y);
  vertex(88+k.x, 156+k.y);
  vertex(46+k.x, 200+k.y);
  vertex(37+k.x, 212+k.y);
  vertex(32+k.x, 220+k.y);
  vertex(24+k.x, 234+k.y);
  vertex(40+k.x, 233+k.y);
  vertex(60+k.x, 231+k.y);
  vertex(100+k.x, 215+k.y);
  vertex(150+k.x, 184+k.y);
  vertex(219+k.x, 127+k.y);
  vertex(212+k.x, 111+k.y);
  vertex(208+k.x, 98+k.y);
  vertex(210+k.x, 89+k.y);
  vertex(217+k.x, 79+k.y);
  vertex(250+k.x, 63+k.y);
  vertex(260+k.x, 58+k.y);
  vertex(280+k.x, 49+k.y);
  vertex(300+k.x, 35+k.y);
  vertex(320+k.x, 13+k.y);
  vertex(334+k.x, 15+k.y);
  vertex(339+k.x, 11+k.y);
  vertex(340+k.x, 4+k.y);
  vertex(334+k.x, -10+k.y);
  vertex(322+k.x, -27+k.y);
  vertex(310+k.x, -22+k.y);
  vertex(290+k.x, -10+k.y);
  endShape(CLOSE);

  stroke(0);
  strokeWeight(0);
  fill(170);
  beginShape();
  vertex(24+k.x, 234+k.y);
  vertex(40+k.x, 233+k.y);
  vertex(60+k.x, 231+k.y);
  vertex(100+k.x, 215+k.y);
  vertex(150+k.x, 184+k.y);
  vertex(219+k.x, 127+k.y);
  vertex(218+k.x, 125+k.y);
  vertex(207+k.x, 133+k.y);
  vertex(180+k.x, 155+k.y);
  vertex(144+k.x, 185+k.y);
  vertex(103+k.x, 210+k.y);
  vertex(60+k.x, 228+k.y);
  endShape(CLOSE);

  stroke(0);
  strokeWeight(0.8);
  fill(55,50,45);
  beginShape();
  vertex(200+k.x, 58+k.y);
  vertex(217+k.x, 79+k.y);
  vertex(250+k.x, 63+k.y);
  vertex(260+k.x, 58+k.y);
  vertex(280+k.x, 49+k.y);
  vertex(300+k.x, 35+k.y);
  vertex(320+k.x, 13+k.y);
  vertex(334+k.x, 15+k.y);
  vertex(339+k.x, 11+k.y);
  vertex(340+k.x, 4+k.y);
  vertex(334+k.x, -10+k.y);
  vertex(322+k.x, -27+k.y);
  vertex(310+k.x, -22+k.y);
  vertex(290+k.x, -10+k.y);
  endShape(CLOSE);



  stroke(0);
  strokeWeight(3);
  fill(255,88,23);
  rect(-10,-20,50,1300);
  rect(1160,-20,50,1300);

  strokeWeight(0)
  fill(255,88,23);
  rect(-10,1161.5,1300,50);
  rect(-10,-11.5,1300,50);

}
