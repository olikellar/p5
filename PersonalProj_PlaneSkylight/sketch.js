//Colours
let lineColour = ([0, 100]);
let buttonColour = ([0, 100]);

let sky = ([4, 110, 255]);

let tr = 255;

let wallColour = ([245, 90, 60, tr]);
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

let pBC = ([200, 200, 200]);
let pWC = ([200, 0, 0]);
let pJC = ([200, 200, 200]);
//transparency layer
let pBC2 = ([200, 0, 0,10]);
let pWC2 = ([200, 0, 0,10]);
let pJC2 = ([200, 0, 0,10]);

//Width Centre variable
let hc;
let wc;
let sc;
let scale;
let xscaler;
let yscaler;

let movex = 0;

let cld1 = 0;
let cld2 = 0;
let cld3 = 0;
let cld4 = 0;

let plane = 0;
let plane2 = 0;

let pScale;

let pX = -120;
let pY = -40;

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
  background(sky);
  stroke(lineColour);
  strokeWeight(scale / 5);

  cld1 = cld1 + scale/190;
  cld2 = cld2 + scale/160;
  cld3 = cld3 + scale/130;
  cld4 = cld4 + scale/110;

  //y
  plane = plane + scale/25;
  //x
  plane2 = plane2 + scale/10;

  pScale = 60;

  //a
  {
    //Scale a
    let a_sx = scale * xscaler;
    let a_sy = scale * yscaler;

    //Position a
    let as_px = (scale*movex) + map(mouseX, 0, width, (scale*1), -(scale*18), true);
    let as_py = 0;

    //Points >> + or - ((value * scaler) + positioner)
    //TL
    a1x = wc - ((88 * a_sx) + as_px);
    a1y = hc - ((82 * a_sy) + as_py);
    //TR
    a2x = wc - ((34 * a_sx) + as_px);
    a2y = hc - ((82 * a_sy) + as_py);
    //BR
    a3x = wc - ((34 * a_sx) + as_px);
    a3y = hc + ((82 * a_sy) + as_py);
    //BL
    a4x = wc - ((88 * a_sx) + as_px);
    a4y = hc + ((82 * a_sy) + as_py);

    a5x = wc + ((50 * a_sx) - as_px);
    a5y = hc - ((82 * a_sy) + as_py);

    a6x = wc - ((4 * a_sx) + as_px);
    a6y = hc - ((82 * a_sy) + as_py);

    a7x = wc - ((4 * a_sx) + as_px);
    a7y = hc + ((82 * a_sy) + as_py);

    a8x = wc + ((50 * a_sx) - as_px);
    a8y = hc + ((82 * a_sy) + as_py);

    a9x = wc + ((135 * a_sx) - as_px);
    a9y = hc - ((82 * a_sy) + as_py);

    a10x = wc + ((80 * a_sx) - as_px);
    a10y = hc - ((82 * a_sy) + as_py);

    a11x = wc + ((80 * a_sx) - as_px);
    a11y = hc + ((82 * a_sy) + as_py);

    a12x = wc + ((135 * a_sx) - as_px);
    a12y = hc + ((82 * a_sy) + as_py);
  }
  //b
  {
    //Scale b
    let b_sx = scale * xscaler;
    let b_sy = scale * yscaler;

    //Position b
    let b_px = (scale*movex) + map(mouseX, 0, width, (scale*1), -(scale*7), true);
    let b_py = 0;

    //Points >> + or - ((value * scaler) + positioner)
    b1x = wc - ((75 * b_sx) + b_px);
    b1y = hc - ((75 * b_sy) + b_py);

    b2x = wc - ((31 * b_sx) + b_px);
    b2y = hc - ((75 * b_sy) + b_py);

    b3x = wc - ((31 * b_sx) + b_px);
    b3y = hc + ((75 * b_sy) + b_py);

    b4x = wc - ((75 * b_sx) + b_px);
    b4y = hc + ((75 * b_sy) + b_py);

    b5x = wc - ((5 * b_sx) + b_px);
    b5y = hc - ((75 * b_sy) + b_py);

    b6x = wc + ((40 * b_sx) - b_px);
    b6y = hc - ((75 * b_sy) + b_py);

    b7x = wc + ((40 * b_sx) - b_px);
    b7y = hc + ((75 * b_sy) + b_py);

    b8x = wc - ((5 * b_sx) + b_px);
    b8y = hc + ((75 * b_sy) + b_py);

    b9x = wc + ((110 * b_sx) - b_px);
    b9y = hc - ((75 * b_sy) + b_py);

    b10x = wc + ((66 * b_sx) - b_px);
    b10y = hc - ((75 * b_sy) + b_py);

    b11x = wc + ((66 * b_sx) - b_px);
    b11y = hc + ((75 * b_sy) + b_py);

    b12x = wc + ((110 * b_sx) - b_px);
    b12y = hc + ((75 * b_sy) + b_py);
  }
  //c
  {
    //Scale c
    let c_sx = scale * xscaler;
    let c_sy = scale * yscaler;

    //Position c
    let c_px = (scale*movex) + map(mouseX, 0, width, (scale*1), -(scale*7), true);
    let c_py = 0;

    //Points >> + or - ((value * scaler) + positioner)
    c1x = wc - ((74.5 * c_sx) + c_px);
    c1y = hc - ((74.5 * c_sy) + c_py);

    c2x = wc - ((31.5 * c_sx) + c_px);
    c2y = hc - ((74.5 * c_sy) + c_py);

    c3x = wc - ((31.5 * c_sx) + c_px);
    c3y = hc + ((74.5 * c_sy) + c_py);

    c4x = wc - ((74.5 * c_sx) + c_px);
    c4y = hc + ((74.5 * c_sy) + c_py);

    c5x = wc - ((4.5 * c_sx) + c_px);
    c5y = hc - ((74.5 * c_sy) + c_py);

    c6x = wc + ((39.5 * c_sx) - c_px);
    c6y = hc - ((74.5 * c_sy) + c_py);

    c7x = wc + ((39.5 * c_sx) - c_px);
    c7y = hc + ((74.5 * c_sy) + c_py);

    c8x = wc - ((4.5 * c_sx) + c_px);
    c8y = hc + ((74.5 * c_sy) + c_py);

    c9x = wc + ((109.5 * c_sx) - c_px);
    c9y = hc - ((74.5 * c_sy) + c_py);

    c10x = wc + ((66.5 * c_sx) - c_px);
    c10y = hc - ((74.5 * c_sy) + c_py);

    c11x = wc + ((66.5 * c_sx) - c_px);
    c11y = hc + ((74.5 * c_sy) + c_py);

    c12x = wc + ((109.5 * c_sx) - c_px);
    c12y = hc + ((74.5 * c_sy) + c_py);
  }
  //d
  {
    //Scale d
    let d_sx = scale * xscaler;
    let d_sy = scale * yscaler;

    //Position d
    let d_px = (scale*movex) + map(mouseX, 0, width, (scale*1), -(scale*6.5), true);
    let d_py = 0;

    //Points >> + or - ((value * scaler) + positioner)
    d1x = wc - ((73.6 * d_sx) + d_px);
    d1y = hc - ((74.2 * d_sy) + d_py);

    d2x = wc - ((31.3 * d_sx) + d_px);
    d2y = hc - ((74.2 * d_sy) + d_py);

    d3x = wc - ((31.3 * d_sx) + d_px);
    d3y = hc + ((74.2 * d_sy) + d_py);

    d4x = wc - ((73.6 * d_sx) + d_px);
    d4y = hc + ((74.2 * d_sy) + d_py);

    d5x = wc - ((5 * d_sx) + d_px);
    d5y = hc - ((74.2 * d_sy) + d_py);

    d6x = wc + ((38.7 * d_sx) - d_px);
    d6y = hc - ((74.2 * d_sy) + d_py);

    d7x = wc + ((38.7 * d_sx) - d_px);
    d7y = hc + ((74.2 * d_sy) + d_py);

    d8x = wc - ((5 * d_sx) + d_px);
    d8y = hc + ((74.2 * d_sy) + d_py);

    d9x = wc + ((108 * d_sx) - d_px);
    d9y = hc - ((74.2 * d_sy) + d_py);

    d10x = wc + ((65.3 * d_sx) - d_px);
    d10y = hc - ((74.2 * d_sy) + d_py);

    d11x = wc + ((65.3 * d_sx) - d_px);
    d11y = hc + ((74.2 * d_sy) + d_py);

    d12x = wc + ((108 * d_sx) - d_px);
    d12y = hc + ((74.2 * d_sy) + d_py);
  }
  //e
  {
    //Scale e
    let e_sx = scale * xscaler;
    let e_sy = scale * yscaler;

    //Position e
    let e_px = 0;
    let e_py = 0;

    //Points >> + or - ((value * scaler) + positioner)
    e1x = wc - ((48.5 * e_sx) + e_px);
    e1y = hc - ((70.7 * e_sy) + e_py);

    e2x = wc + ((48.5 * e_sx) + e_px);
    e2y = hc - ((70.7 * e_sy) + e_py);

    e3x = wc + ((48.5 * e_sx) + e_px);
    e3y = hc + ((70.7 * e_sy) + e_py);

    e4x = wc - ((48.5 * e_sx) + e_px);
    e4y = hc + ((70.7 * e_sy) + e_py);
  }
  //f
  {
    //Scale f
    let f_sx = scale * xscaler;
    let f_sy = scale * yscaler;

    //Position f
    let f_px = 0;
    let f_py = 0;

    //Points >> + or - ((value * scaler) + positioner)
    f1x = wc - ((47 * f_sx) + f_px);
    f1y = hc - ((67 * f_sy) + f_py);

    f2x = wc + ((47 * f_sx) + f_px);
    f2y = hc - ((67 * f_sy) + f_py);

    f3x = wc + ((47 * f_sx) + f_px);
    f3y = hc + ((-1.5 * f_sy) + f_py);

    f4x = wc - ((47 * f_sx) + f_px);
    f4y = hc + ((-1.5 * f_sy) + f_py);
  }



