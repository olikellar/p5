//Colours
let lineColour = ([0, 100]);
let buttonColour = ([0, 100]);

let wall = ([0, 65, 105]);

let tr = 255;

let Frame = ([10, 30, 35, tr]);
let paperwhite = ([245, 245, 230]);

let rollwhite = ([240, 240, 240]);

let wallSideTopColour = ([255, 220, 30, tr]);
let wallSideRightColour = ([255, 250, 30, tr]);
let wallSideBottomColour = ([255, 250, 150, tr]);
let wallSideLeftColour = ([255, 140, 30, tr]);

let frontWindowSurroundColour = ([15, 140, 150]);
let frontWindowEdgeColourTop = ([10, 190, 140]);
let frontWindowEdgeColourRight = ([10, 170, 120]);
let frontWindowEdgeColourBottom = ([20, 210, 160]);
let frontWindowEdgeColourLeft = ([10, 180, 130]);

let frontWindowBackColour = ([5, 120, 110]);
let frontWindowTopColour = ([225, 235, 10]);
let frontWindowBottomColour = ([212, 222, 5]);

let frontWindowHighlightColourR;
let frontWindowHighlightColourG;
let frontWindowHighlightColourB;

//Width Centre variable
let hc;
let wc;
let sc;
let scale;
let xscaler;
let yscaler;

let s1 = 0;
let t1 = 0;
let w1 = 0;

//  s = a   t = b   w = c
let sAngle = 1;
let tAngle = -1;
let wAngle = 0;

let coll = 111;
let randomTilt;
let sign = [2, 1, -2, -1];

function setup() {
  createCanvas(windowWidth, windowHeight);
  hc = height / 2;
  wc = width / 2;
  //Smaller dimension
  if (wc < hc) {
    sc = wc;
  } else if (hc < wc) {
    sc = hc;
  } else {
    sc = hc;
  }
  scale = sc / 100
  xscaler = 1;
  yscaler = 1;

  angleMode(DEGREES)

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  hc = height / 2;
  wc = width / 2;
  //Smaller dimension
  if (wc < hc) {
    sc = wc
  } else if (hc < wc) {
    sc = hc
  } else {
    sc = hc
  }
  scale = sc / 100
}

