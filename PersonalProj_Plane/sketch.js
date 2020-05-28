//Colours
let lineColour = ([0, 100]);
let buttonColour = ([0, 100]);

let sky = ([4, 110, 255]);
let leaf = ([0,130,90]);
let leaf2 = ([60,190,130]);
let leaf3 = ([60,220,150]);


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

let HleafTrack = 0;
let MleafTrack = 0;
let LleafTrack = 0;
let BleafTrack = 0;

let showleaf;


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
    e1x = wc - ((10000 * e_sx) + e_px);
    e1y = hc - ((10000 * e_sy) + e_py);

    e2x = wc + ((10000 * e_sx) + e_px);
    e2y = hc - ((10000 * e_sy) + e_py);

    e3x = wc + ((10000 * e_sx) + e_px);
    e3y = hc + ((10000 * e_sy) + e_py);

    e4x = wc - ((10000 * e_sx) + e_px);
    e4y = hc + ((10000 * e_sy) + e_py);
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
    f1x = wc - ((300 * f_sx) + f_px);
    f1y = hc - ((200 * f_sy) + f_py);

    f2x = wc + ((300 * f_sx) + f_px);
    f2y = hc - ((200 * f_sy) + f_py);

    f3x = wc + ((300 * f_sx) + f_px);
    f3y = hc + ((200 * f_sy) + f_py);

    f4x = wc - ((300 * f_sx) + f_px);
    f4y = hc + ((200 * f_sy) + f_py);
  }

  //PLANE and CLOUDS
  {
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
}

  //WINDOW and CEILING
  {
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

}


  //cheese3
  {
// fill(leaf2);
// let cheese3_x = -scale*-10;
// let cheese3_y = -scale*110;
// let cheese3_xScale = scale/5;
// let cheese3_yScale = scale/5;
// beginShape();
// vertex(wc+(cheese3_xScale*426)+cheese3_x,hc+(cheese3_yScale*129)+cheese3_y);
// vertex(wc+(cheese3_xScale*415)+cheese3_x,hc+(cheese3_yScale*131)+cheese3_y);
// vertex(wc+(cheese3_xScale*408)+cheese3_x,hc+(cheese3_yScale*134)+cheese3_y);
// vertex(wc+(cheese3_xScale*401)+cheese3_x,hc+(cheese3_yScale*143)+cheese3_y);
// vertex(wc+(cheese3_xScale*397)+cheese3_x,hc+(cheese3_yScale*155)+cheese3_y);
// vertex(wc+(cheese3_xScale*397)+cheese3_x,hc+(cheese3_yScale*165)+cheese3_y);
// vertex(wc+(cheese3_xScale*399)+cheese3_x,hc+(cheese3_yScale*184)+cheese3_y);
// vertex(wc+(cheese3_xScale*404)+cheese3_x,hc+(cheese3_yScale*171)+cheese3_y);
// vertex(wc+(cheese3_xScale*409)+cheese3_x,hc+(cheese3_yScale*160)+cheese3_y);
// vertex(wc+(cheese3_xScale*417)+cheese3_x,hc+(cheese3_yScale*155)+cheese3_y);
// vertex(wc+(cheese3_xScale*424)+cheese3_x,hc+(cheese3_yScale*156)+cheese3_y);
// vertex(wc+(cheese3_xScale*416)+cheese3_x,hc+(cheese3_yScale*173)+cheese3_y);
// vertex(wc+(cheese3_xScale*410)+cheese3_x,hc+(cheese3_yScale*185)+cheese3_y);
// vertex(wc+(cheese3_xScale*406)+cheese3_x,hc+(cheese3_yScale*198)+cheese3_y);
// vertex(wc+(cheese3_xScale*401)+cheese3_x,hc+(cheese3_yScale*207)+cheese3_y);
// vertex(wc+(cheese3_xScale*405)+cheese3_x,hc+(cheese3_yScale*218)+cheese3_y);
// vertex(wc+(cheese3_xScale*412)+cheese3_x,hc+(cheese3_yScale*214)+cheese3_y);
// vertex(wc+(cheese3_xScale*416)+cheese3_x,hc+(cheese3_yScale*214)+cheese3_y);
// vertex(wc+(cheese3_xScale*421)+cheese3_x,hc+(cheese3_yScale*220)+cheese3_y);
// vertex(wc+(cheese3_xScale*436)+cheese3_x,hc+(cheese3_yScale*219)+cheese3_y);
// vertex(wc+(cheese3_xScale*447)+cheese3_x,hc+(cheese3_yScale*214)+cheese3_y);
// vertex(wc+(cheese3_xScale*450)+cheese3_x,hc+(cheese3_yScale*209)+cheese3_y);
// vertex(wc+(cheese3_xScale*447)+cheese3_x,hc+(cheese3_yScale*205)+cheese3_y);
// vertex(wc+(cheese3_xScale*442)+cheese3_x,hc+(cheese3_yScale*202)+cheese3_y);
// vertex(wc+(cheese3_xScale*449)+cheese3_x,hc+(cheese3_yScale*202)+cheese3_y);
// vertex(wc+(cheese3_xScale*456)+cheese3_x,hc+(cheese3_yScale*201)+cheese3_y);
// vertex(wc+(cheese3_xScale*460)+cheese3_x,hc+(cheese3_yScale*199)+cheese3_y);
// vertex(wc+(cheese3_xScale*470)+cheese3_x,hc+(cheese3_yScale*188)+cheese3_y);
// vertex(wc+(cheese3_xScale*474)+cheese3_x,hc+(cheese3_yScale*181)+cheese3_y);
// vertex(wc+(cheese3_xScale*480)+cheese3_x,hc+(cheese3_yScale*168)+cheese3_y);
// vertex(wc+(cheese3_xScale*482)+cheese3_x,hc+(cheese3_yScale*160)+cheese3_y);
// vertex(wc+(cheese3_xScale*484)+cheese3_x,hc+(cheese3_yScale*152)+cheese3_y);
// vertex(wc+(cheese3_xScale*474)+cheese3_x,hc+(cheese3_yScale*151)+cheese3_y);
// vertex(wc+(cheese3_xScale*466)+cheese3_x,hc+(cheese3_yScale*153)+cheese3_y);
// vertex(wc+(cheese3_xScale*461)+cheese3_x,hc+(cheese3_yScale*152)+cheese3_y);
// vertex(wc+(cheese3_xScale*461)+cheese3_x,hc+(cheese3_yScale*148)+cheese3_y);
// vertex(wc+(cheese3_xScale*468)+cheese3_x,hc+(cheese3_yScale*144)+cheese3_y);
// vertex(wc+(cheese3_xScale*480)+cheese3_x,hc+(cheese3_yScale*142)+cheese3_y);
// vertex(wc+(cheese3_xScale*484)+cheese3_x,hc+(cheese3_yScale*144)+cheese3_y);
// vertex(wc+(cheese3_xScale*483)+cheese3_x,hc+(cheese3_yScale*134)+cheese3_y);
// vertex(wc+(cheese3_xScale*481)+cheese3_x,hc+(cheese3_yScale*130)+cheese3_y);
// vertex(wc+(cheese3_xScale*472)+cheese3_x,hc+(cheese3_yScale*121)+cheese3_y);
// vertex(wc+(cheese3_xScale*464)+cheese3_x,hc+(cheese3_yScale*113)+cheese3_y);
// vertex(wc+(cheese3_xScale*462)+cheese3_x,hc+(cheese3_yScale*113)+cheese3_y);
// vertex(wc+(cheese3_xScale*451)+cheese3_x,hc+(cheese3_yScale*110)+cheese3_y);
// vertex(wc+(cheese3_xScale*441)+cheese3_x,hc+(cheese3_yScale*116)+cheese3_y);
// vertex(wc+(cheese3_xScale*434)+cheese3_x,hc+(cheese3_yScale*123)+cheese3_y);
// vertex(wc+(cheese3_xScale*429)+cheese3_x,hc+(cheese3_yScale*130)+cheese3_y);
// endShape(CLOSE);
// //ENDcheese3
// }
//   //cheese1
//   {
// fill(leaf2);
// let cheese1_x = -scale*-10;
// let cheese1_y = -scale*110;
// let cheese1_xScale = scale/5;
// let cheese1_yScale = scale/5;
// beginShape();
// vertex(wc+(cheese1_xScale*314)+cheese1_x,hc+(cheese1_yScale*191)+cheese1_y);
// vertex(wc+(cheese1_xScale*320)+cheese1_x,hc+(cheese1_yScale*185)+cheese1_y);
// vertex(wc+(cheese1_xScale*319)+cheese1_x,hc+(cheese1_yScale*167)+cheese1_y);
// vertex(wc+(cheese1_xScale*297)+cheese1_x,hc+(cheese1_yScale*158)+cheese1_y);
// vertex(wc+(cheese1_xScale*274)+cheese1_x,hc+(cheese1_yScale*168)+cheese1_y);
// vertex(wc+(cheese1_xScale*255)+cheese1_x,hc+(cheese1_yScale*178)+cheese1_y);
// vertex(wc+(cheese1_xScale*239)+cheese1_x,hc+(cheese1_yScale*198)+cheese1_y);
// vertex(wc+(cheese1_xScale*233)+cheese1_x,hc+(cheese1_yScale*223)+cheese1_y);
// vertex(wc+(cheese1_xScale*223)+cheese1_x,hc+(cheese1_yScale*250)+cheese1_y);
// vertex(wc+(cheese1_xScale*211)+cheese1_x,hc+(cheese1_yScale*270)+cheese1_y);
// vertex(wc+(cheese1_xScale*208)+cheese1_x,hc+(cheese1_yScale*295)+cheese1_y);
// vertex(wc+(cheese1_xScale*220)+cheese1_x,hc+(cheese1_yScale*325)+cheese1_y);
// vertex(wc+(cheese1_xScale*251)+cheese1_x,hc+(cheese1_yScale*357)+cheese1_y);
// vertex(wc+(cheese1_xScale*273)+cheese1_x,hc+(cheese1_yScale*380)+cheese1_y);
// vertex(wc+(cheese1_xScale*282)+cheese1_x,hc+(cheese1_yScale*398)+cheese1_y);
// vertex(wc+(cheese1_xScale*278)+cheese1_x,hc+(cheese1_yScale*405)+cheese1_y);
// vertex(wc+(cheese1_xScale*290)+cheese1_x,hc+(cheese1_yScale*403)+cheese1_y);
// vertex(wc+(cheese1_xScale*311)+cheese1_x,hc+(cheese1_yScale*397)+cheese1_y);
// vertex(wc+(cheese1_xScale*339)+cheese1_x,hc+(cheese1_yScale*391)+cheese1_y);
// vertex(wc+(cheese1_xScale*361)+cheese1_x,hc+(cheese1_yScale*379)+cheese1_y);
// vertex(wc+(cheese1_xScale*370)+cheese1_x,hc+(cheese1_yScale*366)+cheese1_y);
// vertex(wc+(cheese1_xScale*367)+cheese1_x,hc+(cheese1_yScale*358)+cheese1_y);
// vertex(wc+(cheese1_xScale*364)+cheese1_x,hc+(cheese1_yScale*346)+cheese1_y);
// vertex(wc+(cheese1_xScale*352)+cheese1_x,hc+(cheese1_yScale*338)+cheese1_y);
// vertex(wc+(cheese1_xScale*345)+cheese1_x,hc+(cheese1_yScale*307)+cheese1_y);
// vertex(wc+(cheese1_xScale*355)+cheese1_x,hc+(cheese1_yScale*307)+cheese1_y);
// vertex(wc+(cheese1_xScale*363)+cheese1_x,hc+(cheese1_yScale*315)+cheese1_y);
// vertex(wc+(cheese1_xScale*366)+cheese1_x,hc+(cheese1_yScale*330)+cheese1_y);
// vertex(wc+(cheese1_xScale*379)+cheese1_x,hc+(cheese1_yScale*347)+cheese1_y);
// vertex(wc+(cheese1_xScale*380)+cheese1_x,hc+(cheese1_yScale*356)+cheese1_y);
// vertex(wc+(cheese1_xScale*377)+cheese1_x,hc+(cheese1_yScale*365)+cheese1_y);
// vertex(wc+(cheese1_xScale*385)+cheese1_x,hc+(cheese1_yScale*361)+cheese1_y);
// vertex(wc+(cheese1_xScale*394)+cheese1_x,hc+(cheese1_yScale*348)+cheese1_y);
// vertex(wc+(cheese1_xScale*401)+cheese1_x,hc+(cheese1_yScale*331)+cheese1_y);
// vertex(wc+(cheese1_xScale*405)+cheese1_x,hc+(cheese1_yScale*319)+cheese1_y);
// vertex(wc+(cheese1_xScale*394)+cheese1_x,hc+(cheese1_yScale*300)+cheese1_y);
// vertex(wc+(cheese1_xScale*381)+cheese1_x,hc+(cheese1_yScale*284)+cheese1_y);
// vertex(wc+(cheese1_xScale*371)+cheese1_x,hc+(cheese1_yScale*273)+cheese1_y);
// vertex(wc+(cheese1_xScale*359)+cheese1_x,hc+(cheese1_yScale*264)+cheese1_y);
// vertex(wc+(cheese1_xScale*356)+cheese1_x,hc+(cheese1_yScale*253)+cheese1_y);
// vertex(wc+(cheese1_xScale*359)+cheese1_x,hc+(cheese1_yScale*247)+cheese1_y);
// vertex(wc+(cheese1_xScale*368)+cheese1_x,hc+(cheese1_yScale*243)+cheese1_y);
// vertex(wc+(cheese1_xScale*386)+cheese1_x,hc+(cheese1_yScale*245)+cheese1_y);
// vertex(wc+(cheese1_xScale*405)+cheese1_x,hc+(cheese1_yScale*251)+cheese1_y);
// vertex(wc+(cheese1_xScale*428)+cheese1_x,hc+(cheese1_yScale*268)+cheese1_y);
// vertex(wc+(cheese1_xScale*429)+cheese1_x,hc+(cheese1_yScale*280)+cheese1_y);
// vertex(wc+(cheese1_xScale*423)+cheese1_x,hc+(cheese1_yScale*280)+cheese1_y);
// vertex(wc+(cheese1_xScale*430)+cheese1_x,hc+(cheese1_yScale*282)+cheese1_y);
// vertex(wc+(cheese1_xScale*435)+cheese1_x,hc+(cheese1_yScale*278)+cheese1_y);
// vertex(wc+(cheese1_xScale*437)+cheese1_x,hc+(cheese1_yScale*263)+cheese1_y);
// vertex(wc+(cheese1_xScale*436)+cheese1_x,hc+(cheese1_yScale*247)+cheese1_y);
// vertex(wc+(cheese1_xScale*437)+cheese1_x,hc+(cheese1_yScale*234)+cheese1_y);
// vertex(wc+(cheese1_xScale*437)+cheese1_x,hc+(cheese1_yScale*224)+cheese1_y);
// vertex(wc+(cheese1_xScale*430)+cheese1_x,hc+(cheese1_yScale*217)+cheese1_y);
// vertex(wc+(cheese1_xScale*423)+cheese1_x,hc+(cheese1_yScale*217)+cheese1_y);
// vertex(wc+(cheese1_xScale*411)+cheese1_x,hc+(cheese1_yScale*218)+cheese1_y);
// vertex(wc+(cheese1_xScale*399)+cheese1_x,hc+(cheese1_yScale*215)+cheese1_y);
// vertex(wc+(cheese1_xScale*395)+cheese1_x,hc+(cheese1_yScale*203)+cheese1_y);
// vertex(wc+(cheese1_xScale*406)+cheese1_x,hc+(cheese1_yScale*199)+cheese1_y);
// vertex(wc+(cheese1_xScale*422)+cheese1_x,hc+(cheese1_yScale*198)+cheese1_y);
// vertex(wc+(cheese1_xScale*434)+cheese1_x,hc+(cheese1_yScale*198)+cheese1_y);
// vertex(wc+(cheese1_xScale*434)+cheese1_x,hc+(cheese1_yScale*180)+cheese1_y);
// vertex(wc+(cheese1_xScale*410)+cheese1_x,hc+(cheese1_yScale*156)+cheese1_y);
// vertex(wc+(cheese1_xScale*403)+cheese1_x,hc+(cheese1_yScale*148)+cheese1_y);
// vertex(wc+(cheese1_xScale*368)+cheese1_x,hc+(cheese1_yScale*145)+cheese1_y);
// vertex(wc+(cheese1_xScale*353)+cheese1_x,hc+(cheese1_yScale*152)+cheese1_y);
// vertex(wc+(cheese1_xScale*337)+cheese1_x,hc+(cheese1_yScale*165)+cheese1_y);
// vertex(wc+(cheese1_xScale*330)+cheese1_x,hc+(cheese1_yScale*175)+cheese1_y);
// vertex(wc+(cheese1_xScale*324)+cheese1_x,hc+(cheese1_yScale*189)+cheese1_y);
// vertex(wc+(cheese1_xScale*321)+cheese1_x,hc+(cheese1_yScale*197)+cheese1_y);
// vertex(wc+(cheese1_xScale*311)+cheese1_x,hc+(cheese1_yScale*196)+cheese1_y);
// vertex(wc+(cheese1_xScale*313)+cheese1_x,hc+(cheese1_yScale*191)+cheese1_y);
// beginContour();
// vertex(wc+(cheese1_xScale*249)+cheese1_x,hc+(cheese1_yScale*211)+cheese1_y);
// vertex(wc+(cheese1_xScale*257)+cheese1_x,hc+(cheese1_yScale*204)+cheese1_y);
// vertex(wc+(cheese1_xScale*266)+cheese1_x,hc+(cheese1_yScale*199)+cheese1_y);
// vertex(wc+(cheese1_xScale*281)+cheese1_x,hc+(cheese1_yScale*200)+cheese1_y);
// vertex(wc+(cheese1_xScale*291)+cheese1_x,hc+(cheese1_yScale*202)+cheese1_y);
// vertex(wc+(cheese1_xScale*295)+cheese1_x,hc+(cheese1_yScale*211)+cheese1_y);
// vertex(wc+(cheese1_xScale*285)+cheese1_x,hc+(cheese1_yScale*215)+cheese1_y);
// vertex(wc+(cheese1_xScale*273)+cheese1_x,hc+(cheese1_yScale*217)+cheese1_y);
// vertex(wc+(cheese1_xScale*255)+cheese1_x,hc+(cheese1_yScale*217)+cheese1_y);
// vertex(wc+(cheese1_xScale*246)+cheese1_x,hc+(cheese1_yScale*215)+cheese1_y);
// endContour();
// beginContour();
// vertex(wc+(cheese1_xScale*291)+cheese1_x,hc+(cheese1_yScale*242)+cheese1_y);
// vertex(wc+(cheese1_xScale*289)+cheese1_x,hc+(cheese1_yScale*247)+cheese1_y);
// vertex(wc+(cheese1_xScale*275)+cheese1_x,hc+(cheese1_yScale*252)+cheese1_y);
// vertex(wc+(cheese1_xScale*265)+cheese1_x,hc+(cheese1_yScale*258)+cheese1_y);
// vertex(wc+(cheese1_xScale*248)+cheese1_x,hc+(cheese1_yScale*265)+cheese1_y);
// vertex(wc+(cheese1_xScale*229)+cheese1_x,hc+(cheese1_yScale*268)+cheese1_y);
// vertex(wc+(cheese1_xScale*233)+cheese1_x,hc+(cheese1_yScale*258)+cheese1_y);
// vertex(wc+(cheese1_xScale*246)+cheese1_x,hc+(cheese1_yScale*249)+cheese1_y);
// vertex(wc+(cheese1_xScale*259)+cheese1_x,hc+(cheese1_yScale*243)+cheese1_y);
// vertex(wc+(cheese1_xScale*273)+cheese1_x,hc+(cheese1_yScale*240)+cheese1_y);
// vertex(wc+(cheese1_xScale*285)+cheese1_x,hc+(cheese1_yScale*240)+cheese1_y);
// endContour();
// endShape(CLOSE);
// //ENDcheese1
// }
//   //cheese2
//   {
// fill(leaf2);
// let cheese2_x = -scale*-10;
// let cheese2_y = -scale*110;
// let cheese2_xScale = scale/5;
// let cheese2_yScale = scale/5;
// beginShape();
// vertex(wc+(cheese2_xScale*207)+cheese2_x,hc+(cheese2_yScale*151)+cheese2_y);
// vertex(wc+(cheese2_xScale*209)+cheese2_x,hc+(cheese2_yScale*137)+cheese2_y);
// vertex(wc+(cheese2_xScale*205)+cheese2_x,hc+(cheese2_yScale*120)+cheese2_y);
// vertex(wc+(cheese2_xScale*180)+cheese2_x,hc+(cheese2_yScale*114)+cheese2_y);
// vertex(wc+(cheese2_xScale*164)+cheese2_x,hc+(cheese2_yScale*125)+cheese2_y);
// vertex(wc+(cheese2_xScale*158)+cheese2_x,hc+(cheese2_yScale*141)+cheese2_y);
// vertex(wc+(cheese2_xScale*155)+cheese2_x,hc+(cheese2_yScale*148)+cheese2_y);
// vertex(wc+(cheese2_xScale*164)+cheese2_x,hc+(cheese2_yScale*149)+cheese2_y);
// vertex(wc+(cheese2_xScale*193)+cheese2_x,hc+(cheese2_yScale*148)+cheese2_y);
// // vertex(wc+(cheese2_xScale*210)+cheese2_x,hc+(cheese2_yScale*157)+cheese2_y);
// // vertex(wc+(cheese2_xScale*206)+cheese2_x,hc+(cheese2_yScale*160)+cheese2_y);
// vertex(wc+(cheese2_xScale*194)+cheese2_x,hc+(cheese2_yScale*156)+cheese2_y);
// vertex(wc+(cheese2_xScale*171)+cheese2_x,hc+(cheese2_yScale*153)+cheese2_y);
// vertex(wc+(cheese2_xScale*149)+cheese2_x,hc+(cheese2_yScale*153)+cheese2_y);
// vertex(wc+(cheese2_xScale*146)+cheese2_x,hc+(cheese2_yScale*159)+cheese2_y);
// vertex(wc+(cheese2_xScale*136)+cheese2_x,hc+(cheese2_yScale*169)+cheese2_y);
// vertex(wc+(cheese2_xScale*129)+cheese2_x,hc+(cheese2_yScale*186)+cheese2_y);
// vertex(wc+(cheese2_xScale*126)+cheese2_x,hc+(cheese2_yScale*198)+cheese2_y);
// vertex(wc+(cheese2_xScale*134)+cheese2_x,hc+(cheese2_yScale*193)+cheese2_y);
// vertex(wc+(cheese2_xScale*148)+cheese2_x,hc+(cheese2_yScale*188)+cheese2_y);
// vertex(wc+(cheese2_xScale*169)+cheese2_x,hc+(cheese2_yScale*189)+cheese2_y);
// vertex(wc+(cheese2_xScale*176)+cheese2_x,hc+(cheese2_yScale*197)+cheese2_y);
// vertex(wc+(cheese2_xScale*168)+cheese2_x,hc+(cheese2_yScale*202)+cheese2_y);
// vertex(wc+(cheese2_xScale*152)+cheese2_x,hc+(cheese2_yScale*199)+cheese2_y);
// vertex(wc+(cheese2_xScale*139)+cheese2_x,hc+(cheese2_yScale*201)+cheese2_y);
// vertex(wc+(cheese2_xScale*127)+cheese2_x,hc+(cheese2_yScale*202)+cheese2_y);
// vertex(wc+(cheese2_xScale*128)+cheese2_x,hc+(cheese2_yScale*209)+cheese2_y);
// vertex(wc+(cheese2_xScale*140)+cheese2_x,hc+(cheese2_yScale*219)+cheese2_y);
// vertex(wc+(cheese2_xScale*145)+cheese2_x,hc+(cheese2_yScale*223)+cheese2_y);
// vertex(wc+(cheese2_xScale*145)+cheese2_x,hc+(cheese2_yScale*232)+cheese2_y);
// vertex(wc+(cheese2_xScale*141)+cheese2_x,hc+(cheese2_yScale*238)+cheese2_y);
// vertex(wc+(cheese2_xScale*148)+cheese2_x,hc+(cheese2_yScale*237)+cheese2_y);
// vertex(wc+(cheese2_xScale*157)+cheese2_x,hc+(cheese2_yScale*236)+cheese2_y);
// vertex(wc+(cheese2_xScale*167)+cheese2_x,hc+(cheese2_yScale*239)+cheese2_y);
// vertex(wc+(cheese2_xScale*180)+cheese2_x,hc+(cheese2_yScale*243)+cheese2_y);
// vertex(wc+(cheese2_xScale*190)+cheese2_x,hc+(cheese2_yScale*242)+cheese2_y);
// vertex(wc+(cheese2_xScale*198)+cheese2_x,hc+(cheese2_yScale*239)+cheese2_y);
// vertex(wc+(cheese2_xScale*200)+cheese2_x,hc+(cheese2_yScale*225)+cheese2_y);
// vertex(wc+(cheese2_xScale*197)+cheese2_x,hc+(cheese2_yScale*216)+cheese2_y);
// vertex(wc+(cheese2_xScale*200)+cheese2_x,hc+(cheese2_yScale*208)+cheese2_y);
// vertex(wc+(cheese2_xScale*199)+cheese2_x,hc+(cheese2_yScale*197)+cheese2_y);
// vertex(wc+(cheese2_xScale*206)+cheese2_x,hc+(cheese2_yScale*199)+cheese2_y);
// vertex(wc+(cheese2_xScale*204)+cheese2_x,hc+(cheese2_yScale*208)+cheese2_y);
// vertex(wc+(cheese2_xScale*201)+cheese2_x,hc+(cheese2_yScale*214)+cheese2_y);
// vertex(wc+(cheese2_xScale*200)+cheese2_x,hc+(cheese2_yScale*222)+cheese2_y);
// vertex(wc+(cheese2_xScale*201)+cheese2_x,hc+(cheese2_yScale*229)+cheese2_y);
// vertex(wc+(cheese2_xScale*200)+cheese2_x,hc+(cheese2_yScale*237)+cheese2_y);
// vertex(wc+(cheese2_xScale*209)+cheese2_x,hc+(cheese2_yScale*231)+cheese2_y);
// vertex(wc+(cheese2_xScale*216)+cheese2_x,hc+(cheese2_yScale*222)+cheese2_y);
// vertex(wc+(cheese2_xScale*218)+cheese2_x,hc+(cheese2_yScale*208)+cheese2_y);
// vertex(wc+(cheese2_xScale*217)+cheese2_x,hc+(cheese2_yScale*191)+cheese2_y);
// vertex(wc+(cheese2_xScale*218)+cheese2_x,hc+(cheese2_yScale*178)+cheese2_y);
// vertex(wc+(cheese2_xScale*222)+cheese2_x,hc+(cheese2_yScale*171)+cheese2_y);
// vertex(wc+(cheese2_xScale*223)+cheese2_x,hc+(cheese2_yScale*179)+cheese2_y);
// vertex(wc+(cheese2_xScale*223)+cheese2_x,hc+(cheese2_yScale*191)+cheese2_y);
// vertex(wc+(cheese2_xScale*225)+cheese2_x,hc+(cheese2_yScale*186)+cheese2_y);
// vertex(wc+(cheese2_xScale*225)+cheese2_x,hc+(cheese2_yScale*178)+cheese2_y);
// // vertex(wc+(cheese2_xScale*224)+cheese2_x,hc+(cheese2_yScale*171)+cheese2_y);
// // vertex(wc+(cheese2_xScale*224)+cheese2_x,hc+(cheese2_yScale*163)+cheese2_y);
// // vertex(wc+(cheese2_xScale*234)+cheese2_x,hc+(cheese2_yScale*160)+cheese2_y);
// vertex(wc+(cheese2_xScale*238)+cheese2_x,hc+(cheese2_yScale*155)+cheese2_y);
// vertex(wc+(cheese2_xScale*240)+cheese2_x,hc+(cheese2_yScale*140)+cheese2_y);
// vertex(wc+(cheese2_xScale*239)+cheese2_x,hc+(cheese2_yScale*125)+cheese2_y);
// vertex(wc+(cheese2_xScale*227)+cheese2_x,hc+(cheese2_yScale*124)+cheese2_y);
// vertex(wc+(cheese2_xScale*215)+cheese2_x,hc+(cheese2_yScale*142)+cheese2_y);
// vertex(wc+(cheese2_xScale*209)+cheese2_x,hc+(cheese2_yScale*152)+cheese2_y);
// endShape(CLOSE);
// //ENDcheese2
// }


//     //stem
//   {
//   fill(leaf3);
//   let stem1_x = -scale*-10;
//   let stem1_y = -scale*110;
//   let stem1_xScale = scale/5;
//   let stem1_yScale = scale/5;
// beginShape();
// vertex(wc+(stem1_xScale*313)+stem1_x,hc+(stem1_yScale*197)+stem1_y);
// vertex(wc+(stem1_xScale*312)+stem1_x,hc+(stem1_yScale*206)+stem1_y);
// vertex(wc+(stem1_xScale*313)+stem1_x,hc+(stem1_yScale*227)+stem1_y);
// vertex(wc+(stem1_xScale*315)+stem1_x,hc+(stem1_yScale*225)+stem1_y);
// vertex(wc+(stem1_xScale*317)+stem1_x,hc+(stem1_yScale*209)+stem1_y);
// vertex(wc+(stem1_xScale*323)+stem1_x,hc+(stem1_yScale*198)+stem1_y);
// vertex(wc+(stem1_xScale*325)+stem1_x,hc+(stem1_yScale*185)+stem1_y);
// vertex(wc+(stem1_xScale*321)+stem1_x,hc+(stem1_yScale*168)+stem1_y);

//     //right
// vertex(wc+(stem1_xScale*373)+stem1_x,hc+(stem1_yScale*-457)+stem1_y);
//     //left
// vertex(wc+(stem1_xScale*313)+stem1_x,hc+(stem1_yScale*-457)+stem1_y);

// vertex(wc+(stem1_xScale*313)+stem1_x,hc+(stem1_yScale*154)+stem1_y);
// vertex(wc+(stem1_xScale*312)+stem1_x,hc+(stem1_yScale*174)+stem1_y);
// vertex(wc+(stem1_xScale*315)+stem1_x,hc+(stem1_yScale*182)+stem1_y);
// vertex(wc+(stem1_xScale*315)+stem1_x,hc+(stem1_yScale*188)+stem1_y);
// endShape(CLOSE);
// //ENDstem1
}


  //Bottom Left PLANT
  showleaf = width / height;
  if(showleaf < 2.5){
  //Bottom Left PLANT
  {

push();
BleafTrack = (scale*movex) + map(mouseX, 0, width, -(scale*1), (scale*27), true);

translate(BleafTrack-scale*20,scale*10);

push();



angleMode(DEGREES);
rotate(-10);
translate(scale*-70,scale*40);

//Leaf9
{
stroke(lineColour);
fill(leaf);
let Leaf9_x = -scale*160;
let Leaf9_y = -scale*70;
let Leaf9_xScale = scale/5;
let Leaf9_yScale = scale/5;
beginShape();
vertex(wc+(Leaf9_xScale*151)+Leaf9_x,hc+(Leaf9_yScale*841)+Leaf9_y);
vertex(wc+(Leaf9_xScale*125)+Leaf9_x,hc+(Leaf9_yScale*636)+Leaf9_y);
vertex(wc+(Leaf9_xScale*100)+Leaf9_x,hc+(Leaf9_yScale*511)+Leaf9_y);
vertex(wc+(Leaf9_xScale*105)+Leaf9_x,hc+(Leaf9_yScale*484)+Leaf9_y);
vertex(wc+(Leaf9_xScale*108)+Leaf9_x,hc+(Leaf9_yScale*468)+Leaf9_y);
vertex(wc+(Leaf9_xScale*118)+Leaf9_x,hc+(Leaf9_yScale*442)+Leaf9_y);
vertex(wc+(Leaf9_xScale*128)+Leaf9_x,hc+(Leaf9_yScale*419)+Leaf9_y);
vertex(wc+(Leaf9_xScale*117)+Leaf9_x,hc+(Leaf9_yScale*371)+Leaf9_y);
vertex(wc+(Leaf9_xScale*97)+Leaf9_x,hc+(Leaf9_yScale*344)+Leaf9_y);
vertex(wc+(Leaf9_xScale*96)+Leaf9_x,hc+(Leaf9_yScale*305)+Leaf9_y);
vertex(wc+(Leaf9_xScale*70)+Leaf9_x,hc+(Leaf9_yScale*238)+Leaf9_y);
vertex(wc+(Leaf9_xScale*36)+Leaf9_x,hc+(Leaf9_yScale*200)+Leaf9_y);
vertex(wc+(Leaf9_xScale*26)+Leaf9_x,hc+(Leaf9_yScale*171)+Leaf9_y);
vertex(wc+(Leaf9_xScale*26)+Leaf9_x,hc+(Leaf9_yScale*155)+Leaf9_y);
vertex(wc+(Leaf9_xScale*13)+Leaf9_x,hc+(Leaf9_yScale*145)+Leaf9_y);
vertex(wc+(Leaf9_xScale*10)+Leaf9_x,hc+(Leaf9_yScale*163)+Leaf9_y);
vertex(wc+(Leaf9_xScale*8)+Leaf9_x,hc+(Leaf9_yScale*205)+Leaf9_y);
vertex(wc+(Leaf9_xScale*9)+Leaf9_x,hc+(Leaf9_yScale*233)+Leaf9_y);
vertex(wc+(Leaf9_xScale*18)+Leaf9_x,hc+(Leaf9_yScale*272)+Leaf9_y);
vertex(wc+(Leaf9_xScale*19)+Leaf9_x,hc+(Leaf9_yScale*313)+Leaf9_y);
vertex(wc+(Leaf9_xScale*28)+Leaf9_x,hc+(Leaf9_yScale*321)+Leaf9_y);
vertex(wc+(Leaf9_xScale*26)+Leaf9_x,hc+(Leaf9_yScale*343)+Leaf9_y);
vertex(wc+(Leaf9_xScale*23)+Leaf9_x,hc+(Leaf9_yScale*369)+Leaf9_y);
vertex(wc+(Leaf9_xScale*53)+Leaf9_x,hc+(Leaf9_yScale*407)+Leaf9_y);
vertex(wc+(Leaf9_xScale*89)+Leaf9_x,hc+(Leaf9_yScale*513)+Leaf9_y);
vertex(wc+(Leaf9_xScale*97)+Leaf9_x,hc+(Leaf9_yScale*558)+Leaf9_y);
vertex(wc+(Leaf9_xScale*112)+Leaf9_x,hc+(Leaf9_yScale*626)+Leaf9_y);
vertex(wc+(Leaf9_xScale*115)+Leaf9_x,hc+(Leaf9_yScale*706)+Leaf9_y);
vertex(wc+(Leaf9_xScale*128)+Leaf9_x,hc+(Leaf9_yScale*844)+Leaf9_y);
vertex(wc+(Leaf9_xScale*80)+Leaf9_x,hc+(Leaf9_yScale*803)+Leaf9_y);
endShape(CLOSE);
//ENDLeaf9
}
//Leaf1
{
stroke(lineColour);
fill(leaf);
let Leaf1_x = -scale*160;
let Leaf1_y = -scale*100;
let Leaf1_xScale = scale/6;
let Leaf1_yScale = scale/6;
beginShape();
vertex(wc+(Leaf1_xScale*153)+Leaf1_x,hc+(Leaf1_yScale*717)+Leaf1_y);
vertex(wc+(Leaf1_xScale*176)+Leaf1_x,hc+(Leaf1_yScale*559)+Leaf1_y);
vertex(wc+(Leaf1_xScale*185)+Leaf1_x,hc+(Leaf1_yScale*493)+Leaf1_y);
vertex(wc+(Leaf1_xScale*180)+Leaf1_x,hc+(Leaf1_yScale*475)+Leaf1_y);
vertex(wc+(Leaf1_xScale*149)+Leaf1_x,hc+(Leaf1_yScale*441)+Leaf1_y);
vertex(wc+(Leaf1_xScale*148)+Leaf1_x,hc+(Leaf1_yScale*426)+Leaf1_y);
vertex(wc+(Leaf1_xScale*144)+Leaf1_x,hc+(Leaf1_yScale*409)+Leaf1_y);
vertex(wc+(Leaf1_xScale*156)+Leaf1_x,hc+(Leaf1_yScale*374)+Leaf1_y);
vertex(wc+(Leaf1_xScale*155)+Leaf1_x,hc+(Leaf1_yScale*358)+Leaf1_y);
vertex(wc+(Leaf1_xScale*163)+Leaf1_x,hc+(Leaf1_yScale*342)+Leaf1_y);
vertex(wc+(Leaf1_xScale*163)+Leaf1_x,hc+(Leaf1_yScale*320)+Leaf1_y);
vertex(wc+(Leaf1_xScale*172)+Leaf1_x,hc+(Leaf1_yScale*292)+Leaf1_y);
vertex(wc+(Leaf1_xScale*185)+Leaf1_x,hc+(Leaf1_yScale*277)+Leaf1_y);
vertex(wc+(Leaf1_xScale*192)+Leaf1_x,hc+(Leaf1_yScale*263)+Leaf1_y);
vertex(wc+(Leaf1_xScale*212)+Leaf1_x,hc+(Leaf1_yScale*252)+Leaf1_y);
vertex(wc+(Leaf1_xScale*222)+Leaf1_x,hc+(Leaf1_yScale*221)+Leaf1_y);
vertex(wc+(Leaf1_xScale*236)+Leaf1_x,hc+(Leaf1_yScale*200)+Leaf1_y);
vertex(wc+(Leaf1_xScale*274)+Leaf1_x,hc+(Leaf1_yScale*186)+Leaf1_y);
vertex(wc+(Leaf1_xScale*286)+Leaf1_x,hc+(Leaf1_yScale*173)+Leaf1_y);
vertex(wc+(Leaf1_xScale*303)+Leaf1_x,hc+(Leaf1_yScale*150)+Leaf1_y);
vertex(wc+(Leaf1_xScale*318)+Leaf1_x,hc+(Leaf1_yScale*143)+Leaf1_y);
vertex(wc+(Leaf1_xScale*330)+Leaf1_x,hc+(Leaf1_yScale*136)+Leaf1_y);
vertex(wc+(Leaf1_xScale*332)+Leaf1_x,hc+(Leaf1_yScale*138)+Leaf1_y);
vertex(wc+(Leaf1_xScale*329)+Leaf1_x,hc+(Leaf1_yScale*143)+Leaf1_y);
vertex(wc+(Leaf1_xScale*327)+Leaf1_x,hc+(Leaf1_yScale*158)+Leaf1_y);
vertex(wc+(Leaf1_xScale*325)+Leaf1_x,hc+(Leaf1_yScale*176)+Leaf1_y);
vertex(wc+(Leaf1_xScale*327)+Leaf1_x,hc+(Leaf1_yScale*195)+Leaf1_y);
vertex(wc+(Leaf1_xScale*333)+Leaf1_x,hc+(Leaf1_yScale*219)+Leaf1_y);
vertex(wc+(Leaf1_xScale*334)+Leaf1_x,hc+(Leaf1_yScale*248)+Leaf1_y);
vertex(wc+(Leaf1_xScale*324)+Leaf1_x,hc+(Leaf1_yScale*271)+Leaf1_y);
vertex(wc+(Leaf1_xScale*325)+Leaf1_x,hc+(Leaf1_yScale*295)+Leaf1_y);
vertex(wc+(Leaf1_xScale*325)+Leaf1_x,hc+(Leaf1_yScale*313)+Leaf1_y);
vertex(wc+(Leaf1_xScale*316)+Leaf1_x,hc+(Leaf1_yScale*334)+Leaf1_y);
vertex(wc+(Leaf1_xScale*311)+Leaf1_x,hc+(Leaf1_yScale*362)+Leaf1_y);
vertex(wc+(Leaf1_xScale*295)+Leaf1_x,hc+(Leaf1_yScale*398)+Leaf1_y);
vertex(wc+(Leaf1_xScale*295)+Leaf1_x,hc+(Leaf1_yScale*425)+Leaf1_y);
vertex(wc+(Leaf1_xScale*283)+Leaf1_x,hc+(Leaf1_yScale*442)+Leaf1_y);
vertex(wc+(Leaf1_xScale*265)+Leaf1_x,hc+(Leaf1_yScale*460)+Leaf1_y);
vertex(wc+(Leaf1_xScale*259)+Leaf1_x,hc+(Leaf1_yScale*476)+Leaf1_y);
vertex(wc+(Leaf1_xScale*236)+Leaf1_x,hc+(Leaf1_yScale*482)+Leaf1_y);
vertex(wc+(Leaf1_xScale*212)+Leaf1_x,hc+(Leaf1_yScale*487)+Leaf1_y);
vertex(wc+(Leaf1_xScale*201)+Leaf1_x,hc+(Leaf1_yScale*491)+Leaf1_y);
vertex(wc+(Leaf1_xScale*191)+Leaf1_x,hc+(Leaf1_yScale*499)+Leaf1_y);
vertex(wc+(Leaf1_xScale*186)+Leaf1_x,hc+(Leaf1_yScale*534)+Leaf1_y);
vertex(wc+(Leaf1_xScale*180)+Leaf1_x,hc+(Leaf1_yScale*594)+Leaf1_y);
vertex(wc+(Leaf1_xScale*170)+Leaf1_x,hc+(Leaf1_yScale*712)+Leaf1_y);
vertex(wc+(Leaf1_xScale*164)+Leaf1_x,hc+(Leaf1_yScale*870)+Leaf1_y);
vertex(wc+(Leaf1_xScale*167)+Leaf1_x,hc+(Leaf1_yScale*923)+Leaf1_y);
vertex(wc+(Leaf1_xScale*126)+Leaf1_x,hc+(Leaf1_yScale*897)+Leaf1_y);
vertex(wc+(Leaf1_xScale*138)+Leaf1_x,hc+(Leaf1_yScale*843)+Leaf1_y);
endShape(CLOSE);
//ENDLeaf1
}
//Leaf2
{
stroke(lineColour);
fill(leaf);
let Leaf2_x = -scale*230;
let Leaf2_y = -scale*180;
let Leaf2_xScale = scale/3;
let Leaf2_yScale = scale/3;
beginShape();
vertex(wc+(Leaf2_xScale*190)+Leaf2_x,hc+(Leaf2_yScale*854)+Leaf2_y);
vertex(wc+(Leaf2_xScale*204)+Leaf2_x,hc+(Leaf2_yScale*661)+Leaf2_y);
vertex(wc+(Leaf2_xScale*209)+Leaf2_x,hc+(Leaf2_yScale*534)+Leaf2_y);
vertex(wc+(Leaf2_xScale*217)+Leaf2_x,hc+(Leaf2_yScale*526)+Leaf2_y);
vertex(wc+(Leaf2_xScale*221)+Leaf2_x,hc+(Leaf2_yScale*524)+Leaf2_y);
vertex(wc+(Leaf2_xScale*227)+Leaf2_x,hc+(Leaf2_yScale*518)+Leaf2_y);
vertex(wc+(Leaf2_xScale*230)+Leaf2_x,hc+(Leaf2_yScale*510)+Leaf2_y);
vertex(wc+(Leaf2_xScale*232)+Leaf2_x,hc+(Leaf2_yScale*500)+Leaf2_y);
vertex(wc+(Leaf2_xScale*234)+Leaf2_x,hc+(Leaf2_yScale*493)+Leaf2_y);
vertex(wc+(Leaf2_xScale*237)+Leaf2_x,hc+(Leaf2_yScale*465)+Leaf2_y);
vertex(wc+(Leaf2_xScale*226)+Leaf2_x,hc+(Leaf2_yScale*406)+Leaf2_y);
vertex(wc+(Leaf2_xScale*220)+Leaf2_x,hc+(Leaf2_yScale*379)+Leaf2_y);
vertex(wc+(Leaf2_xScale*220)+Leaf2_x,hc+(Leaf2_yScale*372)+Leaf2_y);
vertex(wc+(Leaf2_xScale*207)+Leaf2_x,hc+(Leaf2_yScale*387)+Leaf2_y);
vertex(wc+(Leaf2_xScale*204)+Leaf2_x,hc+(Leaf2_yScale*407)+Leaf2_y);
vertex(wc+(Leaf2_xScale*202)+Leaf2_x,hc+(Leaf2_yScale*437)+Leaf2_y);
vertex(wc+(Leaf2_xScale*198)+Leaf2_x,hc+(Leaf2_yScale*453)+Leaf2_y);
vertex(wc+(Leaf2_xScale*192)+Leaf2_x,hc+(Leaf2_yScale*467)+Leaf2_y);
vertex(wc+(Leaf2_xScale*192)+Leaf2_x,hc+(Leaf2_yScale*525)+Leaf2_y);
vertex(wc+(Leaf2_xScale*204)+Leaf2_x,hc+(Leaf2_yScale*535)+Leaf2_y);
vertex(wc+(Leaf2_xScale*194)+Leaf2_x,hc+(Leaf2_yScale*662)+Leaf2_y);
vertex(wc+(Leaf2_xScale*175)+Leaf2_x,hc+(Leaf2_yScale*758)+Leaf2_y);
vertex(wc+(Leaf2_xScale*161)+Leaf2_x,hc+(Leaf2_yScale*841)+Leaf2_y);
endShape(CLOSE);
//ENDLeaf2
}
//Leaf3
{
stroke(lineColour);
fill(leaf);
let Leaf3_x = -scale*180;
let Leaf3_y = -scale*110;
let Leaf3_xScale = scale/4;
let Leaf3_yScale = scale/4;
beginShape();
vertex(wc+(Leaf3_xScale*180)+Leaf3_x,hc+(Leaf3_yScale*849)+Leaf3_y);
vertex(wc+(Leaf3_xScale*229)+Leaf3_x,hc+(Leaf3_yScale*638)+Leaf3_y);
vertex(wc+(Leaf3_xScale*249)+Leaf3_x,hc+(Leaf3_yScale*575)+Leaf3_y);
vertex(wc+(Leaf3_xScale*261)+Leaf3_x,hc+(Leaf3_yScale*554)+Leaf3_y);
vertex(wc+(Leaf3_xScale*277)+Leaf3_x,hc+(Leaf3_yScale*511)+Leaf3_y);
vertex(wc+(Leaf3_xScale*291)+Leaf3_x,hc+(Leaf3_yScale*486)+Leaf3_y);
vertex(wc+(Leaf3_xScale*321)+Leaf3_x,hc+(Leaf3_yScale*467)+Leaf3_y);
vertex(wc+(Leaf3_xScale*326)+Leaf3_x,hc+(Leaf3_yScale*450)+Leaf3_y);
vertex(wc+(Leaf3_xScale*340)+Leaf3_x,hc+(Leaf3_yScale*442)+Leaf3_y);
vertex(wc+(Leaf3_xScale*357)+Leaf3_x,hc+(Leaf3_yScale*440)+Leaf3_y);
vertex(wc+(Leaf3_xScale*385)+Leaf3_x,hc+(Leaf3_yScale*426)+Leaf3_y);
vertex(wc+(Leaf3_xScale*402)+Leaf3_x,hc+(Leaf3_yScale*418)+Leaf3_y);
vertex(wc+(Leaf3_xScale*417)+Leaf3_x,hc+(Leaf3_yScale*424)+Leaf3_y);
vertex(wc+(Leaf3_xScale*460)+Leaf3_x,hc+(Leaf3_yScale*425)+Leaf3_y);
vertex(wc+(Leaf3_xScale*473)+Leaf3_x,hc+(Leaf3_yScale*428)+Leaf3_y);
vertex(wc+(Leaf3_xScale*481)+Leaf3_x,hc+(Leaf3_yScale*444)+Leaf3_y);
vertex(wc+(Leaf3_xScale*494)+Leaf3_x,hc+(Leaf3_yScale*448)+Leaf3_y);
vertex(wc+(Leaf3_xScale*496)+Leaf3_x,hc+(Leaf3_yScale*453)+Leaf3_y);
vertex(wc+(Leaf3_xScale*486)+Leaf3_x,hc+(Leaf3_yScale*453)+Leaf3_y);
vertex(wc+(Leaf3_xScale*476)+Leaf3_x,hc+(Leaf3_yScale*450)+Leaf3_y);
vertex(wc+(Leaf3_xScale*472)+Leaf3_x,hc+(Leaf3_yScale*454)+Leaf3_y);
vertex(wc+(Leaf3_xScale*452)+Leaf3_x,hc+(Leaf3_yScale*458)+Leaf3_y);
vertex(wc+(Leaf3_xScale*441)+Leaf3_x,hc+(Leaf3_yScale*457)+Leaf3_y);
vertex(wc+(Leaf3_xScale*420)+Leaf3_x,hc+(Leaf3_yScale*457)+Leaf3_y);
vertex(wc+(Leaf3_xScale*408)+Leaf3_x,hc+(Leaf3_yScale*475)+Leaf3_y);
vertex(wc+(Leaf3_xScale*399)+Leaf3_x,hc+(Leaf3_yScale*486)+Leaf3_y);
vertex(wc+(Leaf3_xScale*379)+Leaf3_x,hc+(Leaf3_yScale*492)+Leaf3_y);
vertex(wc+(Leaf3_xScale*365)+Leaf3_x,hc+(Leaf3_yScale*496)+Leaf3_y);
vertex(wc+(Leaf3_xScale*355)+Leaf3_x,hc+(Leaf3_yScale*507)+Leaf3_y);
vertex(wc+(Leaf3_xScale*337)+Leaf3_x,hc+(Leaf3_yScale*514)+Leaf3_y);
vertex(wc+(Leaf3_xScale*322)+Leaf3_x,hc+(Leaf3_yScale*517)+Leaf3_y);
vertex(wc+(Leaf3_xScale*309)+Leaf3_x,hc+(Leaf3_yScale*533)+Leaf3_y);
vertex(wc+(Leaf3_xScale*288)+Leaf3_x,hc+(Leaf3_yScale*539)+Leaf3_y);
vertex(wc+(Leaf3_xScale*276)+Leaf3_x,hc+(Leaf3_yScale*549)+Leaf3_y);
vertex(wc+(Leaf3_xScale*267)+Leaf3_x,hc+(Leaf3_yScale*559)+Leaf3_y);
vertex(wc+(Leaf3_xScale*259)+Leaf3_x,hc+(Leaf3_yScale*564)+Leaf3_y);
vertex(wc+(Leaf3_xScale*249)+Leaf3_x,hc+(Leaf3_yScale*594)+Leaf3_y);
vertex(wc+(Leaf3_xScale*233)+Leaf3_x,hc+(Leaf3_yScale*645)+Leaf3_y);
vertex(wc+(Leaf3_xScale*227)+Leaf3_x,hc+(Leaf3_yScale*692)+Leaf3_y);
vertex(wc+(Leaf3_xScale*224)+Leaf3_x,hc+(Leaf3_yScale*731)+Leaf3_y);
vertex(wc+(Leaf3_xScale*212)+Leaf3_x,hc+(Leaf3_yScale*841)+Leaf3_y);
endShape(CLOSE);
//ENDLeaf3
}
//Leaf4
{
stroke(lineColour);
fill(leaf);
let Leaf4_x = -scale*180;
let Leaf4_y = -scale*110;
let Leaf4_xScale = scale/4;
let Leaf4_yScale = scale/4;
beginShape();
vertex(wc+(Leaf4_xScale*198)+Leaf4_x,hc+(Leaf4_yScale*837)+Leaf4_y);
vertex(wc+(Leaf4_xScale*235)+Leaf4_x,hc+(Leaf4_yScale*713)+Leaf4_y);
vertex(wc+(Leaf4_xScale*245)+Leaf4_x,hc+(Leaf4_yScale*665)+Leaf4_y);
vertex(wc+(Leaf4_xScale*257)+Leaf4_x,hc+(Leaf4_yScale*629)+Leaf4_y);
vertex(wc+(Leaf4_xScale*275)+Leaf4_x,hc+(Leaf4_yScale*605)+Leaf4_y);
vertex(wc+(Leaf4_xScale*289)+Leaf4_x,hc+(Leaf4_yScale*573)+Leaf4_y);
vertex(wc+(Leaf4_xScale*307)+Leaf4_x,hc+(Leaf4_yScale*549)+Leaf4_y);
vertex(wc+(Leaf4_xScale*314)+Leaf4_x,hc+(Leaf4_yScale*537)+Leaf4_y);
vertex(wc+(Leaf4_xScale*330)+Leaf4_x,hc+(Leaf4_yScale*526)+Leaf4_y);
vertex(wc+(Leaf4_xScale*359)+Leaf4_x,hc+(Leaf4_yScale*516)+Leaf4_y);
vertex(wc+(Leaf4_xScale*380)+Leaf4_x,hc+(Leaf4_yScale*512)+Leaf4_y);
vertex(wc+(Leaf4_xScale*427)+Leaf4_x,hc+(Leaf4_yScale*492)+Leaf4_y);
vertex(wc+(Leaf4_xScale*451)+Leaf4_x,hc+(Leaf4_yScale*490)+Leaf4_y);
vertex(wc+(Leaf4_xScale*478)+Leaf4_x,hc+(Leaf4_yScale*496)+Leaf4_y);
vertex(wc+(Leaf4_xScale*492)+Leaf4_x,hc+(Leaf4_yScale*500)+Leaf4_y);
vertex(wc+(Leaf4_xScale*490)+Leaf4_x,hc+(Leaf4_yScale*504)+Leaf4_y);
vertex(wc+(Leaf4_xScale*481)+Leaf4_x,hc+(Leaf4_yScale*507)+Leaf4_y);
vertex(wc+(Leaf4_xScale*471)+Leaf4_x,hc+(Leaf4_yScale*508)+Leaf4_y);
vertex(wc+(Leaf4_xScale*456)+Leaf4_x,hc+(Leaf4_yScale*515)+Leaf4_y);
vertex(wc+(Leaf4_xScale*427)+Leaf4_x,hc+(Leaf4_yScale*548)+Leaf4_y);
vertex(wc+(Leaf4_xScale*399)+Leaf4_x,hc+(Leaf4_yScale*576)+Leaf4_y);
vertex(wc+(Leaf4_xScale*362)+Leaf4_x,hc+(Leaf4_yScale*604)+Leaf4_y);
vertex(wc+(Leaf4_xScale*333)+Leaf4_x,hc+(Leaf4_yScale*614)+Leaf4_y);
vertex(wc+(Leaf4_xScale*309)+Leaf4_x,hc+(Leaf4_yScale*618)+Leaf4_y);
vertex(wc+(Leaf4_xScale*275)+Leaf4_x,hc+(Leaf4_yScale*624)+Leaf4_y);
vertex(wc+(Leaf4_xScale*267)+Leaf4_x,hc+(Leaf4_yScale*627)+Leaf4_y);
vertex(wc+(Leaf4_xScale*258)+Leaf4_x,hc+(Leaf4_yScale*644)+Leaf4_y);
vertex(wc+(Leaf4_xScale*250)+Leaf4_x,hc+(Leaf4_yScale*679)+Leaf4_y);
vertex(wc+(Leaf4_xScale*246)+Leaf4_x,hc+(Leaf4_yScale*730)+Leaf4_y);
vertex(wc+(Leaf4_xScale*233)+Leaf4_x,hc+(Leaf4_yScale*799)+Leaf4_y);
vertex(wc+(Leaf4_xScale*227)+Leaf4_x,hc+(Leaf4_yScale*843)+Leaf4_y);
endShape(CLOSE);
//ENDLeaf4
}
//Leaf5
{
stroke(lineColour);
fill(leaf);
let Leaf5_x = -scale*165;
let Leaf5_y = -scale*90;
let Leaf5_xScale = scale/6;
let Leaf5_yScale = scale/6;
beginShape();
vertex(wc+(Leaf5_xScale*151)+Leaf5_x,hc+(Leaf5_yScale*843)+Leaf5_y);
vertex(wc+(Leaf5_xScale*147)+Leaf5_x,hc+(Leaf5_yScale*603)+Leaf5_y);
vertex(wc+(Leaf5_xScale*145)+Leaf5_x,hc+(Leaf5_yScale*502)+Leaf5_y);
vertex(wc+(Leaf5_xScale*153)+Leaf5_x,hc+(Leaf5_yScale*486)+Leaf5_y);
vertex(wc+(Leaf5_xScale*160)+Leaf5_x,hc+(Leaf5_yScale*474)+Leaf5_y);
vertex(wc+(Leaf5_xScale*159)+Leaf5_x,hc+(Leaf5_yScale*461)+Leaf5_y);
vertex(wc+(Leaf5_xScale*159)+Leaf5_x,hc+(Leaf5_yScale*440)+Leaf5_y);
vertex(wc+(Leaf5_xScale*162)+Leaf5_x,hc+(Leaf5_yScale*426)+Leaf5_y);
vertex(wc+(Leaf5_xScale*169)+Leaf5_x,hc+(Leaf5_yScale*411)+Leaf5_y);
vertex(wc+(Leaf5_xScale*176)+Leaf5_x,hc+(Leaf5_yScale*389)+Leaf5_y);
vertex(wc+(Leaf5_xScale*196)+Leaf5_x,hc+(Leaf5_yScale*363)+Leaf5_y);
vertex(wc+(Leaf5_xScale*190)+Leaf5_x,hc+(Leaf5_yScale*343)+Leaf5_y);
vertex(wc+(Leaf5_xScale*187)+Leaf5_x,hc+(Leaf5_yScale*333)+Leaf5_y);
vertex(wc+(Leaf5_xScale*186)+Leaf5_x,hc+(Leaf5_yScale*315)+Leaf5_y);
vertex(wc+(Leaf5_xScale*188)+Leaf5_x,hc+(Leaf5_yScale*302)+Leaf5_y);
vertex(wc+(Leaf5_xScale*179)+Leaf5_x,hc+(Leaf5_yScale*282)+Leaf5_y);
vertex(wc+(Leaf5_xScale*174)+Leaf5_x,hc+(Leaf5_yScale*260)+Leaf5_y);
vertex(wc+(Leaf5_xScale*161)+Leaf5_x,hc+(Leaf5_yScale*213)+Leaf5_y);
vertex(wc+(Leaf5_xScale*142)+Leaf5_x,hc+(Leaf5_yScale*198)+Leaf5_y);
vertex(wc+(Leaf5_xScale*130)+Leaf5_x,hc+(Leaf5_yScale*185)+Leaf5_y);
vertex(wc+(Leaf5_xScale*114)+Leaf5_x,hc+(Leaf5_yScale*167)+Leaf5_y);
vertex(wc+(Leaf5_xScale*87)+Leaf5_x,hc+(Leaf5_yScale*153)+Leaf5_y);
vertex(wc+(Leaf5_xScale*72)+Leaf5_x,hc+(Leaf5_yScale*144)+Leaf5_y);
vertex(wc+(Leaf5_xScale*56)+Leaf5_x,hc+(Leaf5_yScale*130)+Leaf5_y);
vertex(wc+(Leaf5_xScale*47)+Leaf5_x,hc+(Leaf5_yScale*123)+Leaf5_y);
vertex(wc+(Leaf5_xScale*35)+Leaf5_x,hc+(Leaf5_yScale*120)+Leaf5_y);
vertex(wc+(Leaf5_xScale*48)+Leaf5_x,hc+(Leaf5_yScale*132)+Leaf5_y);
vertex(wc+(Leaf5_xScale*49)+Leaf5_x,hc+(Leaf5_yScale*141)+Leaf5_y);
vertex(wc+(Leaf5_xScale*47)+Leaf5_x,hc+(Leaf5_yScale*152)+Leaf5_y);
vertex(wc+(Leaf5_xScale*50)+Leaf5_x,hc+(Leaf5_yScale*172)+Leaf5_y);
vertex(wc+(Leaf5_xScale*59)+Leaf5_x,hc+(Leaf5_yScale*203)+Leaf5_y);
vertex(wc+(Leaf5_xScale*65)+Leaf5_x,hc+(Leaf5_yScale*226)+Leaf5_y);
vertex(wc+(Leaf5_xScale*99)+Leaf5_x,hc+(Leaf5_yScale*255)+Leaf5_y);
vertex(wc+(Leaf5_xScale*108)+Leaf5_x,hc+(Leaf5_yScale*295)+Leaf5_y);
vertex(wc+(Leaf5_xScale*108)+Leaf5_x,hc+(Leaf5_yScale*321)+Leaf5_y);
vertex(wc+(Leaf5_xScale*115)+Leaf5_x,hc+(Leaf5_yScale*339)+Leaf5_y);
vertex(wc+(Leaf5_xScale*129)+Leaf5_x,hc+(Leaf5_yScale*385)+Leaf5_y);
vertex(wc+(Leaf5_xScale*135)+Leaf5_x,hc+(Leaf5_yScale*400)+Leaf5_y);
vertex(wc+(Leaf5_xScale*138)+Leaf5_x,hc+(Leaf5_yScale*413)+Leaf5_y);
vertex(wc+(Leaf5_xScale*134)+Leaf5_x,hc+(Leaf5_yScale*453)+Leaf5_y);
vertex(wc+(Leaf5_xScale*130)+Leaf5_x,hc+(Leaf5_yScale*480)+Leaf5_y);
vertex(wc+(Leaf5_xScale*136)+Leaf5_x,hc+(Leaf5_yScale*502)+Leaf5_y);
vertex(wc+(Leaf5_xScale*139)+Leaf5_x,hc+(Leaf5_yScale*575)+Leaf5_y);
vertex(wc+(Leaf5_xScale*134)+Leaf5_x,hc+(Leaf5_yScale*653)+Leaf5_y);
vertex(wc+(Leaf5_xScale*130)+Leaf5_x,hc+(Leaf5_yScale*746)+Leaf5_y);
vertex(wc+(Leaf5_xScale*125)+Leaf5_x,hc+(Leaf5_yScale*846)+Leaf5_y);
endShape(CLOSE);
//ENDLeaf5
}
//Leaf6
{
stroke(lineColour);
fill(leaf);
let Leaf6_x = -scale*180;
let Leaf6_y = -scale*110;
let Leaf6_xScale = scale/4;
let Leaf6_yScale = scale/4;
beginShape();
vertex(wc+(Leaf6_xScale*183)+Leaf6_x,hc+(Leaf6_yScale*837)+Leaf6_y);
vertex(wc+(Leaf6_xScale*211)+Leaf6_x,hc+(Leaf6_yScale*662)+Leaf6_y);
vertex(wc+(Leaf6_xScale*216)+Leaf6_x,hc+(Leaf6_yScale*613)+Leaf6_y);
vertex(wc+(Leaf6_xScale*225)+Leaf6_x,hc+(Leaf6_yScale*577)+Leaf6_y);
vertex(wc+(Leaf6_xScale*226)+Leaf6_x,hc+(Leaf6_yScale*546)+Leaf6_y);
vertex(wc+(Leaf6_xScale*249)+Leaf6_x,hc+(Leaf6_yScale*513)+Leaf6_y);
vertex(wc+(Leaf6_xScale*264)+Leaf6_x,hc+(Leaf6_yScale*503)+Leaf6_y);
vertex(wc+(Leaf6_xScale*282)+Leaf6_x,hc+(Leaf6_yScale*500)+Leaf6_y);
vertex(wc+(Leaf6_xScale*321)+Leaf6_x,hc+(Leaf6_yScale*482)+Leaf6_y);
vertex(wc+(Leaf6_xScale*322)+Leaf6_x,hc+(Leaf6_yScale*490)+Leaf6_y);
vertex(wc+(Leaf6_xScale*319)+Leaf6_x,hc+(Leaf6_yScale*499)+Leaf6_y);
vertex(wc+(Leaf6_xScale*302)+Leaf6_x,hc+(Leaf6_yScale*511)+Leaf6_y);
vertex(wc+(Leaf6_xScale*278)+Leaf6_x,hc+(Leaf6_yScale*525)+Leaf6_y);
vertex(wc+(Leaf6_xScale*261)+Leaf6_x,hc+(Leaf6_yScale*546)+Leaf6_y);
vertex(wc+(Leaf6_xScale*245)+Leaf6_x,hc+(Leaf6_yScale*567)+Leaf6_y);
vertex(wc+(Leaf6_xScale*231)+Leaf6_x,hc+(Leaf6_yScale*584)+Leaf6_y);
vertex(wc+(Leaf6_xScale*227)+Leaf6_x,hc+(Leaf6_yScale*593)+Leaf6_y);
vertex(wc+(Leaf6_xScale*223)+Leaf6_x,hc+(Leaf6_yScale*604)+Leaf6_y);
vertex(wc+(Leaf6_xScale*219)+Leaf6_x,hc+(Leaf6_yScale*625)+Leaf6_y);
vertex(wc+(Leaf6_xScale*218)+Leaf6_x,hc+(Leaf6_yScale*646)+Leaf6_y);
vertex(wc+(Leaf6_xScale*217)+Leaf6_x,hc+(Leaf6_yScale*660)+Leaf6_y);
vertex(wc+(Leaf6_xScale*214)+Leaf6_x,hc+(Leaf6_yScale*682)+Leaf6_y);
vertex(wc+(Leaf6_xScale*205)+Leaf6_x,hc+(Leaf6_yScale*832)+Leaf6_y);
endShape(CLOSE);
//ENDLeaf6
}
//Leaf7
{
stroke(lineColour);
fill(leaf);
let Leaf7_x = -scale*180;
let Leaf7_y = -scale*110;
let Leaf7_xScale = scale/4;
let Leaf7_yScale = scale/4;
beginShape();
vertex(wc+(Leaf7_xScale*181)+Leaf7_x,hc+(Leaf7_yScale*844)+Leaf7_y);
vertex(wc+(Leaf7_xScale*161)+Leaf7_x,hc+(Leaf7_yScale*778)+Leaf7_y);
vertex(wc+(Leaf7_xScale*154)+Leaf7_x,hc+(Leaf7_yScale*748)+Leaf7_y);
vertex(wc+(Leaf7_xScale*148)+Leaf7_x,hc+(Leaf7_yScale*738)+Leaf7_y);
vertex(wc+(Leaf7_xScale*141)+Leaf7_x,hc+(Leaf7_yScale*726)+Leaf7_y);
vertex(wc+(Leaf7_xScale*134)+Leaf7_x,hc+(Leaf7_yScale*719)+Leaf7_y);
vertex(wc+(Leaf7_xScale*97)+Leaf7_x,hc+(Leaf7_yScale*720)+Leaf7_y);
vertex(wc+(Leaf7_xScale*84)+Leaf7_x,hc+(Leaf7_yScale*685)+Leaf7_y);
vertex(wc+(Leaf7_xScale*78)+Leaf7_x,hc+(Leaf7_yScale*664)+Leaf7_y);
vertex(wc+(Leaf7_xScale*58)+Leaf7_x,hc+(Leaf7_yScale*634)+Leaf7_y);
vertex(wc+(Leaf7_xScale*29)+Leaf7_x,hc+(Leaf7_yScale*620)+Leaf7_y);
vertex(wc+(Leaf7_xScale*16)+Leaf7_x,hc+(Leaf7_yScale*573)+Leaf7_y);
vertex(wc+(Leaf7_xScale*13)+Leaf7_x,hc+(Leaf7_yScale*537)+Leaf7_y);
vertex(wc+(Leaf7_xScale*28)+Leaf7_x,hc+(Leaf7_yScale*542)+Leaf7_y);
vertex(wc+(Leaf7_xScale*38)+Leaf7_x,hc+(Leaf7_yScale*559)+Leaf7_y);
vertex(wc+(Leaf7_xScale*85)+Leaf7_x,hc+(Leaf7_yScale*575)+Leaf7_y);
vertex(wc+(Leaf7_xScale*109)+Leaf7_x,hc+(Leaf7_yScale*581)+Leaf7_y);
vertex(wc+(Leaf7_xScale*124)+Leaf7_x,hc+(Leaf7_yScale*606)+Leaf7_y);
vertex(wc+(Leaf7_xScale*129)+Leaf7_x,hc+(Leaf7_yScale*619)+Leaf7_y);
vertex(wc+(Leaf7_xScale*141)+Leaf7_x,hc+(Leaf7_yScale*626)+Leaf7_y);
vertex(wc+(Leaf7_xScale*153)+Leaf7_x,hc+(Leaf7_yScale*632)+Leaf7_y);
vertex(wc+(Leaf7_xScale*172)+Leaf7_x,hc+(Leaf7_yScale*647)+Leaf7_y);
vertex(wc+(Leaf7_xScale*176)+Leaf7_x,hc+(Leaf7_yScale*681)+Leaf7_y);
vertex(wc+(Leaf7_xScale*194)+Leaf7_x,hc+(Leaf7_yScale*698)+Leaf7_y);
vertex(wc+(Leaf7_xScale*185)+Leaf7_x,hc+(Leaf7_yScale*711)+Leaf7_y);
vertex(wc+(Leaf7_xScale*180)+Leaf7_x,hc+(Leaf7_yScale*724)+Leaf7_y);
vertex(wc+(Leaf7_xScale*174)+Leaf7_x,hc+(Leaf7_yScale*742)+Leaf7_y);
vertex(wc+(Leaf7_xScale*165)+Leaf7_x,hc+(Leaf7_yScale*758)+Leaf7_y);
vertex(wc+(Leaf7_xScale*173)+Leaf7_x,hc+(Leaf7_yScale*788)+Leaf7_y);
vertex(wc+(Leaf7_xScale*185)+Leaf7_x,hc+(Leaf7_yScale*813)+Leaf7_y);
vertex(wc+(Leaf7_xScale*193)+Leaf7_x,hc+(Leaf7_yScale*832)+Leaf7_y);
endShape(CLOSE);
//ENDLeaf7
}
//Leaf10
{
stroke(lineColour);
fill(leaf);
let Leaf10_x = -scale*180;
let Leaf10_y = -scale*90;
let Leaf10_xScale = scale/6;
let Leaf10_yScale = scale/6;
beginShape();
vertex(wc+(Leaf10_xScale*142)+Leaf10_x,hc+(Leaf10_yScale*851)+Leaf10_y);
vertex(wc+(Leaf10_xScale*124)+Leaf10_x,hc+(Leaf10_yScale*746)+Leaf10_y);
vertex(wc+(Leaf10_xScale*107)+Leaf10_x,hc+(Leaf10_yScale*717)+Leaf10_y);
vertex(wc+(Leaf10_xScale*102)+Leaf10_x,hc+(Leaf10_yScale*703)+Leaf10_y);
vertex(wc+(Leaf10_xScale*102)+Leaf10_x,hc+(Leaf10_yScale*681)+Leaf10_y);
vertex(wc+(Leaf10_xScale*101)+Leaf10_x,hc+(Leaf10_yScale*639)+Leaf10_y);
vertex(wc+(Leaf10_xScale*88)+Leaf10_x,hc+(Leaf10_yScale*607)+Leaf10_y);
vertex(wc+(Leaf10_xScale*60)+Leaf10_x,hc+(Leaf10_yScale*583)+Leaf10_y);
vertex(wc+(Leaf10_xScale*42)+Leaf10_x,hc+(Leaf10_yScale*547)+Leaf10_y);
vertex(wc+(Leaf10_xScale*35)+Leaf10_x,hc+(Leaf10_yScale*518)+Leaf10_y);
vertex(wc+(Leaf10_xScale*21)+Leaf10_x,hc+(Leaf10_yScale*507)+Leaf10_y);
vertex(wc+(Leaf10_xScale*23)+Leaf10_x,hc+(Leaf10_yScale*526)+Leaf10_y);
vertex(wc+(Leaf10_xScale*16)+Leaf10_x,hc+(Leaf10_yScale*550)+Leaf10_y);
vertex(wc+(Leaf10_xScale*8)+Leaf10_x,hc+(Leaf10_yScale*614)+Leaf10_y);
vertex(wc+(Leaf10_xScale*15)+Leaf10_x,hc+(Leaf10_yScale*647)+Leaf10_y);
vertex(wc+(Leaf10_xScale*56)+Leaf10_x,hc+(Leaf10_yScale*689)+Leaf10_y);
vertex(wc+(Leaf10_xScale*80)+Leaf10_x,hc+(Leaf10_yScale*740)+Leaf10_y);
vertex(wc+(Leaf10_xScale*94)+Leaf10_x,hc+(Leaf10_yScale*740)+Leaf10_y);
vertex(wc+(Leaf10_xScale*117)+Leaf10_x,hc+(Leaf10_yScale*752)+Leaf10_y);
vertex(wc+(Leaf10_xScale*118)+Leaf10_x,hc+(Leaf10_yScale*761)+Leaf10_y);
vertex(wc+(Leaf10_xScale*130)+Leaf10_x,hc+(Leaf10_yScale*848)+Leaf10_y);
endShape(CLOSE);
//ENDLeaf10
}
pop();
pop();




push();

HleafTrack = (scale*movex) + map(mouseX, 0, width, -(scale*1), (scale*30), true);

translate(HleafTrack-scale*20,scale*10);


push();

angleMode(DEGREES);
rotate(30);
translate(scale*60,-scale*10);

//Leaf7  LEAN LEFT JAGGY
{
stroke(lineColour);
fill(leaf);
let Leaf7_x = -scale*170;
let Leaf7_y = -scale*120;
let Leaf7_xScale = scale/4;
let Leaf7_yScale = scale/4;
beginShape();
vertex(wc+(Leaf7_xScale*181)+Leaf7_x,hc+(Leaf7_yScale*844)+Leaf7_y);
vertex(wc+(Leaf7_xScale*161)+Leaf7_x,hc+(Leaf7_yScale*778)+Leaf7_y);
vertex(wc+(Leaf7_xScale*154)+Leaf7_x,hc+(Leaf7_yScale*748)+Leaf7_y);
vertex(wc+(Leaf7_xScale*148)+Leaf7_x,hc+(Leaf7_yScale*738)+Leaf7_y);
vertex(wc+(Leaf7_xScale*141)+Leaf7_x,hc+(Leaf7_yScale*726)+Leaf7_y);
vertex(wc+(Leaf7_xScale*134)+Leaf7_x,hc+(Leaf7_yScale*719)+Leaf7_y);
vertex(wc+(Leaf7_xScale*97)+Leaf7_x,hc+(Leaf7_yScale*720)+Leaf7_y);
vertex(wc+(Leaf7_xScale*84)+Leaf7_x,hc+(Leaf7_yScale*685)+Leaf7_y);
vertex(wc+(Leaf7_xScale*78)+Leaf7_x,hc+(Leaf7_yScale*664)+Leaf7_y);
vertex(wc+(Leaf7_xScale*58)+Leaf7_x,hc+(Leaf7_yScale*634)+Leaf7_y);
vertex(wc+(Leaf7_xScale*29)+Leaf7_x,hc+(Leaf7_yScale*620)+Leaf7_y);
vertex(wc+(Leaf7_xScale*16)+Leaf7_x,hc+(Leaf7_yScale*573)+Leaf7_y);
vertex(wc+(Leaf7_xScale*13)+Leaf7_x,hc+(Leaf7_yScale*537)+Leaf7_y);
vertex(wc+(Leaf7_xScale*28)+Leaf7_x,hc+(Leaf7_yScale*542)+Leaf7_y);
vertex(wc+(Leaf7_xScale*38)+Leaf7_x,hc+(Leaf7_yScale*559)+Leaf7_y);
vertex(wc+(Leaf7_xScale*85)+Leaf7_x,hc+(Leaf7_yScale*575)+Leaf7_y);
vertex(wc+(Leaf7_xScale*109)+Leaf7_x,hc+(Leaf7_yScale*581)+Leaf7_y);
vertex(wc+(Leaf7_xScale*124)+Leaf7_x,hc+(Leaf7_yScale*606)+Leaf7_y);
vertex(wc+(Leaf7_xScale*129)+Leaf7_x,hc+(Leaf7_yScale*619)+Leaf7_y);
vertex(wc+(Leaf7_xScale*141)+Leaf7_x,hc+(Leaf7_yScale*626)+Leaf7_y);
vertex(wc+(Leaf7_xScale*153)+Leaf7_x,hc+(Leaf7_yScale*632)+Leaf7_y);
vertex(wc+(Leaf7_xScale*172)+Leaf7_x,hc+(Leaf7_yScale*647)+Leaf7_y);
vertex(wc+(Leaf7_xScale*176)+Leaf7_x,hc+(Leaf7_yScale*681)+Leaf7_y);
vertex(wc+(Leaf7_xScale*194)+Leaf7_x,hc+(Leaf7_yScale*698)+Leaf7_y);
vertex(wc+(Leaf7_xScale*185)+Leaf7_x,hc+(Leaf7_yScale*711)+Leaf7_y);
vertex(wc+(Leaf7_xScale*180)+Leaf7_x,hc+(Leaf7_yScale*724)+Leaf7_y);
vertex(wc+(Leaf7_xScale*174)+Leaf7_x,hc+(Leaf7_yScale*742)+Leaf7_y);
vertex(wc+(Leaf7_xScale*165)+Leaf7_x,hc+(Leaf7_yScale*758)+Leaf7_y);
vertex(wc+(Leaf7_xScale*173)+Leaf7_x,hc+(Leaf7_yScale*788)+Leaf7_y);
vertex(wc+(Leaf7_xScale*185)+Leaf7_x,hc+(Leaf7_yScale*813)+Leaf7_y);
vertex(wc+(Leaf7_xScale*193)+Leaf7_x,hc+(Leaf7_yScale*832)+Leaf7_y);
endShape(CLOSE);
//ENDLeaf7
}

//Leaf9  BACKMOST MEDIUM
{
stroke(lineColour);
fill(leaf);
let Leaf9_x = -scale*180;
let Leaf9_y = -scale*100;
let Leaf9_xScale = scale/4;
let Leaf9_yScale = scale/4;
beginShape();
vertex(wc+(Leaf9_xScale*151)+Leaf9_x,hc+(Leaf9_yScale*841)+Leaf9_y);
vertex(wc+(Leaf9_xScale*125)+Leaf9_x,hc+(Leaf9_yScale*636)+Leaf9_y);
vertex(wc+(Leaf9_xScale*100)+Leaf9_x,hc+(Leaf9_yScale*511)+Leaf9_y);
vertex(wc+(Leaf9_xScale*105)+Leaf9_x,hc+(Leaf9_yScale*484)+Leaf9_y);
vertex(wc+(Leaf9_xScale*108)+Leaf9_x,hc+(Leaf9_yScale*468)+Leaf9_y);
vertex(wc+(Leaf9_xScale*118)+Leaf9_x,hc+(Leaf9_yScale*442)+Leaf9_y);
vertex(wc+(Leaf9_xScale*128)+Leaf9_x,hc+(Leaf9_yScale*419)+Leaf9_y);
vertex(wc+(Leaf9_xScale*117)+Leaf9_x,hc+(Leaf9_yScale*371)+Leaf9_y);
vertex(wc+(Leaf9_xScale*97)+Leaf9_x,hc+(Leaf9_yScale*344)+Leaf9_y);
vertex(wc+(Leaf9_xScale*96)+Leaf9_x,hc+(Leaf9_yScale*305)+Leaf9_y);
vertex(wc+(Leaf9_xScale*96)+Leaf9_x,hc+(Leaf9_yScale*260)+Leaf9_y);
vertex(wc+(Leaf9_xScale*70)+Leaf9_x,hc+(Leaf9_yScale*238)+Leaf9_y);
vertex(wc+(Leaf9_xScale*36)+Leaf9_x,hc+(Leaf9_yScale*200)+Leaf9_y);
vertex(wc+(Leaf9_xScale*26)+Leaf9_x,hc+(Leaf9_yScale*171)+Leaf9_y);
vertex(wc+(Leaf9_xScale*26)+Leaf9_x,hc+(Leaf9_yScale*155)+Leaf9_y);
vertex(wc+(Leaf9_xScale*15)+Leaf9_x,hc+(Leaf9_yScale*137)+Leaf9_y);
vertex(wc+(Leaf9_xScale*13)+Leaf9_x,hc+(Leaf9_yScale*145)+Leaf9_y);
vertex(wc+(Leaf9_xScale*10)+Leaf9_x,hc+(Leaf9_yScale*163)+Leaf9_y);
vertex(wc+(Leaf9_xScale*8)+Leaf9_x,hc+(Leaf9_yScale*205)+Leaf9_y);
vertex(wc+(Leaf9_xScale*19)+Leaf9_x,hc+(Leaf9_yScale*233)+Leaf9_y);
vertex(wc+(Leaf9_xScale*18)+Leaf9_x,hc+(Leaf9_yScale*272)+Leaf9_y);
vertex(wc+(Leaf9_xScale*19)+Leaf9_x,hc+(Leaf9_yScale*313)+Leaf9_y);
vertex(wc+(Leaf9_xScale*28)+Leaf9_x,hc+(Leaf9_yScale*321)+Leaf9_y);
vertex(wc+(Leaf9_xScale*26)+Leaf9_x,hc+(Leaf9_yScale*343)+Leaf9_y);
vertex(wc+(Leaf9_xScale*23)+Leaf9_x,hc+(Leaf9_yScale*369)+Leaf9_y);
vertex(wc+(Leaf9_xScale*53)+Leaf9_x,hc+(Leaf9_yScale*407)+Leaf9_y);
vertex(wc+(Leaf9_xScale*89)+Leaf9_x,hc+(Leaf9_yScale*513)+Leaf9_y);
vertex(wc+(Leaf9_xScale*97)+Leaf9_x,hc+(Leaf9_yScale*558)+Leaf9_y);
vertex(wc+(Leaf9_xScale*112)+Leaf9_x,hc+(Leaf9_yScale*626)+Leaf9_y);
vertex(wc+(Leaf9_xScale*115)+Leaf9_x,hc+(Leaf9_yScale*706)+Leaf9_y);
vertex(wc+(Leaf9_xScale*128)+Leaf9_x,hc+(Leaf9_yScale*844)+Leaf9_y);
vertex(wc+(Leaf9_xScale*80)+Leaf9_x,hc+(Leaf9_yScale*803)+Leaf9_y);
endShape(CLOSE);
//ENDLeaf9
}

//Leaf1  BIG LEAF
{
stroke(lineColour);
fill(leaf);
let Leaf1_x = -scale*180;
let Leaf1_y = -scale*110;
let Leaf1_xScale = scale/4;
let Leaf1_yScale = scale/4;
beginShape();
vertex(wc+(Leaf1_xScale*153)+Leaf1_x,hc+(Leaf1_yScale*717)+Leaf1_y);
vertex(wc+(Leaf1_xScale*176)+Leaf1_x,hc+(Leaf1_yScale*559)+Leaf1_y);
vertex(wc+(Leaf1_xScale*185)+Leaf1_x,hc+(Leaf1_yScale*493)+Leaf1_y);
vertex(wc+(Leaf1_xScale*180)+Leaf1_x,hc+(Leaf1_yScale*475)+Leaf1_y);
vertex(wc+(Leaf1_xScale*149)+Leaf1_x,hc+(Leaf1_yScale*441)+Leaf1_y);
vertex(wc+(Leaf1_xScale*148)+Leaf1_x,hc+(Leaf1_yScale*426)+Leaf1_y);
vertex(wc+(Leaf1_xScale*144)+Leaf1_x,hc+(Leaf1_yScale*409)+Leaf1_y);
vertex(wc+(Leaf1_xScale*156)+Leaf1_x,hc+(Leaf1_yScale*374)+Leaf1_y);
vertex(wc+(Leaf1_xScale*155)+Leaf1_x,hc+(Leaf1_yScale*358)+Leaf1_y);
vertex(wc+(Leaf1_xScale*163)+Leaf1_x,hc+(Leaf1_yScale*342)+Leaf1_y);
vertex(wc+(Leaf1_xScale*163)+Leaf1_x,hc+(Leaf1_yScale*320)+Leaf1_y);
vertex(wc+(Leaf1_xScale*172)+Leaf1_x,hc+(Leaf1_yScale*292)+Leaf1_y);
vertex(wc+(Leaf1_xScale*185)+Leaf1_x,hc+(Leaf1_yScale*277)+Leaf1_y);
vertex(wc+(Leaf1_xScale*192)+Leaf1_x,hc+(Leaf1_yScale*263)+Leaf1_y);
vertex(wc+(Leaf1_xScale*212)+Leaf1_x,hc+(Leaf1_yScale*252)+Leaf1_y);
vertex(wc+(Leaf1_xScale*222)+Leaf1_x,hc+(Leaf1_yScale*221)+Leaf1_y);
vertex(wc+(Leaf1_xScale*236)+Leaf1_x,hc+(Leaf1_yScale*200)+Leaf1_y);
vertex(wc+(Leaf1_xScale*274)+Leaf1_x,hc+(Leaf1_yScale*186)+Leaf1_y);
vertex(wc+(Leaf1_xScale*286)+Leaf1_x,hc+(Leaf1_yScale*173)+Leaf1_y);
vertex(wc+(Leaf1_xScale*303)+Leaf1_x,hc+(Leaf1_yScale*150)+Leaf1_y);
vertex(wc+(Leaf1_xScale*318)+Leaf1_x,hc+(Leaf1_yScale*143)+Leaf1_y);
vertex(wc+(Leaf1_xScale*330)+Leaf1_x,hc+(Leaf1_yScale*136)+Leaf1_y);
vertex(wc+(Leaf1_xScale*332)+Leaf1_x,hc+(Leaf1_yScale*138)+Leaf1_y);
vertex(wc+(Leaf1_xScale*329)+Leaf1_x,hc+(Leaf1_yScale*143)+Leaf1_y);
vertex(wc+(Leaf1_xScale*327)+Leaf1_x,hc+(Leaf1_yScale*158)+Leaf1_y);
vertex(wc+(Leaf1_xScale*325)+Leaf1_x,hc+(Leaf1_yScale*176)+Leaf1_y);
vertex(wc+(Leaf1_xScale*327)+Leaf1_x,hc+(Leaf1_yScale*195)+Leaf1_y);
vertex(wc+(Leaf1_xScale*333)+Leaf1_x,hc+(Leaf1_yScale*219)+Leaf1_y);
vertex(wc+(Leaf1_xScale*334)+Leaf1_x,hc+(Leaf1_yScale*248)+Leaf1_y);
vertex(wc+(Leaf1_xScale*324)+Leaf1_x,hc+(Leaf1_yScale*271)+Leaf1_y);
vertex(wc+(Leaf1_xScale*325)+Leaf1_x,hc+(Leaf1_yScale*295)+Leaf1_y);
vertex(wc+(Leaf1_xScale*325)+Leaf1_x,hc+(Leaf1_yScale*313)+Leaf1_y);
vertex(wc+(Leaf1_xScale*316)+Leaf1_x,hc+(Leaf1_yScale*334)+Leaf1_y);
vertex(wc+(Leaf1_xScale*311)+Leaf1_x,hc+(Leaf1_yScale*362)+Leaf1_y);
vertex(wc+(Leaf1_xScale*295)+Leaf1_x,hc+(Leaf1_yScale*398)+Leaf1_y);
vertex(wc+(Leaf1_xScale*295)+Leaf1_x,hc+(Leaf1_yScale*425)+Leaf1_y);
vertex(wc+(Leaf1_xScale*283)+Leaf1_x,hc+(Leaf1_yScale*442)+Leaf1_y);
vertex(wc+(Leaf1_xScale*265)+Leaf1_x,hc+(Leaf1_yScale*460)+Leaf1_y);
vertex(wc+(Leaf1_xScale*259)+Leaf1_x,hc+(Leaf1_yScale*476)+Leaf1_y);
vertex(wc+(Leaf1_xScale*236)+Leaf1_x,hc+(Leaf1_yScale*482)+Leaf1_y);
vertex(wc+(Leaf1_xScale*212)+Leaf1_x,hc+(Leaf1_yScale*487)+Leaf1_y);
vertex(wc+(Leaf1_xScale*201)+Leaf1_x,hc+(Leaf1_yScale*491)+Leaf1_y);
vertex(wc+(Leaf1_xScale*191)+Leaf1_x,hc+(Leaf1_yScale*499)+Leaf1_y);
vertex(wc+(Leaf1_xScale*186)+Leaf1_x,hc+(Leaf1_yScale*534)+Leaf1_y);
vertex(wc+(Leaf1_xScale*180)+Leaf1_x,hc+(Leaf1_yScale*594)+Leaf1_y);
vertex(wc+(Leaf1_xScale*170)+Leaf1_x,hc+(Leaf1_yScale*712)+Leaf1_y);
vertex(wc+(Leaf1_xScale*164)+Leaf1_x,hc+(Leaf1_yScale*870)+Leaf1_y);
vertex(wc+(Leaf1_xScale*167)+Leaf1_x,hc+(Leaf1_yScale*923)+Leaf1_y);
vertex(wc+(Leaf1_xScale*126)+Leaf1_x,hc+(Leaf1_yScale*897)+Leaf1_y);
vertex(wc+(Leaf1_xScale*138)+Leaf1_x,hc+(Leaf1_yScale*843)+Leaf1_y);
endShape(CLOSE);
//ENDLeaf1
}

//Leaf5  CUTTY CUTS
{
stroke(lineColour);
fill(leaf);
let Leaf5_x = -scale*180;
let Leaf5_y = -scale*110;
let Leaf5_xScale = scale/4;
let Leaf5_yScale = scale/4;
beginShape();
vertex(wc+(Leaf5_xScale*151)+Leaf5_x,hc+(Leaf5_yScale*843)+Leaf5_y);
// vertex(wc+(Leaf5_xScale*147)+Leaf5_x,hc+(Leaf5_yScale*603)+Leaf5_y);
// vertex(wc+(Leaf5_xScale*145)+Leaf5_x,hc+(Leaf5_yScale*502)+Leaf5_y);
// vertex(wc+(Leaf5_xScale*153)+Leaf5_x,hc+(Leaf5_yScale*486)+Leaf5_y);
vertex(wc+(Leaf5_xScale*160)+Leaf5_x,hc+(Leaf5_yScale*474)+Leaf5_y);
vertex(wc+(Leaf5_xScale*159)+Leaf5_x,hc+(Leaf5_yScale*461)+Leaf5_y);
vertex(wc+(Leaf5_xScale*159)+Leaf5_x,hc+(Leaf5_yScale*440)+Leaf5_y);
vertex(wc+(Leaf5_xScale*162)+Leaf5_x,hc+(Leaf5_yScale*426)+Leaf5_y);
vertex(wc+(Leaf5_xScale*169)+Leaf5_x,hc+(Leaf5_yScale*411)+Leaf5_y);
vertex(wc+(Leaf5_xScale*176)+Leaf5_x,hc+(Leaf5_yScale*389)+Leaf5_y);
vertex(wc+(Leaf5_xScale*196)+Leaf5_x,hc+(Leaf5_yScale*363)+Leaf5_y);
vertex(wc+(Leaf5_xScale*190)+Leaf5_x,hc+(Leaf5_yScale*343)+Leaf5_y);
vertex(wc+(Leaf5_xScale*187)+Leaf5_x,hc+(Leaf5_yScale*333)+Leaf5_y);
vertex(wc+(Leaf5_xScale*186)+Leaf5_x,hc+(Leaf5_yScale*315)+Leaf5_y);
vertex(wc+(Leaf5_xScale*188)+Leaf5_x,hc+(Leaf5_yScale*302)+Leaf5_y);
vertex(wc+(Leaf5_xScale*179)+Leaf5_x,hc+(Leaf5_yScale*282)+Leaf5_y);
vertex(wc+(Leaf5_xScale*174)+Leaf5_x,hc+(Leaf5_yScale*260)+Leaf5_y);
vertex(wc+(Leaf5_xScale*161)+Leaf5_x,hc+(Leaf5_yScale*213)+Leaf5_y);
vertex(wc+(Leaf5_xScale*142)+Leaf5_x,hc+(Leaf5_yScale*198)+Leaf5_y);
vertex(wc+(Leaf5_xScale*130)+Leaf5_x,hc+(Leaf5_yScale*185)+Leaf5_y);
vertex(wc+(Leaf5_xScale*114)+Leaf5_x,hc+(Leaf5_yScale*167)+Leaf5_y);
vertex(wc+(Leaf5_xScale*87)+Leaf5_x,hc+(Leaf5_yScale*153)+Leaf5_y);
vertex(wc+(Leaf5_xScale*72)+Leaf5_x,hc+(Leaf5_yScale*144)+Leaf5_y);
vertex(wc+(Leaf5_xScale*56)+Leaf5_x,hc+(Leaf5_yScale*130)+Leaf5_y);
vertex(wc+(Leaf5_xScale*47)+Leaf5_x,hc+(Leaf5_yScale*123)+Leaf5_y);
vertex(wc+(Leaf5_xScale*35)+Leaf5_x,hc+(Leaf5_yScale*120)+Leaf5_y);
vertex(wc+(Leaf5_xScale*48)+Leaf5_x,hc+(Leaf5_yScale*132)+Leaf5_y);
vertex(wc+(Leaf5_xScale*49)+Leaf5_x,hc+(Leaf5_yScale*141)+Leaf5_y);
vertex(wc+(Leaf5_xScale*47)+Leaf5_x,hc+(Leaf5_yScale*152)+Leaf5_y);
vertex(wc+(Leaf5_xScale*50)+Leaf5_x,hc+(Leaf5_yScale*172)+Leaf5_y);
vertex(wc+(Leaf5_xScale*59)+Leaf5_x,hc+(Leaf5_yScale*203)+Leaf5_y);
vertex(wc+(Leaf5_xScale*65)+Leaf5_x,hc+(Leaf5_yScale*226)+Leaf5_y);
vertex(wc+(Leaf5_xScale*86)+Leaf5_x,hc+(Leaf5_yScale*229)+Leaf5_y);
vertex(wc+(Leaf5_xScale*84)+Leaf5_x,hc+(Leaf5_yScale*242)+Leaf5_y);
vertex(wc+(Leaf5_xScale*85)+Leaf5_x,hc+(Leaf5_yScale*247)+Leaf5_y);
vertex(wc+(Leaf5_xScale*90)+Leaf5_x,hc+(Leaf5_yScale*250)+Leaf5_y);
vertex(wc+(Leaf5_xScale*99)+Leaf5_x,hc+(Leaf5_yScale*255)+Leaf5_y);
vertex(wc+(Leaf5_xScale*94)+Leaf5_x,hc+(Leaf5_yScale*272)+Leaf5_y);
vertex(wc+(Leaf5_xScale*95)+Leaf5_x,hc+(Leaf5_yScale*287)+Leaf5_y);
vertex(wc+(Leaf5_xScale*108)+Leaf5_x,hc+(Leaf5_yScale*295)+Leaf5_y);
vertex(wc+(Leaf5_xScale*114)+Leaf5_x,hc+(Leaf5_yScale*301)+Leaf5_y);
vertex(wc+(Leaf5_xScale*108)+Leaf5_x,hc+(Leaf5_yScale*321)+Leaf5_y);
vertex(wc+(Leaf5_xScale*115)+Leaf5_x,hc+(Leaf5_yScale*339)+Leaf5_y);
vertex(wc+(Leaf5_xScale*150)+Leaf5_x,hc+(Leaf5_yScale*480)+Leaf5_y);
vertex(wc+(Leaf5_xScale*145)+Leaf5_x,hc+(Leaf5_yScale*575)+Leaf5_y);
vertex(wc+(Leaf5_xScale*134)+Leaf5_x,hc+(Leaf5_yScale*653)+Leaf5_y);
vertex(wc+(Leaf5_xScale*130)+Leaf5_x,hc+(Leaf5_yScale*746)+Leaf5_y);
vertex(wc+(Leaf5_xScale*125)+Leaf5_x,hc+(Leaf5_yScale*846)+Leaf5_y);
endShape(CLOSE);
//ENDLeaf5
}

pop();

pop();






push();

MleafTrack = (scale*movex) + map(mouseX, 0, width, -(scale*1), (scale*33), true);

translate(MleafTrack-scale*20,scale*10);

push();

angleMode(DEGREES);
rotate(30);
translate(scale*60,-scale*10);


//Leaf2  LITTLE UNDER BIG
{
stroke(lineColour);
fill(leaf);
let Leaf2_x = -scale*180;
let Leaf2_y = -scale*110;
let Leaf2_xScale = scale/4;
let Leaf2_yScale = scale/4;
beginShape();
vertex(wc+(Leaf2_xScale*190)+Leaf2_x,hc+(Leaf2_yScale*854)+Leaf2_y);
vertex(wc+(Leaf2_xScale*204)+Leaf2_x,hc+(Leaf2_yScale*661)+Leaf2_y);
vertex(wc+(Leaf2_xScale*209)+Leaf2_x,hc+(Leaf2_yScale*534)+Leaf2_y);
vertex(wc+(Leaf2_xScale*217)+Leaf2_x,hc+(Leaf2_yScale*526)+Leaf2_y);
vertex(wc+(Leaf2_xScale*221)+Leaf2_x,hc+(Leaf2_yScale*524)+Leaf2_y);
vertex(wc+(Leaf2_xScale*227)+Leaf2_x,hc+(Leaf2_yScale*518)+Leaf2_y);
vertex(wc+(Leaf2_xScale*230)+Leaf2_x,hc+(Leaf2_yScale*510)+Leaf2_y);
vertex(wc+(Leaf2_xScale*232)+Leaf2_x,hc+(Leaf2_yScale*500)+Leaf2_y);
vertex(wc+(Leaf2_xScale*234)+Leaf2_x,hc+(Leaf2_yScale*493)+Leaf2_y);
vertex(wc+(Leaf2_xScale*237)+Leaf2_x,hc+(Leaf2_yScale*465)+Leaf2_y);
vertex(wc+(Leaf2_xScale*226)+Leaf2_x,hc+(Leaf2_yScale*406)+Leaf2_y);
vertex(wc+(Leaf2_xScale*220)+Leaf2_x,hc+(Leaf2_yScale*379)+Leaf2_y);
vertex(wc+(Leaf2_xScale*220)+Leaf2_x,hc+(Leaf2_yScale*372)+Leaf2_y);
vertex(wc+(Leaf2_xScale*207)+Leaf2_x,hc+(Leaf2_yScale*387)+Leaf2_y);
vertex(wc+(Leaf2_xScale*204)+Leaf2_x,hc+(Leaf2_yScale*407)+Leaf2_y);
vertex(wc+(Leaf2_xScale*202)+Leaf2_x,hc+(Leaf2_yScale*437)+Leaf2_y);
vertex(wc+(Leaf2_xScale*198)+Leaf2_x,hc+(Leaf2_yScale*453)+Leaf2_y);
vertex(wc+(Leaf2_xScale*192)+Leaf2_x,hc+(Leaf2_yScale*467)+Leaf2_y);
vertex(wc+(Leaf2_xScale*192)+Leaf2_x,hc+(Leaf2_yScale*525)+Leaf2_y);
vertex(wc+(Leaf2_xScale*204)+Leaf2_x,hc+(Leaf2_yScale*535)+Leaf2_y);
vertex(wc+(Leaf2_xScale*194)+Leaf2_x,hc+(Leaf2_yScale*662)+Leaf2_y);
vertex(wc+(Leaf2_xScale*175)+Leaf2_x,hc+(Leaf2_yScale*758)+Leaf2_y);
vertex(wc+(Leaf2_xScale*161)+Leaf2_x,hc+(Leaf2_yScale*841)+Leaf2_y);
endShape(CLOSE);
//ENDLeaf2
}

//Leaf6  DROOPS RIGHT SMALL
{
stroke(lineColour);
fill(leaf);
let Leaf6_x = -scale*180;
let Leaf6_y = -scale*110;
let Leaf6_xScale = scale/4;
let Leaf6_yScale = scale/4;
beginShape();
vertex(wc+(Leaf6_xScale*183)+Leaf6_x,hc+(Leaf6_yScale*837)+Leaf6_y);
vertex(wc+(Leaf6_xScale*211)+Leaf6_x,hc+(Leaf6_yScale*662)+Leaf6_y);
vertex(wc+(Leaf6_xScale*216)+Leaf6_x,hc+(Leaf6_yScale*613)+Leaf6_y);
vertex(wc+(Leaf6_xScale*225)+Leaf6_x,hc+(Leaf6_yScale*577)+Leaf6_y);
vertex(wc+(Leaf6_xScale*226)+Leaf6_x,hc+(Leaf6_yScale*546)+Leaf6_y);
vertex(wc+(Leaf6_xScale*249)+Leaf6_x,hc+(Leaf6_yScale*513)+Leaf6_y);
vertex(wc+(Leaf6_xScale*264)+Leaf6_x,hc+(Leaf6_yScale*503)+Leaf6_y);
vertex(wc+(Leaf6_xScale*282)+Leaf6_x,hc+(Leaf6_yScale*500)+Leaf6_y);
vertex(wc+(Leaf6_xScale*321)+Leaf6_x,hc+(Leaf6_yScale*482)+Leaf6_y);
vertex(wc+(Leaf6_xScale*322)+Leaf6_x,hc+(Leaf6_yScale*490)+Leaf6_y);
vertex(wc+(Leaf6_xScale*319)+Leaf6_x,hc+(Leaf6_yScale*499)+Leaf6_y);
vertex(wc+(Leaf6_xScale*302)+Leaf6_x,hc+(Leaf6_yScale*511)+Leaf6_y);
vertex(wc+(Leaf6_xScale*278)+Leaf6_x,hc+(Leaf6_yScale*525)+Leaf6_y);
vertex(wc+(Leaf6_xScale*261)+Leaf6_x,hc+(Leaf6_yScale*546)+Leaf6_y);
vertex(wc+(Leaf6_xScale*245)+Leaf6_x,hc+(Leaf6_yScale*567)+Leaf6_y);
vertex(wc+(Leaf6_xScale*231)+Leaf6_x,hc+(Leaf6_yScale*584)+Leaf6_y);
vertex(wc+(Leaf6_xScale*227)+Leaf6_x,hc+(Leaf6_yScale*593)+Leaf6_y);
vertex(wc+(Leaf6_xScale*223)+Leaf6_x,hc+(Leaf6_yScale*604)+Leaf6_y);
vertex(wc+(Leaf6_xScale*219)+Leaf6_x,hc+(Leaf6_yScale*625)+Leaf6_y);
vertex(wc+(Leaf6_xScale*218)+Leaf6_x,hc+(Leaf6_yScale*646)+Leaf6_y);
vertex(wc+(Leaf6_xScale*217)+Leaf6_x,hc+(Leaf6_yScale*660)+Leaf6_y);
vertex(wc+(Leaf6_xScale*214)+Leaf6_x,hc+(Leaf6_yScale*682)+Leaf6_y);
vertex(wc+(Leaf6_xScale*205)+Leaf6_x,hc+(Leaf6_yScale*832)+Leaf6_y);
endShape(CLOSE);
//ENDLeaf6
}

//Leaf8  DROOPS RIGHT FRONTBOTBIG
{
stroke(lineColour);
fill(leaf);
let Leaf8_x = -scale*180;
let Leaf8_y = -scale*110;
let Leaf8_xScale = scale/4;
let Leaf8_yScale = scale/4;
beginShape();
vertex(wc+(Leaf8_xScale*204)+Leaf8_x,hc+(Leaf8_yScale*841)+Leaf8_y);
vertex(wc+(Leaf8_xScale*216)+Leaf8_x,hc+(Leaf8_yScale*738)+Leaf8_y);
vertex(wc+(Leaf8_xScale*210)+Leaf8_x,hc+(Leaf8_yScale*713)+Leaf8_y);
vertex(wc+(Leaf8_xScale*209)+Leaf8_x,hc+(Leaf8_yScale*695)+Leaf8_y);
vertex(wc+(Leaf8_xScale*212)+Leaf8_x,hc+(Leaf8_yScale*652)+Leaf8_y);
vertex(wc+(Leaf8_xScale*225)+Leaf8_x,hc+(Leaf8_yScale*632)+Leaf8_y);
vertex(wc+(Leaf8_xScale*253)+Leaf8_x,hc+(Leaf8_yScale*598)+Leaf8_y);
vertex(wc+(Leaf8_xScale*281)+Leaf8_x,hc+(Leaf8_yScale*579)+Leaf8_y);
vertex(wc+(Leaf8_xScale*309)+Leaf8_x,hc+(Leaf8_yScale*560)+Leaf8_y);
vertex(wc+(Leaf8_xScale*343)+Leaf8_x,hc+(Leaf8_yScale*543)+Leaf8_y);
vertex(wc+(Leaf8_xScale*360)+Leaf8_x,hc+(Leaf8_yScale*530)+Leaf8_y);
vertex(wc+(Leaf8_xScale*367)+Leaf8_x,hc+(Leaf8_yScale*530)+Leaf8_y);
vertex(wc+(Leaf8_xScale*359)+Leaf8_x,hc+(Leaf8_yScale*554)+Leaf8_y);
vertex(wc+(Leaf8_xScale*340)+Leaf8_x,hc+(Leaf8_yScale*580)+Leaf8_y);
vertex(wc+(Leaf8_xScale*327)+Leaf8_x,hc+(Leaf8_yScale*620)+Leaf8_y);
vertex(wc+(Leaf8_xScale*314)+Leaf8_x,hc+(Leaf8_yScale*651)+Leaf8_y);
vertex(wc+(Leaf8_xScale*300)+Leaf8_x,hc+(Leaf8_yScale*660)+Leaf8_y);
vertex(wc+(Leaf8_xScale*300)+Leaf8_x,hc+(Leaf8_yScale*674)+Leaf8_y);
vertex(wc+(Leaf8_xScale*298)+Leaf8_x,hc+(Leaf8_yScale*686)+Leaf8_y);
vertex(wc+(Leaf8_xScale*289)+Leaf8_x,hc+(Leaf8_yScale*694)+Leaf8_y);
vertex(wc+(Leaf8_xScale*274)+Leaf8_x,hc+(Leaf8_yScale*704)+Leaf8_y);
vertex(wc+(Leaf8_xScale*262)+Leaf8_x,hc+(Leaf8_yScale*716)+Leaf8_y);
vertex(wc+(Leaf8_xScale*239)+Leaf8_x,hc+(Leaf8_yScale*732)+Leaf8_y);
vertex(wc+(Leaf8_xScale*226)+Leaf8_x,hc+(Leaf8_yScale*743)+Leaf8_y);
vertex(wc+(Leaf8_xScale*220)+Leaf8_x,hc+(Leaf8_yScale*751)+Leaf8_y);
vertex(wc+(Leaf8_xScale*224)+Leaf8_x,hc+(Leaf8_yScale*839)+Leaf8_y);
endShape(CLOSE);
//ENDLeaf8
}

//Leaf10 LEFTMOST
{
stroke(lineColour);
fill(leaf);
let Leaf10_x = -scale*185;
let Leaf10_y = -scale*120;
let Leaf10_xScale = scale/4;
let Leaf10_yScale = scale/4;
beginShape();
vertex(wc+(Leaf10_xScale*142)+Leaf10_x,hc+(Leaf10_yScale*851)+Leaf10_y);
vertex(wc+(Leaf10_xScale*124)+Leaf10_x,hc+(Leaf10_yScale*746)+Leaf10_y);
vertex(wc+(Leaf10_xScale*107)+Leaf10_x,hc+(Leaf10_yScale*717)+Leaf10_y);
vertex(wc+(Leaf10_xScale*102)+Leaf10_x,hc+(Leaf10_yScale*703)+Leaf10_y);
vertex(wc+(Leaf10_xScale*102)+Leaf10_x,hc+(Leaf10_yScale*681)+Leaf10_y);
vertex(wc+(Leaf10_xScale*101)+Leaf10_x,hc+(Leaf10_yScale*639)+Leaf10_y);
vertex(wc+(Leaf10_xScale*88)+Leaf10_x,hc+(Leaf10_yScale*607)+Leaf10_y);
vertex(wc+(Leaf10_xScale*60)+Leaf10_x,hc+(Leaf10_yScale*583)+Leaf10_y);
vertex(wc+(Leaf10_xScale*42)+Leaf10_x,hc+(Leaf10_yScale*547)+Leaf10_y);
vertex(wc+(Leaf10_xScale*35)+Leaf10_x,hc+(Leaf10_yScale*518)+Leaf10_y);
vertex(wc+(Leaf10_xScale*21)+Leaf10_x,hc+(Leaf10_yScale*507)+Leaf10_y);
vertex(wc+(Leaf10_xScale*23)+Leaf10_x,hc+(Leaf10_yScale*526)+Leaf10_y);
vertex(wc+(Leaf10_xScale*16)+Leaf10_x,hc+(Leaf10_yScale*550)+Leaf10_y);
vertex(wc+(Leaf10_xScale*8)+Leaf10_x,hc+(Leaf10_yScale*614)+Leaf10_y);
vertex(wc+(Leaf10_xScale*15)+Leaf10_x,hc+(Leaf10_yScale*647)+Leaf10_y);
vertex(wc+(Leaf10_xScale*56)+Leaf10_x,hc+(Leaf10_yScale*689)+Leaf10_y);
vertex(wc+(Leaf10_xScale*80)+Leaf10_x,hc+(Leaf10_yScale*740)+Leaf10_y);
vertex(wc+(Leaf10_xScale*94)+Leaf10_x,hc+(Leaf10_yScale*740)+Leaf10_y);
vertex(wc+(Leaf10_xScale*117)+Leaf10_x,hc+(Leaf10_yScale*752)+Leaf10_y);
vertex(wc+(Leaf10_xScale*118)+Leaf10_x,hc+(Leaf10_yScale*761)+Leaf10_y);
vertex(wc+(Leaf10_xScale*130)+Leaf10_x,hc+(Leaf10_yScale*848)+Leaf10_y);
endShape(CLOSE);
//ENDLeaf10
}

pop();

pop();






push();

LleafTrack = (scale*movex) + map(mouseX, 0, width, -(scale*1), (scale*36), true);

translate(LleafTrack-scale*20,scale*10);

push();

angleMode(DEGREES);
rotate(30);
translate(scale*60,-scale*10);


//Leaf3  DROOPS RIGHT ABOVE
{
stroke(lineColour);
fill(leaf);
let Leaf3_x = -scale*180;
let Leaf3_y = -scale*110;
let Leaf3_xScale = scale/4;
let Leaf3_yScale = scale/4;
beginShape();
vertex(wc+(Leaf3_xScale*180)+Leaf3_x,hc+(Leaf3_yScale*849)+Leaf3_y);
vertex(wc+(Leaf3_xScale*229)+Leaf3_x,hc+(Leaf3_yScale*638)+Leaf3_y);
vertex(wc+(Leaf3_xScale*249)+Leaf3_x,hc+(Leaf3_yScale*575)+Leaf3_y);
vertex(wc+(Leaf3_xScale*261)+Leaf3_x,hc+(Leaf3_yScale*554)+Leaf3_y);
vertex(wc+(Leaf3_xScale*277)+Leaf3_x,hc+(Leaf3_yScale*511)+Leaf3_y);
vertex(wc+(Leaf3_xScale*291)+Leaf3_x,hc+(Leaf3_yScale*486)+Leaf3_y);
vertex(wc+(Leaf3_xScale*321)+Leaf3_x,hc+(Leaf3_yScale*467)+Leaf3_y);
vertex(wc+(Leaf3_xScale*326)+Leaf3_x,hc+(Leaf3_yScale*450)+Leaf3_y);
vertex(wc+(Leaf3_xScale*340)+Leaf3_x,hc+(Leaf3_yScale*442)+Leaf3_y);
vertex(wc+(Leaf3_xScale*357)+Leaf3_x,hc+(Leaf3_yScale*440)+Leaf3_y);
vertex(wc+(Leaf3_xScale*385)+Leaf3_x,hc+(Leaf3_yScale*426)+Leaf3_y);
vertex(wc+(Leaf3_xScale*402)+Leaf3_x,hc+(Leaf3_yScale*418)+Leaf3_y);
vertex(wc+(Leaf3_xScale*417)+Leaf3_x,hc+(Leaf3_yScale*424)+Leaf3_y);
vertex(wc+(Leaf3_xScale*460)+Leaf3_x,hc+(Leaf3_yScale*425)+Leaf3_y);
vertex(wc+(Leaf3_xScale*473)+Leaf3_x,hc+(Leaf3_yScale*428)+Leaf3_y);
vertex(wc+(Leaf3_xScale*481)+Leaf3_x,hc+(Leaf3_yScale*444)+Leaf3_y);
vertex(wc+(Leaf3_xScale*494)+Leaf3_x,hc+(Leaf3_yScale*448)+Leaf3_y);
vertex(wc+(Leaf3_xScale*496)+Leaf3_x,hc+(Leaf3_yScale*453)+Leaf3_y);
vertex(wc+(Leaf3_xScale*486)+Leaf3_x,hc+(Leaf3_yScale*453)+Leaf3_y);
vertex(wc+(Leaf3_xScale*476)+Leaf3_x,hc+(Leaf3_yScale*450)+Leaf3_y);
vertex(wc+(Leaf3_xScale*472)+Leaf3_x,hc+(Leaf3_yScale*454)+Leaf3_y);
vertex(wc+(Leaf3_xScale*452)+Leaf3_x,hc+(Leaf3_yScale*458)+Leaf3_y);
vertex(wc+(Leaf3_xScale*441)+Leaf3_x,hc+(Leaf3_yScale*457)+Leaf3_y);
vertex(wc+(Leaf3_xScale*420)+Leaf3_x,hc+(Leaf3_yScale*457)+Leaf3_y);
vertex(wc+(Leaf3_xScale*408)+Leaf3_x,hc+(Leaf3_yScale*475)+Leaf3_y);
vertex(wc+(Leaf3_xScale*399)+Leaf3_x,hc+(Leaf3_yScale*486)+Leaf3_y);
vertex(wc+(Leaf3_xScale*379)+Leaf3_x,hc+(Leaf3_yScale*492)+Leaf3_y);
vertex(wc+(Leaf3_xScale*365)+Leaf3_x,hc+(Leaf3_yScale*496)+Leaf3_y);
vertex(wc+(Leaf3_xScale*355)+Leaf3_x,hc+(Leaf3_yScale*507)+Leaf3_y);
vertex(wc+(Leaf3_xScale*337)+Leaf3_x,hc+(Leaf3_yScale*514)+Leaf3_y);
vertex(wc+(Leaf3_xScale*322)+Leaf3_x,hc+(Leaf3_yScale*517)+Leaf3_y);
vertex(wc+(Leaf3_xScale*309)+Leaf3_x,hc+(Leaf3_yScale*533)+Leaf3_y);
vertex(wc+(Leaf3_xScale*288)+Leaf3_x,hc+(Leaf3_yScale*539)+Leaf3_y);
vertex(wc+(Leaf3_xScale*276)+Leaf3_x,hc+(Leaf3_yScale*549)+Leaf3_y);
vertex(wc+(Leaf3_xScale*267)+Leaf3_x,hc+(Leaf3_yScale*559)+Leaf3_y);
vertex(wc+(Leaf3_xScale*259)+Leaf3_x,hc+(Leaf3_yScale*564)+Leaf3_y);
vertex(wc+(Leaf3_xScale*249)+Leaf3_x,hc+(Leaf3_yScale*594)+Leaf3_y);
vertex(wc+(Leaf3_xScale*233)+Leaf3_x,hc+(Leaf3_yScale*645)+Leaf3_y);
vertex(wc+(Leaf3_xScale*227)+Leaf3_x,hc+(Leaf3_yScale*692)+Leaf3_y);
vertex(wc+(Leaf3_xScale*224)+Leaf3_x,hc+(Leaf3_yScale*731)+Leaf3_y);
vertex(wc+(Leaf3_xScale*212)+Leaf3_x,hc+(Leaf3_yScale*841)+Leaf3_y);
endShape(CLOSE);
//ENDLeaf3
}

//Leaf4  DROOPS RIGHT BELLOW
{
stroke(lineColour);
fill(leaf);
let Leaf4_x = -scale*180;
let Leaf4_y = -scale*110;
let Leaf4_xScale = scale/4;
let Leaf4_yScale = scale/4;
beginShape();
vertex(wc+(Leaf4_xScale*198)+Leaf4_x,hc+(Leaf4_yScale*837)+Leaf4_y);
vertex(wc+(Leaf4_xScale*235)+Leaf4_x,hc+(Leaf4_yScale*713)+Leaf4_y);
vertex(wc+(Leaf4_xScale*245)+Leaf4_x,hc+(Leaf4_yScale*665)+Leaf4_y);
vertex(wc+(Leaf4_xScale*257)+Leaf4_x,hc+(Leaf4_yScale*629)+Leaf4_y);
vertex(wc+(Leaf4_xScale*275)+Leaf4_x,hc+(Leaf4_yScale*605)+Leaf4_y);
vertex(wc+(Leaf4_xScale*289)+Leaf4_x,hc+(Leaf4_yScale*573)+Leaf4_y);
vertex(wc+(Leaf4_xScale*307)+Leaf4_x,hc+(Leaf4_yScale*549)+Leaf4_y);
vertex(wc+(Leaf4_xScale*314)+Leaf4_x,hc+(Leaf4_yScale*537)+Leaf4_y);
vertex(wc+(Leaf4_xScale*330)+Leaf4_x,hc+(Leaf4_yScale*526)+Leaf4_y);
vertex(wc+(Leaf4_xScale*359)+Leaf4_x,hc+(Leaf4_yScale*516)+Leaf4_y);
vertex(wc+(Leaf4_xScale*380)+Leaf4_x,hc+(Leaf4_yScale*512)+Leaf4_y);
vertex(wc+(Leaf4_xScale*427)+Leaf4_x,hc+(Leaf4_yScale*492)+Leaf4_y);
vertex(wc+(Leaf4_xScale*451)+Leaf4_x,hc+(Leaf4_yScale*490)+Leaf4_y);
vertex(wc+(Leaf4_xScale*478)+Leaf4_x,hc+(Leaf4_yScale*496)+Leaf4_y);
vertex(wc+(Leaf4_xScale*492)+Leaf4_x,hc+(Leaf4_yScale*500)+Leaf4_y);
vertex(wc+(Leaf4_xScale*490)+Leaf4_x,hc+(Leaf4_yScale*504)+Leaf4_y);
vertex(wc+(Leaf4_xScale*481)+Leaf4_x,hc+(Leaf4_yScale*507)+Leaf4_y);
vertex(wc+(Leaf4_xScale*471)+Leaf4_x,hc+(Leaf4_yScale*508)+Leaf4_y);
vertex(wc+(Leaf4_xScale*456)+Leaf4_x,hc+(Leaf4_yScale*515)+Leaf4_y);
vertex(wc+(Leaf4_xScale*427)+Leaf4_x,hc+(Leaf4_yScale*548)+Leaf4_y);
vertex(wc+(Leaf4_xScale*399)+Leaf4_x,hc+(Leaf4_yScale*576)+Leaf4_y);
vertex(wc+(Leaf4_xScale*362)+Leaf4_x,hc+(Leaf4_yScale*604)+Leaf4_y);
vertex(wc+(Leaf4_xScale*333)+Leaf4_x,hc+(Leaf4_yScale*614)+Leaf4_y);
vertex(wc+(Leaf4_xScale*309)+Leaf4_x,hc+(Leaf4_yScale*618)+Leaf4_y);
vertex(wc+(Leaf4_xScale*275)+Leaf4_x,hc+(Leaf4_yScale*624)+Leaf4_y);
vertex(wc+(Leaf4_xScale*267)+Leaf4_x,hc+(Leaf4_yScale*627)+Leaf4_y);
vertex(wc+(Leaf4_xScale*258)+Leaf4_x,hc+(Leaf4_yScale*644)+Leaf4_y);
vertex(wc+(Leaf4_xScale*250)+Leaf4_x,hc+(Leaf4_yScale*679)+Leaf4_y);
vertex(wc+(Leaf4_xScale*246)+Leaf4_x,hc+(Leaf4_yScale*730)+Leaf4_y);
vertex(wc+(Leaf4_xScale*233)+Leaf4_x,hc+(Leaf4_yScale*799)+Leaf4_y);
vertex(wc+(Leaf4_xScale*227)+Leaf4_x,hc+(Leaf4_yScale*843)+Leaf4_y);
endShape(CLOSE);
//ENDLeaf4
}


pop();

pop();
  }
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

  //Adjusted coordinates
  {
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
}


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