stroke(lineColour);
//PTW
{
fill(pWC);
let PTW_x = -scale*pX - plane2;
let PTW_y = -scale*pY - plane;
let PTW_xScale = scale/pScale;
let PTW_yScale = scale/pScale;
beginShape();
vertex(wc+(PTW_xScale*218)+PTW_x,hc+(PTW_yScale*415)+PTW_y);
vertex(wc+(PTW_xScale*228)+PTW_x,hc+(PTW_yScale*415)+PTW_y);
vertex(wc+(PTW_xScale*378)+PTW_x,hc+(PTW_yScale*303)+PTW_y);
vertex(wc+(PTW_xScale*379)+PTW_x,hc+(PTW_yScale*302)+PTW_y);
vertex(wc+(PTW_xScale*388)+PTW_x,hc+(PTW_yScale*301)+PTW_y);
vertex(wc+(PTW_xScale*413)+PTW_x,hc+(PTW_yScale*303)+PTW_y);
vertex(wc+(PTW_xScale*353)+PTW_x,hc+(PTW_yScale*366)+PTW_y);
vertex(wc+(PTW_xScale*361)+PTW_x,hc+(PTW_yScale*371)+PTW_y);
vertex(wc+(PTW_xScale*331)+PTW_x,hc+(PTW_yScale*408)+PTW_y);
vertex(wc+(PTW_xScale*326)+PTW_x,hc+(PTW_yScale*403)+PTW_y);
vertex(wc+(PTW_xScale*319)+PTW_x,hc+(PTW_yScale*410)+PTW_y);
vertex(wc+(PTW_xScale*324)+PTW_x,hc+(PTW_yScale*415)+PTW_y);
vertex(wc+(PTW_xScale*298)+PTW_x,hc+(PTW_yScale*448)+PTW_y);
vertex(wc+(PTW_xScale*220)+PTW_x,hc+(PTW_yScale*421)+PTW_y);
vertex(wc+(PTW_xScale*218)+PTW_x,hc+(PTW_yScale*417)+PTW_y);
endShape(CLOSE);
//ENDPTW
}
//PBW
{
fill(pWC);
let PBW_x = -scale*pX - plane2;
let PBW_y = -scale*pY - plane;
let PBW_xScale = scale/pScale;
let PBW_yScale = scale/pScale;
beginShape();
vertex(wc+(PBW_xScale*202)+PBW_x,hc+(PBW_yScale*459)+PBW_y);
vertex(wc+(PBW_xScale*206)+PBW_x,hc+(PBW_yScale*465)+PBW_y);
vertex(wc+(PBW_xScale*259)+PBW_x,hc+(PBW_yScale*647)+PBW_y);
vertex(wc+(PBW_xScale*262)+PBW_x,hc+(PBW_yScale*651)+PBW_y);
vertex(wc+(PBW_xScale*287)+PBW_x,hc+(PBW_yScale*664)+PBW_y);
vertex(wc+(PBW_xScale*277)+PBW_x,hc+(PBW_yScale*584)+PBW_y);
vertex(wc+(PBW_xScale*283)+PBW_x,hc+(PBW_yScale*586)+PBW_y);
vertex(wc+(PBW_xScale*276)+PBW_x,hc+(PBW_yScale*535)+PBW_y);
vertex(wc+(PBW_xScale*270)+PBW_x,hc+(PBW_yScale*535)+PBW_y);
vertex(wc+(PBW_xScale*270)+PBW_x,hc+(PBW_yScale*526)+PBW_y);
vertex(wc+(PBW_xScale*276)+PBW_x,hc+(PBW_yScale*526)+PBW_y);
vertex(wc+(PBW_xScale*283)+PBW_x,hc+(PBW_yScale*493)+PBW_y);
vertex(wc+(PBW_xScale*279)+PBW_x,hc+(PBW_yScale*485)+PBW_y);
vertex(wc+(PBW_xScale*206)+PBW_x,hc+(PBW_yScale*453)+PBW_y);
vertex(wc+(PBW_xScale*202)+PBW_x,hc+(PBW_yScale*458)+PBW_y);
endShape(CLOSE);
//ENDPBW
}
//PT
{
fill(pWC);
let PT_x = -scale*pX - plane2;
let PT_y = -scale*pY - plane;
let PT_xScale = scale/pScale;
let PT_yScale = scale/pScale;
beginShape();
vertex(wc+(PT_xScale*412)+PT_x,hc+(PT_yScale*535)+PT_y);
vertex(wc+(PT_xScale*421)+PT_x,hc+(PT_yScale*542)+PT_y);
vertex(wc+(PT_xScale*423)+PT_x,hc+(PT_yScale*544)+PT_y);
vertex(wc+(PT_xScale*434)+PT_x,hc+(PT_yScale*582)+PT_y);
vertex(wc+(PT_xScale*440)+PT_x,hc+(PT_yScale*594)+PT_y);
vertex(wc+(PT_xScale*452)+PT_x,hc+(PT_yScale*601)+PT_y);
vertex(wc+(PT_xScale*465)+PT_x,hc+(PT_yScale*539)+PT_y);
vertex(wc+(PT_xScale*505)+PT_x,hc+(PT_yScale*492)+PT_y);
vertex(wc+(PT_xScale*493)+PT_x,hc+(PT_yScale*486)+PT_y);
vertex(wc+(PT_xScale*483)+PT_x,hc+(PT_yScale*487)+PT_y);
vertex(wc+(PT_xScale*440)+PT_x,hc+(PT_yScale*509)+PT_y);
vertex(wc+(PT_xScale*427)+PT_x,hc+(PT_yScale*507)+PT_y);
vertex(wc+(PT_xScale*435)+PT_x,hc+(PT_yScale*527)+PT_y);
endShape(CLOSE);
//ENDPT
}
//PBod
{
fill(pBC);
let PBod_x = -scale*pX - plane2;
let PBod_y = -scale*pY - plane;
let PBod_xScale = scale/pScale;
let PBod_yScale = scale/pScale;
beginShape();
vertex(wc+(PBod_xScale*453)+PBod_x,hc+(PBod_yScale*525)+PBod_y);
vertex(wc+(PBod_xScale*440)+PBod_x,hc+(PBod_yScale*515)+PBod_y);
vertex(wc+(PBod_xScale*419)+PBod_x,hc+(PBod_yScale*502)+PBod_y);
vertex(wc+(PBod_xScale*400)+PBod_x,hc+(PBod_yScale*491)+PBod_y);
vertex(wc+(PBod_xScale*333)+PBod_x,hc+(PBod_yScale*458)+PBod_y);
vertex(wc+(PBod_xScale*133)+PBod_x,hc+(PBod_yScale*378)+PBod_y);
vertex(wc+(PBod_xScale*108)+PBod_x,hc+(PBod_yScale*370)+PBod_y);
vertex(wc+(PBod_xScale*85)+PBod_x,hc+(PBod_yScale*366)+PBod_y);
vertex(wc+(PBod_xScale*72)+PBod_x,hc+(PBod_yScale*366)+PBod_y);
vertex(wc+(PBod_xScale*62)+PBod_x,hc+(PBod_yScale*368)+PBod_y);
  vertex(wc+(PBod_xScale*60)+PBod_x,hc+(PBod_yScale*371)+PBod_y);
vertex(wc+(PBod_xScale*61)+PBod_x,hc+(PBod_yScale*376)+PBod_y);
vertex(wc+(PBod_xScale*65)+PBod_x,hc+(PBod_yScale*386)+PBod_y);
vertex(wc+(PBod_xScale*85)+PBod_x,hc+(PBod_yScale*407)+PBod_y);
vertex(wc+(PBod_xScale*89)+PBod_x,hc+(PBod_yScale*410)+PBod_y);
vertex(wc+(PBod_xScale*98)+PBod_x,hc+(PBod_yScale*415)+PBod_y);
vertex(wc+(PBod_xScale*107)+PBod_x,hc+(PBod_yScale*420)+PBod_y);
vertex(wc+(PBod_xScale*315)+PBod_x,hc+(PBod_yScale*506)+PBod_y);
vertex(wc+(PBod_xScale*397)+PBod_x,hc+(PBod_yScale*532)+PBod_y);
vertex(wc+(PBod_xScale*457)+PBod_x,hc+(PBod_yScale*543)+PBod_y);
vertex(wc+(PBod_xScale*472)+PBod_x,hc+(PBod_yScale*544)+PBod_y);
vertex(wc+(PBod_xScale*456)+PBod_x,hc+(PBod_yScale*527)+PBod_y);
endShape(CLOSE);
//ENDPBod
}
//JT
{
fill(pJC);
let JT_x = -scale*pX - plane2;
let JT_y = -scale*pY - plane;
let JT_xScale = scale/pScale;
let JT_yScale = scale/pScale;
beginShape();
vertex(wc+(JT_xScale*252)+JT_x,hc+(JT_yScale*533)+JT_y);
vertex(wc+(JT_xScale*235)+JT_x,hc+(JT_yScale*518)+JT_y);
vertex(wc+(JT_xScale*223)+JT_x,hc+(JT_yScale*509)+JT_y);
vertex(wc+(JT_xScale*200)+JT_x,hc+(JT_yScale*500)+JT_y);
vertex(wc+(JT_xScale*195)+JT_x,hc+(JT_yScale*499)+JT_y);
vertex(wc+(JT_xScale*189)+JT_x,hc+(JT_yScale*505)+JT_y);
vertex(wc+(JT_xScale*186)+JT_x,hc+(JT_yScale*512)+JT_y);
vertex(wc+(JT_xScale*185)+JT_x,hc+(JT_yScale*518)+JT_y);
vertex(wc+(JT_xScale*187)+JT_x,hc+(JT_yScale*520)+JT_y);
vertex(wc+(JT_xScale*192)+JT_x,hc+(JT_yScale*524)+JT_y);
vertex(wc+(JT_xScale*201)+JT_x,hc+(JT_yScale*527)+JT_y);
vertex(wc+(JT_xScale*224)+JT_x,hc+(JT_yScale*532)+JT_y);
vertex(wc+(JT_xScale*251)+JT_x,hc+(JT_yScale*533)+JT_y);
endShape(CLOSE);
//ENDJT
}
//JT2
{
fill(pJC);
let JT2_x = -scale*pX - plane2;
let JT2_y = -scale*pY - plane;
let JT2_xScale = scale/pScale;
let JT2_yScale = scale/pScale;
beginShape();
vertex(wc+(JT2_xScale*299)+JT2_x,hc+(JT2_yScale*400)+JT2_y);
vertex(wc+(JT2_xScale*283)+JT2_x,hc+(JT2_yScale*383)+JT2_y);
vertex(wc+(JT2_xScale*271)+JT2_x,hc+(JT2_yScale*373)+JT2_y);
vertex(wc+(JT2_xScale*259)+JT2_x,hc+(JT2_yScale*367)+JT2_y);
vertex(wc+(JT2_xScale*249)+JT2_x,hc+(JT2_yScale*362)+JT2_y);
vertex(wc+(JT2_xScale*241)+JT2_x,hc+(JT2_yScale*368)+JT2_y);
vertex(wc+(JT2_xScale*235)+JT2_x,hc+(JT2_yScale*377)+JT2_y);
vertex(wc+(JT2_xScale*237)+JT2_x,hc+(JT2_yScale*386)+JT2_y);
vertex(wc+(JT2_xScale*249)+JT2_x,hc+(JT2_yScale*390)+JT2_y);
vertex(wc+(JT2_xScale*269)+JT2_x,hc+(JT2_yScale*397)+JT2_y);
vertex(wc+(JT2_xScale*290)+JT2_x,hc+(JT2_yScale*399)+JT2_y);
vertex(wc+(JT2_xScale*298)+JT2_x,hc+(JT2_yScale*400)+JT2_y);
endShape(CLOSE);
//ENDJT2
}