function draw() {
  background(wall);
  stroke(lineColour);
  strokeWeight(scale / 5);
  randomTilt = random(sign);

  //Sqaure Frame
  //a
  {
    //Scale a
    let a_sx = scale * xscaler;
    let a_sy = scale * yscaler;

    //Position a
    let as_px = 0;
    let as_py = 0;


    //Points >> + or - ((value * scaler) + positioner)

    //Middle0
    //TL
    a1x = wc - ((16 * a_sx) + as_px);
    a1y = hc - ((82 * a_sy) + as_py);
    //TR
    a2x = wc + ((78 * a_sx) + as_px);
    a2y = hc - ((82 * a_sy) + as_py);
    //BR
    a3x = wc + ((78 * a_sx) + as_px);
    a3y = hc + ((10 * a_sy) + as_py);
    //BL
    a4x = wc - ((16 * a_sx) + as_px);
    a4y = hc + ((10 * a_sy) + as_py);

    //circle
    //TL
    a1xC = wc - ((16 * a_sx) + as_px);
    a1yC = hc - ((82 * a_sy) + as_py);
    //TR
    a2xC = wc + ((78 * a_sx) + as_px);
    a2yC = hc - ((82 * a_sy) + as_py);
    //BR
    a3xC = wc + ((78 * a_sx) + as_px);
    a3yC = hc + ((10 * a_sy) + as_py);
    //BL
    a4xC = wc - ((16 * a_sx) + as_px);
    a4yC = hc + ((10 * a_sy) + as_py);


  }
  //aA
  {
    //Scale aA
    let aA_sx = scale * xscaler;
    let aA_sy = scale * yscaler;

    //Position aA
    let aA_px = 0;
    let aA_py = 0;


    //Points >> + or - ((value * scaler) + positioner)

    //Middle0
    if(s1 == 0){
    //TL
    aA1x = wc - ((13 * aA_sx) + aA_px);
    aA1y = hc - ((79 * aA_sy) + aA_py);
    //TR
    aA2x = wc + ((75 * aA_sx) + aA_px);
    aA2y = hc - ((79 * aA_sy) + aA_py);
    //BR
    aA3x = wc + ((75 * aA_sx) + aA_px);
    aA3y = hc + ((7 * aA_sy) + aA_py);
    //BL
    aA4x = wc - ((13 * aA_sx) + aA_px);
    aA4y = hc + ((7 * aA_sy) + aA_py);
    }


  }
  //aB
  {
    //Scale aB
    let aB_sx = scale * xscaler;
    let aB_sy = scale * yscaler;

    //Position aB
    let aB_px = 0;
    let aB_py = 0;


    //Points >> + or - ((value * scaler) + positioner)

    //Middle0
    if(s1 == 0){
    //TL
    aB1x = wc - ((3 * aB_sx) + aB_px);
    aB1y = hc - ((69 * aB_sy) + aB_py);
    //TR
    aB2x = wc + ((65 * aB_sx) + aB_px);
    aB2y = hc - ((69 * aB_sy) + aB_py);
    //BR
    aB3x = wc + ((65 * aB_sx) + aB_px);
    aB3y = hc - ((3 * aB_sy) + aB_py);
    //
    aB4x = wc - ((3 * aB_sx) + aB_px);
    aB4y = hc - ((3 * aB_sy) + aB_py);
    }


  }

  //Tall Frame
  //b
  {
    //Scale b
    let b_sx = scale * xscaler;
    let b_sy = scale * yscaler;

    //Position b
    let b_px = 0;
    let b_py = 0;

    //Points >> + or - ((value * scaler) + positioner)
    b1x = wc - ((78 * b_sx) + b_px);
    b1y = hc - ((82 * b_sy) + b_py);

    b2x = wc - ((27 * b_sx) + b_px);
    b2y = hc - ((82 * b_sy) + b_py);

    b3x = wc - ((27 * b_sx) + b_px);
    b3y = hc + ((82 * b_sy) + b_py);

    b4x = wc - ((78 * b_sx) + b_px);
    b4y = hc + ((82 * b_sy) + b_py);


    //circle
    //tl
    b1xC = wc - ((78 * b_sx) + b_px);
    b1yC = hc - ((82 * b_sy) + b_py);

    b2xC = wc - ((27 * b_sx) + b_px);
    b2yC = hc - ((82 * b_sy) + b_py);

    b3xC = wc - ((27 * b_sx) + b_px);
    b3yC = hc + ((82 * b_sy) + b_py);

    b4xC = wc - ((78 * b_sx) + b_px);
    b4yC = hc + ((82 * b_sy) + b_py);


  }
  //bA
  {
    //Scale bA
    let bA_sx = scale * xscaler;
    let bA_sy = scale * yscaler;

    //Position bA
    let bA_px = 0;
    let bA_py = 0;


    //Points >> + or - ((value * scaler) + positioner)

    //Middle0
    if(t1 == 0){
    //TL
    bA1x = wc - ((75 * bA_sx) + bA_px);
    bA1y = hc - ((79 * bA_sy) + bA_py);

    bA2x = wc - ((30 * bA_sx) + bA_px);
    bA2y = hc - ((79 * bA_sy) + bA_py);

    bA3x = wc - ((30 * bA_sx) + bA_px);
    bA3y = hc + ((79 * bA_sy) + bA_py);

    bA4x = wc - ((75 * bA_sx) + bA_px);
    bA4y = hc + ((79 * bA_sy) + bA_py);
    }


  }
  //bB
  {
    //Scale bB
    let bB_sx = scale * xscaler;
    let bB_sy = scale * yscaler;

    //Position bB
    let bB_px = 0;
    let bB_py = 0;


    //Points >> + or - ((value * scaler) + positioner)

    //Middle0
    if(t1 == 0){
    //TL
    bB1x = wc - ((65 * bB_sx) + bB_px);
    bB1y = hc - ((69 * bB_sy) + bB_py);

    bB2x = wc - ((40 * bB_sx) + bB_px);
    bB2y = hc - ((69 * bB_sy) + bB_py);

    bB3x = wc - ((40 * bB_sx) + bB_px);
    bB3y = hc + ((69 * bB_sy) + bB_py);

    bB4x = wc - ((65 * bB_sx) + bB_px);
    bB4y = hc + ((69 * bB_sy) + bB_py);
    }


  }

  //Wide Frame
  //c
  {
    //Scale c
    let c_sx = scale * xscaler;
    let c_sy = scale * yscaler;

    //Position c
    let c_px = 0;
    let c_py = 0;

    //Points >> + or - ((value * scaler) + positioner)
    c1x = wc - ((16 * c_sx) + c_px);
    c1y = hc + ((20 * c_sy) + c_py);
    //TR
    c2x = wc + ((78 * c_sx) + c_px);
    c2y = hc + ((20 * c_sy) + c_py);
    //BR
    c3x = wc + ((78 * c_sx) + c_px);
    c3y = hc + ((82 * c_sy) + c_py);
    //BL
    c4x = wc - ((16 * c_sx) + c_px);
    c4y = hc + ((82 * c_sy) + c_py);

    //circle
    //tl
    c1xC = wc - ((16 * c_sx) + c_px);
    c1yC = hc + ((20 * c_sy) + c_py);
    //TR
    c2xC = wc + ((78 * c_sx) + c_px);
    c2yC = hc + ((20 * c_sy) + c_py);
    //BR
    c3xC = wc + ((78 * c_sx) + c_px);
    c3yC = hc + ((82 * c_sy) + c_py);
    //BL
    c4xC = wc - ((16 * c_sx) + c_px);
    c4yC = hc + ((82 * c_sy) + c_py);
  }
  //cA
  {
    //Scale cA
    let cA_sx = scale * xscaler;
    let cA_sy = scale * yscaler;

    //Position cA
    let cA_px = 0;
    let cA_py = 0;


    //Points >> + or - ((value * scaler) + positioner)

    //Middle0
    if(w1 == 0){
    //TL
    cA1x = wc - ((13 * cA_sx) + cA_px);
    cA1y = hc + ((23 * cA_sy) + cA_py);
    //TR
    cA2x = wc + ((75 * cA_sx) + cA_px);
    cA2y = hc + ((23 * cA_sy) + cA_py);
    //BR
    cA3x = wc + ((75 * cA_sx) + cA_px);
    cA3y = hc + ((79 * cA_sy) + cA_py);
    //BL
    cA4x = wc - ((13 * cA_sx) + cA_px);
    cA4y = hc + ((79 * cA_sy) + cA_py);
    }


  }
  //cB
  {
    //Scale cB
    let cB_sx = scale * xscaler;
    let cB_sy = scale * yscaler;

    //Position cB
    let cB_px = 0;
    let cB_py = 0;


    //Points >> + or - ((value * scaler) + positioner)

    //Middle0
    if(w1 == 0){
    //TL
    cB1x = wc - ((3 * cB_sx) + cB_px);
    cB1y = hc + ((33 * cB_sy) + cB_py);

    cB2x = wc + ((65 * cB_sx) + cB_px);
    cB2y = hc + ((33 * cB_sy) + cB_py);

    cB3x = wc + ((65 * cB_sx) + cB_px);
    cB3y = hc + ((69 * cB_sy) + cB_py);

    cB4x = wc - ((3 * cB_sx) + cB_px);
    cB4y = hc + ((69 * cB_sy) + cB_py);
    }


  }


  //Square Frame —————————————————————————————————————————————
  push();
  translate((a2xC+((a1xC-a2xC)/2)),(a4yC+((a1yC-a4yC)/2)-(scale*20)));

  push();
  rotate(sAngle)

  push()
  translate(-(a2xC+((a1xC-a2xC)/2)),-(a4yC+((a1yC-a4yC)/2)-(scale*20)));

  //baking
{
fill(200,0);
let baking_x = -scale*20;
let baking_y = -scale*86;
let baking_xScale = scale/4.2;
let baking_yScale = scale/4.2;
beginShape();
  fill(162,35,37);
vertex(wc+(baking_xScale*62)+baking_x,hc+(baking_yScale*60)+baking_y);
vertex(wc+(baking_xScale*382)+baking_x,hc+(baking_yScale*58)+baking_y);
vertex(wc+(baking_xScale*375)+baking_x,hc+(baking_yScale*362)+baking_y);
vertex(wc+(baking_xScale*49)+baking_x,hc+(baking_yScale*367)+baking_y);
endShape(CLOSE);

  fill(168,208,162);
beginShape();
vertex(wc+(baking_xScale*70)+baking_x,hc+(baking_yScale*267)+baking_y);
vertex(wc+(baking_xScale*383)+baking_x,hc+(baking_yScale*262)+baking_y);
vertex(wc+(baking_xScale*380)+baking_x,hc+(baking_yScale*373)+baking_y);
vertex(wc+(baking_xScale*62)+baking_x,hc+(baking_yScale*365)+baking_y);
endShape(CLOSE);

fill(255,250,217);
beginShape();
vertex(wc+(baking_xScale*290)+baking_x,hc+(baking_yScale*317)+baking_y);
vertex(wc+(baking_xScale*297)+baking_x,hc+(baking_yScale*317)+baking_y);
vertex(wc+(baking_xScale*303)+baking_x,hc+(baking_yScale*315)+baking_y);
vertex(wc+(baking_xScale*310)+baking_x,hc+(baking_yScale*313)+baking_y);
vertex(wc+(baking_xScale*316)+baking_x,hc+(baking_yScale*307)+baking_y);
vertex(wc+(baking_xScale*322)+baking_x,hc+(baking_yScale*304)+baking_y);
vertex(wc+(baking_xScale*327)+baking_x,hc+(baking_yScale*302)+baking_y);
vertex(wc+(baking_xScale*330)+baking_x,hc+(baking_yScale*299)+baking_y);
vertex(wc+(baking_xScale*335)+baking_x,hc+(baking_yScale*294)+baking_y);
vertex(wc+(baking_xScale*332)+baking_x,hc+(baking_yScale*265)+baking_y);
vertex(wc+(baking_xScale*332)+baking_x,hc+(baking_yScale*240)+baking_y);
vertex(wc+(baking_xScale*336)+baking_x,hc+(baking_yScale*223)+baking_y);
vertex(wc+(baking_xScale*339)+baking_x,hc+(baking_yScale*179)+baking_y);
vertex(wc+(baking_xScale*338)+baking_x,hc+(baking_yScale*154)+baking_y);
vertex(wc+(baking_xScale*330)+baking_x,hc+(baking_yScale*130)+baking_y);
vertex(wc+(baking_xScale*333)+baking_x,hc+(baking_yScale*118)+baking_y);
vertex(wc+(baking_xScale*337)+baking_x,hc+(baking_yScale*108)+baking_y);
vertex(wc+(baking_xScale*334)+baking_x,hc+(baking_yScale*108)+baking_y);
vertex(wc+(baking_xScale*324)+baking_x,hc+(baking_yScale*102)+baking_y);
vertex(wc+(baking_xScale*313)+baking_x,hc+(baking_yScale*111)+baking_y);
vertex(wc+(baking_xScale*295)+baking_x,hc+(baking_yScale*111)+baking_y);
vertex(wc+(baking_xScale*278)+baking_x,hc+(baking_yScale*108)+baking_y);
vertex(wc+(baking_xScale*244)+baking_x,hc+(baking_yScale*106)+baking_y);
vertex(wc+(baking_xScale*231)+baking_x,hc+(baking_yScale*110)+baking_y);
vertex(wc+(baking_xScale*217)+baking_x,hc+(baking_yScale*108)+baking_y);
vertex(wc+(baking_xScale*205)+baking_x,hc+(baking_yScale*111)+baking_y);
vertex(wc+(baking_xScale*206)+baking_x,hc+(baking_yScale*123)+baking_y);
vertex(wc+(baking_xScale*200)+baking_x,hc+(baking_yScale*131)+baking_y);
vertex(wc+(baking_xScale*196)+baking_x,hc+(baking_yScale*143)+baking_y);
vertex(wc+(baking_xScale*197)+baking_x,hc+(baking_yScale*161)+baking_y);
vertex(wc+(baking_xScale*199)+baking_x,hc+(baking_yScale*172)+baking_y);
vertex(wc+(baking_xScale*198)+baking_x,hc+(baking_yScale*201)+baking_y);
vertex(wc+(baking_xScale*201)+baking_x,hc+(baking_yScale*242)+baking_y);
vertex(wc+(baking_xScale*204)+baking_x,hc+(baking_yScale*280)+baking_y);
vertex(wc+(baking_xScale*204)+baking_x,hc+(baking_yScale*290)+baking_y);
vertex(wc+(baking_xScale*209)+baking_x,hc+(baking_yScale*298)+baking_y);
vertex(wc+(baking_xScale*233)+baking_x,hc+(baking_yScale*305)+baking_y);
vertex(wc+(baking_xScale*250)+baking_x,hc+(baking_yScale*307)+baking_y);
vertex(wc+(baking_xScale*263)+baking_x,hc+(baking_yScale*313)+baking_y);
vertex(wc+(baking_xScale*286)+baking_x,hc+(baking_yScale*315)+baking_y);
endShape(CLOSE);

  fill(250,90,90);
beginShape();
vertex(wc+(baking_xScale*205)+baking_x,hc+(baking_yScale*148)+baking_y);
vertex(wc+(baking_xScale*216)+baking_x,hc+(baking_yScale*148)+baking_y);
vertex(wc+(baking_xScale*233)+baking_x,hc+(baking_yScale*151)+baking_y);
vertex(wc+(baking_xScale*256)+baking_x,hc+(baking_yScale*154)+baking_y);
vertex(wc+(baking_xScale*275)+baking_x,hc+(baking_yScale*155)+baking_y);
vertex(wc+(baking_xScale*299)+baking_x,hc+(baking_yScale*155)+baking_y);
vertex(wc+(baking_xScale*307)+baking_x,hc+(baking_yScale*156)+baking_y);
vertex(wc+(baking_xScale*308)+baking_x,hc+(baking_yScale*175)+baking_y);
vertex(wc+(baking_xScale*306)+baking_x,hc+(baking_yScale*198)+baking_y);
vertex(wc+(baking_xScale*306)+baking_x,hc+(baking_yScale*218)+baking_y);
vertex(wc+(baking_xScale*305)+baking_x,hc+(baking_yScale*233)+baking_y);
vertex(wc+(baking_xScale*303)+baking_x,hc+(baking_yScale*259)+baking_y);
vertex(wc+(baking_xScale*304)+baking_x,hc+(baking_yScale*284)+baking_y);
vertex(wc+(baking_xScale*220)+baking_x,hc+(baking_yScale*271)+baking_y);
vertex(wc+(baking_xScale*213)+baking_x,hc+(baking_yScale*269)+baking_y);
vertex(wc+(baking_xScale*213)+baking_x,hc+(baking_yScale*244)+baking_y);
vertex(wc+(baking_xScale*211)+baking_x,hc+(baking_yScale*219)+baking_y);
vertex(wc+(baking_xScale*212)+baking_x,hc+(baking_yScale*201)+baking_y);
vertex(wc+(baking_xScale*210)+baking_x,hc+(baking_yScale*183)+baking_y);
vertex(wc+(baking_xScale*207)+baking_x,hc+(baking_yScale*163)+baking_y);
vertex(wc+(baking_xScale*206)+baking_x,hc+(baking_yScale*150)+baking_y);
endShape(CLOSE);

fill(225,210,200);
beginShape();
vertex(wc+(baking_xScale*86)+baking_x,hc+(baking_yScale*255)+baking_y);
vertex(wc+(baking_xScale*84)+baking_x,hc+(baking_yScale*262)+baking_y);
vertex(wc+(baking_xScale*84)+baking_x,hc+(baking_yScale*270)+baking_y);
vertex(wc+(baking_xScale*91)+baking_x,hc+(baking_yScale*277)+baking_y);
vertex(wc+(baking_xScale*99)+baking_x,hc+(baking_yScale*280)+baking_y);
vertex(wc+(baking_xScale*112)+baking_x,hc+(baking_yScale*296)+baking_y);
vertex(wc+(baking_xScale*116)+baking_x,hc+(baking_yScale*311)+baking_y);
vertex(wc+(baking_xScale*123)+baking_x,hc+(baking_yScale*325)+baking_y);
vertex(wc+(baking_xScale*136)+baking_x,hc+(baking_yScale*334)+baking_y);
vertex(wc+(baking_xScale*155)+baking_x,hc+(baking_yScale*340)+baking_y);
vertex(wc+(baking_xScale*193)+baking_x,hc+(baking_yScale*343)+baking_y);
vertex(wc+(baking_xScale*222)+baking_x,hc+(baking_yScale*341)+baking_y);
vertex(wc+(baking_xScale*243)+baking_x,hc+(baking_yScale*334)+baking_y);
vertex(wc+(baking_xScale*273)+baking_x,hc+(baking_yScale*317)+baking_y);
vertex(wc+(baking_xScale*281)+baking_x,hc+(baking_yScale*301)+baking_y);
vertex(wc+(baking_xScale*286)+baking_x,hc+(baking_yScale*277)+baking_y);
vertex(wc+(baking_xScale*287)+baking_x,hc+(baking_yScale*268)+baking_y);
vertex(wc+(baking_xScale*293)+baking_x,hc+(baking_yScale*257)+baking_y);
vertex(wc+(baking_xScale*297)+baking_x,hc+(baking_yScale*245)+baking_y);
endShape(CLOSE);

fill(255,250,240);
beginShape();
vertex(wc+(baking_xScale*165)+baking_x,hc+(baking_yScale*231)+baking_y);
vertex(wc+(baking_xScale*178)+baking_x,hc+(baking_yScale*230)+baking_y);
vertex(wc+(baking_xScale*200)+baking_x,hc+(baking_yScale*230)+baking_y);
vertex(wc+(baking_xScale*217)+baking_x,hc+(baking_yScale*230)+baking_y);
vertex(wc+(baking_xScale*244)+baking_x,hc+(baking_yScale*231)+baking_y);
vertex(wc+(baking_xScale*266)+baking_x,hc+(baking_yScale*234)+baking_y);
vertex(wc+(baking_xScale*283)+baking_x,hc+(baking_yScale*239)+baking_y);
vertex(wc+(baking_xScale*295)+baking_x,hc+(baking_yScale*244)+baking_y);
vertex(wc+(baking_xScale*286)+baking_x,hc+(baking_yScale*259)+baking_y);
vertex(wc+(baking_xScale*261)+baking_x,hc+(baking_yScale*263)+baking_y);
vertex(wc+(baking_xScale*202)+baking_x,hc+(baking_yScale*269)+baking_y);
vertex(wc+(baking_xScale*161)+baking_x,hc+(baking_yScale*270)+baking_y);
vertex(wc+(baking_xScale*115)+baking_x,hc+(baking_yScale*267)+baking_y);
vertex(wc+(baking_xScale*92)+baking_x,hc+(baking_yScale*262)+baking_y);
vertex(wc+(baking_xScale*85)+baking_x,hc+(baking_yScale*253)+baking_y);
vertex(wc+(baking_xScale*101)+baking_x,hc+(baking_yScale*245)+baking_y);
vertex(wc+(baking_xScale*120)+baking_x,hc+(baking_yScale*241)+baking_y);
vertex(wc+(baking_xScale*154)+baking_x,hc+(baking_yScale*233)+baking_y);
endShape(CLOSE);
beginShape();


fill(255,250,217);
  beginShape();
vertex(wc+(baking_xScale*109)+baking_x,hc+(baking_yScale*265)+baking_y);
vertex(wc+(baking_xScale*114)+baking_x,hc+(baking_yScale*261)+baking_y);
vertex(wc+(baking_xScale*117)+baking_x,hc+(baking_yScale*262)+baking_y);
vertex(wc+(baking_xScale*119)+baking_x,hc+(baking_yScale*264)+baking_y);
vertex(wc+(baking_xScale*127)+baking_x,hc+(baking_yScale*263)+baking_y);
vertex(wc+(baking_xScale*131)+baking_x,hc+(baking_yScale*258)+baking_y);
vertex(wc+(baking_xScale*138)+baking_x,hc+(baking_yScale*256)+baking_y);
vertex(wc+(baking_xScale*144)+baking_x,hc+(baking_yScale*256)+baking_y);
vertex(wc+(baking_xScale*150)+baking_x,hc+(baking_yScale*248)+baking_y);
vertex(wc+(baking_xScale*156)+baking_x,hc+(baking_yScale*245)+baking_y);
vertex(wc+(baking_xScale*162)+baking_x,hc+(baking_yScale*247)+baking_y);
vertex(wc+(baking_xScale*165)+baking_x,hc+(baking_yScale*249)+baking_y);
vertex(wc+(baking_xScale*167)+baking_x,hc+(baking_yScale*248)+baking_y);
vertex(wc+(baking_xScale*173)+baking_x,hc+(baking_yScale*242)+baking_y);
vertex(wc+(baking_xScale*176)+baking_x,hc+(baking_yScale*239)+baking_y);
vertex(wc+(baking_xScale*182)+baking_x,hc+(baking_yScale*239)+baking_y);
vertex(wc+(baking_xScale*188)+baking_x,hc+(baking_yScale*245)+baking_y);
vertex(wc+(baking_xScale*201)+baking_x,hc+(baking_yScale*245)+baking_y);
vertex(wc+(baking_xScale*211)+baking_x,hc+(baking_yScale*239)+baking_y);
vertex(wc+(baking_xScale*215)+baking_x,hc+(baking_yScale*241)+baking_y);
vertex(wc+(baking_xScale*217)+baking_x,hc+(baking_yScale*244)+baking_y);
vertex(wc+(baking_xScale*222)+baking_x,hc+(baking_yScale*244)+baking_y);
vertex(wc+(baking_xScale*225)+baking_x,hc+(baking_yScale*243)+baking_y);
vertex(wc+(baking_xScale*226)+baking_x,hc+(baking_yScale*248)+baking_y);
vertex(wc+(baking_xScale*228)+baking_x,hc+(baking_yScale*254)+baking_y);
vertex(wc+(baking_xScale*236)+baking_x,hc+(baking_yScale*255)+baking_y);
vertex(wc+(baking_xScale*243)+baking_x,hc+(baking_yScale*255)+baking_y);
vertex(wc+(baking_xScale*252)+baking_x,hc+(baking_yScale*256)+baking_y);
vertex(wc+(baking_xScale*253)+baking_x,hc+(baking_yScale*258)+baking_y);
vertex(wc+(baking_xScale*259)+baking_x,hc+(baking_yScale*258)+baking_y);
vertex(wc+(baking_xScale*265)+baking_x,hc+(baking_yScale*257)+baking_y);
vertex(wc+(baking_xScale*267)+baking_x,hc+(baking_yScale*260)+baking_y);
vertex(wc+(baking_xScale*267)+baking_x,hc+(baking_yScale*262)+baking_y);
vertex(wc+(baking_xScale*249)+baking_x,hc+(baking_yScale*265)+baking_y);
vertex(wc+(baking_xScale*214)+baking_x,hc+(baking_yScale*269)+baking_y);
vertex(wc+(baking_xScale*168)+baking_x,hc+(baking_yScale*271)+baking_y);
vertex(wc+(baking_xScale*139)+baking_x,hc+(baking_yScale*271)+baking_y);
vertex(wc+(baking_xScale*121)+baking_x,hc+(baking_yScale*269)+baking_y);
vertex(wc+(baking_xScale*110)+baking_x,hc+(baking_yScale*266)+baking_y);
endShape(CLOSE);

    fill(255,250,217);
beginShape();
vertex(wc+(baking_xScale*218)+baking_x,hc+(baking_yScale*191)+baking_y);
vertex(wc+(baking_xScale*217)+baking_x,hc+(baking_yScale*172)+baking_y);
vertex(wc+(baking_xScale*227)+baking_x,hc+(baking_yScale*173)+baking_y);
vertex(wc+(baking_xScale*227)+baking_x,hc+(baking_yScale*177)+baking_y);
vertex(wc+(baking_xScale*221)+baking_x,hc+(baking_yScale*176)+baking_y);
vertex(wc+(baking_xScale*221)+baking_x,hc+(baking_yScale*180)+baking_y);
vertex(wc+(baking_xScale*224)+baking_x,hc+(baking_yScale*180)+baking_y);
vertex(wc+(baking_xScale*224)+baking_x,hc+(baking_yScale*183)+baking_y);
vertex(wc+(baking_xScale*220)+baking_x,hc+(baking_yScale*183)+baking_y);
vertex(wc+(baking_xScale*220)+baking_x,hc+(baking_yScale*188)+baking_y);
vertex(wc+(baking_xScale*220)+baking_x,hc+(baking_yScale*191)+baking_y);
vertex(wc+(baking_xScale*218)+baking_x,hc+(baking_yScale*191)+baking_y);
endShape(CLOSE);

beginShape();
vertex(wc+(baking_xScale*229)+baking_x,hc+(baking_yScale*175)+baking_y);
vertex(wc+(baking_xScale*228)+baking_x,hc+(baking_yScale*192)+baking_y);
vertex(wc+(baking_xScale*238)+baking_x,hc+(baking_yScale*194)+baking_y);
vertex(wc+(baking_xScale*239)+baking_x,hc+(baking_yScale*191)+baking_y);
vertex(wc+(baking_xScale*230)+baking_x,hc+(baking_yScale*189)+baking_y);
vertex(wc+(baking_xScale*232)+baking_x,hc+(baking_yScale*175)+baking_y);
endShape(CLOSE);

beginShape();
vertex(wc+(baking_xScale*244)+baking_x,hc+(baking_yScale*177)+baking_y);
vertex(wc+(baking_xScale*241)+baking_x,hc+(baking_yScale*183)+baking_y);
vertex(wc+(baking_xScale*242)+baking_x,hc+(baking_yScale*188)+baking_y);
vertex(wc+(baking_xScale*242)+baking_x,hc+(baking_yScale*193)+baking_y);
vertex(wc+(baking_xScale*246)+baking_x,hc+(baking_yScale*195)+baking_y);
vertex(wc+(baking_xScale*252)+baking_x,hc+(baking_yScale*192)+baking_y);
vertex(wc+(baking_xScale*254)+baking_x,hc+(baking_yScale*185)+baking_y);
vertex(wc+(baking_xScale*254)+baking_x,hc+(baking_yScale*177)+baking_y);
vertex(wc+(baking_xScale*250)+baking_x,hc+(baking_yScale*175)+baking_y);
vertex(wc+(baking_xScale*247)+baking_x,hc+(baking_yScale*176)+baking_y);
beginContour();
vertex(wc+(baking_xScale*249)+baking_x,hc+(baking_yScale*178)+baking_y);
vertex(wc+(baking_xScale*251)+baking_x,hc+(baking_yScale*179)+baking_y);
vertex(wc+(baking_xScale*252)+baking_x,hc+(baking_yScale*183)+baking_y);
vertex(wc+(baking_xScale*251)+baking_x,hc+(baking_yScale*186)+baking_y);
vertex(wc+(baking_xScale*249)+baking_x,hc+(baking_yScale*189)+baking_y);
vertex(wc+(baking_xScale*246)+baking_x,hc+(baking_yScale*192)+baking_y);
vertex(wc+(baking_xScale*244)+baking_x,hc+(baking_yScale*188)+baking_y);
vertex(wc+(baking_xScale*244)+baking_x,hc+(baking_yScale*184)+baking_y);
vertex(wc+(baking_xScale*245)+baking_x,hc+(baking_yScale*180)+baking_y);
endContour()
endShape(CLOSE);

beginShape();
vertex(wc+(baking_xScale*258)+baking_x,hc+(baking_yScale*177)+baking_y);
vertex(wc+(baking_xScale*257)+baking_x,hc+(baking_yScale*189)+baking_y);
vertex(wc+(baking_xScale*259)+baking_x,hc+(baking_yScale*195)+baking_y);
vertex(wc+(baking_xScale*262)+baking_x,hc+(baking_yScale*197)+baking_y);
vertex(wc+(baking_xScale*267)+baking_x,hc+(baking_yScale*198)+baking_y);
vertex(wc+(baking_xScale*272)+baking_x,hc+(baking_yScale*194)+baking_y);
vertex(wc+(baking_xScale*273)+baking_x,hc+(baking_yScale*187)+baking_y);
vertex(wc+(baking_xScale*274)+baking_x,hc+(baking_yScale*178)+baking_y);
vertex(wc+(baking_xScale*271)+baking_x,hc+(baking_yScale*177)+baking_y);
vertex(wc+(baking_xScale*270)+baking_x,hc+(baking_yScale*179)+baking_y);
vertex(wc+(baking_xScale*269)+baking_x,hc+(baking_yScale*186)+baking_y);
vertex(wc+(baking_xScale*267)+baking_x,hc+(baking_yScale*192)+baking_y);
vertex(wc+(baking_xScale*262)+baking_x,hc+(baking_yScale*192)+baking_y);
vertex(wc+(baking_xScale*262)+baking_x,hc+(baking_yScale*184)+baking_y);
vertex(wc+(baking_xScale*263)+baking_x,hc+(baking_yScale*178)+baking_y);
endShape(CLOSE);

beginShape();
vertex(wc+(baking_xScale*278)+baking_x,hc+(baking_yScale*179)+baking_y);
vertex(wc+(baking_xScale*277)+baking_x,hc+(baking_yScale*198)+baking_y);
vertex(wc+(baking_xScale*281)+baking_x,hc+(baking_yScale*198)+baking_y);
vertex(wc+(baking_xScale*282)+baking_x,hc+(baking_yScale*190)+baking_y);
vertex(wc+(baking_xScale*287)+baking_x,hc+(baking_yScale*193)+baking_y);
vertex(wc+(baking_xScale*288)+baking_x,hc+(baking_yScale*199)+baking_y);
vertex(wc+(baking_xScale*292)+baking_x,hc+(baking_yScale*199)+baking_y);
vertex(wc+(baking_xScale*290)+baking_x,hc+(baking_yScale*191)+baking_y);
vertex(wc+(baking_xScale*285)+baking_x,hc+(baking_yScale*188)+baking_y);
vertex(wc+(baking_xScale*294)+baking_x,hc+(baking_yScale*187)+baking_y);
vertex(wc+(baking_xScale*295)+baking_x,hc+(baking_yScale*181)+baking_y);
vertex(wc+(baking_xScale*294)+baking_x,hc+(baking_yScale*178)+baking_y);
vertex(wc+(baking_xScale*280)+baking_x,hc+(baking_yScale*178)+baking_y);
beginContour();
vertex(wc+(baking_xScale*286)+baking_x,hc+(baking_yScale*180)+baking_y);
vertex(wc+(baking_xScale*289)+baking_x,hc+(baking_yScale*181)+baking_y);
vertex(wc+(baking_xScale*289)+baking_x,hc+(baking_yScale*182)+baking_y);
vertex(wc+(baking_xScale*289)+baking_x,hc+(baking_yScale*184)+baking_y);
vertex(wc+(baking_xScale*282)+baking_x,hc+(baking_yScale*186)+baking_y);
vertex(wc+(baking_xScale*282)+baking_x,hc+(baking_yScale*181)+baking_y);
endContour();
endShape(CLOSE);

fill(0,0);
beginShape();
vertex(wc+(baking_xScale*307)+baking_x,hc+(baking_yScale*144)+baking_y);
vertex(wc+(baking_xScale*302)+baking_x,hc+(baking_yScale*140)+baking_y);
vertex(wc+(baking_xScale*305)+baking_x,hc+(baking_yScale*131)+baking_y);
vertex(wc+(baking_xScale*312)+baking_x,hc+(baking_yScale*128)+baking_y);
vertex(wc+(baking_xScale*314)+baking_x,hc+(baking_yScale*118)+baking_y);
vertex(wc+(baking_xScale*322)+baking_x,hc+(baking_yScale*114)+baking_y);
vertex(wc+(baking_xScale*328)+baking_x,hc+(baking_yScale*110)+baking_y);
vertex(wc+(baking_xScale*331)+baking_x,hc+(baking_yScale*114)+baking_y);
vertex(wc+(baking_xScale*336)+baking_x,hc+(baking_yScale*109)+baking_y);
endShape();


//ENDbaking
}


  //Square Frame   a
  {
    //Stlying Wall
    fill(paperwhite);
    stroke(lineColour);

    //Draw Wall
    beginShape();
    vertex(a1x, a1y);
    vertex(a2x, a2y);
    vertex(a3x, a3y);
    vertex(a4x, a4y);
    beginContour();
    vertex(aB4x, aB4y);
    vertex(aB3x, aB3y);
    vertex(aB2x, aB2y);
    vertex(aB1x, aB1y);
    endContour();
    endShape(CLOSE);
  }

  //Square Frame   aA
  {
    //Stlying
    fill(Frame);
    stroke(lineColour);

    //T
    beginShape();
    vertex(a1x, a1y);
    vertex(a2x, a2y);
    vertex(aA2x, aA2y);
    vertex(aA1x, aA1y);
    endShape(CLOSE);
    //R
    beginShape();
    vertex(a2x, a2y);
    vertex(a3x, a3y);
    vertex(aA3x, aA3y);
    vertex(aA2x, aA2y);
    endShape(CLOSE);
    //B
    beginShape();
    vertex(a3x, a3y);
    vertex(a4x, a4y);
    vertex(aA4x, aA4y);
    vertex(aA3x, aA3y);
    endShape(CLOSE);
    //L
    beginShape();
    vertex(a4x, a4y);
    vertex(a1x, a1y);
    vertex(aA1x, aA1y);
    vertex(aA4x, aA4y);
    endShape(CLOSE);
  }
  pop();

  pop();

  pop();

  //Tall Frame ———————————————————————————————————————————————
  push();
  translate((b2xC+((b1xC-b2xC)/2)),(b4yC+((b1yC-b4yC)/2)-(scale*60)));

  push();
  rotate(tAngle)

  push()
  translate(-(b2xC+((b1xC-b2xC)/2)),-(b4yC+((b1yC-b4yC)/2)-(scale*60)));

  push();

   //loorolls
  {

//bckdrp
{
fill(10,130,157);
let bckdrp_x = -scale*80;
let bckdrp_y = -scale*80;
let bckdrp_xScale = scale/4.5;
let bckdrp_yScale = scale/4.5;
beginShape();
vertex(wc+(bckdrp_xScale*39)+bckdrp_x,hc+(bckdrp_yScale*701)+bckdrp_y);
vertex(wc+(bckdrp_xScale*213)+bckdrp_x,hc+(bckdrp_yScale*702)+bckdrp_y);
vertex(wc+(bckdrp_xScale*214)+bckdrp_x,hc+(bckdrp_yScale*37)+bckdrp_y);
vertex(wc+(bckdrp_xScale*38)+bckdrp_x,hc+(bckdrp_yScale*40)+bckdrp_y);
endShape(CLOSE);

fill(185, 40, 40);
beginShape();
vertex(wc+(bckdrp_xScale*194)+bckdrp_x,hc+(bckdrp_yScale*370)+bckdrp_y);
vertex(wc+(bckdrp_xScale*197)+bckdrp_x,hc+(bckdrp_yScale*677)+bckdrp_y);
vertex(wc+(bckdrp_xScale*58)+bckdrp_x,hc+(bckdrp_yScale*677)+bckdrp_y);
vertex(wc+(bckdrp_xScale*52)+bckdrp_x,hc+(bckdrp_yScale*370)+bckdrp_y);
endShape(CLOSE);

  fill(185, 100, 100);
beginShape();
vertex(wc+(bckdrp_xScale*194)+bckdrp_x,hc+(bckdrp_yScale*369)+bckdrp_y);
vertex(wc+(bckdrp_xScale*197)+bckdrp_x,hc+(bckdrp_yScale*454)+bckdrp_y);
vertex(wc+(bckdrp_xScale*58)+bckdrp_x,hc+(bckdrp_yScale*454)+bckdrp_y);
vertex(wc+(bckdrp_xScale*52)+bckdrp_x,hc+(bckdrp_yScale*369)+bckdrp_y);
endShape(CLOSE);

  fill(215, 140, 140);
beginShape();
vertex(wc+(bckdrp_xScale*194)+bckdrp_x,hc+(bckdrp_yScale*364)+bckdrp_y);
vertex(wc+(bckdrp_xScale*197)+bckdrp_x,hc+(bckdrp_yScale*369)+bckdrp_y);
vertex(wc+(bckdrp_xScale*58)+bckdrp_x,hc+(bckdrp_yScale*369)+bckdrp_y);
vertex(wc+(bckdrp_xScale*52)+bckdrp_x,hc+(bckdrp_yScale*364)+bckdrp_y);
endShape(CLOSE);
//ENDbckdrp
}

//roll1
{
fill(rollwhite);
let roll1_x = -scale*80;
let roll1_y = -scale*112;
let roll1_xScale = scale/4.5;
let roll1_yScale = scale/4.5;
beginShape();
vertex(wc+(roll1_xScale*163)+roll1_x,hc+(roll1_yScale*571)+roll1_y);
vertex(wc+(roll1_xScale*164)+roll1_x,hc+(roll1_yScale*638)+roll1_y);
vertex(wc+(roll1_xScale*158)+roll1_x,hc+(roll1_yScale*645)+roll1_y);
vertex(wc+(roll1_xScale*147)+roll1_x,hc+(roll1_yScale*648)+roll1_y);
vertex(wc+(roll1_xScale*129)+roll1_x,hc+(roll1_yScale*652)+roll1_y);
vertex(wc+(roll1_xScale*112)+roll1_x,hc+(roll1_yScale*651)+roll1_y);
vertex(wc+(roll1_xScale*99)+roll1_x,hc+(roll1_yScale*649)+roll1_y);
vertex(wc+(roll1_xScale*90)+roll1_x,hc+(roll1_yScale*645)+roll1_y);
vertex(wc+(roll1_xScale*86)+roll1_x,hc+(roll1_yScale*640)+roll1_y);
vertex(wc+(roll1_xScale*86)+roll1_x,hc+(roll1_yScale*637)+roll1_y);
vertex(wc+(roll1_xScale*86)+roll1_x,hc+(roll1_yScale*570)+roll1_y);
vertex(wc+(roll1_xScale*101)+roll1_x,hc+(roll1_yScale*568)+roll1_y);
vertex(wc+(roll1_xScale*121)+roll1_x,hc+(roll1_yScale*567)+roll1_y);
vertex(wc+(roll1_xScale*144)+roll1_x,hc+(roll1_yScale*567)+roll1_y);
endShape(CLOSE);


//ENDroll1
}



//line1
{
fill("#ffffff");
let line1_x = -scale*80;
let line1_y = -scale*112;
let line1_xScale = scale/4.5;
let line1_yScale = scale/4.5;
beginShape();
vertex(wc+(line1_xScale*141)+line1_x,hc+(line1_yScale*647)+line1_y);
vertex(wc+(line1_xScale*141)+line1_x,hc+(line1_yScale*644)+line1_y);
endShape();

beginShape();
vertex(wc+(line1_xScale*141)+line1_x,hc+(line1_yScale*641)+line1_y);
vertex(wc+(line1_xScale*141)+line1_x,hc+(line1_yScale*638)+line1_y);
endShape();

beginShape();
vertex(wc+(line1_xScale*141)+line1_x,hc+(line1_yScale*635)+line1_y);
vertex(wc+(line1_xScale*141)+line1_x,hc+(line1_yScale*632)+line1_y);
endShape();

beginShape();
vertex(wc+(line1_xScale*141)+line1_x,hc+(line1_yScale*629)+line1_y);
vertex(wc+(line1_xScale*140.9)+line1_x,hc+(line1_yScale*626)+line1_y);
endShape();

beginShape();
vertex(wc+(line1_xScale*140.9)+line1_x,hc+(line1_yScale*623)+line1_y);
vertex(wc+(line1_xScale*140.8)+line1_x,hc+(line1_yScale*620)+line1_y);
endShape();

beginShape();
vertex(wc+(line1_xScale*140.8)+line1_x,hc+(line1_yScale*617)+line1_y);
vertex(wc+(line1_xScale*140.8)+line1_x,hc+(line1_yScale*614)+line1_y);
endShape();

beginShape();
vertex(wc+(line1_xScale*140.8)+line1_x,hc+(line1_yScale*611)+line1_y);
vertex(wc+(line1_xScale*140.7)+line1_x,hc+(line1_yScale*608)+line1_y);
endShape();

beginShape();
vertex(wc+(line1_xScale*140.7)+line1_x,hc+(line1_yScale*605)+line1_y);
vertex(wc+(line1_xScale*140.7)+line1_x,hc+(line1_yScale*602)+line1_y);
endShape();

beginShape();
vertex(wc+(line1_xScale*140.7)+line1_x,hc+(line1_yScale*599)+line1_y);
vertex(wc+(line1_xScale*140.6)+line1_x,hc+(line1_yScale*596)+line1_y);
endShape();

beginShape();
vertex(wc+(line1_xScale*140.6)+line1_x,hc+(line1_yScale*593)+line1_y);
vertex(wc+(line1_xScale*140.6)+line1_x,hc+(line1_yScale*590)+line1_y);
endShape();

beginShape();
vertex(wc+(line1_xScale*140.6)+line1_x,hc+(line1_yScale*587)+line1_y);
vertex(wc+(line1_xScale*140.5)+line1_x,hc+(line1_yScale*584)+line1_y);
endShape();
//ENDline1
}
//roll10
{
fill(rollwhite);
let roll10_x = -scale*80;
let roll10_y = -scale*112;
let roll10_xScale = scale/4.5;
let roll10_yScale = scale/4.5;
beginShape();
vertex(wc+(roll10_xScale*163)+roll10_x,hc+(roll10_yScale*572)+roll10_y);
vertex(wc+(roll10_xScale*162)+roll10_x,hc+(roll10_yScale*575)+roll10_y);
vertex(wc+(roll10_xScale*156)+roll10_x,hc+(roll10_yScale*580)+roll10_y);
vertex(wc+(roll10_xScale*144)+roll10_x,hc+(roll10_yScale*584)+roll10_y);
vertex(wc+(roll10_xScale*124)+roll10_x,hc+(roll10_yScale*585)+roll10_y);
vertex(wc+(roll10_xScale*112)+roll10_x,hc+(roll10_yScale*585)+roll10_y);
vertex(wc+(roll10_xScale*96)+roll10_x,hc+(roll10_yScale*580)+roll10_y);
vertex(wc+(roll10_xScale*93)+roll10_x,hc+(roll10_yScale*576)+roll10_y);
endShape();
//ENDroll10
}

//roll2
{
fill(rollwhite);
let roll2_x = -scale*80;
let roll2_y = -scale*112;
let roll2_xScale = scale/4.5;
let roll2_yScale = scale/4.5;
beginShape();
vertex(wc+(roll2_xScale*159)+roll2_x,hc+(roll2_yScale*572)+roll2_y);
vertex(wc+(roll2_xScale*158)+roll2_x,hc+(roll2_yScale*575)+roll2_y);
vertex(wc+(roll2_xScale*153)+roll2_x,hc+(roll2_yScale*577)+roll2_y);
vertex(wc+(roll2_xScale*142)+roll2_x,hc+(roll2_yScale*580)+roll2_y);
vertex(wc+(roll2_xScale*128)+roll2_x,hc+(roll2_yScale*581)+roll2_y);
vertex(wc+(roll2_xScale*116)+roll2_x,hc+(roll2_yScale*582)+roll2_y);
vertex(wc+(roll2_xScale*103)+roll2_x,hc+(roll2_yScale*581)+roll2_y);
vertex(wc+(roll2_xScale*91)+roll2_x,hc+(roll2_yScale*578)+roll2_y);
vertex(wc+(roll2_xScale*87)+roll2_x,hc+(roll2_yScale*577)+roll2_y);
vertex(wc+(roll2_xScale*83)+roll2_x,hc+(roll2_yScale*575)+roll2_y);
vertex(wc+(roll2_xScale*83)+roll2_x,hc+(roll2_yScale*571)+roll2_y);
vertex(wc+(roll2_xScale*84)+roll2_x,hc+(roll2_yScale*509)+roll2_y);
vertex(wc+(roll2_xScale*85)+roll2_x,hc+(roll2_yScale*504)+roll2_y);
vertex(wc+(roll2_xScale*91)+roll2_x,hc+(roll2_yScale*500)+roll2_y);
vertex(wc+(roll2_xScale*101)+roll2_x,hc+(roll2_yScale*498)+roll2_y);
vertex(wc+(roll2_xScale*118)+roll2_x,hc+(roll2_yScale*497)+roll2_y);
vertex(wc+(roll2_xScale*139)+roll2_x,hc+(roll2_yScale*498)+roll2_y);
vertex(wc+(roll2_xScale*154)+roll2_x,hc+(roll2_yScale*500)+roll2_y);
vertex(wc+(roll2_xScale*162)+roll2_x,hc+(roll2_yScale*503)+roll2_y);
vertex(wc+(roll2_xScale*159)+roll2_x,hc+(roll2_yScale*571)+roll2_y);
endShape(CLOSE);
//ENDroll2
}
//line2
{
push();
translate(scale*-10,scale*-14.9)
fill("#ffffff");
let line1_x = -scale*80;
let line1_y = -scale*112;
let line1_xScale = scale/4.5;
let line1_yScale = scale/4.5;
beginShape();
vertex(wc+(line1_xScale*141)+line1_x,hc+(line1_yScale*647)+line1_y);
vertex(wc+(line1_xScale*141)+line1_x,hc+(line1_yScale*644)+line1_y);
endShape();

beginShape();
vertex(wc+(line1_xScale*141)+line1_x,hc+(line1_yScale*641)+line1_y);
vertex(wc+(line1_xScale*141)+line1_x,hc+(line1_yScale*638)+line1_y);
endShape();

beginShape();
vertex(wc+(line1_xScale*141.1)+line1_x,hc+(line1_yScale*635)+line1_y);
vertex(wc+(line1_xScale*141.1)+line1_x,hc+(line1_yScale*632)+line1_y);
endShape();

beginShape();
vertex(wc+(line1_xScale*141.1)+line1_x,hc+(line1_yScale*629)+line1_y);
vertex(wc+(line1_xScale*141.2)+line1_x,hc+(line1_yScale*626)+line1_y);
endShape();

beginShape();
vertex(wc+(line1_xScale*141.2)+line1_x,hc+(line1_yScale*623)+line1_y);
vertex(wc+(line1_xScale*141.2)+line1_x,hc+(line1_yScale*620)+line1_y);
endShape();

beginShape();
vertex(wc+(line1_xScale*141.3)+line1_x,hc+(line1_yScale*617)+line1_y);
vertex(wc+(line1_xScale*141.3)+line1_x,hc+(line1_yScale*614)+line1_y);
endShape();

beginShape();
vertex(wc+(line1_xScale*141.3)+line1_x,hc+(line1_yScale*611)+line1_y);
vertex(wc+(line1_xScale*141.4)+line1_x,hc+(line1_yScale*608)+line1_y);
endShape();

beginShape();
vertex(wc+(line1_xScale*141.4)+line1_x,hc+(line1_yScale*605)+line1_y);
vertex(wc+(line1_xScale*141.4)+line1_x,hc+(line1_yScale*602)+line1_y);
endShape();

beginShape();
vertex(wc+(line1_xScale*141.5)+line1_x,hc+(line1_yScale*599)+line1_y);
vertex(wc+(line1_xScale*141.5)+line1_x,hc+(line1_yScale*596)+line1_y);
endShape();

beginShape();
vertex(wc+(line1_xScale*141.6)+line1_x,hc+(line1_yScale*593)+line1_y);
vertex(wc+(line1_xScale*141.6)+line1_x,hc+(line1_yScale*590)+line1_y);
endShape();

beginShape();
vertex(wc+(line1_xScale*141.6)+line1_x,hc+(line1_yScale*587)+line1_y);
vertex(wc+(line1_xScale*141.7)+line1_x,hc+(line1_yScale*584)+line1_y);
endShape();
//ENDline1

pop();
}
//roll9
{
fill(rollwhite);
let roll9_x = -scale*80;
let roll9_y = -scale*112;
let roll9_xScale = scale/4.5;
let roll9_yScale = scale/4.5;
beginShape();
vertex(wc+(roll9_xScale*85)+roll9_x,hc+(roll9_yScale*506)+roll9_y);
vertex(wc+(roll9_xScale*89)+roll9_x,hc+(roll9_yScale*512)+roll9_y);
vertex(wc+(roll9_xScale*99)+roll9_x,hc+(roll9_yScale*515)+roll9_y);
vertex(wc+(roll9_xScale*115)+roll9_x,hc+(roll9_yScale*516)+roll9_y);
vertex(wc+(roll9_xScale*133)+roll9_x,hc+(roll9_yScale*516)+roll9_y);
vertex(wc+(roll9_xScale*146)+roll9_x,hc+(roll9_yScale*514)+roll9_y);
vertex(wc+(roll9_xScale*156)+roll9_x,hc+(roll9_yScale*512)+roll9_y);
vertex(wc+(roll9_xScale*160)+roll9_x,hc+(roll9_yScale*509)+roll9_y);
vertex(wc+(roll9_xScale*162)+roll9_x,hc+(roll9_yScale*504)+roll9_y);
endShape();
//ENDroll9
}

//roll3
{
fill(rollwhite);
let roll3_x = -scale*80;
let roll3_y = -scale*112;
let roll3_xScale = scale/4.5;
let roll3_yScale = scale/4.5;
beginShape();
vertex(wc+(roll3_xScale*96)+roll3_x,hc+(roll3_yScale*509)+roll3_y);
vertex(wc+(roll3_xScale*108)+roll3_x,hc+(roll3_yScale*511)+roll3_y);
vertex(wc+(roll3_xScale*124)+roll3_x,hc+(roll3_yScale*512)+roll3_y);
vertex(wc+(roll3_xScale*138)+roll3_x,hc+(roll3_yScale*513)+roll3_y);
vertex(wc+(roll3_xScale*153)+roll3_x,hc+(roll3_yScale*511)+roll3_y);
vertex(wc+(roll3_xScale*160)+roll3_x,hc+(roll3_yScale*508)+roll3_y);
vertex(wc+(roll3_xScale*164)+roll3_x,hc+(roll3_yScale*504)+roll3_y);
vertex(wc+(roll3_xScale*166)+roll3_x,hc+(roll3_yScale*501)+roll3_y);
vertex(wc+(roll3_xScale*164)+roll3_x,hc+(roll3_yScale*438)+roll3_y);
vertex(wc+(roll3_xScale*158)+roll3_x,hc+(roll3_yScale*434)+roll3_y);
vertex(wc+(roll3_xScale*150)+roll3_x,hc+(roll3_yScale*433)+roll3_y);
vertex(wc+(roll3_xScale*134)+roll3_x,hc+(roll3_yScale*433)+roll3_y);
vertex(wc+(roll3_xScale*115)+roll3_x,hc+(roll3_yScale*433)+roll3_y);
vertex(wc+(roll3_xScale*95)+roll3_x,hc+(roll3_yScale*438)+roll3_y);
vertex(wc+(roll3_xScale*88)+roll3_x,hc+(roll3_yScale*443)+roll3_y);
vertex(wc+(roll3_xScale*91)+roll3_x,hc+(roll3_yScale*503)+roll3_y);
vertex(wc+(roll3_xScale*94)+roll3_x,hc+(roll3_yScale*507)+roll3_y);
endShape(CLOSE);
//ENDroll3
}
//roll11
{
fill(rollwhite);
let roll11_x = -scale*80;
let roll11_y = -scale*112;
let roll11_xScale = scale/4.5;
let roll11_yScale = scale/4.5;
beginShape();
vertex(wc+(roll11_xScale*89)+roll11_x,hc+(roll11_yScale*444)+roll11_y);
vertex(wc+(roll11_xScale*97)+roll11_x,hc+(roll11_yScale*447)+roll11_y);
vertex(wc+(roll11_xScale*103)+roll11_x,hc+(roll11_yScale*447)+roll11_y);
vertex(wc+(roll11_xScale*117)+roll11_x,hc+(roll11_yScale*448)+roll11_y);
vertex(wc+(roll11_xScale*137)+roll11_x,hc+(roll11_yScale*446)+roll11_y);
vertex(wc+(roll11_xScale*155)+roll11_x,hc+(roll11_yScale*443)+roll11_y);
vertex(wc+(roll11_xScale*162)+roll11_x,hc+(roll11_yScale*440)+roll11_y);
vertex(wc+(roll11_xScale*163)+roll11_x,hc+(roll11_yScale*438)+roll11_y);
endShape();
//ENDroll11
}
//line4
{
  push();
translate(scale*3,scale*-30.8)
fill("#ffffff");
let line1_x = -scale*80;
let line1_y = -scale*112;
let line1_xScale = scale/4.5;
let line1_yScale = scale/4.5;
beginShape();
vertex(wc+(line1_xScale*141)+line1_x,hc+(line1_yScale*647)+line1_y);
vertex(wc+(line1_xScale*141)+line1_x,hc+(line1_yScale*644)+line1_y);
endShape();

beginShape();
vertex(wc+(line1_xScale*141)+line1_x,hc+(line1_yScale*641)+line1_y);
vertex(wc+(line1_xScale*141)+line1_x,hc+(line1_yScale*638)+line1_y);
endShape();

beginShape();
vertex(wc+(line1_xScale*141)+line1_x,hc+(line1_yScale*635)+line1_y);
vertex(wc+(line1_xScale*141)+line1_x,hc+(line1_yScale*632)+line1_y);
endShape();

beginShape();
vertex(wc+(line1_xScale*141)+line1_x,hc+(line1_yScale*629)+line1_y);
vertex(wc+(line1_xScale*140.9)+line1_x,hc+(line1_yScale*626)+line1_y);
endShape();

beginShape();
vertex(wc+(line1_xScale*140.9)+line1_x,hc+(line1_yScale*623)+line1_y);
vertex(wc+(line1_xScale*140.8)+line1_x,hc+(line1_yScale*620)+line1_y);
endShape();

beginShape();
vertex(wc+(line1_xScale*140.8)+line1_x,hc+(line1_yScale*617)+line1_y);
vertex(wc+(line1_xScale*140.8)+line1_x,hc+(line1_yScale*614)+line1_y);
endShape();

beginShape();
vertex(wc+(line1_xScale*140.8)+line1_x,hc+(line1_yScale*611)+line1_y);
vertex(wc+(line1_xScale*140.7)+line1_x,hc+(line1_yScale*608)+line1_y);
endShape();

beginShape();
vertex(wc+(line1_xScale*140.7)+line1_x,hc+(line1_yScale*605)+line1_y);
vertex(wc+(line1_xScale*140.7)+line1_x,hc+(line1_yScale*602)+line1_y);
endShape();

beginShape();
vertex(wc+(line1_xScale*140.7)+line1_x,hc+(line1_yScale*599)+line1_y);
vertex(wc+(line1_xScale*140.6)+line1_x,hc+(line1_yScale*596)+line1_y);
endShape();

beginShape();
vertex(wc+(line1_xScale*140.6)+line1_x,hc+(line1_yScale*593)+line1_y);
vertex(wc+(line1_xScale*140.6)+line1_x,hc+(line1_yScale*590)+line1_y);
endShape();

beginShape();
vertex(wc+(line1_xScale*140.6)+line1_x,hc+(line1_yScale*587)+line1_y);
vertex(wc+(line1_xScale*140.5)+line1_x,hc+(line1_yScale*584)+line1_y);
endShape();
//ENDline1
  pop();
}

//roll4
{
fill(rollwhite);
let roll4_x = -scale*80;
let roll4_y = -scale*112;
let roll4_xScale = scale/4.5;
let roll4_yScale = scale/4.5;
beginShape();
vertex(wc+(roll4_xScale*119)+roll4_x,hc+(roll4_yScale*444)+roll4_y);
vertex(wc+(roll4_xScale*134)+roll4_x,hc+(roll4_yScale*443)+roll4_y);
vertex(wc+(roll4_xScale*150)+roll4_x,hc+(roll4_yScale*441)+roll4_y);
vertex(wc+(roll4_xScale*159)+roll4_x,hc+(roll4_yScale*439)+roll4_y);
vertex(wc+(roll4_xScale*162)+roll4_x,hc+(roll4_yScale*435)+roll4_y);
vertex(wc+(roll4_xScale*163)+roll4_x,hc+(roll4_yScale*431)+roll4_y);
vertex(wc+(roll4_xScale*159)+roll4_x,hc+(roll4_yScale*370)+roll4_y);
vertex(wc+(roll4_xScale*157)+roll4_x,hc+(roll4_yScale*366)+roll4_y);
vertex(wc+(roll4_xScale*149)+roll4_x,hc+(roll4_yScale*364)+roll4_y);
vertex(wc+(roll4_xScale*135)+roll4_x,hc+(roll4_yScale*362)+roll4_y);
vertex(wc+(roll4_xScale*115)+roll4_x,hc+(roll4_yScale*362)+roll4_y);
vertex(wc+(roll4_xScale*99)+roll4_x,hc+(roll4_yScale*366)+roll4_y);
vertex(wc+(roll4_xScale*91)+roll4_x,hc+(roll4_yScale*370)+roll4_y);
vertex(wc+(roll4_xScale*85)+roll4_x,hc+(roll4_yScale*373)+roll4_y);
vertex(wc+(roll4_xScale*81)+roll4_x,hc+(roll4_yScale*377)+roll4_y);
vertex(wc+(roll4_xScale*89)+roll4_x,hc+(roll4_yScale*440)+roll4_y);
vertex(wc+(roll4_xScale*95)+roll4_x,hc+(roll4_yScale*443)+roll4_y);
vertex(wc+(roll4_xScale*102)+roll4_x,hc+(roll4_yScale*444)+roll4_y);
vertex(wc+(roll4_xScale*115)+roll4_x,hc+(roll4_yScale*445)+roll4_y);
endShape(CLOSE);
//ENDroll4
}
//line4
{
  push();
translate(scale*-4,scale*-44.2)
fill("#ffffff");
let line1_x = -scale*80;
let line1_y = -scale*112;
let line1_xScale = scale/4.5;
let line1_yScale = scale/4.5;

beginShape();
vertex(wc+(line1_xScale*141.1)+line1_x,hc+(line1_yScale*623)+line1_y);
vertex(wc+(line1_xScale*140.8)+line1_x,hc+(line1_yScale*620)+line1_y);
endShape();

beginShape();
vertex(wc+(line1_xScale*140.6)+line1_x,hc+(line1_yScale*617)+line1_y);
vertex(wc+(line1_xScale*140.4)+line1_x,hc+(line1_yScale*614)+line1_y);
endShape();

beginShape();
vertex(wc+(line1_xScale*140.3)+line1_x,hc+(line1_yScale*611)+line1_y);
vertex(wc+(line1_xScale*140.1)+line1_x,hc+(line1_yScale*608)+line1_y);
endShape();

beginShape();
vertex(wc+(line1_xScale*140.0)+line1_x,hc+(line1_yScale*605)+line1_y);
vertex(wc+(line1_xScale*139.8)+line1_x,hc+(line1_yScale*602)+line1_y);
endShape();

beginShape();
vertex(wc+(line1_xScale*139.7)+line1_x,hc+(line1_yScale*599)+line1_y);
vertex(wc+(line1_xScale*139.5)+line1_x,hc+(line1_yScale*596)+line1_y);
endShape();

beginShape();
vertex(wc+(line1_xScale*139.4)+line1_x,hc+(line1_yScale*593)+line1_y);
vertex(wc+(line1_xScale*139.1)+line1_x,hc+(line1_yScale*590)+line1_y);
endShape();

beginShape();
vertex(wc+(line1_xScale*139.0)+line1_x,hc+(line1_yScale*587)+line1_y);
vertex(wc+(line1_xScale*138.7)+line1_x,hc+(line1_yScale*584)+line1_y);
endShape();
//ENDline1
  pop();
}
//r1
{
fill("#ffffff");
let r1_x = -scale*80;
let r1_y = -scale*112;
let r1_xScale = scale/4.5;
let r1_yScale = scale/4.5;
beginShape();
vertex(wc+(r1_xScale*102)+r1_x,hc+(r1_yScale*383)+r1_y);
vertex(wc+(r1_xScale*107)+r1_x,hc+(r1_yScale*394)+r1_y);
vertex(wc+(r1_xScale*106)+r1_x,hc+(r1_yScale*406)+r1_y);
vertex(wc+(r1_xScale*100)+r1_x,hc+(r1_yScale*415)+r1_y);
vertex(wc+(r1_xScale*97)+r1_x,hc+(r1_yScale*424)+r1_y);
vertex(wc+(r1_xScale*101)+r1_x,hc+(r1_yScale*427)+r1_y);
vertex(wc+(r1_xScale*101)+r1_x,hc+(r1_yScale*429)+r1_y);
vertex(wc+(r1_xScale*106)+r1_x,hc+(r1_yScale*431)+r1_y);
vertex(wc+(r1_xScale*105)+r1_x,hc+(r1_yScale*435)+r1_y);
vertex(wc+(r1_xScale*108)+r1_x,hc+(r1_yScale*438)+r1_y);
vertex(wc+(r1_xScale*108)+r1_x,hc+(r1_yScale*442)+r1_y);
vertex(wc+(r1_xScale*112)+r1_x,hc+(r1_yScale*444)+r1_y);
vertex(wc+(r1_xScale*112)+r1_x,hc+(r1_yScale*449)+r1_y);
vertex(wc+(r1_xScale*116)+r1_x,hc+(r1_yScale*452)+r1_y);
vertex(wc+(r1_xScale*118)+r1_x,hc+(r1_yScale*456)+r1_y);
vertex(wc+(r1_xScale*118)+r1_x,hc+(r1_yScale*461)+r1_y);
vertex(wc+(r1_xScale*124)+r1_x,hc+(r1_yScale*464)+r1_y);
vertex(wc+(r1_xScale*124)+r1_x,hc+(r1_yScale*469)+r1_y);
vertex(wc+(r1_xScale*131)+r1_x,hc+(r1_yScale*465)+r1_y);
vertex(wc+(r1_xScale*133)+r1_x,hc+(r1_yScale*455)+r1_y);
vertex(wc+(r1_xScale*134)+r1_x,hc+(r1_yScale*444)+r1_y);
vertex(wc+(r1_xScale*103)+r1_x,hc+(r1_yScale*385)+r1_y);
endShape(CLOSE);
//ENDr1
}
//roll8
{
fill(rollwhite);
let roll8_x = -scale*80;
let roll8_y = -scale*112;
let roll8_xScale = scale/4.5;
let roll8_yScale = scale/4.5;
beginShape();
vertex(wc+(roll8_xScale*82)+roll8_x,hc+(roll8_yScale*379)+roll8_y);
vertex(wc+(roll8_xScale*101)+roll8_x,hc+(roll8_yScale*383)+roll8_y);
vertex(wc+(roll8_xScale*121)+roll8_x,hc+(roll8_yScale*383)+roll8_y);
vertex(wc+(roll8_xScale*139)+roll8_x,hc+(roll8_yScale*380)+roll8_y);
vertex(wc+(roll8_xScale*149)+roll8_x,hc+(roll8_yScale*376)+roll8_y);
vertex(wc+(roll8_xScale*155)+roll8_x,hc+(roll8_yScale*372)+roll8_y);
vertex(wc+(roll8_xScale*157)+roll8_x,hc+(roll8_yScale*370)+roll8_y);
vertex(wc+(roll8_xScale*158)+roll8_x,hc+(roll8_yScale*367)+roll8_y);
endShape();
//ENDroll8
}

//roll5
{
fill(rollwhite);
let roll5_x = -scale*80;
let roll5_y = -scale*112;
let roll5_xScale = scale/4.5;
let roll5_yScale = scale/4.5;
beginShape();
vertex(wc+(roll5_xScale*86)+roll5_x,hc+(roll5_yScale*371)+roll5_y);
vertex(wc+(roll5_xScale*93)+roll5_x,hc+(roll5_yScale*375)+roll5_y);
vertex(wc+(roll5_xScale*105)+roll5_x,hc+(roll5_yScale*377)+roll5_y);
vertex(wc+(roll5_xScale*121)+roll5_x,hc+(roll5_yScale*379)+roll5_y);
vertex(wc+(roll5_xScale*133)+roll5_x,hc+(roll5_yScale*377)+roll5_y);
vertex(wc+(roll5_xScale*142)+roll5_x,hc+(roll5_yScale*375)+roll5_y);
vertex(wc+(roll5_xScale*150)+roll5_x,hc+(roll5_yScale*373)+roll5_y);
vertex(wc+(roll5_xScale*158)+roll5_x,hc+(roll5_yScale*368)+roll5_y);
vertex(wc+(roll5_xScale*161)+roll5_x,hc+(roll5_yScale*365)+roll5_y);
vertex(wc+(roll5_xScale*160)+roll5_x,hc+(roll5_yScale*299)+roll5_y);
vertex(wc+(roll5_xScale*155)+roll5_x,hc+(roll5_yScale*295)+roll5_y);
vertex(wc+(roll5_xScale*149)+roll5_x,hc+(roll5_yScale*294)+roll5_y);
vertex(wc+(roll5_xScale*135)+roll5_x,hc+(roll5_yScale*292)+roll5_y);
vertex(wc+(roll5_xScale*107)+roll5_x,hc+(roll5_yScale*292)+roll5_y);
vertex(wc+(roll5_xScale*94)+roll5_x,hc+(roll5_yScale*296)+roll5_y);
vertex(wc+(roll5_xScale*87)+roll5_x,hc+(roll5_yScale*302)+roll5_y);
vertex(wc+(roll5_xScale*84)+roll5_x,hc+(roll5_yScale*307)+roll5_y);
vertex(wc+(roll5_xScale*86)+roll5_x,hc+(roll5_yScale*368)+roll5_y);
endShape(CLOSE);
//ENDroll5
}
//roll12
{
fill(rollwhite);
let roll12_x = -scale*80;
let roll12_y = -scale*112;
let roll12_xScale = scale/4.5;
let roll12_yScale = scale/4.5;
beginShape();
vertex(wc+(roll12_xScale*85)+roll12_x,hc+(roll12_yScale*307)+roll12_y);
vertex(wc+(roll12_xScale*88)+roll12_x,hc+(roll12_yScale*311)+roll12_y);
vertex(wc+(roll12_xScale*96)+roll12_x,hc+(roll12_yScale*313)+roll12_y);
vertex(wc+(roll12_xScale*107)+roll12_x,hc+(roll12_yScale*315)+roll12_y);
vertex(wc+(roll12_xScale*122)+roll12_x,hc+(roll12_yScale*313)+roll12_y);
vertex(wc+(roll12_xScale*143)+roll12_x,hc+(roll12_yScale*311)+roll12_y);
vertex(wc+(roll12_xScale*153)+roll12_x,hc+(roll12_yScale*307)+roll12_y);
vertex(wc+(roll12_xScale*159)+roll12_x,hc+(roll12_yScale*299)+roll12_y);
endShape();
//ENDroll12
}
//line6
{
push();
translate(scale*-7,scale*-59);
fill("#ffffff");
let line1_x = -scale*80;
let line1_y = -scale*112;
let line1_xScale = scale/4.5;
let line1_yScale = scale/4.5;
beginShape();
vertex(wc+(line1_xScale*141)+line1_x,hc+(line1_yScale*641)+line1_y);
vertex(wc+(line1_xScale*141)+line1_x,hc+(line1_yScale*638)+line1_y);
endShape();

beginShape();
vertex(wc+(line1_xScale*141.1)+line1_x,hc+(line1_yScale*635)+line1_y);
vertex(wc+(line1_xScale*141.1)+line1_x,hc+(line1_yScale*632)+line1_y);
endShape();

beginShape();
vertex(wc+(line1_xScale*141.1)+line1_x,hc+(line1_yScale*629)+line1_y);
vertex(wc+(line1_xScale*141.2)+line1_x,hc+(line1_yScale*626)+line1_y);
endShape();

beginShape();
vertex(wc+(line1_xScale*141.2)+line1_x,hc+(line1_yScale*623)+line1_y);
vertex(wc+(line1_xScale*141.2)+line1_x,hc+(line1_yScale*620)+line1_y);
endShape();

beginShape();
vertex(wc+(line1_xScale*141.3)+line1_x,hc+(line1_yScale*617)+line1_y);
vertex(wc+(line1_xScale*141.3)+line1_x,hc+(line1_yScale*614)+line1_y);
endShape();

beginShape();
vertex(wc+(line1_xScale*141.3)+line1_x,hc+(line1_yScale*611)+line1_y);
vertex(wc+(line1_xScale*141.4)+line1_x,hc+(line1_yScale*608)+line1_y);
endShape();

beginShape();
vertex(wc+(line1_xScale*141.4)+line1_x,hc+(line1_yScale*605)+line1_y);
vertex(wc+(line1_xScale*141.4)+line1_x,hc+(line1_yScale*602)+line1_y);
endShape();

beginShape();
vertex(wc+(line1_xScale*141.5)+line1_x,hc+(line1_yScale*599)+line1_y);
vertex(wc+(line1_xScale*141.5)+line1_x,hc+(line1_yScale*596)+line1_y);
endShape();

beginShape();
vertex(wc+(line1_xScale*141.6)+line1_x,hc+(line1_yScale*593)+line1_y);
vertex(wc+(line1_xScale*141.6)+line1_x,hc+(line1_yScale*590)+line1_y);
endShape();

beginShape();
vertex(wc+(line1_xScale*141.6)+line1_x,hc+(line1_yScale*587)+line1_y);
vertex(wc+(line1_xScale*141.7)+line1_x,hc+(line1_yScale*584)+line1_y);
endShape();
//ENDline1

pop();
}

//r2
{
fill("#ffffff");
let r2_x = -scale*80;
let r2_y = -scale*112;
let r2_xScale = scale/4.5;
let r2_yScale = scale/4.5;
beginShape();
vertex(wc+(r2_xScale*109)+r2_x,hc+(r2_yScale*317)+r2_y);
vertex(wc+(r2_xScale*133)+r2_x,hc+(r2_yScale*317)+r2_y);
vertex(wc+(r2_xScale*147)+r2_x,hc+(r2_yScale*318)+r2_y);
vertex(wc+(r2_xScale*156)+r2_x,hc+(r2_yScale*321)+r2_y);
vertex(wc+(r2_xScale*165)+r2_x,hc+(r2_yScale*334)+r2_y);
vertex(wc+(r2_xScale*161)+r2_x,hc+(r2_yScale*348)+r2_y);
vertex(wc+(r2_xScale*163)+r2_x,hc+(r2_yScale*368)+r2_y);
vertex(wc+(r2_xScale*164)+r2_x,hc+(r2_yScale*362)+r2_y);
vertex(wc+(r2_xScale*168)+r2_x,hc+(r2_yScale*357)+r2_y);
vertex(wc+(r2_xScale*168)+r2_x,hc+(r2_yScale*354)+r2_y);
vertex(wc+(r2_xScale*168)+r2_x,hc+(r2_yScale*332)+r2_y);
vertex(wc+(r2_xScale*172)+r2_x,hc+(r2_yScale*321)+r2_y);
vertex(wc+(r2_xScale*173)+r2_x,hc+(r2_yScale*309)+r2_y);
vertex(wc+(r2_xScale*169)+r2_x,hc+(r2_yScale*299)+r2_y);
vertex(wc+(r2_xScale*164)+r2_x,hc+(r2_yScale*296)+r2_y);
vertex(wc+(r2_xScale*155)+r2_x,hc+(r2_yScale*295)+r2_y);
endShape();
//ENDr2
}
//line3
{
fill("#ffffff");
let line3_x = -scale*80;
let line3_y = -scale*112;
let line3_xScale = scale/4.5;
let line3_yScale = scale/4.5;
beginShape();
vertex(wc+(line3_xScale*157)+line3_x,hc+(line3_yScale*323)+line3_y);
vertex(wc+(line3_xScale*159)+line3_x,hc+(line3_yScale*319)+line3_y);
endShape();

beginShape();
vertex(wc+(line3_xScale*160.5)+line3_x,hc+(line3_yScale*317)+line3_y);
vertex(wc+(line3_xScale*162)+line3_x,hc+(line3_yScale*315)+line3_y);
endShape();

beginShape();
vertex(wc+(line3_xScale*163)+line3_x,hc+(line3_yScale*313)+line3_y);
vertex(wc+(line3_xScale*164)+line3_x,hc+(line3_yScale*311)+line3_y);
endShape();

beginShape();
vertex(wc+(line3_xScale*165)+line3_x,hc+(line3_yScale*309)+line3_y);
vertex(wc+(line3_xScale*165.5)+line3_x,hc+(line3_yScale*308)+line3_y);
endShape();

beginShape();
vertex(wc+(line3_xScale*166.5)+line3_x,hc+(line3_yScale*306.5)+line3_y);
vertex(wc+(line3_xScale*167)+line3_x,hc+(line3_yScale*305.5)+line3_y);
endShape();

beginShape();
vertex(wc+(line3_xScale*168)+line3_x,hc+(line3_yScale*304)+line3_y);
vertex(wc+(line3_xScale*168.2)+line3_x,hc+(line3_yScale*303)+line3_y);
endShape();

beginShape();
vertex(wc+(line3_xScale*168.5)+line3_x,hc+(line3_yScale*301)+line3_y);
vertex(wc+(line3_xScale*168.8)+line3_x,hc+(line3_yScale*300)+line3_y);
endShape();
//ENDline3
}
//roll6
{
fill(rollwhite);
let roll6_x = -scale*80;
let roll6_y = -scale*112;
let roll6_xScale = scale/4.5;
let roll6_yScale = scale/4.5;
beginShape();
vertex(wc+(roll6_xScale*139)+roll6_x,hc+(roll6_yScale*307)+roll6_y);
vertex(wc+(roll6_xScale*165)+roll6_x,hc+(roll6_yScale*290)+roll6_y);
vertex(wc+(roll6_xScale*171)+roll6_x,hc+(roll6_yScale*277)+roll6_y);
vertex(wc+(roll6_xScale*173)+roll6_x,hc+(roll6_yScale*267)+roll6_y);

vertex(wc+(roll6_xScale*173)+roll6_x,hc+(roll6_yScale*254)+roll6_y);
vertex(wc+(roll6_xScale*169)+roll6_x,hc+(roll6_yScale*243)+roll6_y);
vertex(wc+(roll6_xScale*163)+roll6_x,hc+(roll6_yScale*233)+roll6_y);
vertex(wc+(roll6_xScale*151)+roll6_x,hc+(roll6_yScale*226)+roll6_y);
vertex(wc+(roll6_xScale*137)+roll6_x,hc+(roll6_yScale*225)+roll6_y);
vertex(wc+(roll6_xScale*121)+roll6_x,hc+(roll6_yScale*225)+roll6_y);
vertex(wc+(roll6_xScale*80)+roll6_x,hc+(roll6_yScale*255)+roll6_y);
endShape(CLOSE);
//ENDroll6
}
//roll6
{
fill(rollwhite);
let roll6_x = -scale*80;
let roll6_y = -scale*112;
let roll6_xScale = scale/4.5;
let roll6_yScale = scale/4.5;
beginShape();
vertex(wc+(roll6_xScale*106)+roll6_x,hc+(roll6_yScale*316)+roll6_y);
vertex(wc+(roll6_xScale*122)+roll6_x,hc+(roll6_yScale*316)+roll6_y);
vertex(wc+(roll6_xScale*132)+roll6_x,hc+(roll6_yScale*312)+roll6_y);
vertex(wc+(roll6_xScale*141)+roll6_x,hc+(roll6_yScale*304)+roll6_y);
vertex(wc+(roll6_xScale*146)+roll6_x,hc+(roll6_yScale*292)+roll6_y);
vertex(wc+(roll6_xScale*149)+roll6_x,hc+(roll6_yScale*270)+roll6_y);
vertex(wc+(roll6_xScale*141)+roll6_x,hc+(roll6_yScale*247)+roll6_y);
vertex(wc+(roll6_xScale*122)+roll6_x,hc+(roll6_yScale*241)+roll6_y);
vertex(wc+(roll6_xScale*98)+roll6_x,hc+(roll6_yScale*241)+roll6_y);
vertex(wc+(roll6_xScale*80)+roll6_x,hc+(roll6_yScale*256)+roll6_y);
vertex(wc+(roll6_xScale*76)+roll6_x,hc+(roll6_yScale*276)+roll6_y);
vertex(wc+(roll6_xScale*80)+roll6_x,hc+(roll6_yScale*300)+roll6_y);
vertex(wc+(roll6_xScale*90)+roll6_x,hc+(roll6_yScale*308)+roll6_y);
vertex(wc+(roll6_xScale*104)+roll6_x,hc+(roll6_yScale*315)+roll6_y);
endShape(CLOSE);
//ENDroll6
}
//line3
{
  push();
  translate(scale*-11,scale*-18.4)
fill("#ffffff");
let line3_x = -scale*80;
let line3_y = -scale*112;
let line3_xScale = scale/4.5;
let line3_yScale = scale/4.5;
beginShape();
vertex(wc+(line3_xScale*157)+line3_x,hc+(line3_yScale*323)+line3_y);
vertex(wc+(line3_xScale*160)+line3_x,hc+(line3_yScale*321)+line3_y);
endShape();

beginShape();
vertex(wc+(line3_xScale*162)+line3_x,hc+(line3_yScale*320)+line3_y);
vertex(wc+(line3_xScale*165)+line3_x,hc+(line3_yScale*318)+line3_y);
endShape();

beginShape();
vertex(wc+(line3_xScale*167)+line3_x,hc+(line3_yScale*317)+line3_y);
vertex(wc+(line3_xScale*169)+line3_x,hc+(line3_yScale*315.5)+line3_y);
endShape();

beginShape();
vertex(wc+(line3_xScale*171)+line3_x,hc+(line3_yScale*314)+line3_y);
vertex(wc+(line3_xScale*173)+line3_x,hc+(line3_yScale*312.5)+line3_y);
endShape();

beginShape();
vertex(wc+(line3_xScale*175)+line3_x,hc+(line3_yScale*311)+line3_y);
vertex(wc+(line3_xScale*176)+line3_x,hc+(line3_yScale*310.5)+line3_y);
endShape();

beginShape();
vertex(wc+(line3_xScale*177)+line3_x,hc+(line3_yScale*309)+line3_y);
vertex(wc+(line3_xScale*178)+line3_x,hc+(line3_yScale*308.5)+line3_y);
endShape();
//ENDline3
  pop();
}
//hole1
{
fill(60,60,10);
let hole1_x = -scale*80;
let hole1_y = -scale*112;
let hole1_xScale = scale/4.5;
let hole1_yScale = scale/4.5;
beginShape();
vertex(wc+(hole1_xScale*111)+hole1_x,hc+(hole1_yScale*265)+hole1_y);
vertex(wc+(hole1_xScale*116)+hole1_x,hc+(hole1_yScale*266)+hole1_y);
vertex(wc+(hole1_xScale*121)+hole1_x,hc+(hole1_yScale*268)+hole1_y);
vertex(wc+(hole1_xScale*124)+hole1_x,hc+(hole1_yScale*272)+hole1_y);
vertex(wc+(hole1_xScale*125)+hole1_x,hc+(hole1_yScale*277)+hole1_y);
vertex(wc+(hole1_xScale*123)+hole1_x,hc+(hole1_yScale*282)+hole1_y);
vertex(wc+(hole1_xScale*121)+hole1_x,hc+(hole1_yScale*286)+hole1_y);
vertex(wc+(hole1_xScale*116)+hole1_x,hc+(hole1_yScale*291)+hole1_y);
vertex(wc+(hole1_xScale*110)+hole1_x,hc+(hole1_yScale*291)+hole1_y);
vertex(wc+(hole1_xScale*103)+hole1_x,hc+(hole1_yScale*289)+hole1_y);
vertex(wc+(hole1_xScale*99)+hole1_x,hc+(hole1_yScale*285)+hole1_y);
vertex(wc+(hole1_xScale*98)+hole1_x,hc+(hole1_yScale*278)+hole1_y);
vertex(wc+(hole1_xScale*100)+hole1_x,hc+(hole1_yScale*272)+hole1_y);
vertex(wc+(hole1_xScale*104)+hole1_x,hc+(hole1_yScale*267)+hole1_y);
vertex(wc+(hole1_xScale*111)+hole1_x,hc+(hole1_yScale*265)+hole1_y);
endShape(CLOSE);
//ENDhole1
}
//hole
{
fill(30, 20, 10);
let hole_x = -scale*80;
let hole_y = -scale*112;
let hole_xScale = scale/4.5;
let hole_yScale = scale/4.5;
beginShape();
vertex(wc+(hole_xScale*108)+hole_x,hc+(hole_yScale*269)+hole_y);
vertex(wc+(hole_xScale*114)+hole_x,hc+(hole_yScale*267)+hole_y);
vertex(wc+(hole_xScale*120)+hole_x,hc+(hole_yScale*269)+hole_y);
vertex(wc+(hole_xScale*123)+hole_x,hc+(hole_yScale*274)+hole_y);
vertex(wc+(hole_xScale*123)+hole_x,hc+(hole_yScale*280)+hole_y);
vertex(wc+(hole_xScale*119)+hole_x,hc+(hole_yScale*286)+hole_y);
vertex(wc+(hole_xScale*112)+hole_x,hc+(hole_yScale*289)+hole_y);
vertex(wc+(hole_xScale*103)+hole_x,hc+(hole_yScale*286)+hole_y);
vertex(wc+(hole_xScale*100)+hole_x,hc+(hole_yScale*281)+hole_y);
vertex(wc+(hole_xScale*101)+hole_x,hc+(hole_yScale*274)+hole_y);
vertex(wc+(hole_xScale*106)+hole_x,hc+(hole_yScale*268)+hole_y);
endShape(CLOSE);
//ENDhole
}

  }

    //roll
{
fill(rollwhite);
let roll_x = -scale*93;
let roll_y = -scale*64;
let roll_xScale = scale/4.8;
let roll_yScale = scale/4.8;
beginShape();
vertex(wc+(roll_xScale*179)+roll_x,hc+(roll_yScale*447)+roll_y);
vertex(wc+(roll_xScale*170)+roll_x,hc+(roll_yScale*449)+roll_y);
vertex(wc+(roll_xScale*162)+roll_x,hc+(roll_yScale*458)+roll_y);
vertex(wc+(roll_xScale*156)+roll_x,hc+(roll_yScale*475)+roll_y);
vertex(wc+(roll_xScale*155)+roll_x,hc+(roll_yScale*492)+roll_y);
vertex(wc+(roll_xScale*159)+roll_x,hc+(roll_yScale*516)+roll_y);
vertex(wc+(roll_xScale*167)+roll_x,hc+(roll_yScale*526)+roll_y);
vertex(wc+(roll_xScale*178)+roll_x,hc+(roll_yScale*530)+roll_y);
vertex(wc+(roll_xScale*239)+roll_x,hc+(roll_yScale*542)+roll_y);
vertex(wc+(roll_xScale*258)+roll_x,hc+(roll_yScale*536)+roll_y);
vertex(wc+(roll_xScale*266)+roll_x,hc+(roll_yScale*522)+roll_y);
vertex(wc+(roll_xScale*270)+roll_x,hc+(roll_yScale*504)+roll_y);
vertex(wc+(roll_xScale*271)+roll_x,hc+(roll_yScale*484)+roll_y);
vertex(wc+(roll_xScale*269)+roll_x,hc+(roll_yScale*466)+roll_y);
vertex(wc+(roll_xScale*257)+roll_x,hc+(roll_yScale*453)+roll_y);
vertex(wc+(roll_xScale*184)+roll_x,hc+(roll_yScale*446)+roll_y);
endShape(CLOSE);

beginShape();
vertex(wc+(roll_xScale*258)+roll_x,hc+(roll_yScale*453)+roll_y);
vertex(wc+(roll_xScale*245)+roll_x,hc+(roll_yScale*459)+roll_y);
vertex(wc+(roll_xScale*238)+roll_x,hc+(roll_yScale*468)+roll_y);
vertex(wc+(roll_xScale*233)+roll_x,hc+(roll_yScale*479)+roll_y);
vertex(wc+(roll_xScale*229)+roll_x,hc+(roll_yScale*495)+roll_y);
vertex(wc+(roll_xScale*229)+roll_x,hc+(roll_yScale*514)+roll_y);
vertex(wc+(roll_xScale*232)+roll_x,hc+(roll_yScale*528)+roll_y);
vertex(wc+(roll_xScale*237)+roll_x,hc+(roll_yScale*535)+roll_y);
vertex(wc+(roll_xScale*245)+roll_x,hc+(roll_yScale*539)+roll_y);
vertex(wc+(roll_xScale*256)+roll_x,hc+(roll_yScale*539)+roll_y);
vertex(wc+(roll_xScale*259)+roll_x,hc+(roll_yScale*537)+roll_y);
endShape(CLOSE);


  fill(60,60,10);
beginShape();
vertex(wc+(roll_xScale*256)+roll_x,hc+(roll_yScale*481)+roll_y);
vertex(wc+(roll_xScale*251)+roll_x,hc+(roll_yScale*485)+roll_y);
vertex(wc+(roll_xScale*248)+roll_x,hc+(roll_yScale*493)+roll_y);
vertex(wc+(roll_xScale*247)+roll_x,hc+(roll_yScale*505)+roll_y);
vertex(wc+(roll_xScale*251)+roll_x,hc+(roll_yScale*515)+roll_y);
vertex(wc+(roll_xScale*258)+roll_x,hc+(roll_yScale*512)+roll_y);
vertex(wc+(roll_xScale*261)+roll_x,hc+(roll_yScale*505)+roll_y);
vertex(wc+(roll_xScale*264)+roll_x,hc+(roll_yScale*493)+roll_y);
vertex(wc+(roll_xScale*263)+roll_x,hc+(roll_yScale*486)+roll_y);
vertex(wc+(roll_xScale*256)+roll_x,hc+(roll_yScale*482)+roll_y);
endShape(CLOSE);


  fill(50, 40, 20);
beginShape();
vertex(wc+(roll_xScale*257)+roll_x,hc+(roll_yScale*485)+roll_y);
vertex(wc+(roll_xScale*253)+roll_x,hc+(roll_yScale*486)+roll_y);
vertex(wc+(roll_xScale*251)+roll_x,hc+(roll_yScale*493)+roll_y);
vertex(wc+(roll_xScale*249)+roll_x,hc+(roll_yScale*499)+roll_y);
vertex(wc+(roll_xScale*250)+roll_x,hc+(roll_yScale*509)+roll_y);
vertex(wc+(roll_xScale*253)+roll_x,hc+(roll_yScale*511)+roll_y);
vertex(wc+(roll_xScale*257)+roll_x,hc+(roll_yScale*511)+roll_y);
vertex(wc+(roll_xScale*262)+roll_x,hc+(roll_yScale*501)+roll_y);
vertex(wc+(roll_xScale*263)+roll_x,hc+(roll_yScale*492)+roll_y);
vertex(wc+(roll_xScale*257)+roll_x,hc+(roll_yScale*486)+roll_y);
endShape(CLOSE);

fill(rollwhite);
beginShape();
vertex(wc+(roll_xScale*176)+roll_x,hc+(roll_yScale*529)+roll_y);
vertex(wc+(roll_xScale*128)+roll_x,hc+(roll_yScale*560)+roll_y);
vertex(wc+(roll_xScale*107)+roll_x,hc+(roll_yScale*573)+roll_y);
vertex(wc+(roll_xScale*115)+roll_x,hc+(roll_yScale*573)+roll_y);
vertex(wc+(roll_xScale*115)+roll_x,hc+(roll_yScale*575)+roll_y);
vertex(wc+(roll_xScale*119)+roll_x,hc+(roll_yScale*574)+roll_y);
vertex(wc+(roll_xScale*119)+roll_x,hc+(roll_yScale*575)+roll_y);
vertex(wc+(roll_xScale*120)+roll_x,hc+(roll_yScale*577)+roll_y);
vertex(wc+(roll_xScale*125)+roll_x,hc+(roll_yScale*577)+roll_y);
vertex(wc+(roll_xScale*128)+roll_x,hc+(roll_yScale*578)+roll_y);
vertex(wc+(roll_xScale*129)+roll_x,hc+(roll_yScale*582)+roll_y);
vertex(wc+(roll_xScale*132)+roll_x,hc+(roll_yScale*581)+roll_y);
vertex(wc+(roll_xScale*134)+roll_x,hc+(roll_yScale*583)+roll_y);
vertex(wc+(roll_xScale*142)+roll_x,hc+(roll_yScale*585)+roll_y);
vertex(wc+(roll_xScale*149)+roll_x,hc+(roll_yScale*586)+roll_y);
vertex(wc+(roll_xScale*153)+roll_x,hc+(roll_yScale*595)+roll_y);
vertex(wc+(roll_xScale*166)+roll_x,hc+(roll_yScale*593)+roll_y);
vertex(wc+(roll_xScale*170)+roll_x,hc+(roll_yScale*593)+roll_y);
vertex(wc+(roll_xScale*171)+roll_x,hc+(roll_yScale*599)+roll_y);
vertex(wc+(roll_xScale*172)+roll_x,hc+(roll_yScale*600)+roll_y);
vertex(wc+(roll_xScale*176)+roll_x,hc+(roll_yScale*601)+roll_y);
vertex(wc+(roll_xScale*181)+roll_x,hc+(roll_yScale*600)+roll_y);
vertex(wc+(roll_xScale*186)+roll_x,hc+(roll_yScale*602)+roll_y);
vertex(wc+(roll_xScale*252)+roll_x,hc+(roll_yScale*539)+roll_y);
endShape(CLOSE);

beginShape();
vertex(wc+(roll_xScale*164)+roll_x,hc+(roll_yScale*538)+roll_y);
vertex(wc+(roll_xScale*167)+roll_x,hc+(roll_yScale*539)+roll_y);
endShape(CLOSE);

beginShape();
vertex(wc+(roll_xScale*170)+roll_x,hc+(roll_yScale*540)+roll_y);
vertex(wc+(roll_xScale*174)+roll_x,hc+(roll_yScale*542)+roll_y);
endShape(CLOSE);

beginShape();
vertex(wc+(roll_xScale*177)+roll_x,hc+(roll_yScale*543)+roll_y);
vertex(wc+(roll_xScale*181)+roll_x,hc+(roll_yScale*544)+roll_y);
endShape(CLOSE);

beginShape();
vertex(wc+(roll_xScale*185)+roll_x,hc+(roll_yScale*545)+roll_y);
vertex(wc+(roll_xScale*191)+roll_x,hc+(roll_yScale*546)+roll_y);
endShape(CLOSE);

beginShape();
vertex(wc+(roll_xScale*194)+roll_x,hc+(roll_yScale*547)+roll_y);
vertex(wc+(roll_xScale*199)+roll_x,hc+(roll_yScale*548)+roll_y);
endShape(CLOSE);

beginShape();
vertex(wc+(roll_xScale*202)+roll_x,hc+(roll_yScale*549)+roll_y);
vertex(wc+(roll_xScale*208)+roll_x,hc+(roll_yScale*550)+roll_y);
endShape(CLOSE);

beginShape();
vertex(wc+(roll_xScale*211)+roll_x,hc+(roll_yScale*551)+roll_y);
vertex(wc+(roll_xScale*216)+roll_x,hc+(roll_yScale*552)+roll_y);
endShape(CLOSE);

beginShape();
vertex(wc+(roll_xScale*220)+roll_x,hc+(roll_yScale*553)+roll_y);
vertex(wc+(roll_xScale*224)+roll_x,hc+(roll_yScale*553)+roll_y);
endShape(CLOSE);

beginShape();
vertex(wc+(roll_xScale*227)+roll_x,hc+(roll_yScale*555)+roll_y);
vertex(wc+(roll_xScale*233)+roll_x,hc+(roll_yScale*556)+roll_y);
endShape(CLOSE);
//ENDroll
}
  pop();


  //Tall Frame     b
  {
    //Stlying Wall
    fill(paperwhite);
    stroke(lineColour);

    //Draw Wall
    beginShape();
    vertex(b1x, b1y);
    vertex(b2x, b2y);
    vertex(b3x, b3y);
    vertex(b4x, b4y);
    beginContour();
    vertex(bB4x, bB4y);
    vertex(bB3x, bB3y);
    vertex(bB2x, bB2y);
    vertex(bB1x, bB1y);
    endContour();
    endShape(CLOSE);
  }
  //Tall Frame   bA
  {
    //Stlying
    fill(Frame);
    stroke(lineColour);

    //T
    beginShape();
    vertex(b1x, b1y);
    vertex(b2x, b2y);
    vertex(bA2x, bA2y);
    vertex(bA1x, bA1y);
    endShape(CLOSE);
    //R
    beginShape();
    vertex(b2x, b2y);
    vertex(b3x, b3y);
    vertex(bA3x, bA3y);
    vertex(bA2x, bA2y);
    endShape(CLOSE);
    //B
    beginShape();
    vertex(b3x, b3y);
    vertex(b4x, b4y);
    vertex(bA4x, bA4y);
    vertex(bA3x, bA3y);
    endShape(CLOSE);
    //L
    beginShape();
    vertex(b4x, b4y);
    vertex(b1x, b1y);
    vertex(bA1x, bA1y);
    vertex(bA4x, bA4y);
    endShape(CLOSE);
  }
  pop();

  pop();

  pop();

  //Wide Frame ———————————————————————————————————————————————
  push();
  translate((c2xC+((c1xC-c2xC)/2)),(c4yC+((c1yC-c4yC)/2)-(scale*10)));

  push();
  rotate(wAngle)

  push()
  translate(-(c2xC+((c1xC-c2xC)/2)),-(c4yC+((c1yC-c4yC)/2)-(scale*10)));

      {
  //view
{
fill(200,0);
let view_x = -scale*21;
let view_y = -scale*-16;
let view_xScale = scale/4.2;
let view_yScale = scale/4.2;

fill(235,238, 209);
beginShape();
vertex(wc+(view_xScale*64)+view_x,hc+(view_yScale*69)+view_y);
vertex(wc+(view_xScale*64)+view_x,hc+(view_yScale*231)+view_y);
vertex(wc+(view_xScale*371)+view_x,hc+(view_yScale*233)+view_y);
vertex(wc+(view_xScale*371)+view_x,hc+(view_yScale*64)+view_y);
endShape(CLOSE);

fill(195,199, 161);
beginShape();
vertex(wc+(view_xScale*63)+view_x,hc+(view_yScale*85)+view_y);
vertex(wc+(view_xScale*81)+view_x,hc+(view_yScale*83)+view_y);
vertex(wc+(view_xScale*93)+view_x,hc+(view_yScale*84)+view_y);
vertex(wc+(view_xScale*113)+view_x,hc+(view_yScale*86)+view_y);
vertex(wc+(view_xScale*127)+view_x,hc+(view_yScale*84)+view_y);
vertex(wc+(view_xScale*139)+view_x,hc+(view_yScale*85)+view_y);
vertex(wc+(view_xScale*148)+view_x,hc+(view_yScale*86)+view_y);
vertex(wc+(view_xScale*176)+view_x,hc+(view_yScale*95)+view_y);
vertex(wc+(view_xScale*247)+view_x,hc+(view_yScale*103)+view_y);
vertex(wc+(view_xScale*276)+view_x,hc+(view_yScale*98)+view_y);
vertex(wc+(view_xScale*304)+view_x,hc+(view_yScale*99)+view_y);
vertex(wc+(view_xScale*328)+view_x,hc+(view_yScale*99)+view_y);
vertex(wc+(view_xScale*363)+view_x,hc+(view_yScale*100)+view_y);
vertex(wc+(view_xScale*370)+view_x,hc+(view_yScale*230)+view_y);
vertex(wc+(view_xScale*63)+view_x,hc+(view_yScale*231)+view_y);
endShape(CLOSE);

fill(178,181, 151);
beginShape();
vertex(wc+(view_xScale*72)+view_x,hc+(view_yScale*95)+view_y);
vertex(wc+(view_xScale*86)+view_x,hc+(view_yScale*92)+view_y);
vertex(wc+(view_xScale*96)+view_x,hc+(view_yScale*92)+view_y);
vertex(wc+(view_xScale*105)+view_x,hc+(view_yScale*94)+view_y);
vertex(wc+(view_xScale*109)+view_x,hc+(view_yScale*96)+view_y);
vertex(wc+(view_xScale*118)+view_x,hc+(view_yScale*96)+view_y);
vertex(wc+(view_xScale*138)+view_x,hc+(view_yScale*92)+view_y);
vertex(wc+(view_xScale*147)+view_x,hc+(view_yScale*90)+view_y);
vertex(wc+(view_xScale*153)+view_x,hc+(view_yScale*87)+view_y);
vertex(wc+(view_xScale*158)+view_x,hc+(view_yScale*85)+view_y);
vertex(wc+(view_xScale*174)+view_x,hc+(view_yScale*88)+view_y);
vertex(wc+(view_xScale*176)+view_x,hc+(view_yScale*91)+view_y);
vertex(wc+(view_xScale*181)+view_x,hc+(view_yScale*93)+view_y);
vertex(wc+(view_xScale*194)+view_x,hc+(view_yScale*98)+view_y);
vertex(wc+(view_xScale*232)+view_x,hc+(view_yScale*99)+view_y);
vertex(wc+(view_xScale*248)+view_x,hc+(view_yScale*99)+view_y);
vertex(wc+(view_xScale*257)+view_x,hc+(view_yScale*100)+view_y);
vertex(wc+(view_xScale*277)+view_x,hc+(view_yScale*102)+view_y);
vertex(wc+(view_xScale*311)+view_x,hc+(view_yScale*104)+view_y);
vertex(wc+(view_xScale*372)+view_x,hc+(view_yScale*106)+view_y);
vertex(wc+(view_xScale*369)+view_x,hc+(view_yScale*230)+view_y);
vertex(wc+(view_xScale*65)+view_x,hc+(view_yScale*229)+view_y);
endShape(CLOSE);

fill(142,163, 151);
beginShape();
vertex(wc+(view_xScale*73)+view_x,hc+(view_yScale*98)+view_y);
vertex(wc+(view_xScale*84)+view_x,hc+(view_yScale*97)+view_y);
vertex(wc+(view_xScale*107)+view_x,hc+(view_yScale*94)+view_y);
vertex(wc+(view_xScale*118)+view_x,hc+(view_yScale*92)+view_y);
vertex(wc+(view_xScale*133)+view_x,hc+(view_yScale*94)+view_y);
vertex(wc+(view_xScale*140)+view_x,hc+(view_yScale*95)+view_y);
vertex(wc+(view_xScale*155)+view_x,hc+(view_yScale*96)+view_y);
vertex(wc+(view_xScale*173)+view_x,hc+(view_yScale*97)+view_y);
vertex(wc+(view_xScale*186)+view_x,hc+(view_yScale*95)+view_y);
vertex(wc+(view_xScale*209)+view_x,hc+(view_yScale*94)+view_y);
vertex(wc+(view_xScale*219)+view_x,hc+(view_yScale*95)+view_y);
vertex(wc+(view_xScale*227)+view_x,hc+(view_yScale*93)+view_y);
vertex(wc+(view_xScale*241)+view_x,hc+(view_yScale*92)+view_y);
vertex(wc+(view_xScale*249)+view_x,hc+(view_yScale*91)+view_y);
vertex(wc+(view_xScale*253)+view_x,hc+(view_yScale*90)+view_y);
vertex(wc+(view_xScale*259)+view_x,hc+(view_yScale*89)+view_y);
vertex(wc+(view_xScale*263)+view_x,hc+(view_yScale*88)+view_y);
vertex(wc+(view_xScale*272)+view_x,hc+(view_yScale*89)+view_y);
vertex(wc+(view_xScale*276)+view_x,hc+(view_yScale*91)+view_y);
vertex(wc+(view_xScale*281)+view_x,hc+(view_yScale*92)+view_y);
vertex(wc+(view_xScale*299)+view_x,hc+(view_yScale*95)+view_y);
vertex(wc+(view_xScale*317)+view_x,hc+(view_yScale*96)+view_y);
vertex(wc+(view_xScale*324)+view_x,hc+(view_yScale*97)+view_y);
vertex(wc+(view_xScale*328)+view_x,hc+(view_yScale*97)+view_y);
vertex(wc+(view_xScale*342)+view_x,hc+(view_yScale*97)+view_y);
vertex(wc+(view_xScale*350)+view_x,hc+(view_yScale*97)+view_y);
vertex(wc+(view_xScale*375)+view_x,hc+(view_yScale*97)+view_y);
vertex(wc+(view_xScale*369)+view_x,hc+(view_yScale*238)+view_y);
vertex(wc+(view_xScale*60)+view_x,hc+(view_yScale*231)+view_y);
endShape(CLOSE);

fill(108,139, 131);
beginShape();
vertex(wc+(view_xScale*71)+view_x,hc+(view_yScale*105)+view_y);
vertex(wc+(view_xScale*87)+view_x,hc+(view_yScale*104)+view_y);
vertex(wc+(view_xScale*89)+view_x,hc+(view_yScale*103)+view_y);
vertex(wc+(view_xScale*90)+view_x,hc+(view_yScale*102)+view_y);
vertex(wc+(view_xScale*93)+view_x,hc+(view_yScale*103)+view_y);
vertex(wc+(view_xScale*95)+view_x,hc+(view_yScale*104)+view_y);
vertex(wc+(view_xScale*97)+view_x,hc+(view_yScale*103)+view_y);
vertex(wc+(view_xScale*99)+view_x,hc+(view_yScale*103)+view_y);
vertex(wc+(view_xScale*99)+view_x,hc+(view_yScale*104)+view_y);
vertex(wc+(view_xScale*102)+view_x,hc+(view_yScale*104)+view_y);
vertex(wc+(view_xScale*103)+view_x,hc+(view_yScale*102)+view_y);
vertex(wc+(view_xScale*104)+view_x,hc+(view_yScale*102)+view_y);
vertex(wc+(view_xScale*105)+view_x,hc+(view_yScale*102)+view_y);
vertex(wc+(view_xScale*105)+view_x,hc+(view_yScale*103)+view_y);
vertex(wc+(view_xScale*107)+view_x,hc+(view_yScale*103)+view_y);
vertex(wc+(view_xScale*108)+view_x,hc+(view_yScale*103)+view_y);
vertex(wc+(view_xScale*108)+view_x,hc+(view_yScale*101)+view_y);
vertex(wc+(view_xScale*110)+view_x,hc+(view_yScale*100)+view_y);
vertex(wc+(view_xScale*111)+view_x,hc+(view_yScale*100)+view_y);
vertex(wc+(view_xScale*115)+view_x,hc+(view_yScale*102)+view_y);
vertex(wc+(view_xScale*115)+view_x,hc+(view_yScale*102)+view_y);
vertex(wc+(view_xScale*117)+view_x,hc+(view_yScale*101)+view_y);
vertex(wc+(view_xScale*118)+view_x,hc+(view_yScale*101)+view_y);
vertex(wc+(view_xScale*120)+view_x,hc+(view_yScale*100)+view_y);
vertex(wc+(view_xScale*121)+view_x,hc+(view_yScale*100)+view_y);
vertex(wc+(view_xScale*121)+view_x,hc+(view_yScale*101)+view_y);
vertex(wc+(view_xScale*123)+view_x,hc+(view_yScale*101)+view_y);
vertex(wc+(view_xScale*124)+view_x,hc+(view_yScale*100)+view_y);
vertex(wc+(view_xScale*126)+view_x,hc+(view_yScale*99)+view_y);
vertex(wc+(view_xScale*127)+view_x,hc+(view_yScale*100)+view_y);
vertex(wc+(view_xScale*129)+view_x,hc+(view_yScale*100)+view_y);
vertex(wc+(view_xScale*130)+view_x,hc+(view_yScale*100)+view_y);
vertex(wc+(view_xScale*139)+view_x,hc+(view_yScale*100)+view_y);
vertex(wc+(view_xScale*144)+view_x,hc+(view_yScale*102)+view_y);
vertex(wc+(view_xScale*147)+view_x,hc+(view_yScale*103)+view_y);
vertex(wc+(view_xScale*154)+view_x,hc+(view_yScale*103)+view_y);
vertex(wc+(view_xScale*157)+view_x,hc+(view_yScale*102)+view_y);
vertex(wc+(view_xScale*158)+view_x,hc+(view_yScale*103)+view_y);
vertex(wc+(view_xScale*159)+view_x,hc+(view_yScale*103)+view_y);
vertex(wc+(view_xScale*160)+view_x,hc+(view_yScale*104)+view_y);
vertex(wc+(view_xScale*162)+view_x,hc+(view_yScale*103)+view_y);
vertex(wc+(view_xScale*163)+view_x,hc+(view_yScale*103)+view_y);
vertex(wc+(view_xScale*164)+view_x,hc+(view_yScale*104)+view_y);
vertex(wc+(view_xScale*178)+view_x,hc+(view_yScale*101)+view_y);
vertex(wc+(view_xScale*181)+view_x,hc+(view_yScale*102)+view_y);
vertex(wc+(view_xScale*182)+view_x,hc+(view_yScale*102)+view_y);
vertex(wc+(view_xScale*184)+view_x,hc+(view_yScale*101)+view_y);
vertex(wc+(view_xScale*187)+view_x,hc+(view_yScale*100)+view_y);
vertex(wc+(view_xScale*187)+view_x,hc+(view_yScale*101)+view_y);
vertex(wc+(view_xScale*188)+view_x,hc+(view_yScale*102)+view_y);
vertex(wc+(view_xScale*204)+view_x,hc+(view_yScale*101)+view_y);
vertex(wc+(view_xScale*206)+view_x,hc+(view_yScale*101)+view_y);
vertex(wc+(view_xScale*209)+view_x,hc+(view_yScale*102)+view_y);
vertex(wc+(view_xScale*211)+view_x,hc+(view_yScale*103)+view_y);
vertex(wc+(view_xScale*216)+view_x,hc+(view_yScale*101)+view_y);
vertex(wc+(view_xScale*221)+view_x,hc+(view_yScale*101)+view_y);
vertex(wc+(view_xScale*224)+view_x,hc+(view_yScale*103)+view_y);
vertex(wc+(view_xScale*233)+view_x,hc+(view_yScale*102)+view_y);
vertex(wc+(view_xScale*238)+view_x,hc+(view_yScale*101)+view_y);
vertex(wc+(view_xScale*241)+view_x,hc+(view_yScale*101)+view_y);
vertex(wc+(view_xScale*247)+view_x,hc+(view_yScale*103)+view_y);
vertex(wc+(view_xScale*249)+view_x,hc+(view_yScale*103)+view_y);
vertex(wc+(view_xScale*252)+view_x,hc+(view_yScale*104)+view_y);
vertex(wc+(view_xScale*255)+view_x,hc+(view_yScale*103)+view_y);
vertex(wc+(view_xScale*256)+view_x,hc+(view_yScale*102)+view_y);
vertex(wc+(view_xScale*258)+view_x,hc+(view_yScale*101)+view_y);
vertex(wc+(view_xScale*261)+view_x,hc+(view_yScale*101)+view_y);
vertex(wc+(view_xScale*265)+view_x,hc+(view_yScale*101)+view_y);
vertex(wc+(view_xScale*270)+view_x,hc+(view_yScale*103)+view_y);
vertex(wc+(view_xScale*272)+view_x,hc+(view_yScale*103)+view_y);
vertex(wc+(view_xScale*276)+view_x,hc+(view_yScale*101)+view_y);
vertex(wc+(view_xScale*277)+view_x,hc+(view_yScale*101)+view_y);
vertex(wc+(view_xScale*278)+view_x,hc+(view_yScale*100)+view_y);
vertex(wc+(view_xScale*279)+view_x,hc+(view_yScale*100)+view_y);
vertex(wc+(view_xScale*280)+view_x,hc+(view_yScale*100)+view_y);
vertex(wc+(view_xScale*282)+view_x,hc+(view_yScale*102)+view_y);
vertex(wc+(view_xScale*294)+view_x,hc+(view_yScale*98)+view_y);
vertex(wc+(view_xScale*299)+view_x,hc+(view_yScale*98)+view_y);
vertex(wc+(view_xScale*299)+view_x,hc+(view_yScale*97)+view_y);
vertex(wc+(view_xScale*304)+view_x,hc+(view_yScale*99)+view_y);
vertex(wc+(view_xScale*306)+view_x,hc+(view_yScale*99)+view_y);
vertex(wc+(view_xScale*307)+view_x,hc+(view_yScale*97)+view_y);
vertex(wc+(view_xScale*308)+view_x,hc+(view_yScale*97)+view_y);
vertex(wc+(view_xScale*319)+view_x,hc+(view_yScale*96)+view_y);
vertex(wc+(view_xScale*322)+view_x,hc+(view_yScale*96)+view_y);
vertex(wc+(view_xScale*324)+view_x,hc+(view_yScale*95)+view_y);
vertex(wc+(view_xScale*332)+view_x,hc+(view_yScale*96)+view_y);
vertex(wc+(view_xScale*337)+view_x,hc+(view_yScale*96)+view_y);
vertex(wc+(view_xScale*340)+view_x,hc+(view_yScale*96)+view_y);
vertex(wc+(view_xScale*343)+view_x,hc+(view_yScale*95)+view_y);
vertex(wc+(view_xScale*347)+view_x,hc+(view_yScale*95)+view_y);
vertex(wc+(view_xScale*351)+view_x,hc+(view_yScale*94)+view_y);
vertex(wc+(view_xScale*355)+view_x,hc+(view_yScale*93)+view_y);
vertex(wc+(view_xScale*356)+view_x,hc+(view_yScale*93)+view_y);
vertex(wc+(view_xScale*357)+view_x,hc+(view_yScale*93)+view_y);
vertex(wc+(view_xScale*357)+view_x,hc+(view_yScale*91)+view_y);
vertex(wc+(view_xScale*357)+view_x,hc+(view_yScale*90)+view_y);
vertex(wc+(view_xScale*358)+view_x,hc+(view_yScale*90)+view_y);
vertex(wc+(view_xScale*360)+view_x,hc+(view_yScale*90)+view_y);
vertex(wc+(view_xScale*360)+view_x,hc+(view_yScale*91)+view_y);
vertex(wc+(view_xScale*362)+view_x,hc+(view_yScale*90)+view_y);
vertex(wc+(view_xScale*363)+view_x,hc+(view_yScale*90)+view_y);
vertex(wc+(view_xScale*364)+view_x,hc+(view_yScale*91)+view_y);
vertex(wc+(view_xScale*371)+view_x,hc+(view_yScale*231)+view_y);
vertex(wc+(view_xScale*63)+view_x,hc+(view_yScale*228)+view_y);
endShape(CLOSE);

fill(101,124, 97);
beginShape();
vertex(wc+(view_xScale*70)+view_x,hc+(view_yScale*124)+view_y);
vertex(wc+(view_xScale*83)+view_x,hc+(view_yScale*128)+view_y);
vertex(wc+(view_xScale*88)+view_x,hc+(view_yScale*129)+view_y);
vertex(wc+(view_xScale*89)+view_x,hc+(view_yScale*127)+view_y);
vertex(wc+(view_xScale*93)+view_x,hc+(view_yScale*127)+view_y);
vertex(wc+(view_xScale*93)+view_x,hc+(view_yScale*128)+view_y);
vertex(wc+(view_xScale*99)+view_x,hc+(view_yScale*129)+view_y);
vertex(wc+(view_xScale*101)+view_x,hc+(view_yScale*129)+view_y);
vertex(wc+(view_xScale*113)+view_x,hc+(view_yScale*131)+view_y);
vertex(wc+(view_xScale*122)+view_x,hc+(view_yScale*131)+view_y);
vertex(wc+(view_xScale*124)+view_x,hc+(view_yScale*132)+view_y);
vertex(wc+(view_xScale*130)+view_x,hc+(view_yScale*135)+view_y);
vertex(wc+(view_xScale*141)+view_x,hc+(view_yScale*134)+view_y);
vertex(wc+(view_xScale*148)+view_x,hc+(view_yScale*133)+view_y);
vertex(wc+(view_xScale*153)+view_x,hc+(view_yScale*134)+view_y);
vertex(wc+(view_xScale*155)+view_x,hc+(view_yScale*136)+view_y);
vertex(wc+(view_xScale*188)+view_x,hc+(view_yScale*135)+view_y);
vertex(wc+(view_xScale*196)+view_x,hc+(view_yScale*137)+view_y);
vertex(wc+(view_xScale*204)+view_x,hc+(view_yScale*132)+view_y);
vertex(wc+(view_xScale*207)+view_x,hc+(view_yScale*133)+view_y);
vertex(wc+(view_xScale*208)+view_x,hc+(view_yScale*135)+view_y);
vertex(wc+(view_xScale*215)+view_x,hc+(view_yScale*133)+view_y);
vertex(wc+(view_xScale*216)+view_x,hc+(view_yScale*132)+view_y);
vertex(wc+(view_xScale*222)+view_x,hc+(view_yScale*133)+view_y);
vertex(wc+(view_xScale*230)+view_x,hc+(view_yScale*135)+view_y);
vertex(wc+(view_xScale*232)+view_x,hc+(view_yScale*135)+view_y);
vertex(wc+(view_xScale*261)+view_x,hc+(view_yScale*136)+view_y);
vertex(wc+(view_xScale*270)+view_x,hc+(view_yScale*135)+view_y);
vertex(wc+(view_xScale*272)+view_x,hc+(view_yScale*136)+view_y);
vertex(wc+(view_xScale*290)+view_x,hc+(view_yScale*135)+view_y);
vertex(wc+(view_xScale*291)+view_x,hc+(view_yScale*133)+view_y);
vertex(wc+(view_xScale*292)+view_x,hc+(view_yScale*135)+view_y);
vertex(wc+(view_xScale*296)+view_x,hc+(view_yScale*137)+view_y);
vertex(wc+(view_xScale*300)+view_x,hc+(view_yScale*137)+view_y);
vertex(wc+(view_xScale*306)+view_x,hc+(view_yScale*137)+view_y);
vertex(wc+(view_xScale*306)+view_x,hc+(view_yScale*137)+view_y);
vertex(wc+(view_xScale*306)+view_x,hc+(view_yScale*135)+view_y);
vertex(wc+(view_xScale*309)+view_x,hc+(view_yScale*135)+view_y);
vertex(wc+(view_xScale*309)+view_x,hc+(view_yScale*137)+view_y);
vertex(wc+(view_xScale*314)+view_x,hc+(view_yScale*137)+view_y);
vertex(wc+(view_xScale*313)+view_x,hc+(view_yScale*135)+view_y);
vertex(wc+(view_xScale*314)+view_x,hc+(view_yScale*131)+view_y);
vertex(wc+(view_xScale*315)+view_x,hc+(view_yScale*134)+view_y);
vertex(wc+(view_xScale*315)+view_x,hc+(view_yScale*136)+view_y);
vertex(wc+(view_xScale*322)+view_x,hc+(view_yScale*137)+view_y);
vertex(wc+(view_xScale*331)+view_x,hc+(view_yScale*138)+view_y);
vertex(wc+(view_xScale*335)+view_x,hc+(view_yScale*139)+view_y);
vertex(wc+(view_xScale*342)+view_x,hc+(view_yScale*140)+view_y);
vertex(wc+(view_xScale*345)+view_x,hc+(view_yScale*140)+view_y);
vertex(wc+(view_xScale*346)+view_x,hc+(view_yScale*140)+view_y);
vertex(wc+(view_xScale*351)+view_x,hc+(view_yScale*139)+view_y);
vertex(wc+(view_xScale*356)+view_x,hc+(view_yScale*139)+view_y);
vertex(wc+(view_xScale*362)+view_x,hc+(view_yScale*141)+view_y);
vertex(wc+(view_xScale*370)+view_x,hc+(view_yScale*142)+view_y);
vertex(wc+(view_xScale*368)+view_x,hc+(view_yScale*235)+view_y);
vertex(wc+(view_xScale*61)+view_x,hc+(view_yScale*228)+view_y);
endShape(CLOSE);

fill(145,196, 112);
beginShape();
vertex(wc+(view_xScale*71)+view_x,hc+(view_yScale*154)+view_y);
vertex(wc+(view_xScale*82)+view_x,hc+(view_yScale*153)+view_y);
vertex(wc+(view_xScale*93)+view_x,hc+(view_yScale*154)+view_y);
vertex(wc+(view_xScale*99)+view_x,hc+(view_yScale*157)+view_y);
vertex(wc+(view_xScale*115)+view_x,hc+(view_yScale*159)+view_y);
vertex(wc+(view_xScale*128)+view_x,hc+(view_yScale*159)+view_y);
vertex(wc+(view_xScale*142)+view_x,hc+(view_yScale*160)+view_y);
vertex(wc+(view_xScale*150)+view_x,hc+(view_yScale*166)+view_y);
vertex(wc+(view_xScale*169)+view_x,hc+(view_yScale*169)+view_y);
vertex(wc+(view_xScale*194)+view_x,hc+(view_yScale*167)+view_y);
vertex(wc+(view_xScale*211)+view_x,hc+(view_yScale*166)+view_y);
vertex(wc+(view_xScale*225)+view_x,hc+(view_yScale*164)+view_y);
vertex(wc+(view_xScale*239)+view_x,hc+(view_yScale*167)+view_y);
vertex(wc+(view_xScale*246)+view_x,hc+(view_yScale*173)+view_y);
vertex(wc+(view_xScale*263)+view_x,hc+(view_yScale*173)+view_y);
vertex(wc+(view_xScale*276)+view_x,hc+(view_yScale*170)+view_y);
vertex(wc+(view_xScale*293)+view_x,hc+(view_yScale*167)+view_y);
vertex(wc+(view_xScale*307)+view_x,hc+(view_yScale*168)+view_y);
vertex(wc+(view_xScale*317)+view_x,hc+(view_yScale*175)+view_y);
vertex(wc+(view_xScale*330)+view_x,hc+(view_yScale*175)+view_y);
vertex(wc+(view_xScale*352)+view_x,hc+(view_yScale*172)+view_y);
vertex(wc+(view_xScale*372)+view_x,hc+(view_yScale*171)+view_y);
vertex(wc+(view_xScale*382)+view_x,hc+(view_yScale*179)+view_y);
vertex(wc+(view_xScale*381)+view_x,hc+(view_yScale*228)+view_y);
vertex(wc+(view_xScale*66)+view_x,hc+(view_yScale*232)+view_y);
endShape(CLOSE);

fill(105,166, 102);

beginShape();
vertex(wc+(view_xScale*70)+view_x,hc+(view_yScale*174)+view_y);
vertex(wc+(view_xScale*84)+view_x,hc+(view_yScale*175)+view_y);
vertex(wc+(view_xScale*98)+view_x,hc+(view_yScale*179)+view_y);
vertex(wc+(view_xScale*103)+view_x,hc+(view_yScale*185)+view_y);
vertex(wc+(view_xScale*109)+view_x,hc+(view_yScale*190)+view_y);
vertex(wc+(view_xScale*122)+view_x,hc+(view_yScale*194)+view_y);
vertex(wc+(view_xScale*146)+view_x,hc+(view_yScale*196)+view_y);
vertex(wc+(view_xScale*164)+view_x,hc+(view_yScale*198)+view_y);
vertex(wc+(view_xScale*175)+view_x,hc+(view_yScale*203)+view_y);
vertex(wc+(view_xScale*181)+view_x,hc+(view_yScale*205)+view_y);
vertex(wc+(view_xScale*207)+view_x,hc+(view_yScale*208)+view_y);
vertex(wc+(view_xScale*223)+view_x,hc+(view_yScale*219)+view_y);
vertex(wc+(view_xScale*236)+view_x,hc+(view_yScale*229)+view_y);
vertex(wc+(view_xScale*337)+view_x,hc+(view_yScale*206)+view_y);
vertex(wc+(view_xScale*362)+view_x,hc+(view_yScale*198)+view_y);
vertex(wc+(view_xScale*386)+view_x,hc+(view_yScale*195)+view_y);
vertex(wc+(view_xScale*390)+view_x,hc+(view_yScale*232)+view_y);
vertex(wc+(view_xScale*61)+view_x,hc+(view_yScale*236)+view_y);
endShape(CLOSE);

fill(102,184, 52);
beginShape();
vertex(wc+(view_xScale*65)+view_x,hc+(view_yScale*193)+view_y);
vertex(wc+(view_xScale*79)+view_x,hc+(view_yScale*192)+view_y);
vertex(wc+(view_xScale*88)+view_x,hc+(view_yScale*192)+view_y);
vertex(wc+(view_xScale*92)+view_x,hc+(view_yScale*195)+view_y);
vertex(wc+(view_xScale*99)+view_x,hc+(view_yScale*197)+view_y);
vertex(wc+(view_xScale*107)+view_x,hc+(view_yScale*196)+view_y);
vertex(wc+(view_xScale*124)+view_x,hc+(view_yScale*196)+view_y);
vertex(wc+(view_xScale*134)+view_x,hc+(view_yScale*195)+view_y);
vertex(wc+(view_xScale*149)+view_x,hc+(view_yScale*195)+view_y);
vertex(wc+(view_xScale*160)+view_x,hc+(view_yScale*194)+view_y);
vertex(wc+(view_xScale*169)+view_x,hc+(view_yScale*195)+view_y);
vertex(wc+(view_xScale*187)+view_x,hc+(view_yScale*194)+view_y);
vertex(wc+(view_xScale*198)+view_x,hc+(view_yScale*196)+view_y);
vertex(wc+(view_xScale*222)+view_x,hc+(view_yScale*190)+view_y);
vertex(wc+(view_xScale*239)+view_x,hc+(view_yScale*186)+view_y);
vertex(wc+(view_xScale*252)+view_x,hc+(view_yScale*181)+view_y);
vertex(wc+(view_xScale*275)+view_x,hc+(view_yScale*181)+view_y);
vertex(wc+(view_xScale*288)+view_x,hc+(view_yScale*180)+view_y);
vertex(wc+(view_xScale*304)+view_x,hc+(view_yScale*181)+view_y);
vertex(wc+(view_xScale*321)+view_x,hc+(view_yScale*188)+view_y);
vertex(wc+(view_xScale*333)+view_x,hc+(view_yScale*189)+view_y);
vertex(wc+(view_xScale*343)+view_x,hc+(view_yScale*189)+view_y);
vertex(wc+(view_xScale*362)+view_x,hc+(view_yScale*188)+view_y);
vertex(wc+(view_xScale*373)+view_x,hc+(view_yScale*189)+view_y);
vertex(wc+(view_xScale*367)+view_x,hc+(view_yScale*236)+view_y);
vertex(wc+(view_xScale*63)+view_x,hc+(view_yScale*233)+view_y);
endShape(CLOSE);

fill(22,47, 50);
beginShape();
vertex(wc+(view_xScale*289)+view_x,hc+(view_yScale*202)+view_y);
vertex(wc+(view_xScale*288)+view_x,hc+(view_yScale*200)+view_y);
vertex(wc+(view_xScale*288)+view_x,hc+(view_yScale*198)+view_y);
vertex(wc+(view_xScale*287)+view_x,hc+(view_yScale*196)+view_y);
vertex(wc+(view_xScale*288)+view_x,hc+(view_yScale*194)+view_y);
vertex(wc+(view_xScale*289)+view_x,hc+(view_yScale*192)+view_y);
vertex(wc+(view_xScale*288)+view_x,hc+(view_yScale*187)+view_y);
vertex(wc+(view_xScale*288)+view_x,hc+(view_yScale*184)+view_y);
vertex(wc+(view_xScale*289)+view_x,hc+(view_yScale*179)+view_y);
vertex(wc+(view_xScale*290)+view_x,hc+(view_yScale*176)+view_y);
vertex(wc+(view_xScale*291)+view_x,hc+(view_yScale*172)+view_y);
vertex(wc+(view_xScale*291)+view_x,hc+(view_yScale*169)+view_y);
vertex(wc+(view_xScale*291)+view_x,hc+(view_yScale*168)+view_y);
vertex(wc+(view_xScale*294)+view_x,hc+(view_yScale*178)+view_y);
vertex(wc+(view_xScale*293)+view_x,hc+(view_yScale*183)+view_y);
vertex(wc+(view_xScale*292)+view_x,hc+(view_yScale*187)+view_y);
vertex(wc+(view_xScale*292)+view_x,hc+(view_yScale*191)+view_y);
vertex(wc+(view_xScale*293)+view_x,hc+(view_yScale*194)+view_y);
vertex(wc+(view_xScale*293)+view_x,hc+(view_yScale*199)+view_y);
vertex(wc+(view_xScale*291)+view_x,hc+(view_yScale*202)+view_y);
endShape(CLOSE);

beginShape();
vertex(wc+(view_xScale*306)+view_x,hc+(view_yScale*189)+view_y);
vertex(wc+(view_xScale*308)+view_x,hc+(view_yScale*187)+view_y);
vertex(wc+(view_xScale*308)+view_x,hc+(view_yScale*185)+view_y);
vertex(wc+(view_xScale*308)+view_x,hc+(view_yScale*182)+view_y);
vertex(wc+(view_xScale*309)+view_x,hc+(view_yScale*179)+view_y);
vertex(wc+(view_xScale*310)+view_x,hc+(view_yScale*174)+view_y);
vertex(wc+(view_xScale*309)+view_x,hc+(view_yScale*170)+view_y);
vertex(wc+(view_xScale*306)+view_x,hc+(view_yScale*162)+view_y);
vertex(wc+(view_xScale*305)+view_x,hc+(view_yScale*158)+view_y);
vertex(wc+(view_xScale*304)+view_x,hc+(view_yScale*156)+view_y);
vertex(wc+(view_xScale*304)+view_x,hc+(view_yScale*158)+view_y);
vertex(wc+(view_xScale*304)+view_x,hc+(view_yScale*161)+view_y);
vertex(wc+(view_xScale*302)+view_x,hc+(view_yScale*164)+view_y);
vertex(wc+(view_xScale*302)+view_x,hc+(view_yScale*166)+view_y);
vertex(wc+(view_xScale*302)+view_x,hc+(view_yScale*169)+view_y);
vertex(wc+(view_xScale*301)+view_x,hc+(view_yScale*173)+view_y);
vertex(wc+(view_xScale*300)+view_x,hc+(view_yScale*177)+view_y);
vertex(wc+(view_xScale*299)+view_x,hc+(view_yScale*182)+view_y);
vertex(wc+(view_xScale*300)+view_x,hc+(view_yScale*186)+view_y);
vertex(wc+(view_xScale*302)+view_x,hc+(view_yScale*190)+view_y);
endShape(CLOSE);

beginShape();
vertex(wc+(view_xScale*314)+view_x,hc+(view_yScale*205)+view_y);
vertex(wc+(view_xScale*312)+view_x,hc+(view_yScale*204)+view_y);
vertex(wc+(view_xScale*312)+view_x,hc+(view_yScale*202)+view_y);
vertex(wc+(view_xScale*312)+view_x,hc+(view_yScale*199)+view_y);
vertex(wc+(view_xScale*313)+view_x,hc+(view_yScale*197)+view_y);
vertex(wc+(view_xScale*313)+view_x,hc+(view_yScale*193)+view_y);
vertex(wc+(view_xScale*313)+view_x,hc+(view_yScale*191)+view_y);
vertex(wc+(view_xScale*315)+view_x,hc+(view_yScale*196)+view_y);
vertex(wc+(view_xScale*315)+view_x,hc+(view_yScale*197)+view_y);
vertex(wc+(view_xScale*315)+view_x,hc+(view_yScale*199)+view_y);
vertex(wc+(view_xScale*315)+view_x,hc+(view_yScale*201)+view_y);
vertex(wc+(view_xScale*315)+view_x,hc+(view_yScale*203)+view_y);
endShape(CLOSE);

beginShape();
vertex(wc+(view_xScale*254)+view_x,hc+(view_yScale*187)+view_y);
vertex(wc+(view_xScale*253)+view_x,hc+(view_yScale*185)+view_y);
vertex(wc+(view_xScale*252)+view_x,hc+(view_yScale*184)+view_y);
vertex(wc+(view_xScale*252)+view_x,hc+(view_yScale*182)+view_y);
vertex(wc+(view_xScale*253)+view_x,hc+(view_yScale*179)+view_y);
vertex(wc+(view_xScale*254)+view_x,hc+(view_yScale*177)+view_y);
vertex(wc+(view_xScale*254)+view_x,hc+(view_yScale*175)+view_y);
vertex(wc+(view_xScale*253)+view_x,hc+(view_yScale*171)+view_y);
vertex(wc+(view_xScale*255)+view_x,hc+(view_yScale*167)+view_y);
vertex(wc+(view_xScale*256)+view_x,hc+(view_yScale*166)+view_y);
vertex(wc+(view_xScale*256)+view_x,hc+(view_yScale*164)+view_y);
vertex(wc+(view_xScale*257)+view_x,hc+(view_yScale*162)+view_y);
vertex(wc+(view_xScale*257)+view_x,hc+(view_yScale*161)+view_y);
vertex(wc+(view_xScale*259)+view_x,hc+(view_yScale*162)+view_y);
vertex(wc+(view_xScale*259)+view_x,hc+(view_yScale*164)+view_y);
vertex(wc+(view_xScale*259)+view_x,hc+(view_yScale*165)+view_y);
vertex(wc+(view_xScale*260)+view_x,hc+(view_yScale*167)+view_y);
vertex(wc+(view_xScale*260)+view_x,hc+(view_yScale*170)+view_y);
vertex(wc+(view_xScale*260)+view_x,hc+(view_yScale*172)+view_y);
vertex(wc+(view_xScale*260)+view_x,hc+(view_yScale*173)+view_y);
vertex(wc+(view_xScale*260)+view_x,hc+(view_yScale*176)+view_y);
vertex(wc+(view_xScale*259)+view_x,hc+(view_yScale*177)+view_y);
vertex(wc+(view_xScale*261)+view_x,hc+(view_yScale*180)+view_y);
vertex(wc+(view_xScale*261)+view_x,hc+(view_yScale*182)+view_y);
vertex(wc+(view_xScale*261)+view_x,hc+(view_yScale*183)+view_y);
vertex(wc+(view_xScale*261)+view_x,hc+(view_yScale*185)+view_y);
vertex(wc+(view_xScale*259)+view_x,hc+(view_yScale*187)+view_y);
vertex(wc+(view_xScale*260)+view_x,hc+(view_yScale*187)+view_y);
endShape(CLOSE);

beginShape();
vertex(wc+(view_xScale*220)+view_x,hc+(view_yScale*197)+view_y);
vertex(wc+(view_xScale*218)+view_x,hc+(view_yScale*195)+view_y);
vertex(wc+(view_xScale*218)+view_x,hc+(view_yScale*192)+view_y);
vertex(wc+(view_xScale*218)+view_x,hc+(view_yScale*191)+view_y);
vertex(wc+(view_xScale*220)+view_x,hc+(view_yScale*189)+view_y);
vertex(wc+(view_xScale*220)+view_x,hc+(view_yScale*186)+view_y);
vertex(wc+(view_xScale*219)+view_x,hc+(view_yScale*183)+view_y);
vertex(wc+(view_xScale*219)+view_x,hc+(view_yScale*180)+view_y);
vertex(wc+(view_xScale*220)+view_x,hc+(view_yScale*178)+view_y);
vertex(wc+(view_xScale*221)+view_x,hc+(view_yScale*177)+view_y);
vertex(wc+(view_xScale*221)+view_x,hc+(view_yScale*176)+view_y);
vertex(wc+(view_xScale*222)+view_x,hc+(view_yScale*176)+view_y);
vertex(wc+(view_xScale*223)+view_x,hc+(view_yScale*177)+view_y);
vertex(wc+(view_xScale*223)+view_x,hc+(view_yScale*178)+view_y);
vertex(wc+(view_xScale*223)+view_x,hc+(view_yScale*180)+view_y);
vertex(wc+(view_xScale*225)+view_x,hc+(view_yScale*184)+view_y);
vertex(wc+(view_xScale*226)+view_x,hc+(view_yScale*185)+view_y);
vertex(wc+(view_xScale*226)+view_x,hc+(view_yScale*187)+view_y);
vertex(wc+(view_xScale*226)+view_x,hc+(view_yScale*189)+view_y);
vertex(wc+(view_xScale*225)+view_x,hc+(view_yScale*190)+view_y);
vertex(wc+(view_xScale*226)+view_x,hc+(view_yScale*191)+view_y);
vertex(wc+(view_xScale*226)+view_x,hc+(view_yScale*192)+view_y);
vertex(wc+(view_xScale*225)+view_x,hc+(view_yScale*194)+view_y);
vertex(wc+(view_xScale*225)+view_x,hc+(view_yScale*196)+view_y);
vertex(wc+(view_xScale*223)+view_x,hc+(view_yScale*197)+view_y);
endShape(CLOSE);

beginShape();
vertex(wc+(view_xScale*154)+view_x,hc+(view_yScale*228)+view_y);
vertex(wc+(view_xScale*149)+view_x,hc+(view_yScale*225)+view_y);
vertex(wc+(view_xScale*149)+view_x,hc+(view_yScale*223)+view_y);
vertex(wc+(view_xScale*150)+view_x,hc+(view_yScale*220)+view_y);
vertex(wc+(view_xScale*151)+view_x,hc+(view_yScale*218)+view_y);
vertex(wc+(view_xScale*151)+view_x,hc+(view_yScale*215)+view_y);
vertex(wc+(view_xScale*151)+view_x,hc+(view_yScale*212)+view_y);
vertex(wc+(view_xScale*154)+view_x,hc+(view_yScale*210)+view_y);
vertex(wc+(view_xScale*155)+view_x,hc+(view_yScale*209)+view_y);
vertex(wc+(view_xScale*157)+view_x,hc+(view_yScale*211)+view_y);
vertex(wc+(view_xScale*159)+view_x,hc+(view_yScale*210)+view_y);
vertex(wc+(view_xScale*161)+view_x,hc+(view_yScale*210)+view_y);
vertex(wc+(view_xScale*163)+view_x,hc+(view_yScale*210)+view_y);
vertex(wc+(view_xScale*163)+view_x,hc+(view_yScale*211)+view_y);
vertex(wc+(view_xScale*164)+view_x,hc+(view_yScale*211)+view_y);
vertex(wc+(view_xScale*167)+view_x,hc+(view_yScale*212)+view_y);
vertex(wc+(view_xScale*172)+view_x,hc+(view_yScale*210)+view_y);
vertex(wc+(view_xScale*175)+view_x,hc+(view_yScale*208)+view_y);
vertex(wc+(view_xScale*181)+view_x,hc+(view_yScale*207)+view_y);
vertex(wc+(view_xScale*183)+view_x,hc+(view_yScale*208)+view_y);
vertex(wc+(view_xScale*184)+view_x,hc+(view_yScale*212)+view_y);
vertex(wc+(view_xScale*185)+view_x,hc+(view_yScale*212)+view_y);
vertex(wc+(view_xScale*187)+view_x,hc+(view_yScale*212)+view_y);
vertex(wc+(view_xScale*189)+view_x,hc+(view_yScale*213)+view_y);
vertex(wc+(view_xScale*192)+view_x,hc+(view_yScale*215)+view_y);
vertex(wc+(view_xScale*199)+view_x,hc+(view_yScale*216)+view_y);
vertex(wc+(view_xScale*201)+view_x,hc+(view_yScale*216)+view_y);
vertex(wc+(view_xScale*203)+view_x,hc+(view_yScale*218)+view_y);
vertex(wc+(view_xScale*202)+view_x,hc+(view_yScale*221)+view_y);
vertex(wc+(view_xScale*206)+view_x,hc+(view_yScale*223)+view_y);
vertex(wc+(view_xScale*206)+view_x,hc+(view_yScale*225)+view_y);
vertex(wc+(view_xScale*206)+view_x,hc+(view_yScale*227)+view_y);
vertex(wc+(view_xScale*204)+view_x,hc+(view_yScale*230)+view_y);
endShape(CLOSE);

beginShape();
vertex(wc+(view_xScale*230)+view_x,hc+(view_yScale*234)+view_y);
vertex(wc+(view_xScale*226)+view_x,hc+(view_yScale*228)+view_y);
vertex(wc+(view_xScale*226)+view_x,hc+(view_yScale*226)+view_y);
vertex(wc+(view_xScale*228)+view_x,hc+(view_yScale*224)+view_y);
vertex(wc+(view_xScale*230)+view_x,hc+(view_yScale*225)+view_y);
vertex(wc+(view_xScale*231)+view_x,hc+(view_yScale*221)+view_y);
vertex(wc+(view_xScale*235)+view_x,hc+(view_yScale*220)+view_y);
vertex(wc+(view_xScale*250)+view_x,hc+(view_yScale*224)+view_y);
vertex(wc+(view_xScale*255)+view_x,hc+(view_yScale*222)+view_y);
vertex(wc+(view_xScale*259)+view_x,hc+(view_yScale*227)+view_y);
vertex(wc+(view_xScale*269)+view_x,hc+(view_yScale*230)+view_y);
vertex(wc+(view_xScale*270)+view_x,hc+(view_yScale*230)+view_y);
vertex(wc+(view_xScale*270)+view_x,hc+(view_yScale*237)+view_y);
endShape(CLOSE);

beginShape();
vertex(wc+(view_xScale*296)+view_x,hc+(view_yScale*237)+view_y);
vertex(wc+(view_xScale*294)+view_x,hc+(view_yScale*231)+view_y);
vertex(wc+(view_xScale*297)+view_x,hc+(view_yScale*227)+view_y);
vertex(wc+(view_xScale*298)+view_x,hc+(view_yScale*225)+view_y);
vertex(wc+(view_xScale*297)+view_x,hc+(view_yScale*223)+view_y);
vertex(wc+(view_xScale*298)+view_x,hc+(view_yScale*220)+view_y);
vertex(wc+(view_xScale*300)+view_x,hc+(view_yScale*219)+view_y);
vertex(wc+(view_xScale*303)+view_x,hc+(view_yScale*217)+view_y);
vertex(wc+(view_xScale*305)+view_x,hc+(view_yScale*215)+view_y);
vertex(wc+(view_xScale*307)+view_x,hc+(view_yScale*215)+view_y);
vertex(wc+(view_xScale*316)+view_x,hc+(view_yScale*216)+view_y);
vertex(wc+(view_xScale*318)+view_x,hc+(view_yScale*216)+view_y);
vertex(wc+(view_xScale*322)+view_x,hc+(view_yScale*214)+view_y);
vertex(wc+(view_xScale*324)+view_x,hc+(view_yScale*215)+view_y);
vertex(wc+(view_xScale*326)+view_x,hc+(view_yScale*218)+view_y);
vertex(wc+(view_xScale*332)+view_x,hc+(view_yScale*220)+view_y);
vertex(wc+(view_xScale*334)+view_x,hc+(view_yScale*219)+view_y);
vertex(wc+(view_xScale*337)+view_x,hc+(view_yScale*219)+view_y);
vertex(wc+(view_xScale*338)+view_x,hc+(view_yScale*220)+view_y);
vertex(wc+(view_xScale*339)+view_x,hc+(view_yScale*222)+view_y);
vertex(wc+(view_xScale*343)+view_x,hc+(view_yScale*221)+view_y);
vertex(wc+(view_xScale*344)+view_x,hc+(view_yScale*217)+view_y);
vertex(wc+(view_xScale*348)+view_x,hc+(view_yScale*214)+view_y);
vertex(wc+(view_xScale*350)+view_x,hc+(view_yScale*213)+view_y);
vertex(wc+(view_xScale*353)+view_x,hc+(view_yScale*213)+view_y);
vertex(wc+(view_xScale*355)+view_x,hc+(view_yScale*212)+view_y);
vertex(wc+(view_xScale*360)+view_x,hc+(view_yScale*215)+view_y);
vertex(wc+(view_xScale*363)+view_x,hc+(view_yScale*214)+view_y);
vertex(wc+(view_xScale*369)+view_x,hc+(view_yScale*213)+view_y);
vertex(wc+(view_xScale*378)+view_x,hc+(view_yScale*216)+view_y);
vertex(wc+(view_xScale*378)+view_x,hc+(view_yScale*229)+view_y);
vertex(wc+(view_xScale*378)+view_x,hc+(view_yScale*239)+view_y);
vertex(wc+(view_xScale*360)+view_x,hc+(view_yScale*244)+view_y);
vertex(wc+(view_xScale*301)+view_x,hc+(view_yScale*249)+view_y);
endShape(CLOSE)
//ENDview
}
  }



  //Wide Frame     c
  {
    //Stlying Wall
    fill(paperwhite);
    stroke(lineColour);

    //Draw Wall
    beginShape();
    vertex(c1x, c1y);
    vertex(c2x, c2y);
    vertex(c3x, c3y);
    vertex(c4x, c4y);
    beginContour();
    vertex(cB4x, cB4y);
    vertex(cB3x, cB3y);
    vertex(cB2x, cB2y);
    vertex(cB1x, cB1y);
    endContour();
    endShape(CLOSE);
  }
  //Wide Frame   bA
  {
    //Stlying
    fill(Frame);
    stroke(lineColour);

    //T
    beginShape();
    vertex(c1x, c1y);
    vertex(c2x, c2y);
    vertex(cA2x, cA2y);
    vertex(cA1x, cA1y);
    endShape(CLOSE);
    //R
    beginShape();
    vertex(c2x, c2y);
    vertex(c3x, c3y);
    vertex(cA3x, cA3y);
    vertex(cA2x, cA2y);
    endShape(CLOSE);
    //B
    beginShape();
    vertex(c3x, c3y);
    vertex(c4x, c4y);
    vertex(cA4x, cA4y);
    vertex(cA3x, cA3y);
    endShape(CLOSE);
    //L
    beginShape();
    vertex(c4x, c4y);
    vertex(c1x, c1y);
    vertex(cA1x, cA1y);
    vertex(cA4x, cA4y);
    endShape(CLOSE);
  }
  pop();

  pop();

  pop();



  //Fullscreen button
  //= fs
  {
    // //roll over colour change
    // if (mouseX > width - 65 && mouseX < width - 15 && mouseY > 15 && mouseY < 65) {
    //   buttonColour = ([255, 100]);
    // } else if (displayWidth < 500 || displayHeight < 600) {
    //   buttonColour = ([255, 0]);
    // } else {
    //   buttonColour = ([0, 100]);
    // }
    //
    // strokeWeight(1);
    // //scale variables
    // let fs_sx = 1;
    // let fs_sy = 1;
    //
    // //position variables
    // let fs_px = width - 60;
    // let fs_py = 20;
    //
    // //stlying
    // noFill();
    // stroke(buttonColour);
    //
    // //shows expand button
    // if (!fullscreen()) {
    //   //topleft arrow
    //   beginShape();
    //   vertex((fs_sx * 0) + fs_px, (fs_sy * 15) + fs_py);
    //   vertex((fs_sx * 0) + fs_px, (fs_sy * 0) + fs_py);
    //   vertex((fs_sx * 15) + fs_px, (fs_sy * 0) + fs_py);
    //   vertex((fs_sx * 0) + fs_px, (fs_sy * 0) + fs_py);
    //   vertex((fs_sx * 17) + fs_px, (fs_sy * 17) + fs_py);
    //   endShape();
    //   //topright arrow
    //   beginShape();
    //   vertex((fs_sx * 25) + fs_px, (fs_sy * 0) + fs_py);
    //   vertex((fs_sx * 40) + fs_px, (fs_sy * 0) + fs_py);
    //   vertex((fs_sx * 40) + fs_px, (fs_sy * 15) + fs_py);
    //   vertex((fs_sx * 40) + fs_px, (fs_sy * 0) + fs_py);
    //   vertex((fs_sx * 23) + fs_px, (fs_sy * 17) + fs_py);
    //   endShape();
    //   //bottomright arrow
    //   beginShape();
    //   vertex((fs_sx * 40) + fs_px, (fs_sy * 25) + fs_py);
    //   vertex((fs_sx * 40) + fs_px, (fs_sy * 40) + fs_py);
    //   vertex((fs_sx * 25) + fs_px, (fs_sy * 40) + fs_py);
    //   vertex((fs_sx * 40) + fs_px, (fs_sy * 40) + fs_py);
    //   vertex((fs_sx * 23) + fs_px, (fs_sy * 23) + fs_py);
    //   endShape();
    //   //bottomleft arrow
    //   beginShape();
    //   vertex((fs_sx * 15) + fs_px, (fs_sy * 40) + fs_py);
    //   vertex((fs_sx * 0) + fs_px, (fs_sy * 40) + fs_py);
    //   vertex((fs_sx * 0) + fs_px, (fs_sy * 25) + fs_py);
    //   vertex((fs_sx * 0) + fs_px, (fs_sy * 40) + fs_py);
    //   vertex((fs_sx * 17) + fs_px, (fs_sy * 23) + fs_py);
    //   endShape();
    // }
    //
    // //shows contract button
    // stroke(buttonColour);
    // if (fullscreen()) {
    //   //topleft arrow
    //   beginShape();
    //   vertex((fs_sx * 0) + fs_px, (fs_sy * 0) + fs_py);
    //   vertex((fs_sx * 17) + fs_px, (fs_sy * 17) + fs_py);
    //   vertex((fs_sx * 17) + fs_px, (fs_sy * 3) + fs_py);
    //   vertex((fs_sx * 17) + fs_px, (fs_sy * 17) + fs_py);
    //   vertex((fs_sx * 3) + fs_px, (fs_sy * 17) + fs_py);
    //   endShape();
    //   //topright arrow
    //   beginShape();
    //   vertex((fs_sx * 40) + fs_px, (fs_sy * 0) + fs_py);
    //   vertex((fs_sx * 23) + fs_px, (fs_sy * 17) + fs_py);
    //   vertex((fs_sx * 23) + fs_px, (fs_sy * 3) + fs_py);
    //   vertex((fs_sx * 23) + fs_px, (fs_sy * 17) + fs_py);
    //   vertex((fs_sx * 35) + fs_px, (fs_sy * 17) + fs_py);
    //   endShape();
    //   //bottomright arrow
    //   beginShape();
    //   vertex((fs_sx * 40) + fs_px, (fs_sy * 40) + fs_py);
    //   vertex((fs_sx * 23) + fs_px, (fs_sy * 23) + fs_py);
    //   vertex((fs_sx * 23) + fs_px, (fs_sy * 35) + fs_py);
    //   vertex((fs_sx * 23) + fs_px, (fs_sy * 23) + fs_py);
    //   vertex((fs_sx * 35) + fs_px, (fs_sy * 23) + fs_py);
    //   endShape();
    //   //bottomleft arrow
    //   beginShape();
    //   vertex((fs_sx * 0) + fs_px, (fs_sy * 40) + fs_py);
    //   vertex((fs_sx * 17) + fs_px, (fs_sy * 23) + fs_py);
    //   vertex((fs_sx * 17) + fs_px, (fs_sy * 35) + fs_py);
    //   vertex((fs_sx * 17) + fs_px, (fs_sy * 23) + fs_py);
    //   vertex((fs_sx * 3) + fs_px, (fs_sy * 23) + fs_py);
    //   endShape();
    // }
  }


  //Adjusted coordinates
  {
      // let newx = (mouseX - width / 2);
      // let newy = (mouseY - height / 2);
      // let newxScaled = (newx/scale);
      // let newyScaled = (newy/scale);
      // fill(0);
      // noStroke();
      // text('nx:' + newxScaled, 16, 20);
      // text('ny:' + newyScaled, 16, 30);
      //
      // text('x:' + mouseX, 16, 40);
      // text('y:' + mouseY, 16, 50);
      // stroke(0);
      // //New axis
      // line(width / 2, 0, width / 2, height);
      // line(0, height / 2, width, height / 2);
    }

}