//Cloud
{
noStroke();
fill(255,250);
let Cloud_x = -scale*30 + cld1;
let Cloud_y = -scale*180 - cld1;
let Cloud_xScale = scale/4;
let Cloud_yScale = scale/3;
beginShape();
vertex(wc+(Cloud_xScale*121)+Cloud_x,hc+(Cloud_yScale*380)+Cloud_y);
vertex(wc+(Cloud_xScale*164)+Cloud_x,hc+(Cloud_yScale*341)+Cloud_y);
vertex(wc+(Cloud_xScale*174)+Cloud_x,hc+(Cloud_yScale*323)+Cloud_y);
vertex(wc+(Cloud_xScale*197)+Cloud_x,hc+(Cloud_yScale*321)+Cloud_y);
vertex(wc+(Cloud_xScale*205)+Cloud_x,hc+(Cloud_yScale*302)+Cloud_y);
vertex(wc+(Cloud_xScale*235)+Cloud_x,hc+(Cloud_yScale*278)+Cloud_y);
vertex(wc+(Cloud_xScale*268)+Cloud_x,hc+(Cloud_yScale*281)+Cloud_y);
vertex(wc+(Cloud_xScale*368)+Cloud_x,hc+(Cloud_yScale*304)+Cloud_y);
vertex(wc+(Cloud_xScale*390)+Cloud_x,hc+(Cloud_yScale*299)+Cloud_y);
vertex(wc+(Cloud_xScale*422)+Cloud_x,hc+(Cloud_yScale*286)+Cloud_y);
vertex(wc+(Cloud_xScale*501)+Cloud_x,hc+(Cloud_yScale*303)+Cloud_y);
vertex(wc+(Cloud_xScale*548)+Cloud_x,hc+(Cloud_yScale*312)+Cloud_y);
vertex(wc+(Cloud_xScale*640)+Cloud_x,hc+(Cloud_yScale*343)+Cloud_y);
vertex(wc+(Cloud_xScale*676)+Cloud_x,hc+(Cloud_yScale*339)+Cloud_y);
vertex(wc+(Cloud_xScale*688)+Cloud_x,hc+(Cloud_yScale*360)+Cloud_y);
vertex(wc+(Cloud_xScale*698)+Cloud_x,hc+(Cloud_yScale*378)+Cloud_y);
vertex(wc+(Cloud_xScale*737)+Cloud_x,hc+(Cloud_yScale*377)+Cloud_y);
vertex(wc+(Cloud_xScale*741)+Cloud_x,hc+(Cloud_yScale*397)+Cloud_y);
vertex(wc+(Cloud_xScale*769)+Cloud_x,hc+(Cloud_yScale*409)+Cloud_y);
vertex(wc+(Cloud_xScale*785)+Cloud_x,hc+(Cloud_yScale*418)+Cloud_y);
vertex(wc+(Cloud_xScale*758)+Cloud_x,hc+(Cloud_yScale*450)+Cloud_y);
vertex(wc+(Cloud_xScale*717)+Cloud_x,hc+(Cloud_yScale*462)+Cloud_y);
vertex(wc+(Cloud_xScale*688)+Cloud_x,hc+(Cloud_yScale*464)+Cloud_y);
vertex(wc+(Cloud_xScale*656)+Cloud_x,hc+(Cloud_yScale*495)+Cloud_y);
vertex(wc+(Cloud_xScale*625)+Cloud_x,hc+(Cloud_yScale*504)+Cloud_y);
vertex(wc+(Cloud_xScale*563)+Cloud_x,hc+(Cloud_yScale*509)+Cloud_y);
vertex(wc+(Cloud_xScale*521)+Cloud_x,hc+(Cloud_yScale*529)+Cloud_y);
vertex(wc+(Cloud_xScale*467)+Cloud_x,hc+(Cloud_yScale*539)+Cloud_y);
vertex(wc+(Cloud_xScale*404)+Cloud_x,hc+(Cloud_yScale*539)+Cloud_y);
vertex(wc+(Cloud_xScale*387)+Cloud_x,hc+(Cloud_yScale*544)+Cloud_y);
vertex(wc+(Cloud_xScale*366)+Cloud_x,hc+(Cloud_yScale*532)+Cloud_y);
vertex(wc+(Cloud_xScale*358)+Cloud_x,hc+(Cloud_yScale*517)+Cloud_y);
vertex(wc+(Cloud_xScale*341)+Cloud_x,hc+(Cloud_yScale*509)+Cloud_y);
vertex(wc+(Cloud_xScale*333)+Cloud_x,hc+(Cloud_yScale*518)+Cloud_y);
vertex(wc+(Cloud_xScale*325)+Cloud_x,hc+(Cloud_yScale*521)+Cloud_y);
vertex(wc+(Cloud_xScale*310)+Cloud_x,hc+(Cloud_yScale*511)+Cloud_y);
vertex(wc+(Cloud_xScale*291)+Cloud_x,hc+(Cloud_yScale*502)+Cloud_y);
vertex(wc+(Cloud_xScale*249)+Cloud_x,hc+(Cloud_yScale*497)+Cloud_y);
vertex(wc+(Cloud_xScale*239)+Cloud_x,hc+(Cloud_yScale*464)+Cloud_y);
vertex(wc+(Cloud_xScale*231)+Cloud_x,hc+(Cloud_yScale*448)+Cloud_y);
vertex(wc+(Cloud_xScale*201)+Cloud_x,hc+(Cloud_yScale*469)+Cloud_y);
vertex(wc+(Cloud_xScale*133)+Cloud_x,hc+(Cloud_yScale*434)+Cloud_y);
vertex(wc+(Cloud_xScale*127)+Cloud_x,hc+(Cloud_yScale*420)+Cloud_y);
vertex(wc+(Cloud_xScale*105)+Cloud_x,hc+(Cloud_yScale*428)+Cloud_y);
vertex(wc+(Cloud_xScale*88)+Cloud_x,hc+(Cloud_yScale*421)+Cloud_y);
vertex(wc+(Cloud_xScale*88)+Cloud_x,hc+(Cloud_yScale*409)+Cloud_y);
vertex(wc+(Cloud_xScale*125)+Cloud_x,hc+(Cloud_yScale*392)+Cloud_y);
vertex(wc+(Cloud_xScale*120)+Cloud_x,hc+(Cloud_yScale*382)+Cloud_y);
endShape(CLOSE);
//ENDCloud
}
//Cloud1
{
noStroke();
fill(255,250);
let Cloud1_x = -scale*120 + cld1;
let Cloud1_y = -scale*190 - cld3;
let Cloud1_xScale = scale/3;
let Cloud1_yScale = scale/2;
beginShape();
vertex(wc+(Cloud1_xScale*61)+Cloud1_x,hc+(Cloud1_yScale*542)+Cloud1_y);
vertex(wc+(Cloud1_xScale*65)+Cloud1_x,hc+(Cloud1_yScale*541)+Cloud1_y);
vertex(wc+(Cloud1_xScale*76)+Cloud1_x,hc+(Cloud1_yScale*536)+Cloud1_y);
vertex(wc+(Cloud1_xScale*77)+Cloud1_x,hc+(Cloud1_yScale*529)+Cloud1_y);
vertex(wc+(Cloud1_xScale*74)+Cloud1_x,hc+(Cloud1_yScale*513)+Cloud1_y);
vertex(wc+(Cloud1_xScale*74)+Cloud1_x,hc+(Cloud1_yScale*500)+Cloud1_y);
vertex(wc+(Cloud1_xScale*81)+Cloud1_x,hc+(Cloud1_yScale*498)+Cloud1_y);
vertex(wc+(Cloud1_xScale*85)+Cloud1_x,hc+(Cloud1_yScale*501)+Cloud1_y);
vertex(wc+(Cloud1_xScale*90)+Cloud1_x,hc+(Cloud1_yScale*499)+Cloud1_y);
vertex(wc+(Cloud1_xScale*88)+Cloud1_x,hc+(Cloud1_yScale*498)+Cloud1_y);
vertex(wc+(Cloud1_xScale*93)+Cloud1_x,hc+(Cloud1_yScale*494)+Cloud1_y);
vertex(wc+(Cloud1_xScale*120)+Cloud1_x,hc+(Cloud1_yScale*493)+Cloud1_y);
vertex(wc+(Cloud1_xScale*121)+Cloud1_x,hc+(Cloud1_yScale*482)+Cloud1_y);
vertex(wc+(Cloud1_xScale*122)+Cloud1_x,hc+(Cloud1_yScale*474)+Cloud1_y);
vertex(wc+(Cloud1_xScale*129)+Cloud1_x,hc+(Cloud1_yScale*467)+Cloud1_y);
vertex(wc+(Cloud1_xScale*139)+Cloud1_x,hc+(Cloud1_yScale*466)+Cloud1_y);
vertex(wc+(Cloud1_xScale*163)+Cloud1_x,hc+(Cloud1_yScale*450)+Cloud1_y);
vertex(wc+(Cloud1_xScale*167)+Cloud1_x,hc+(Cloud1_yScale*438)+Cloud1_y);
vertex(wc+(Cloud1_xScale*176)+Cloud1_x,hc+(Cloud1_yScale*424)+Cloud1_y);
vertex(wc+(Cloud1_xScale*193)+Cloud1_x,hc+(Cloud1_yScale*424)+Cloud1_y);
vertex(wc+(Cloud1_xScale*209)+Cloud1_x,hc+(Cloud1_yScale*431)+Cloud1_y);
vertex(wc+(Cloud1_xScale*219)+Cloud1_x,hc+(Cloud1_yScale*436)+Cloud1_y);
vertex(wc+(Cloud1_xScale*239)+Cloud1_x,hc+(Cloud1_yScale*441)+Cloud1_y);
vertex(wc+(Cloud1_xScale*254)+Cloud1_x,hc+(Cloud1_yScale*433)+Cloud1_y);
vertex(wc+(Cloud1_xScale*276)+Cloud1_x,hc+(Cloud1_yScale*424)+Cloud1_y);
vertex(wc+(Cloud1_xScale*294)+Cloud1_x,hc+(Cloud1_yScale*432)+Cloud1_y);
vertex(wc+(Cloud1_xScale*319)+Cloud1_x,hc+(Cloud1_yScale*437)+Cloud1_y);
vertex(wc+(Cloud1_xScale*329)+Cloud1_x,hc+(Cloud1_yScale*428)+Cloud1_y);
vertex(wc+(Cloud1_xScale*330)+Cloud1_x,hc+(Cloud1_yScale*427)+Cloud1_y);
vertex(wc+(Cloud1_xScale*332)+Cloud1_x,hc+(Cloud1_yScale*428)+Cloud1_y);
vertex(wc+(Cloud1_xScale*337)+Cloud1_x,hc+(Cloud1_yScale*429)+Cloud1_y);
vertex(wc+(Cloud1_xScale*345)+Cloud1_x,hc+(Cloud1_yScale*424)+Cloud1_y);
vertex(wc+(Cloud1_xScale*358)+Cloud1_x,hc+(Cloud1_yScale*422)+Cloud1_y);
vertex(wc+(Cloud1_xScale*364)+Cloud1_x,hc+(Cloud1_yScale*427)+Cloud1_y);
vertex(wc+(Cloud1_xScale*362)+Cloud1_x,hc+(Cloud1_yScale*435)+Cloud1_y);
vertex(wc+(Cloud1_xScale*377)+Cloud1_x,hc+(Cloud1_yScale*450)+Cloud1_y);
vertex(wc+(Cloud1_xScale*374)+Cloud1_x,hc+(Cloud1_yScale*459)+Cloud1_y);
vertex(wc+(Cloud1_xScale*375)+Cloud1_x,hc+(Cloud1_yScale*479)+Cloud1_y);
vertex(wc+(Cloud1_xScale*383)+Cloud1_x,hc+(Cloud1_yScale*488)+Cloud1_y);
vertex(wc+(Cloud1_xScale*375)+Cloud1_x,hc+(Cloud1_yScale*495)+Cloud1_y);
vertex(wc+(Cloud1_xScale*366)+Cloud1_x,hc+(Cloud1_yScale*497)+Cloud1_y);
vertex(wc+(Cloud1_xScale*349)+Cloud1_x,hc+(Cloud1_yScale*497)+Cloud1_y);
vertex(wc+(Cloud1_xScale*346)+Cloud1_x,hc+(Cloud1_yScale*498)+Cloud1_y);
vertex(wc+(Cloud1_xScale*344)+Cloud1_x,hc+(Cloud1_yScale*503)+Cloud1_y);
vertex(wc+(Cloud1_xScale*343)+Cloud1_x,hc+(Cloud1_yScale*508)+Cloud1_y);
vertex(wc+(Cloud1_xScale*334)+Cloud1_x,hc+(Cloud1_yScale*511)+Cloud1_y);
vertex(wc+(Cloud1_xScale*305)+Cloud1_x,hc+(Cloud1_yScale*509)+Cloud1_y);
vertex(wc+(Cloud1_xScale*298)+Cloud1_x,hc+(Cloud1_yScale*507)+Cloud1_y);
vertex(wc+(Cloud1_xScale*285)+Cloud1_x,hc+(Cloud1_yScale*506)+Cloud1_y);
vertex(wc+(Cloud1_xScale*284)+Cloud1_x,hc+(Cloud1_yScale*511)+Cloud1_y);
vertex(wc+(Cloud1_xScale*281)+Cloud1_x,hc+(Cloud1_yScale*515)+Cloud1_y);
vertex(wc+(Cloud1_xScale*272)+Cloud1_x,hc+(Cloud1_yScale*520)+Cloud1_y);
vertex(wc+(Cloud1_xScale*274)+Cloud1_x,hc+(Cloud1_yScale*533)+Cloud1_y);
vertex(wc+(Cloud1_xScale*273)+Cloud1_x,hc+(Cloud1_yScale*546)+Cloud1_y);
vertex(wc+(Cloud1_xScale*265)+Cloud1_x,hc+(Cloud1_yScale*553)+Cloud1_y);
vertex(wc+(Cloud1_xScale*260)+Cloud1_x,hc+(Cloud1_yScale*563)+Cloud1_y);
vertex(wc+(Cloud1_xScale*250)+Cloud1_x,hc+(Cloud1_yScale*572)+Cloud1_y);
vertex(wc+(Cloud1_xScale*230)+Cloud1_x,hc+(Cloud1_yScale*577)+Cloud1_y);
vertex(wc+(Cloud1_xScale*209)+Cloud1_x,hc+(Cloud1_yScale*573)+Cloud1_y);
vertex(wc+(Cloud1_xScale*197)+Cloud1_x,hc+(Cloud1_yScale*574)+Cloud1_y);
vertex(wc+(Cloud1_xScale*190)+Cloud1_x,hc+(Cloud1_yScale*579)+Cloud1_y);
vertex(wc+(Cloud1_xScale*188)+Cloud1_x,hc+(Cloud1_yScale*587)+Cloud1_y);
vertex(wc+(Cloud1_xScale*186)+Cloud1_x,hc+(Cloud1_yScale*600)+Cloud1_y);
vertex(wc+(Cloud1_xScale*179)+Cloud1_x,hc+(Cloud1_yScale*610)+Cloud1_y);
vertex(wc+(Cloud1_xScale*168)+Cloud1_x,hc+(Cloud1_yScale*617)+Cloud1_y);
vertex(wc+(Cloud1_xScale*161)+Cloud1_x,hc+(Cloud1_yScale*618)+Cloud1_y);
vertex(wc+(Cloud1_xScale*154)+Cloud1_x,hc+(Cloud1_yScale*617)+Cloud1_y);
vertex(wc+(Cloud1_xScale*142)+Cloud1_x,hc+(Cloud1_yScale*609)+Cloud1_y);
vertex(wc+(Cloud1_xScale*121)+Cloud1_x,hc+(Cloud1_yScale*597)+Cloud1_y);
vertex(wc+(Cloud1_xScale*108)+Cloud1_x,hc+(Cloud1_yScale*599)+Cloud1_y);
vertex(wc+(Cloud1_xScale*96)+Cloud1_x,hc+(Cloud1_yScale*606)+Cloud1_y);
vertex(wc+(Cloud1_xScale*86)+Cloud1_x,hc+(Cloud1_yScale*605)+Cloud1_y);
vertex(wc+(Cloud1_xScale*75)+Cloud1_x,hc+(Cloud1_yScale*597)+Cloud1_y);
vertex(wc+(Cloud1_xScale*49)+Cloud1_x,hc+(Cloud1_yScale*590)+Cloud1_y);
vertex(wc+(Cloud1_xScale*28)+Cloud1_x,hc+(Cloud1_yScale*586)+Cloud1_y);
vertex(wc+(Cloud1_xScale*20)+Cloud1_x,hc+(Cloud1_yScale*586)+Cloud1_y);
vertex(wc+(Cloud1_xScale*13)+Cloud1_x,hc+(Cloud1_yScale*579)+Cloud1_y);
vertex(wc+(Cloud1_xScale*17)+Cloud1_x,hc+(Cloud1_yScale*573)+Cloud1_y);
vertex(wc+(Cloud1_xScale*36)+Cloud1_x,hc+(Cloud1_yScale*565)+Cloud1_y);
vertex(wc+(Cloud1_xScale*38)+Cloud1_x,hc+(Cloud1_yScale*557)+Cloud1_y);
vertex(wc+(Cloud1_xScale*41)+Cloud1_x,hc+(Cloud1_yScale*546)+Cloud1_y);
vertex(wc+(Cloud1_xScale*50)+Cloud1_x,hc+(Cloud1_yScale*544)+Cloud1_y);
vertex(wc+(Cloud1_xScale*58)+Cloud1_x,hc+(Cloud1_yScale*542)+Cloud1_y);
endShape(CLOSE);
//ENDCloud1
}
//Cloud2
{
noStroke();
fill(255,250);
let Cloud2_x = -scale*110 + cld3;
let Cloud2_y = -scale*60 - cld2;
let Cloud2_xScale = scale/3;
let Cloud2_yScale = scale/2;
beginShape();
vertex(wc+(Cloud2_xScale*381)+Cloud2_x,hc+(Cloud2_yScale*267)+Cloud2_y);
vertex(wc+(Cloud2_xScale*379)+Cloud2_x,hc+(Cloud2_yScale*273)+Cloud2_y);
vertex(wc+(Cloud2_xScale*377)+Cloud2_x,hc+(Cloud2_yScale*276)+Cloud2_y);
vertex(wc+(Cloud2_xScale*373)+Cloud2_x,hc+(Cloud2_yScale*284)+Cloud2_y);
vertex(wc+(Cloud2_xScale*374)+Cloud2_x,hc+(Cloud2_yScale*298)+Cloud2_y);
vertex(wc+(Cloud2_xScale*378)+Cloud2_x,hc+(Cloud2_yScale*301)+Cloud2_y);
vertex(wc+(Cloud2_xScale*388)+Cloud2_x,hc+(Cloud2_yScale*305)+Cloud2_y);
vertex(wc+(Cloud2_xScale*395)+Cloud2_x,hc+(Cloud2_yScale*301)+Cloud2_y);
vertex(wc+(Cloud2_xScale*404)+Cloud2_x,hc+(Cloud2_yScale*301)+Cloud2_y);
vertex(wc+(Cloud2_xScale*402)+Cloud2_x,hc+(Cloud2_yScale*305)+Cloud2_y);
vertex(wc+(Cloud2_xScale*417)+Cloud2_x,hc+(Cloud2_yScale*303)+Cloud2_y);
vertex(wc+(Cloud2_xScale*424)+Cloud2_x,hc+(Cloud2_yScale*305)+Cloud2_y);
vertex(wc+(Cloud2_xScale*446)+Cloud2_x,hc+(Cloud2_yScale*299)+Cloud2_y);
vertex(wc+(Cloud2_xScale*462)+Cloud2_x,hc+(Cloud2_yScale*297)+Cloud2_y);
vertex(wc+(Cloud2_xScale*481)+Cloud2_x,hc+(Cloud2_yScale*293)+Cloud2_y);
vertex(wc+(Cloud2_xScale*500)+Cloud2_x,hc+(Cloud2_yScale*283)+Cloud2_y);
vertex(wc+(Cloud2_xScale*585)+Cloud2_x,hc+(Cloud2_yScale*273)+Cloud2_y);
vertex(wc+(Cloud2_xScale*609)+Cloud2_x,hc+(Cloud2_yScale*253)+Cloud2_y);
vertex(wc+(Cloud2_xScale*634)+Cloud2_x,hc+(Cloud2_yScale*242)+Cloud2_y);
vertex(wc+(Cloud2_xScale*656)+Cloud2_x,hc+(Cloud2_yScale*229)+Cloud2_y);
vertex(wc+(Cloud2_xScale*656)+Cloud2_x,hc+(Cloud2_yScale*218)+Cloud2_y);
vertex(wc+(Cloud2_xScale*649)+Cloud2_x,hc+(Cloud2_yScale*216)+Cloud2_y);
vertex(wc+(Cloud2_xScale*649)+Cloud2_x,hc+(Cloud2_yScale*199)+Cloud2_y);
vertex(wc+(Cloud2_xScale*610)+Cloud2_x,hc+(Cloud2_yScale*180)+Cloud2_y);
vertex(wc+(Cloud2_xScale*608)+Cloud2_x,hc+(Cloud2_yScale*174)+Cloud2_y);
vertex(wc+(Cloud2_xScale*598)+Cloud2_x,hc+(Cloud2_yScale*174)+Cloud2_y);
vertex(wc+(Cloud2_xScale*576)+Cloud2_x,hc+(Cloud2_yScale*182)+Cloud2_y);
vertex(wc+(Cloud2_xScale*556)+Cloud2_x,hc+(Cloud2_yScale*182)+Cloud2_y);
vertex(wc+(Cloud2_xScale*537)+Cloud2_x,hc+(Cloud2_yScale*183)+Cloud2_y);
vertex(wc+(Cloud2_xScale*511)+Cloud2_x,hc+(Cloud2_yScale*182)+Cloud2_y);
vertex(wc+(Cloud2_xScale*486)+Cloud2_x,hc+(Cloud2_yScale*180)+Cloud2_y);
vertex(wc+(Cloud2_xScale*474)+Cloud2_x,hc+(Cloud2_yScale*176)+Cloud2_y);
vertex(wc+(Cloud2_xScale*466)+Cloud2_x,hc+(Cloud2_yScale*178)+Cloud2_y);
vertex(wc+(Cloud2_xScale*468)+Cloud2_x,hc+(Cloud2_yScale*184)+Cloud2_y);
vertex(wc+(Cloud2_xScale*463)+Cloud2_x,hc+(Cloud2_yScale*194)+Cloud2_y);
vertex(wc+(Cloud2_xScale*441)+Cloud2_x,hc+(Cloud2_yScale*196)+Cloud2_y);
vertex(wc+(Cloud2_xScale*425)+Cloud2_x,hc+(Cloud2_yScale*200)+Cloud2_y);
vertex(wc+(Cloud2_xScale*413)+Cloud2_x,hc+(Cloud2_yScale*212)+Cloud2_y);
vertex(wc+(Cloud2_xScale*390)+Cloud2_x,hc+(Cloud2_yScale*219)+Cloud2_y);
vertex(wc+(Cloud2_xScale*391)+Cloud2_x,hc+(Cloud2_yScale*237)+Cloud2_y);
vertex(wc+(Cloud2_xScale*394)+Cloud2_x,hc+(Cloud2_yScale*245)+Cloud2_y);
vertex(wc+(Cloud2_xScale*391)+Cloud2_x,hc+(Cloud2_yScale*256)+Cloud2_y);
vertex(wc+(Cloud2_xScale*383)+Cloud2_x,hc+(Cloud2_yScale*262)+Cloud2_y);
vertex(wc+(Cloud2_xScale*380)+Cloud2_x,hc+(Cloud2_yScale*265)+Cloud2_y);
endShape(CLOSE);
//ENDCloud2
}
//Cloud3
{
noStroke();
fill(255,250);
let Cloud3_x = -scale*280 + cld2;
let Cloud3_y = -scale*274 - cld4;
let Cloud3_xScale = scale/3;
let Cloud3_yScale = scale/2;
beginShape();
vertex(wc+(Cloud3_xScale*605)+Cloud3_x,hc+(Cloud3_yScale*368)+Cloud3_y);
vertex(wc+(Cloud3_xScale*585)+Cloud3_x,hc+(Cloud3_yScale*370)+Cloud3_y);
vertex(wc+(Cloud3_xScale*581)+Cloud3_x,hc+(Cloud3_yScale*375)+Cloud3_y);
vertex(wc+(Cloud3_xScale*572)+Cloud3_x,hc+(Cloud3_yScale*384)+Cloud3_y);
vertex(wc+(Cloud3_xScale*555)+Cloud3_x,hc+(Cloud3_yScale*389)+Cloud3_y);
vertex(wc+(Cloud3_xScale*543)+Cloud3_x,hc+(Cloud3_yScale*390)+Cloud3_y);
vertex(wc+(Cloud3_xScale*525)+Cloud3_x,hc+(Cloud3_yScale*400)+Cloud3_y);
vertex(wc+(Cloud3_xScale*506)+Cloud3_x,hc+(Cloud3_yScale*412)+Cloud3_y);
vertex(wc+(Cloud3_xScale*490)+Cloud3_x,hc+(Cloud3_yScale*425)+Cloud3_y);
vertex(wc+(Cloud3_xScale*465)+Cloud3_x,hc+(Cloud3_yScale*434)+Cloud3_y);
vertex(wc+(Cloud3_xScale*439)+Cloud3_x,hc+(Cloud3_yScale*462)+Cloud3_y);
vertex(wc+(Cloud3_xScale*416)+Cloud3_x,hc+(Cloud3_yScale*477)+Cloud3_y);
vertex(wc+(Cloud3_xScale*403)+Cloud3_x,hc+(Cloud3_yScale*503)+Cloud3_y);
vertex(wc+(Cloud3_xScale*404)+Cloud3_x,hc+(Cloud3_yScale*506)+Cloud3_y);
vertex(wc+(Cloud3_xScale*420)+Cloud3_x,hc+(Cloud3_yScale*506)+Cloud3_y);
vertex(wc+(Cloud3_xScale*443)+Cloud3_x,hc+(Cloud3_yScale*511)+Cloud3_y);
vertex(wc+(Cloud3_xScale*461)+Cloud3_x,hc+(Cloud3_yScale*512)+Cloud3_y);
vertex(wc+(Cloud3_xScale*502)+Cloud3_x,hc+(Cloud3_yScale*505)+Cloud3_y);
vertex(wc+(Cloud3_xScale*524)+Cloud3_x,hc+(Cloud3_yScale*488)+Cloud3_y);
vertex(wc+(Cloud3_xScale*538)+Cloud3_x,hc+(Cloud3_yScale*475)+Cloud3_y);
vertex(wc+(Cloud3_xScale*570)+Cloud3_x,hc+(Cloud3_yScale*471)+Cloud3_y);
vertex(wc+(Cloud3_xScale*587)+Cloud3_x,hc+(Cloud3_yScale*461)+Cloud3_y);
vertex(wc+(Cloud3_xScale*600)+Cloud3_x,hc+(Cloud3_yScale*448)+Cloud3_y);
vertex(wc+(Cloud3_xScale*625)+Cloud3_x,hc+(Cloud3_yScale*439)+Cloud3_y);
vertex(wc+(Cloud3_xScale*665)+Cloud3_x,hc+(Cloud3_yScale*435)+Cloud3_y);
vertex(wc+(Cloud3_xScale*696)+Cloud3_x,hc+(Cloud3_yScale*425)+Cloud3_y);
vertex(wc+(Cloud3_xScale*696)+Cloud3_x,hc+(Cloud3_yScale*413)+Cloud3_y);
vertex(wc+(Cloud3_xScale*705)+Cloud3_x,hc+(Cloud3_yScale*392)+Cloud3_y);
vertex(wc+(Cloud3_xScale*727)+Cloud3_x,hc+(Cloud3_yScale*376)+Cloud3_y);
vertex(wc+(Cloud3_xScale*744)+Cloud3_x,hc+(Cloud3_yScale*350)+Cloud3_y);
vertex(wc+(Cloud3_xScale*742)+Cloud3_x,hc+(Cloud3_yScale*334)+Cloud3_y);
vertex(wc+(Cloud3_xScale*732)+Cloud3_x,hc+(Cloud3_yScale*336)+Cloud3_y);
vertex(wc+(Cloud3_xScale*717)+Cloud3_x,hc+(Cloud3_yScale*337)+Cloud3_y);
vertex(wc+(Cloud3_xScale*706)+Cloud3_x,hc+(Cloud3_yScale*326)+Cloud3_y);
vertex(wc+(Cloud3_xScale*702)+Cloud3_x,hc+(Cloud3_yScale*325)+Cloud3_y);
vertex(wc+(Cloud3_xScale*688)+Cloud3_x,hc+(Cloud3_yScale*331)+Cloud3_y);
vertex(wc+(Cloud3_xScale*654)+Cloud3_x,hc+(Cloud3_yScale*344)+Cloud3_y);
vertex(wc+(Cloud3_xScale*622)+Cloud3_x,hc+(Cloud3_yScale*348)+Cloud3_y);
endShape(CLOSE);
//ENDCloud3
}
//Cloud4
{
fill(255,250);
let Cloud4_x = -scale*310 + cld4;
let Cloud4_y = -scale*230 - cld3;
let Cloud4_xScale = scale/3;
let Cloud4_yScale = scale/2;
beginShape();
vertex(wc+(Cloud4_xScale*224)+Cloud4_x,hc+(Cloud4_yScale*677)+Cloud4_y);
vertex(wc+(Cloud4_xScale*221)+Cloud4_x,hc+(Cloud4_yScale*677)+Cloud4_y);
vertex(wc+(Cloud4_xScale*198)+Cloud4_x,hc+(Cloud4_yScale*682)+Cloud4_y);
vertex(wc+(Cloud4_xScale*195)+Cloud4_x,hc+(Cloud4_yScale*689)+Cloud4_y);
vertex(wc+(Cloud4_xScale*172)+Cloud4_x,hc+(Cloud4_yScale*705)+Cloud4_y);
vertex(wc+(Cloud4_xScale*168)+Cloud4_x,hc+(Cloud4_yScale*709)+Cloud4_y);
vertex(wc+(Cloud4_xScale*190)+Cloud4_x,hc+(Cloud4_yScale*726)+Cloud4_y);
vertex(wc+(Cloud4_xScale*189)+Cloud4_x,hc+(Cloud4_yScale*735)+Cloud4_y);
vertex(wc+(Cloud4_xScale*215)+Cloud4_x,hc+(Cloud4_yScale*742)+Cloud4_y);
vertex(wc+(Cloud4_xScale*247)+Cloud4_x,hc+(Cloud4_yScale*741)+Cloud4_y);
vertex(wc+(Cloud4_xScale*308)+Cloud4_x,hc+(Cloud4_yScale*757)+Cloud4_y);
vertex(wc+(Cloud4_xScale*315)+Cloud4_x,hc+(Cloud4_yScale*750)+Cloud4_y);
vertex(wc+(Cloud4_xScale*340)+Cloud4_x,hc+(Cloud4_yScale*740)+Cloud4_y);
vertex(wc+(Cloud4_xScale*356)+Cloud4_x,hc+(Cloud4_yScale*740)+Cloud4_y);
vertex(wc+(Cloud4_xScale*372)+Cloud4_x,hc+(Cloud4_yScale*712)+Cloud4_y);
vertex(wc+(Cloud4_xScale*397)+Cloud4_x,hc+(Cloud4_yScale*710)+Cloud4_y);
vertex(wc+(Cloud4_xScale*445)+Cloud4_x,hc+(Cloud4_yScale*720)+Cloud4_y);
vertex(wc+(Cloud4_xScale*455)+Cloud4_x,hc+(Cloud4_yScale*710)+Cloud4_y);
vertex(wc+(Cloud4_xScale*472)+Cloud4_x,hc+(Cloud4_yScale*702)+Cloud4_y);
vertex(wc+(Cloud4_xScale*481)+Cloud4_x,hc+(Cloud4_yScale*686)+Cloud4_y);
vertex(wc+(Cloud4_xScale*489)+Cloud4_x,hc+(Cloud4_yScale*622)+Cloud4_y);
vertex(wc+(Cloud4_xScale*522)+Cloud4_x,hc+(Cloud4_yScale*600)+Cloud4_y);
vertex(wc+(Cloud4_xScale*565)+Cloud4_x,hc+(Cloud4_yScale*584)+Cloud4_y);
vertex(wc+(Cloud4_xScale*557)+Cloud4_x,hc+(Cloud4_yScale*568)+Cloud4_y);
vertex(wc+(Cloud4_xScale*517)+Cloud4_x,hc+(Cloud4_yScale*567)+Cloud4_y);
vertex(wc+(Cloud4_xScale*515)+Cloud4_x,hc+(Cloud4_yScale*555)+Cloud4_y);
vertex(wc+(Cloud4_xScale*519)+Cloud4_x,hc+(Cloud4_yScale*525)+Cloud4_y);
vertex(wc+(Cloud4_xScale*497)+Cloud4_x,hc+(Cloud4_yScale*517)+Cloud4_y);
vertex(wc+(Cloud4_xScale*430)+Cloud4_x,hc+(Cloud4_yScale*530)+Cloud4_y);
vertex(wc+(Cloud4_xScale*396)+Cloud4_x,hc+(Cloud4_yScale*524)+Cloud4_y);
vertex(wc+(Cloud4_xScale*308)+Cloud4_x,hc+(Cloud4_yScale*575)+Cloud4_y);
vertex(wc+(Cloud4_xScale*282)+Cloud4_x,hc+(Cloud4_yScale*581)+Cloud4_y);
vertex(wc+(Cloud4_xScale*264)+Cloud4_x,hc+(Cloud4_yScale*606)+Cloud4_y);
vertex(wc+(Cloud4_xScale*244)+Cloud4_x,hc+(Cloud4_yScale*613)+Cloud4_y);
vertex(wc+(Cloud4_xScale*236)+Cloud4_x,hc+(Cloud4_yScale*639)+Cloud4_y);
vertex(wc+(Cloud4_xScale*235)+Cloud4_x,hc+(Cloud4_yScale*648)+Cloud4_y);
endShape(CLOSE);
//ENDCloud4
}
//Cloud5
{
fill(255,250);
let Cloud5_x = -scale*110 + cld3;
let Cloud5_y = -scale*-40 - cld2;
let Cloud5_xScale = scale/3;
let Cloud5_yScale = scale/2;
beginShape();
vertex(wc+(Cloud5_xScale*131)+Cloud5_x,hc+(Cloud5_yScale*283)+Cloud5_y);
vertex(wc+(Cloud5_xScale*147)+Cloud5_x,hc+(Cloud5_yScale*294)+Cloud5_y);
vertex(wc+(Cloud5_xScale*146)+Cloud5_x,hc+(Cloud5_yScale*297)+Cloud5_y);
vertex(wc+(Cloud5_xScale*162)+Cloud5_x,hc+(Cloud5_yScale*299)+Cloud5_y);
vertex(wc+(Cloud5_xScale*170)+Cloud5_x,hc+(Cloud5_yScale*297)+Cloud5_y);
vertex(wc+(Cloud5_xScale*180)+Cloud5_x,hc+(Cloud5_yScale*304)+Cloud5_y);
vertex(wc+(Cloud5_xScale*188)+Cloud5_x,hc+(Cloud5_yScale*305)+Cloud5_y);
vertex(wc+(Cloud5_xScale*208)+Cloud5_x,hc+(Cloud5_yScale*304)+Cloud5_y);
vertex(wc+(Cloud5_xScale*219)+Cloud5_x,hc+(Cloud5_yScale*311)+Cloud5_y);
vertex(wc+(Cloud5_xScale*250)+Cloud5_x,hc+(Cloud5_yScale*308)+Cloud5_y);
vertex(wc+(Cloud5_xScale*266)+Cloud5_x,hc+(Cloud5_yScale*298)+Cloud5_y);
vertex(wc+(Cloud5_xScale*299)+Cloud5_x,hc+(Cloud5_yScale*294)+Cloud5_y);
vertex(wc+(Cloud5_xScale*313)+Cloud5_x,hc+(Cloud5_yScale*290)+Cloud5_y);
vertex(wc+(Cloud5_xScale*336)+Cloud5_x,hc+(Cloud5_yScale*266)+Cloud5_y);
vertex(wc+(Cloud5_xScale*346)+Cloud5_x,hc+(Cloud5_yScale*253)+Cloud5_y);
vertex(wc+(Cloud5_xScale*375)+Cloud5_x,hc+(Cloud5_yScale*235)+Cloud5_y);
vertex(wc+(Cloud5_xScale*376)+Cloud5_x,hc+(Cloud5_yScale*218)+Cloud5_y);
vertex(wc+(Cloud5_xScale*389)+Cloud5_x,hc+(Cloud5_yScale*187)+Cloud5_y);
vertex(wc+(Cloud5_xScale*388)+Cloud5_x,hc+(Cloud5_yScale*175)+Cloud5_y);
vertex(wc+(Cloud5_xScale*373)+Cloud5_x,hc+(Cloud5_yScale*137)+Cloud5_y);
vertex(wc+(Cloud5_xScale*349)+Cloud5_x,hc+(Cloud5_yScale*120)+Cloud5_y);
vertex(wc+(Cloud5_xScale*338)+Cloud5_x,hc+(Cloud5_yScale*86)+Cloud5_y);
vertex(wc+(Cloud5_xScale*307)+Cloud5_x,hc+(Cloud5_yScale*86)+Cloud5_y);
vertex(wc+(Cloud5_xScale*284)+Cloud5_x,hc+(Cloud5_yScale*104)+Cloud5_y);
vertex(wc+(Cloud5_xScale*230)+Cloud5_x,hc+(Cloud5_yScale*114)+Cloud5_y);
vertex(wc+(Cloud5_xScale*155)+Cloud5_x,hc+(Cloud5_yScale*152)+Cloud5_y);
vertex(wc+(Cloud5_xScale*149)+Cloud5_x,hc+(Cloud5_yScale*158)+Cloud5_y);
vertex(wc+(Cloud5_xScale*150)+Cloud5_x,hc+(Cloud5_yScale*198)+Cloud5_y);
vertex(wc+(Cloud5_xScale*140)+Cloud5_x,hc+(Cloud5_yScale*203)+Cloud5_y);
vertex(wc+(Cloud5_xScale*121)+Cloud5_x,hc+(Cloud5_yScale*218)+Cloud5_y);
vertex(wc+(Cloud5_xScale*122)+Cloud5_x,hc+(Cloud5_yScale*226)+Cloud5_y);
vertex(wc+(Cloud5_xScale*109)+Cloud5_x,hc+(Cloud5_yScale*255)+Cloud5_y);
vertex(wc+(Cloud5_xScale*118)+Cloud5_x,hc+(Cloud5_yScale*273)+Cloud5_y);
endShape(CLOSE);
//ENDCloud5
}

stroke(0,50);
//PTW
{
fill(pWC2);
let PTW_x = -scale*pX - plane2;
let PTW_y = -scale*pY - plane;
let PTW_xScale = scale/pScale;
let PTW_yScale = scale/pScale;
beginShape();
vertex(wc+(PTW_xScale*218)+PTW_x,hc+(PTW_yScale*415)+PTW_y);
vertex(wc+(PTW_xScale*228)+PTW_x,hc+(PTW_yScale*415)+PTW_y);
vertex(wc+(PTW_xScale*378)+PTW_x,hc+(PTW_yScale*303)+PTW_y);
vertex(wc+(PTW_xScale*379)+PTW_x,hc+(PTW_yScale*302)+PTW_y);
vertex(wc+(PTW_xScale*388)+PTW_x,hc+(PTW_yScale*301)+PTW_y);
vertex(wc+(PTW_xScale*413)+PTW_x,hc+(PTW_yScale*303)+PTW_y);
vertex(wc+(PTW_xScale*353)+PTW_x,hc+(PTW_yScale*366)+PTW_y);
vertex(wc+(PTW_xScale*361)+PTW_x,hc+(PTW_yScale*371)+PTW_y);
vertex(wc+(PTW_xScale*331)+PTW_x,hc+(PTW_yScale*408)+PTW_y);
vertex(wc+(PTW_xScale*326)+PTW_x,hc+(PTW_yScale*403)+PTW_y);
vertex(wc+(PTW_xScale*319)+PTW_x,hc+(PTW_yScale*410)+PTW_y);
vertex(wc+(PTW_xScale*324)+PTW_x,hc+(PTW_yScale*415)+PTW_y);
vertex(wc+(PTW_xScale*298)+PTW_x,hc+(PTW_yScale*448)+PTW_y);
vertex(wc+(PTW_xScale*220)+PTW_x,hc+(PTW_yScale*421)+PTW_y);
vertex(wc+(PTW_xScale*218)+PTW_x,hc+(PTW_yScale*417)+PTW_y);
endShape(CLOSE);
//ENDPTW
}
//PBW
{
fill(pWC2);
let PBW_x = -scale*pX - plane2;
let PBW_y = -scale*pY - plane;
let PBW_xScale = scale/pScale;
let PBW_yScale = scale/pScale;
beginShape();
vertex(wc+(PBW_xScale*202)+PBW_x,hc+(PBW_yScale*459)+PBW_y);
vertex(wc+(PBW_xScale*206)+PBW_x,hc+(PBW_yScale*465)+PBW_y);
vertex(wc+(PBW_xScale*259)+PBW_x,hc+(PBW_yScale*647)+PBW_y);
vertex(wc+(PBW_xScale*262)+PBW_x,hc+(PBW_yScale*651)+PBW_y);
vertex(wc+(PBW_xScale*287)+PBW_x,hc+(PBW_yScale*664)+PBW_y);
vertex(wc+(PBW_xScale*277)+PBW_x,hc+(PBW_yScale*584)+PBW_y);
vertex(wc+(PBW_xScale*283)+PBW_x,hc+(PBW_yScale*586)+PBW_y);
vertex(wc+(PBW_xScale*276)+PBW_x,hc+(PBW_yScale*535)+PBW_y);
vertex(wc+(PBW_xScale*270)+PBW_x,hc+(PBW_yScale*535)+PBW_y);
vertex(wc+(PBW_xScale*270)+PBW_x,hc+(PBW_yScale*526)+PBW_y);
vertex(wc+(PBW_xScale*276)+PBW_x,hc+(PBW_yScale*526)+PBW_y);
vertex(wc+(PBW_xScale*283)+PBW_x,hc+(PBW_yScale*493)+PBW_y);
vertex(wc+(PBW_xScale*279)+PBW_x,hc+(PBW_yScale*485)+PBW_y);
vertex(wc+(PBW_xScale*206)+PBW_x,hc+(PBW_yScale*453)+PBW_y);
vertex(wc+(PBW_xScale*202)+PBW_x,hc+(PBW_yScale*458)+PBW_y);
endShape(CLOSE);
//ENDPBW
}
//PT
{
fill(pWC2);
let PT_x = -scale*pX - plane2;
let PT_y = -scale*pY - plane;
let PT_xScale = scale/pScale;
let PT_yScale = scale/pScale;
beginShape();
vertex(wc+(PT_xScale*412)+PT_x,hc+(PT_yScale*535)+PT_y);
vertex(wc+(PT_xScale*421)+PT_x,hc+(PT_yScale*542)+PT_y);
vertex(wc+(PT_xScale*423)+PT_x,hc+(PT_yScale*544)+PT_y);
vertex(wc+(PT_xScale*434)+PT_x,hc+(PT_yScale*582)+PT_y);
vertex(wc+(PT_xScale*440)+PT_x,hc+(PT_yScale*594)+PT_y);
vertex(wc+(PT_xScale*452)+PT_x,hc+(PT_yScale*601)+PT_y);
vertex(wc+(PT_xScale*465)+PT_x,hc+(PT_yScale*539)+PT_y);
vertex(wc+(PT_xScale*505)+PT_x,hc+(PT_yScale*492)+PT_y);
vertex(wc+(PT_xScale*493)+PT_x,hc+(PT_yScale*486)+PT_y);
vertex(wc+(PT_xScale*483)+PT_x,hc+(PT_yScale*487)+PT_y);
vertex(wc+(PT_xScale*440)+PT_x,hc+(PT_yScale*509)+PT_y);
vertex(wc+(PT_xScale*427)+PT_x,hc+(PT_yScale*507)+PT_y);
vertex(wc+(PT_xScale*435)+PT_x,hc+(PT_yScale*527)+PT_y);
endShape(CLOSE);
//ENDPT
}
//PBod
{
fill(pBC2);
let PBod_x = -scale*pX - plane2;
let PBod_y = -scale*pY - plane;
let PBod_xScale = scale/pScale;
let PBod_yScale = scale/pScale;
beginShape();
vertex(wc+(PBod_xScale*453)+PBod_x,hc+(PBod_yScale*525)+PBod_y);
vertex(wc+(PBod_xScale*440)+PBod_x,hc+(PBod_yScale*515)+PBod_y);
vertex(wc+(PBod_xScale*419)+PBod_x,hc+(PBod_yScale*502)+PBod_y);
vertex(wc+(PBod_xScale*400)+PBod_x,hc+(PBod_yScale*491)+PBod_y);
vertex(wc+(PBod_xScale*333)+PBod_x,hc+(PBod_yScale*458)+PBod_y);
vertex(wc+(PBod_xScale*133)+PBod_x,hc+(PBod_yScale*378)+PBod_y);
vertex(wc+(PBod_xScale*108)+PBod_x,hc+(PBod_yScale*370)+PBod_y);
vertex(wc+(PBod_xScale*85)+PBod_x,hc+(PBod_yScale*366)+PBod_y);
vertex(wc+(PBod_xScale*72)+PBod_x,hc+(PBod_yScale*366)+PBod_y);
vertex(wc+(PBod_xScale*62)+PBod_x,hc+(PBod_yScale*368)+PBod_y);
  vertex(wc+(PBod_xScale*60)+PBod_x,hc+(PBod_yScale*371)+PBod_y);
vertex(wc+(PBod_xScale*61)+PBod_x,hc+(PBod_yScale*376)+PBod_y);
vertex(wc+(PBod_xScale*65)+PBod_x,hc+(PBod_yScale*386)+PBod_y);
vertex(wc+(PBod_xScale*85)+PBod_x,hc+(PBod_yScale*407)+PBod_y);
vertex(wc+(PBod_xScale*89)+PBod_x,hc+(PBod_yScale*410)+PBod_y);
vertex(wc+(PBod_xScale*98)+PBod_x,hc+(PBod_yScale*415)+PBod_y);
vertex(wc+(PBod_xScale*107)+PBod_x,hc+(PBod_yScale*420)+PBod_y);
vertex(wc+(PBod_xScale*315)+PBod_x,hc+(PBod_yScale*506)+PBod_y);
vertex(wc+(PBod_xScale*397)+PBod_x,hc+(PBod_yScale*532)+PBod_y);
vertex(wc+(PBod_xScale*457)+PBod_x,hc+(PBod_yScale*543)+PBod_y);
vertex(wc+(PBod_xScale*472)+PBod_x,hc+(PBod_yScale*544)+PBod_y);
vertex(wc+(PBod_xScale*456)+PBod_x,hc+(PBod_yScale*527)+PBod_y);
endShape(CLOSE);
//ENDPBod
}
//JT
{
fill(pJC2);
let JT_x = -scale*pX - plane2;
let JT_y = -scale*pY - plane;
let JT_xScale = scale/pScale;
let JT_yScale = scale/pScale;
beginShape();
vertex(wc+(JT_xScale*252)+JT_x,hc+(JT_yScale*533)+JT_y);
vertex(wc+(JT_xScale*235)+JT_x,hc+(JT_yScale*518)+JT_y);
vertex(wc+(JT_xScale*223)+JT_x,hc+(JT_yScale*509)+JT_y);
vertex(wc+(JT_xScale*200)+JT_x,hc+(JT_yScale*500)+JT_y);
vertex(wc+(JT_xScale*195)+JT_x,hc+(JT_yScale*499)+JT_y);
vertex(wc+(JT_xScale*189)+JT_x,hc+(JT_yScale*505)+JT_y);
vertex(wc+(JT_xScale*186)+JT_x,hc+(JT_yScale*512)+JT_y);
vertex(wc+(JT_xScale*185)+JT_x,hc+(JT_yScale*518)+JT_y);
vertex(wc+(JT_xScale*187)+JT_x,hc+(JT_yScale*520)+JT_y);
vertex(wc+(JT_xScale*192)+JT_x,hc+(JT_yScale*524)+JT_y);
vertex(wc+(JT_xScale*201)+JT_x,hc+(JT_yScale*527)+JT_y);
vertex(wc+(JT_xScale*224)+JT_x,hc+(JT_yScale*532)+JT_y);
vertex(wc+(JT_xScale*251)+JT_x,hc+(JT_yScale*533)+JT_y);
endShape(CLOSE);
//ENDJT
}
//JT2
{
fill(pJC2);
let JT2_x = -scale*pX - plane2;
let JT2_y = -scale*pY - plane;
let JT2_xScale = scale/pScale;
let JT2_yScale = scale/pScale;
beginShape();
vertex(wc+(JT2_xScale*299)+JT2_x,hc+(JT2_yScale*400)+JT2_y);
vertex(wc+(JT2_xScale*283)+JT2_x,hc+(JT2_yScale*383)+JT2_y);
vertex(wc+(JT2_xScale*271)+JT2_x,hc+(JT2_yScale*373)+JT2_y);
vertex(wc+(JT2_xScale*259)+JT2_x,hc+(JT2_yScale*367)+JT2_y);
vertex(wc+(JT2_xScale*249)+JT2_x,hc+(JT2_yScale*362)+JT2_y);
vertex(wc+(JT2_xScale*241)+JT2_x,hc+(JT2_yScale*368)+JT2_y);
vertex(wc+(JT2_xScale*235)+JT2_x,hc+(JT2_yScale*377)+JT2_y);
vertex(wc+(JT2_xScale*237)+JT2_x,hc+(JT2_yScale*386)+JT2_y);
vertex(wc+(JT2_xScale*249)+JT2_x,hc+(JT2_yScale*390)+JT2_y);
vertex(wc+(JT2_xScale*269)+JT2_x,hc+(JT2_yScale*397)+JT2_y);
vertex(wc+(JT2_xScale*290)+JT2_x,hc+(JT2_yScale*399)+JT2_y);
vertex(wc+(JT2_xScale*298)+JT2_x,hc+(JT2_yScale*400)+JT2_y);
endShape(CLOSE);
//ENDJT2
}
stroke(lineColour);


  //FrGrnd >> 1FrntWndw EDGE         c + d
  {
    //Stlying Front Window Edge
    stroke(lineColour);

    //Draw Front Window Edge
    //Top
    fill(frontWindowEdgeColourTop);
    beginShape();
    vertex(c1x, c1y);
    vertex(c2x, c2y);
    vertex(d2x, d2y);
    vertex(d1x, d1y);
    endShape(CLOSE);
    //Right
    fill(frontWindowEdgeColourRight);
    beginShape();
    vertex(c2x, c2y);
    vertex(c3x, c3y);
    vertex(d3x, d3y);
    vertex(d2x, d2y);
    endShape(CLOSE);
    //Bottom
    fill(frontWindowEdgeColourBottom);
    beginShape();
    vertex(c3x, c3y);
    vertex(c4x, c4y);
    vertex(d4x, d4y);
    vertex(d3x, d3y);
    endShape(CLOSE);
    //Left
    fill(frontWindowEdgeColourLeft);
    beginShape();
    vertex(c4x, c4y);
    vertex(c1x, c1y);
    vertex(d1x, d1y);
    vertex(d4x, d4y);
    endShape(CLOSE);
  }
  //FrGrnd >> 1FrntWndw SURROUND     b + c
  {
    //Stlying Front Window Surround
    fill(frontWindowSurroundColour);
    stroke(lineColour);

    //Draw Front Window Surround
    beginShape();
    vertex(b1x, b1y);
    vertex(b2x, b2y);
    vertex(b3x, b3y);
    vertex(b4x, b4y);
    beginContour();
    vertex(c4x, c4y);
    vertex(c3x, c3y);
    vertex(c2x, c2y);
    vertex(c1x, c1y);
    endContour();
    endShape(CLOSE);

  }
  //FrGrnd >> 1FrntWndw SIDES        a + b  (1,2,3,4)
  {
    //Stlying Wall
    stroke(lineColour);

    //Draw Wall Top
    fill(wallSideTopColour);
    beginShape();
    vertex(a1x, a1y);
    vertex(a2x, a2y);
    vertex(b2x, b2y);
    vertex(b1x, b1y);
    endShape();

    //Draw Wall Right
    fill(wallSideRightColour);
    beginShape();
    vertex(a2x, a2y);
    vertex(a3x, a3y);
    vertex(b3x, b3y);
    vertex(b2x, b2y);
    endShape();

    //Draw Wall Bottom
    fill(wallSideBottomColour);
    beginShape();
    vertex(a3x, a3y);
    vertex(a4x, a4y);
    vertex(b4x, b4y);
    vertex(b3x, b3y);
    endShape();

    //Draw Wall Left
    fill(wallSideLeftColour);
    beginShape();
    vertex(a4x, a4y);
    vertex(a1x, a1y);
    vertex(b1x, b1y);
    vertex(b4x, b4y);
    endShape();

  }


  //FrGrnd >> 2FrntWndw EDGE         c + d
  {
    //Stlying Front Window Edge
    stroke(lineColour);

    //Draw Front Window Edge
    //Top
    fill(frontWindowEdgeColourTop);
    beginShape();
    vertex(c5x, c5y);
    vertex(c6x, c6y);
    vertex(d6x, d6y);
    vertex(d5x, d5y);
    endShape(CLOSE);
    //Right
    fill(frontWindowEdgeColourRight);
    beginShape();
    vertex(c6x, c6y);
    vertex(c7x, c7y);
    vertex(d7x, d7y);
    vertex(d6x, d6y);
    endShape(CLOSE);
    //Bottom
    fill(frontWindowEdgeColourBottom);
    beginShape();
    vertex(c7x, c7y);
    vertex(c8x, c8y);
    vertex(d8x, d8y);
    vertex(d7x, d7y);
    endShape(CLOSE);
    //Left
    fill(frontWindowEdgeColourLeft);
    beginShape();
    vertex(c8x, c8y);
    vertex(c5x, c5y);
    vertex(d5x, d5y);
    vertex(d8x, d8y);
    endShape(CLOSE);
  }
  //FrGrnd >> 2FrntWndw SURROUND     b + c
  {
    //Stlying Front Window Surround
    fill(frontWindowSurroundColour);
    stroke(lineColour);

    //Draw 2 Window Surround
    beginShape();
    vertex(b5x, b5y);
    vertex(b6x, b6y);
    vertex(b7x, b7y);
    vertex(b8x, b8y);
    beginContour();
    vertex(c8x, c8y);
    vertex(c7x, c7y);
    vertex(c6x, c6y);
    vertex(c5x, c5y);
    endContour();
    endShape(CLOSE);


  }
  //FrGrnd >> 2FrntWndw SIDES        a + b  (5,6,7,8)
  {
    //Stlying Wall
    stroke(lineColour);

    //Draw Wall Top
    fill(wallSideTopColour);
    beginShape();
    vertex(a6x, a6y);
    vertex(a5x, a5y);
    vertex(b6x, b6y);
    vertex(b5x, b5y);
    endShape(CLOSE);

    //Draw Wall Right
    fill(wallSideLeftColour);
    beginShape();
    vertex(a6x, a6y);
    vertex(a7x, a7y);
    vertex(b8x, b8y);
    vertex(b5x, b5y);
    endShape(CLOSE);

    //Draw Wall Bottom
    fill(wallSideBottomColour);
    beginShape();
    vertex(a8x, a8y);
    vertex(a7x, a7y);
    vertex(b8x, b8y);
    vertex(b7x, b7y);
    endShape(CLOSE);

    //Draw Wall Left
    fill(wallSideRightColour);
    beginShape();
    vertex(a8x, a8y);
    vertex(a5x, a5y);
    vertex(b6x, b6y);
    vertex(b7x, b7y);
    endShape(CLOSE);

  }


  //FrGrnd >> 3FrntWndw EDGE         c + d
  {
    //Stlying Front Window Edge
    stroke(lineColour);

    //Draw Front Window Edge
    //Top
    fill(frontWindowEdgeColourTop);
    beginShape();
    vertex(c9x, c9y);
    vertex(c10x, c10y);
    vertex(d10x, d10y);
    vertex(d9x, d9y);
    endShape(CLOSE);
    //Right
    fill(frontWindowEdgeColourRight);
    beginShape();
    vertex(c10x, c10y);
    vertex(c11x, c11y);
    vertex(d11x, d11y);
    vertex(d10x, d10y);
    endShape(CLOSE);
    //Bottom
    fill(frontWindowEdgeColourBottom);
    beginShape();
    vertex(c11x, c11y);
    vertex(c12x, c12y);
    vertex(d12x, d12y);
    vertex(d11x, d11y);
    endShape(CLOSE);
    //Left
    fill(frontWindowEdgeColourLeft);
    beginShape();
    vertex(c12x, c12y);
    vertex(c9x, c9y);
    vertex(d9x, d9y);
    vertex(d12x, d12y);
    endShape(CLOSE);
  }
  //FrGrnd >> 3FrntWndw SURROUND     b + c
  {
    //Stlying Front Window Surround
    fill(frontWindowSurroundColour);
    stroke(lineColour);

    //Draw Front Window Surround
    beginShape();
    vertex(b9x, b9y);
    vertex(b10x, b10y);
    vertex(b11x, b11y);
    vertex(b12x, b12y);
    beginContour();
    vertex(c12x, c12y);
    vertex(c11x, c11y);
    vertex(c10x, c10y);
    vertex(c9x, c9y);
    endContour();
    endShape(CLOSE);

  }
  //FrGrnd >> 3FrntWndw SIDES        a + b  (9,10,11,12)
  {
    //Stlying Wall
    stroke(lineColour);

    //Draw Wall Top
    fill(wallSideTopColour);
    beginShape();
    vertex(a9x, a9y);
    vertex(a10x, a10y);
    vertex(b10x, b10y);
    vertex(b9x, b9y);
    endShape(CLOSE);

    //Draw Wall Right
    fill(wallSideLeftColour);
    beginShape();
    vertex(a10x, a10y);
    vertex(a11x, a11y);
    vertex(b11x, b11y);
    vertex(b10x, b10y);
    endShape(CLOSE);

    //Draw Wall Bottom
    fill(wallSideBottomColour);
    beginShape();
    vertex(a11x, a11y);
    vertex(a12x, a12y);
    vertex(b12x, b12y);
    vertex(b11x, b11y);
    endShape(CLOSE);

    //Draw Wall Left
    fill(wallSideRightColour);
    beginShape();
    vertex(a12x, a12y);
    vertex(a9x, a9y);
    vertex(b9x, b9y);
    vertex(b12x, b12y);
    endShape(CLOSE);

  }


  //FrGrnd >> FrntWndw CEILLING     0 + a
  {
    //Stlying CEILLING
    fill(wallColour);
    stroke(lineColour);

    //Draw CEILLING
    beginShape();
    vertex(-5, -5);
    vertex(-5, height + 5);
    vertex(width + 5, height + 5);
    vertex(width + 5, -5);
    beginContour();
    vertex(a1x, a1y);
    vertex(a2x, a2y);
    vertex(a3x, a3y);
    vertex(a4x, a4y);
    endContour();
    beginContour();
    vertex(a8x, a8y);
    vertex(a7x, a7y);
    vertex(a6x, a6y);
    vertex(a5x, a5y);
    endContour();
    beginContour();
    vertex(a12x, a12y);
    vertex(a11x, a11y);
    vertex(a10x, a10y);
    vertex(a9x, a9y);
    endContour();
    endShape(CLOSE);
  }


  //Fullscreen button
  //= fs
  {
    //roll over colour change
    if (mouseX > width - 65 && mouseX < width - 15 && mouseY > 15 && mouseY < 65) {
      buttonColour = ([255, 100]);
    } else if (displayWidth < 500 || displayHeight < 600) {
      buttonColour = ([255, 0]);
    } else {
      buttonColour = ([0, 100]);
    }

    strokeWeight(1);
    //scale variables
    let fs_sx = 1;
    let fs_sy = 1;

    //position variables
    let fs_px = width - 60;
    let fs_py = 20;

    //stlying
    noFill();
    stroke(buttonColour);

    //shows expand button
    if (!fullscreen()) {
      //topleft arrow
      beginShape();
      vertex((fs_sx * 0) + fs_px, (fs_sy * 15) + fs_py);
      vertex((fs_sx * 0) + fs_px, (fs_sy * 0) + fs_py);
      vertex((fs_sx * 15) + fs_px, (fs_sy * 0) + fs_py);
      vertex((fs_sx * 0) + fs_px, (fs_sy * 0) + fs_py);
      vertex((fs_sx * 17) + fs_px, (fs_sy * 17) + fs_py);
      endShape();
      //topright arrow
      beginShape();
      vertex((fs_sx * 25) + fs_px, (fs_sy * 0) + fs_py);
      vertex((fs_sx * 40) + fs_px, (fs_sy * 0) + fs_py);
      vertex((fs_sx * 40) + fs_px, (fs_sy * 15) + fs_py);
      vertex((fs_sx * 40) + fs_px, (fs_sy * 0) + fs_py);
      vertex((fs_sx * 23) + fs_px, (fs_sy * 17) + fs_py);
      endShape();
      //bottomright arrow
      beginShape();
      vertex((fs_sx * 40) + fs_px, (fs_sy * 25) + fs_py);
      vertex((fs_sx * 40) + fs_px, (fs_sy * 40) + fs_py);
      vertex((fs_sx * 25) + fs_px, (fs_sy * 40) + fs_py);
      vertex((fs_sx * 40) + fs_px, (fs_sy * 40) + fs_py);
      vertex((fs_sx * 23) + fs_px, (fs_sy * 23) + fs_py);
      endShape();
      //bottomleft arrow
      beginShape();
      vertex((fs_sx * 15) + fs_px, (fs_sy * 40) + fs_py);
      vertex((fs_sx * 0) + fs_px, (fs_sy * 40) + fs_py);
      vertex((fs_sx * 0) + fs_px, (fs_sy * 25) + fs_py);
      vertex((fs_sx * 0) + fs_px, (fs_sy * 40) + fs_py);
      vertex((fs_sx * 17) + fs_px, (fs_sy * 23) + fs_py);
      endShape();
    }

    //shows contract button
    stroke(buttonColour);
    if (fullscreen()) {
      //topleft arrow
      beginShape();
      vertex((fs_sx * 0) + fs_px, (fs_sy * 0) + fs_py);
      vertex((fs_sx * 17) + fs_px, (fs_sy * 17) + fs_py);
      vertex((fs_sx * 17) + fs_px, (fs_sy * 3) + fs_py);
      vertex((fs_sx * 17) + fs_px, (fs_sy * 17) + fs_py);
      vertex((fs_sx * 3) + fs_px, (fs_sy * 17) + fs_py);
      endShape();
      //topright arrow
      beginShape();
      vertex((fs_sx * 40) + fs_px, (fs_sy * 0) + fs_py);
      vertex((fs_sx * 23) + fs_px, (fs_sy * 17) + fs_py);
      vertex((fs_sx * 23) + fs_px, (fs_sy * 3) + fs_py);
      vertex((fs_sx * 23) + fs_px, (fs_sy * 17) + fs_py);
      vertex((fs_sx * 35) + fs_px, (fs_sy * 17) + fs_py);
      endShape();
      //bottomright arrow
      beginShape();
      vertex((fs_sx * 40) + fs_px, (fs_sy * 40) + fs_py);
      vertex((fs_sx * 23) + fs_px, (fs_sy * 23) + fs_py);
      vertex((fs_sx * 23) + fs_px, (fs_sy * 35) + fs_py);
      vertex((fs_sx * 23) + fs_px, (fs_sy * 23) + fs_py);
      vertex((fs_sx * 35) + fs_px, (fs_sy * 23) + fs_py);
      endShape();
      //bottomleft arrow
      beginShape();
      vertex((fs_sx * 0) + fs_px, (fs_sy * 40) + fs_py);
      vertex((fs_sx * 17) + fs_px, (fs_sy * 23) + fs_py);
      vertex((fs_sx * 17) + fs_px, (fs_sy * 35) + fs_py);
      vertex((fs_sx * 17) + fs_px, (fs_sy * 23) + fs_py);
      vertex((fs_sx * 3) + fs_px, (fs_sy * 23) + fs_py);
      endShape();
    }
  }

//   //Adjusted coordinates
//   {
//       let newx = (mouseX - width / 2);
//       let newy = (mouseY - height / 2);
//       let newxScaled = (newx/scale);
//       let newyScaled = (newy/scale);
//       fill(0);
//       noStroke();
//       text('nx:' + newxScaled, 16, 20);
//       text('ny:' + newyScaled, 16, 30);

//       text('x:' + mouseX, 16, 40);
//       text('y:' + mouseY, 16, 50);
//       stroke(0);
//       // //New axis
//       // line(width / 2, 0, width / 2, height);
//       // line(0, height / 2, width, height / 2);
//     }
}

function mouseReleased() {

  //Click for full screen toggle
  if (mouseX > width - 65 && mouseX < width - 15 && mouseY > 15 && mouseY < 65) {
    let fs = fullscreen();
    fullscreen(!fs);
    buttonColour = ([0, 100])
  }
  if (mouseX > width - 65 && mouseX < width - 15 && mouseY > 15 && mouseY < 65) {
    plane = 0;
    plane2 = 0;
  }
}