function mouseReleased() {

  //Click for full screen toggle
  // if (mouseX > width - 65 && mouseX < width - 15 && mouseY > 15 && mouseY < 65) {
  //   let fs = fullscreen();
  //   fullscreen(!fs);
  //   buttonColour = ([0, 100])

  // }




  if(mouseX > (a2xC+((a1xC-a2xC)/2)) && mouseX < a2x && mouseY > a1y && mouseY < a4y && sAngle < 3){
  sAngle = sAngle + 1
  }
  if(mouseX > a1x && mouseX < (a2xC+((a1xC-a2xC)/2)) && mouseY > a1y && mouseY < a4y && sAngle > -3){
  sAngle = sAngle - 1
  }

    if(mouseX > (b2xC+((b1xC-b2xC)/2)) && mouseX < b2x && mouseY > b1y && mouseY < b4y && tAngle < 3){
  tAngle = tAngle + 1
  }
  if(mouseX > b1x && mouseX < (b2xC+((b1xC-b2xC)/2)) && mouseY > b1y && mouseY < b4y && tAngle > -3){
  tAngle = tAngle - 1
  }

    if(mouseX > (c2xC+((c1xC-c2xC)/2)) && mouseX < c2x && mouseY > c1y && mouseY < c4y && wAngle < 3){
  wAngle = wAngle + 1
  }
  if(mouseX > c1x && mouseX < (a2xC+((c1xC-c2xC)/2)) && mouseY > c1y && mouseY < c4y && wAngle > -3){
  wAngle = wAngle - 1
  }

  print(tAngle);


  if(mouseX > a1x && mouseX < a2x && mouseY > a1y && mouseY < a4y && wAngle == 0 && sAngle == 0 && tAngle == 0){
    tAngle = tAngle + randomTilt
  }

    if(mouseX > b1x && mouseX < b2x && mouseY > b1y && mouseY < b4y && wAngle == 0 && sAngle == 0 && tAngle == 0){
    wAngle = wAngle + randomTilt
  }

      if(mouseX > c1x && mouseX < c2x && mouseY > c1y && mouseY < c4y && wAngle == 0 && sAngle == 0 && tAngle == 0){
    sAngle = sAngle + randomTilt
  }
}
