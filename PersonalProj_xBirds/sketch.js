//Colours
let lineColour = ([0, 100]);
let buttonColour = ([0, 100]);

let sky = ([255, 210, 230]);

let wallColour = ([0, 60, 55]);
let wallSideTopColour = ([155, 0, 0]);
let wallSideRightColour = ([255, 100, 100]);
let wallSideBottomColour = ([255, 150, 150]);
let wallSideLeftColour = ([255, 40, 40]);

let frontWindowSurroundColour = ([15, 140, 130]);
let frontWindowEdgeColourTop = ([10, 190, 170]);
let frontWindowEdgeColourRight = ([10, 170, 150]);
let frontWindowEdgeColourBottom = ([20, 210, 200]);
let frontWindowEdgeColourLeft = ([10, 180, 160]);

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

//Winodow Up Down Movement
let moveValue = 0;
let i_py = 0;
let h_py = 0;
let frD_py = 0;
let frE_py = 0;
let frF_py = 0;

//Birdsong
let sound;
let vol = 0;

function preload(){
  soundFormats('m4a','mp3');
  sound = loadSound('X_30SecsBirds');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
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
  xscaler = 0.95;
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

  //Background1
  {
    fill(30, 170, 200);
    let Name_x = -(scale * 60);
    let Name_y = -(scale * 90);
    let Name_xScale = scale / 6;
    let Name_yScale = scale / 6;
    beginShape();
    vertex(-5, hc + (Name_yScale * 498) + Name_y);
    vertex(wc + (Name_xScale * 5) + Name_x, hc + (Name_yScale * 487) + Name_y);
    vertex(wc + (Name_xScale * 10) + Name_x, hc + (Name_yScale * 483) + Name_y);
    vertex(wc + (Name_xScale * 23) + Name_x, hc + (Name_yScale * 475) + Name_y);
    vertex(wc + (Name_xScale * 28) + Name_x, hc + (Name_yScale * 474) + Name_y);
    vertex(wc + (Name_xScale * 36) + Name_x, hc + (Name_yScale * 473) + Name_y);
    vertex(wc + (Name_xScale * 59) + Name_x, hc + (Name_yScale * 475) + Name_y);
    vertex(wc + (Name_xScale * 71) + Name_x, hc + (Name_yScale * 474) + Name_y);
    vertex(wc + (Name_xScale * 78) + Name_x, hc + (Name_yScale * 473) + Name_y);
    vertex(wc + (Name_xScale * 84) + Name_x, hc + (Name_yScale * 471) + Name_y);
    vertex(wc + (Name_xScale * 99) + Name_x, hc + (Name_yScale * 466) + Name_y);
    vertex(wc + (Name_xScale * 102) + Name_x, hc + (Name_yScale * 465) + Name_y);
    vertex(wc + (Name_xScale * 113) + Name_x, hc + (Name_yScale * 462) + Name_y);
    vertex(wc + (Name_xScale * 122) + Name_x, hc + (Name_yScale * 463) + Name_y);
    vertex(wc + (Name_xScale * 127) + Name_x, hc + (Name_yScale * 462) + Name_y);
    vertex(wc + (Name_xScale * 132) + Name_x, hc + (Name_yScale * 459) + Name_y);
    vertex(wc + (Name_xScale * 137) + Name_x, hc + (Name_yScale * 457) + Name_y);
    vertex(wc + (Name_xScale * 142) + Name_x, hc + (Name_yScale * 455) + Name_y);
    vertex(wc + (Name_xScale * 151) + Name_x, hc + (Name_yScale * 451) + Name_y);
    vertex(wc + (Name_xScale * 160) + Name_x, hc + (Name_yScale * 450) + Name_y);
    vertex(wc + (Name_xScale * 167) + Name_x, hc + (Name_yScale * 449) + Name_y);
    vertex(wc + (Name_xScale * 173) + Name_x, hc + (Name_yScale * 449) + Name_y);
    vertex(wc + (Name_xScale * 182) + Name_x, hc + (Name_yScale * 445) + Name_y);
    vertex(wc + (Name_xScale * 187) + Name_x, hc + (Name_yScale * 442) + Name_y);
    vertex(wc + (Name_xScale * 192) + Name_x, hc + (Name_yScale * 438) + Name_y);
    vertex(wc + (Name_xScale * 193) + Name_x, hc + (Name_yScale * 438) + Name_y);
    vertex(wc + (Name_xScale * 202) + Name_x, hc + (Name_yScale * 427) + Name_y);
    vertex(wc + (Name_xScale * 204) + Name_x, hc + (Name_yScale * 422) + Name_y);
    vertex(wc + (Name_xScale * 203) + Name_x, hc + (Name_yScale * 417) + Name_y);
    vertex(wc + (Name_xScale * 201) + Name_x, hc + (Name_yScale * 413) + Name_y);
    vertex(wc + (Name_xScale * 201) + Name_x, hc + (Name_yScale * 407) + Name_y);
    vertex(wc + (Name_xScale * 204) + Name_x, hc + (Name_yScale * 401) + Name_y);
    vertex(wc + (Name_xScale * 210) + Name_x, hc + (Name_yScale * 398) + Name_y);
    vertex(wc + (Name_xScale * 222) + Name_x, hc + (Name_yScale * 390) + Name_y);
    vertex(wc + (Name_xScale * 231) + Name_x, hc + (Name_yScale * 378) + Name_y);
    vertex(wc + (Name_xScale * 236) + Name_x, hc + (Name_yScale * 369) + Name_y);
    vertex(wc + (Name_xScale * 246) + Name_x, hc + (Name_yScale * 368) + Name_y);
    vertex(wc + (Name_xScale * 255) + Name_x, hc + (Name_yScale * 371) + Name_y);
    vertex(wc + (Name_xScale * 273) + Name_x, hc + (Name_yScale * 369) + Name_y);
    vertex(wc + (Name_xScale * 288) + Name_x, hc + (Name_yScale * 370) + Name_y);
    vertex(wc + (Name_xScale * 299) + Name_x, hc + (Name_yScale * 374) + Name_y);
    vertex(wc + (Name_xScale * 301) + Name_x, hc + (Name_yScale * 382) + Name_y);
    vertex(wc + (Name_xScale * 303) + Name_x, hc + (Name_yScale * 388) + Name_y);
    vertex(wc + (Name_xScale * 318) + Name_x, hc + (Name_yScale * 396) + Name_y);
    vertex(wc + (Name_xScale * 323) + Name_x, hc + (Name_yScale * 405) + Name_y);
    vertex(wc + (Name_xScale * 334) + Name_x, hc + (Name_yScale * 403) + Name_y);
    vertex(wc + (Name_xScale * 345) + Name_x, hc + (Name_yScale * 394) + Name_y);
    vertex(wc + (Name_xScale * 354) + Name_x, hc + (Name_yScale * 393) + Name_y);
    vertex(wc + (Name_xScale * 362) + Name_x, hc + (Name_yScale * 397) + Name_y);
    vertex(wc + (Name_xScale * 375) + Name_x, hc + (Name_yScale * 396) + Name_y);
    vertex(wc + (Name_xScale * 381) + Name_x, hc + (Name_yScale * 401) + Name_y);
    vertex(wc + (Name_xScale * 385) + Name_x, hc + (Name_yScale * 414) + Name_y);
    vertex(wc + (Name_xScale * 398) + Name_x, hc + (Name_yScale * 427) + Name_y);
    vertex(wc + (Name_xScale * 417) + Name_x, hc + (Name_yScale * 432) + Name_y);
    vertex(wc + (Name_xScale * 448) + Name_x, hc + (Name_yScale * 432) + Name_y);
    vertex(wc + (Name_xScale * 460) + Name_x, hc + (Name_yScale * 416) + Name_y);
    vertex(wc + (Name_xScale * 467) + Name_x, hc + (Name_yScale * 393) + Name_y);
    vertex(wc + (Name_xScale * 483) + Name_x, hc + (Name_yScale * 374) + Name_y);
    vertex(wc + (Name_xScale * 495) + Name_x, hc + (Name_yScale * 372) + Name_y);
    vertex(wc + (Name_xScale * 507) + Name_x, hc + (Name_yScale * 365) + Name_y);
    vertex(wc + (Name_xScale * 528) + Name_x, hc + (Name_yScale * 358) + Name_y);
    vertex(wc + (Name_xScale * 548) + Name_x, hc + (Name_yScale * 361) + Name_y);
    vertex(wc + (Name_xScale * 563) + Name_x, hc + (Name_yScale * 375) + Name_y);
    vertex(wc + (Name_xScale * 575) + Name_x, hc + (Name_yScale * 374) + Name_y);
    vertex(wc + (Name_xScale * 580) + Name_x, hc + (Name_yScale * 384) + Name_y);
    vertex(wc + (Name_xScale * 581) + Name_x, hc + (Name_yScale * 393) + Name_y);
    vertex(wc + (Name_xScale * 587) + Name_x, hc + (Name_yScale * 402) + Name_y);
    vertex(wc + (Name_xScale * 600) + Name_x, hc + (Name_yScale * 401) + Name_y);
    vertex(wc + (Name_xScale * 609) + Name_x, hc + (Name_yScale * 403) + Name_y);
    vertex(wc + (Name_xScale * 603) + Name_x, hc + (Name_yScale * 416) + Name_y);
    vertex(wc + (Name_xScale * 593) + Name_x, hc + (Name_yScale * 428) + Name_y);
    vertex(wc + (Name_xScale * 592) + Name_x, hc + (Name_yScale * 436) + Name_y);
    vertex(wc + (Name_xScale * 603) + Name_x, hc + (Name_yScale * 439) + Name_y);
    vertex(wc + (Name_xScale * 621) + Name_x, hc + (Name_yScale * 438) + Name_y);
    vertex(wc + (Name_xScale * 631) + Name_x, hc + (Name_yScale * 417) + Name_y);
    vertex(wc + (Name_xScale * 642) + Name_x, hc + (Name_yScale * 405) + Name_y);
    vertex(wc + (Name_xScale * 652) + Name_x, hc + (Name_yScale * 405) + Name_y);
    vertex(wc + (Name_xScale * 654) + Name_x, hc + (Name_yScale * 410) + Name_y);
    vertex(wc + (Name_xScale * 658) + Name_x, hc + (Name_yScale * 417) + Name_y);
    vertex(wc + (Name_xScale * 674) + Name_x, hc + (Name_yScale * 423) + Name_y);
    vertex(wc + (Name_xScale * 678) + Name_x, hc + (Name_yScale * 431) + Name_y);
    vertex(wc + (Name_xScale * 686) + Name_x, hc + (Name_yScale * 440) + Name_y);
    vertex(wc + (Name_xScale * 702) + Name_x, hc + (Name_yScale * 440) + Name_y);
    vertex(wc + (Name_xScale * 724) + Name_x, hc + (Name_yScale * 432) + Name_y);
    vertex(wc + (Name_xScale * 745) + Name_x, hc + (Name_yScale * 430) + Name_y);
    vertex(wc + (Name_xScale * 756) + Name_x, hc + (Name_yScale * 434) + Name_y);
    vertex(wc + (Name_xScale * 777) + Name_x, hc + (Name_yScale * 440) + Name_y);
    vertex(wc + (Name_xScale * 790) + Name_x, hc + (Name_yScale * 446) + Name_y);
    vertex(wc + (Name_xScale * 792) + Name_x, hc + (Name_yScale * 456) + Name_y);
    vertex(wc + (Name_xScale * 825) + Name_x, hc + (Name_yScale * 460) + Name_y);
    vertex(wc + (Name_xScale * 860) + Name_x, hc + (Name_yScale * 455) + Name_y);
    vertex(wc + (Name_xScale * 873) + Name_x, hc + (Name_yScale * 452) + Name_y);
    vertex(width, hc + (Name_yScale * 457) + Name_y);
    vertex(width, (height));
    vertex(-5, (height));
    endShape(CLOSE);
    //ENDName
  }

  //Background2
  {
    fill(10, 110, 130);
    let Name_x = -(scale * 80);
    let Name_y = -(scale * 100);
    let Name_xScale = scale / 4;
    let Name_yScale = scale / 4;
    beginShape();
    vertex(wc + (Name_xScale * 0) + Name_x, hc + (Name_yScale * 386) + Name_y);
    vertex(wc + (Name_xScale * 107) + Name_x, hc + (Name_yScale * 382) + Name_y);
    vertex(wc + (Name_xScale * 119) + Name_x, hc + (Name_yScale * 378) + Name_y);
    vertex(wc + (Name_xScale * 120) + Name_x, hc + (Name_yScale * 372) + Name_y);
    vertex(wc + (Name_xScale * 114) + Name_x, hc + (Name_yScale * 365) + Name_y);
    vertex(wc + (Name_xScale * 112) + Name_x, hc + (Name_yScale * 366) + Name_y);
    vertex(wc + (Name_xScale * 110) + Name_x, hc + (Name_yScale * 363) + Name_y);
    vertex(wc + (Name_xScale * 111) + Name_x, hc + (Name_yScale * 362) + Name_y);
    vertex(wc + (Name_xScale * 112) + Name_x, hc + (Name_yScale * 356) + Name_y);
    vertex(wc + (Name_xScale * 108) + Name_x, hc + (Name_yScale * 355) + Name_y);
    vertex(wc + (Name_xScale * 104) + Name_x, hc + (Name_yScale * 350) + Name_y);
    vertex(wc + (Name_xScale * 105) + Name_x, hc + (Name_yScale * 349) + Name_y);
    vertex(wc + (Name_xScale * 108) + Name_x, hc + (Name_yScale * 336) + Name_y);
    vertex(wc + (Name_xScale * 111) + Name_x, hc + (Name_yScale * 332) + Name_y);
    vertex(wc + (Name_xScale * 120) + Name_x, hc + (Name_yScale * 332) + Name_y);
    vertex(wc + (Name_xScale * 128) + Name_x, hc + (Name_yScale * 324) + Name_y);
    vertex(wc + (Name_xScale * 142) + Name_x, hc + (Name_yScale * 309) + Name_y);
    vertex(wc + (Name_xScale * 150) + Name_x, hc + (Name_yScale * 306) + Name_y);
    vertex(wc + (Name_xScale * 159) + Name_x, hc + (Name_yScale * 294) + Name_y);
    vertex(wc + (Name_xScale * 174) + Name_x, hc + (Name_yScale * 306) + Name_y);
    vertex(wc + (Name_xScale * 176) + Name_x, hc + (Name_yScale * 316) + Name_y);
    vertex(wc + (Name_xScale * 181) + Name_x, hc + (Name_yScale * 318) + Name_y);
    vertex(wc + (Name_xScale * 184) + Name_x, hc + (Name_yScale * 337) + Name_y);
    vertex(wc + (Name_xScale * 189) + Name_x, hc + (Name_yScale * 338) + Name_y);
    vertex(wc + (Name_xScale * 205) + Name_x, hc + (Name_yScale * 346) + Name_y);
    vertex(wc + (Name_xScale * 203) + Name_x, hc + (Name_yScale * 348) + Name_y);
    vertex(wc + (Name_xScale * 200) + Name_x, hc + (Name_yScale * 359) + Name_y);
    vertex(wc + (Name_xScale * 209) + Name_x, hc + (Name_yScale * 373) + Name_y);
    vertex(wc + (Name_xScale * 219) + Name_x, hc + (Name_yScale * 377) + Name_y);
    vertex(wc + (Name_xScale * 214) + Name_x, hc + (Name_yScale * 383) + Name_y);
    vertex(wc + (Name_xScale * 213) + Name_x, hc + (Name_yScale * 389) + Name_y);
    vertex(wc + (Name_xScale * 223) + Name_x, hc + (Name_yScale * 391) + Name_y);
    vertex(wc + (Name_xScale * 223) + Name_x, hc + (Name_yScale * 381) + Name_y);
    vertex(wc + (Name_xScale * 222) + Name_x, hc + (Name_yScale * 371) + Name_y);
    vertex(wc + (Name_xScale * 219) + Name_x, hc + (Name_yScale * 367) + Name_y);
    vertex(wc + (Name_xScale * 229) + Name_x, hc + (Name_yScale * 362) + Name_y);
    vertex(wc + (Name_xScale * 234) + Name_x, hc + (Name_yScale * 357) + Name_y);
    vertex(wc + (Name_xScale * 233) + Name_x, hc + (Name_yScale * 337) + Name_y);
    vertex(wc + (Name_xScale * 236) + Name_x, hc + (Name_yScale * 330) + Name_y);
    vertex(wc + (Name_xScale * 233) + Name_x, hc + (Name_yScale * 313) + Name_y);
    vertex(wc + (Name_xScale * 251) + Name_x, hc + (Name_yScale * 303) + Name_y);
    vertex(wc + (Name_xScale * 256) + Name_x, hc + (Name_yScale * 295) + Name_y);
    vertex(wc + (Name_xScale * 270) + Name_x, hc + (Name_yScale * 298) + Name_y);
    vertex(wc + (Name_xScale * 275) + Name_x, hc + (Name_yScale * 294) + Name_y);
    vertex(wc + (Name_xScale * 286) + Name_x, hc + (Name_yScale * 282) + Name_y);
    vertex(wc + (Name_xScale * 286) + Name_x, hc + (Name_yScale * 285) + Name_y);
    vertex(wc + (Name_xScale * 290) + Name_x, hc + (Name_yScale * 270) + Name_y);
    vertex(wc + (Name_xScale * 297) + Name_x, hc + (Name_yScale * 269) + Name_y);
    vertex(wc + (Name_xScale * 306) + Name_x, hc + (Name_yScale * 276) + Name_y);
    vertex(wc + (Name_xScale * 308) + Name_x, hc + (Name_yScale * 280) + Name_y);
    vertex(wc + (Name_xScale * 319) + Name_x, hc + (Name_yScale * 272) + Name_y);
    vertex(wc + (Name_xScale * 320) + Name_x, hc + (Name_yScale * 275) + Name_y);
    vertex(wc + (Name_xScale * 322) + Name_x, hc + (Name_yScale * 282) + Name_y);
    vertex(wc + (Name_xScale * 328) + Name_x, hc + (Name_yScale * 279) + Name_y);
    vertex(wc + (Name_xScale * 335) + Name_x, hc + (Name_yScale * 283) + Name_y);
    vertex(wc + (Name_xScale * 333) + Name_x, hc + (Name_yScale * 285) + Name_y);
    vertex(wc + (Name_xScale * 332) + Name_x, hc + (Name_yScale * 290) + Name_y);
    vertex(wc + (Name_xScale * 333) + Name_x, hc + (Name_yScale * 289) + Name_y);
    vertex(wc + (Name_xScale * 330) + Name_x, hc + (Name_yScale * 293) + Name_y);
    vertex(wc + (Name_xScale * 332) + Name_x, hc + (Name_yScale * 295) + Name_y);
    vertex(wc + (Name_xScale * 343) + Name_x, hc + (Name_yScale * 299) + Name_y);
    vertex(wc + (Name_xScale * 342) + Name_x, hc + (Name_yScale * 308) + Name_y);
    vertex(wc + (Name_xScale * 349) + Name_x, hc + (Name_yScale * 312) + Name_y);
    vertex(wc + (Name_xScale * 357) + Name_x, hc + (Name_yScale * 302) + Name_y);
    vertex(wc + (Name_xScale * 366) + Name_x, hc + (Name_yScale * 308) + Name_y);
    vertex(wc + (Name_xScale * 365) + Name_x, hc + (Name_yScale * 311) + Name_y);
    vertex(wc + (Name_xScale * 368) + Name_x, hc + (Name_yScale * 313) + Name_y);
    vertex(wc + (Name_xScale * 369) + Name_x, hc + (Name_yScale * 314) + Name_y);
    vertex(wc + (Name_xScale * 370) + Name_x, hc + (Name_yScale * 330) + Name_y);
    vertex(wc + (Name_xScale * 364) + Name_x, hc + (Name_yScale * 333) + Name_y);
    vertex(wc + (Name_xScale * 364) + Name_x, hc + (Name_yScale * 340) + Name_y);
    vertex(wc + (Name_xScale * 367) + Name_x, hc + (Name_yScale * 344) + Name_y);
    vertex(wc + (Name_xScale * 361) + Name_x, hc + (Name_yScale * 348) + Name_y);
    vertex(wc + (Name_xScale * 362) + Name_x, hc + (Name_yScale * 350) + Name_y);
    vertex(wc + (Name_xScale * 364) + Name_x, hc + (Name_yScale * 354) + Name_y);
    vertex(wc + (Name_xScale * 369) + Name_x, hc + (Name_yScale * 360) + Name_y);
    vertex(wc + (Name_xScale * 369) + Name_x, hc + (Name_yScale * 363) + Name_y);
    vertex(wc + (Name_xScale * 369) + Name_x, hc + (Name_yScale * 365) + Name_y);
    vertex(wc + (Name_xScale * 372) + Name_x, hc + (Name_yScale * 369) + Name_y);
    vertex(wc + (Name_xScale * 370) + Name_x, hc + (Name_yScale * 372) + Name_y);
    vertex(wc + (Name_xScale * 376) + Name_x, hc + (Name_yScale * 377) + Name_y);
    vertex(wc + (Name_xScale * 379) + Name_x, hc + (Name_yScale * 383) + Name_y);
    vertex(wc + (Name_xScale * 379) + Name_x, hc + (Name_yScale * 384) + Name_y);
    vertex(wc + (Name_xScale * 375) + Name_x, hc + (Name_yScale * 392) + Name_y);
    vertex(wc + (Name_xScale * 375) + Name_x, hc + (Name_yScale * 395) + Name_y);
    vertex(wc + (Name_xScale * 370) + Name_x, hc + (Name_yScale * 393) + Name_y);
    vertex(wc + (Name_xScale * 370) + Name_x, hc + (Name_yScale * 395) + Name_y);
    vertex(wc + (Name_xScale * 397) + Name_x, hc + (Name_yScale * 403) + Name_y);
    vertex(wc + (Name_xScale * 401) + Name_x, hc + (Name_yScale * 402) + Name_y);
    vertex(wc + (Name_xScale * 407) + Name_x, hc + (Name_yScale * 406) + Name_y);
    vertex(wc + (Name_xScale * 415) + Name_x, hc + (Name_yScale * 412) + Name_y);
    vertex(wc + (Name_xScale * 438) + Name_x, hc + (Name_yScale * 423) + Name_y);
    vertex(wc + (Name_xScale * 459) + Name_x, hc + (Name_yScale * 417) + Name_y);
    vertex(wc + (Name_xScale * 480) + Name_x, hc + (Name_yScale * 412) + Name_y);
    vertex(wc + (Name_xScale * 489) + Name_x, hc + (Name_yScale * 408) + Name_y);
    vertex(wc + (Name_xScale * 492) + Name_x, hc + (Name_yScale * 402) + Name_y);
    vertex(wc + (Name_xScale * 496) + Name_x, hc + (Name_yScale * 404) + Name_y);
    vertex(wc + (Name_xScale * 498) + Name_x, hc + (Name_yScale * 394) + Name_y);
    vertex(wc + (Name_xScale * 507) + Name_x, hc + (Name_yScale * 392) + Name_y);
    vertex(wc + (Name_xScale * 511) + Name_x, hc + (Name_yScale * 392) + Name_y);
    vertex(wc + (Name_xScale * 520) + Name_x, hc + (Name_yScale * 380) + Name_y);
    vertex(wc + (Name_xScale * 520) + Name_x, hc + (Name_yScale * 365) + Name_y);
    vertex(wc + (Name_xScale * 525) + Name_x, hc + (Name_yScale * 368) + Name_y);
    vertex(wc + (Name_xScale * 526) + Name_x, hc + (Name_yScale * 370) + Name_y);
    vertex(wc + (Name_xScale * 528) + Name_x, hc + (Name_yScale * 369) + Name_y);
    vertex(wc + (Name_xScale * 849) + Name_x, hc + (Name_yScale * 386) + Name_y);
    vertex(wc + (Name_xScale * 879) + Name_x, hc + (Name_yScale * 377) + Name_y);
    vertex(wc + (Name_xScale * 892) + Name_x, hc + (Name_yScale * 374) + Name_y);
    vertex(wc + (Name_xScale * 900) + Name_x, hc + (Name_yScale * 370) + Name_y);
    vertex(wc + (Name_xScale * 900) + Name_x, hc + (Name_yScale * 902) + Name_y);
    vertex(wc + (Name_xScale * 0) + Name_x, hc + (Name_yScale * 899) + Name_y);
    endShape(CLOSE);
    //ENDName
  }

  //Background3 >> frontHedge
  {
    fill(40, 130, 160);
    let frontHedge_x = -(scale * 97);
    let frontHedge_y = -(scale * 42);
    let frontHedge_xScale = scale / 5.5;
    let frontHedge_yScale = scale / 7;
    beginShape();
    vertex(wc + (frontHedge_xScale * 0) + frontHedge_x, hc + (frontHedge_yScale * 422) + frontHedge_y);
    vertex(wc + (frontHedge_xScale * 37) + frontHedge_x, hc + (frontHedge_yScale * 422) + frontHedge_y);
    vertex(wc + (frontHedge_xScale * 38) + frontHedge_x, hc + (frontHedge_yScale * 418) + frontHedge_y);
    vertex(wc + (frontHedge_xScale * 38) + frontHedge_x, hc + (frontHedge_yScale * 418) + frontHedge_y);
    vertex(wc + (frontHedge_xScale * 47) + frontHedge_x, hc + (frontHedge_yScale * 420) + frontHedge_y);
    vertex(wc + (frontHedge_xScale * 56) + frontHedge_x, hc + (frontHedge_yScale * 421) + frontHedge_y);
    vertex(wc + (frontHedge_xScale * 255) + frontHedge_x, hc + (frontHedge_yScale * 409) + frontHedge_y);
    vertex(wc + (frontHedge_xScale * 263) + frontHedge_x, hc + (frontHedge_yScale * 400) + frontHedge_y);
    vertex(wc + (frontHedge_xScale * 266) + frontHedge_x, hc + (frontHedge_yScale * 402) + frontHedge_y);
    vertex(wc + (frontHedge_xScale * 272) + frontHedge_x, hc + (frontHedge_yScale * 402) + frontHedge_y);
    vertex(wc + (frontHedge_xScale * 277) + frontHedge_x, hc + (frontHedge_yScale * 393) + frontHedge_y);
    vertex(wc + (frontHedge_xScale * 280) + frontHedge_x, hc + (frontHedge_yScale * 391) + frontHedge_y);
    vertex(wc + (frontHedge_xScale * 281) + frontHedge_x, hc + (frontHedge_yScale * 399) + frontHedge_y);
    vertex(wc + (frontHedge_xScale * 285) + frontHedge_x, hc + (frontHedge_yScale * 402) + frontHedge_y);
    vertex(wc + (frontHedge_xScale * 292) + frontHedge_x, hc + (frontHedge_yScale * 403) + frontHedge_y);
    vertex(wc + (frontHedge_xScale * 294) + frontHedge_x, hc + (frontHedge_yScale * 400) + frontHedge_y);
    vertex(wc + (frontHedge_xScale * 300) + frontHedge_x, hc + (frontHedge_yScale * 393) + frontHedge_y);
    vertex(wc + (frontHedge_xScale * 306) + frontHedge_x, hc + (frontHedge_yScale * 396) + frontHedge_y);
    vertex(wc + (frontHedge_xScale * 316) + frontHedge_x, hc + (frontHedge_yScale * 390) + frontHedge_y);
    vertex(wc + (frontHedge_xScale * 322) + frontHedge_x, hc + (frontHedge_yScale * 383) + frontHedge_y);
    vertex(wc + (frontHedge_xScale * 328) + frontHedge_x, hc + (frontHedge_yScale * 388) + frontHedge_y);
    vertex(wc + (frontHedge_xScale * 340) + frontHedge_x, hc + (frontHedge_yScale * 391) + frontHedge_y);
    vertex(wc + (frontHedge_xScale * 345) + frontHedge_x, hc + (frontHedge_yScale * 398) + frontHedge_y);
    vertex(wc + (frontHedge_xScale * 370) + frontHedge_x, hc + (frontHedge_yScale * 397) + frontHedge_y);
    vertex(wc + (frontHedge_xScale * 379) + frontHedge_x, hc + (frontHedge_yScale * 392) + frontHedge_y);
    vertex(wc + (frontHedge_xScale * 384) + frontHedge_x, hc + (frontHedge_yScale * 396) + frontHedge_y);
    vertex(wc + (frontHedge_xScale * 402) + frontHedge_x, hc + (frontHedge_yScale * 396) + frontHedge_y);
    vertex(wc + (frontHedge_xScale * 415) + frontHedge_x, hc + (frontHedge_yScale * 401) + frontHedge_y);
    vertex(wc + (frontHedge_xScale * 427) + frontHedge_x, hc + (frontHedge_yScale * 400) + frontHedge_y);
    vertex(wc + (frontHedge_xScale * 436) + frontHedge_x, hc + (frontHedge_yScale * 397) + frontHedge_y);
    vertex(wc + (frontHedge_xScale * 443) + frontHedge_x, hc + (frontHedge_yScale * 399) + frontHedge_y);
    vertex(wc + (frontHedge_xScale * 456) + frontHedge_x, hc + (frontHedge_yScale * 391) + frontHedge_y);
    vertex(wc + (frontHedge_xScale * 466) + frontHedge_x, hc + (frontHedge_yScale * 397) + frontHedge_y);
    vertex(wc + (frontHedge_xScale * 474) + frontHedge_x, hc + (frontHedge_yScale * 401) + frontHedge_y);
    vertex(wc + (frontHedge_xScale * 486) + frontHedge_x, hc + (frontHedge_yScale * 400) + frontHedge_y);
    vertex(wc + (frontHedge_xScale * 493) + frontHedge_x, hc + (frontHedge_yScale * 403) + frontHedge_y);
    vertex(wc + (frontHedge_xScale * 504) + frontHedge_x, hc + (frontHedge_yScale * 402) + frontHedge_y);
    vertex(wc + (frontHedge_xScale * 511) + frontHedge_x, hc + (frontHedge_yScale * 400) + frontHedge_y);
    vertex(wc + (frontHedge_xScale * 513) + frontHedge_x, hc + (frontHedge_yScale * 394) + frontHedge_y);
    vertex(wc + (frontHedge_xScale * 520) + frontHedge_x, hc + (frontHedge_yScale * 401) + frontHedge_y);
    vertex(wc + (frontHedge_xScale * 528) + frontHedge_x, hc + (frontHedge_yScale * 402) + frontHedge_y);
    vertex(wc + (frontHedge_xScale * 537) + frontHedge_x, hc + (frontHedge_yScale * 398) + frontHedge_y);
    vertex(wc + (frontHedge_xScale * 536) + frontHedge_x, hc + (frontHedge_yScale * 392) + frontHedge_y);
    vertex(wc + (frontHedge_xScale * 552) + frontHedge_x, hc + (frontHedge_yScale * 394) + frontHedge_y);
    vertex(wc + (frontHedge_xScale * 552) + frontHedge_x, hc + (frontHedge_yScale * 396) + frontHedge_y);
    vertex(wc + (frontHedge_xScale * 558) + frontHedge_x, hc + (frontHedge_yScale * 399) + frontHedge_y);
    vertex(wc + (frontHedge_xScale * 573) + frontHedge_x, hc + (frontHedge_yScale * 396) + frontHedge_y);
    vertex(wc + (frontHedge_xScale * 580) + frontHedge_x, hc + (frontHedge_yScale * 399) + frontHedge_y);
    vertex(wc + (frontHedge_xScale * 588) + frontHedge_x, hc + (frontHedge_yScale * 381) + frontHedge_y);
    vertex(wc + (frontHedge_xScale * 593) + frontHedge_x, hc + (frontHedge_yScale * 373) + frontHedge_y);
    vertex(wc + (frontHedge_xScale * 598) + frontHedge_x, hc + (frontHedge_yScale * 377) + frontHedge_y);
    vertex(wc + (frontHedge_xScale * 609) + frontHedge_x, hc + (frontHedge_yScale * 387) + frontHedge_y);
    vertex(wc + (frontHedge_xScale * 608) + frontHedge_x, hc + (frontHedge_yScale * 391) + frontHedge_y);
    vertex(wc + (frontHedge_xScale * 627) + frontHedge_x, hc + (frontHedge_yScale * 388) + frontHedge_y);
    vertex(wc + (frontHedge_xScale * 635) + frontHedge_x, hc + (frontHedge_yScale * 391) + frontHedge_y);
    vertex(wc + (frontHedge_xScale * 640) + frontHedge_x, hc + (frontHedge_yScale * 390) + frontHedge_y);
    vertex(wc + (frontHedge_xScale * 648) + frontHedge_x, hc + (frontHedge_yScale * 389) + frontHedge_y);
    vertex(wc + (frontHedge_xScale * 651) + frontHedge_x, hc + (frontHedge_yScale * 392) + frontHedge_y);
    vertex(wc + (frontHedge_xScale * 663) + frontHedge_x, hc + (frontHedge_yScale * 389) + frontHedge_y);
    vertex(wc + (frontHedge_xScale * 674) + frontHedge_x, hc + (frontHedge_yScale * 384) + frontHedge_y);
    vertex(wc + (frontHedge_xScale * 681) + frontHedge_x, hc + (frontHedge_yScale * 388) + frontHedge_y);
    vertex(wc + (frontHedge_xScale * 697) + frontHedge_x, hc + (frontHedge_yScale * 384) + frontHedge_y);
    vertex(wc + (frontHedge_xScale * 705) + frontHedge_x, hc + (frontHedge_yScale * 386) + frontHedge_y);
    vertex(wc + (frontHedge_xScale * 709) + frontHedge_x, hc + (frontHedge_yScale * 380) + frontHedge_y);
    vertex(wc + (frontHedge_xScale * 714) + frontHedge_x, hc + (frontHedge_yScale * 381) + frontHedge_y);
    vertex(wc + (frontHedge_xScale * 723) + frontHedge_x, hc + (frontHedge_yScale * 380) + frontHedge_y);
    vertex(wc + (frontHedge_xScale * 728) + frontHedge_x, hc + (frontHedge_yScale * 378) + frontHedge_y);
    vertex(wc + (frontHedge_xScale * 725) + frontHedge_x, hc + (frontHedge_yScale * 370) + frontHedge_y);
    vertex(wc + (frontHedge_xScale * 735) + frontHedge_x, hc + (frontHedge_yScale * 370) + frontHedge_y);
    vertex(wc + (frontHedge_xScale * 744) + frontHedge_x, hc + (frontHedge_yScale * 377) + frontHedge_y);
    vertex(wc + (frontHedge_xScale * 746) + frontHedge_x, hc + (frontHedge_yScale * 374) + frontHedge_y);
    vertex(wc + (frontHedge_xScale * 751) + frontHedge_x, hc + (frontHedge_yScale * 370) + frontHedge_y);
    vertex(wc + (frontHedge_xScale * 759) + frontHedge_x, hc + (frontHedge_yScale * 373) + frontHedge_y);
    vertex(wc + (frontHedge_xScale * 764) + frontHedge_x, hc + (frontHedge_yScale * 370) + frontHedge_y);
    vertex(wc + (frontHedge_xScale * 767) + frontHedge_x, hc + (frontHedge_yScale * 365) + frontHedge_y);
    vertex(wc + (frontHedge_xScale * 782) + frontHedge_x, hc + (frontHedge_yScale * 371) + frontHedge_y);
    vertex(wc + (frontHedge_xScale * 791) + frontHedge_x, hc + (frontHedge_yScale * 358) + frontHedge_y);
    vertex(wc + (frontHedge_xScale * 799) + frontHedge_x, hc + (frontHedge_yScale * 360) + frontHedge_y);
    vertex(wc + (frontHedge_xScale * 812) + frontHedge_x, hc + (frontHedge_yScale * 366) + frontHedge_y);
    vertex(wc + (frontHedge_xScale * 812) + frontHedge_x, hc + (frontHedge_yScale * 365) + frontHedge_y);
    vertex(wc + (frontHedge_xScale * 820) + frontHedge_x, hc + (frontHedge_yScale * 369) + frontHedge_y);
    vertex(wc + (frontHedge_xScale * 822) + frontHedge_x, hc + (frontHedge_yScale * 377) + frontHedge_y);
    vertex(wc + (frontHedge_xScale * 829) + frontHedge_x, hc + (frontHedge_yScale * 378) + frontHedge_y);
    vertex(wc + (frontHedge_xScale * 851) + frontHedge_x, hc + (frontHedge_yScale * 377) + frontHedge_y);
    vertex(wc + (frontHedge_xScale * 856) + frontHedge_x, hc + (frontHedge_yScale * 378) + frontHedge_y);
    vertex(wc + (frontHedge_xScale * 867) + frontHedge_x, hc + (frontHedge_yScale * 378) + frontHedge_y);
    vertex(wc + (frontHedge_xScale * 907) + frontHedge_x, hc + (frontHedge_yScale * 381) + frontHedge_y);
    vertex(wc + (frontHedge_xScale * 912) + frontHedge_x, hc + (frontHedge_yScale * 380) + frontHedge_y);
    vertex(wc + (frontHedge_xScale * 900) + frontHedge_x, hc + (frontHedge_yScale * 900) + frontHedge_y);
    vertex(wc + (frontHedge_xScale * 0) + frontHedge_x, hc + (frontHedge_yScale * 899) + frontHedge_y);
    endShape(CLOSE);
    //ENDfrontHedge
  }

  //a
  {
    //Scale a
    let a_sx = scale * xscaler;
    let a_sy = scale * yscaler;

    //Position a
    let as_px = 0;
    let as_py = 0;

    //Points >> + or - ((value * scaler) + positioner)
    a1x = wc - ((64 * a_sx) + as_px);
    a1y = hc - ((82 * a_sy) + as_py);

    a2x = wc + ((64 * a_sx) + as_px);
    a2y = hc - ((82 * a_sy) + as_py);

    a3x = wc + ((64 * a_sx) + as_px);
    a3y = hc + ((82 * a_sy) + as_py);

    a4x = wc - ((64 * a_sx) + as_px);
    a4y = hc + ((82 * a_sy) + as_py);
  }
  //b
  {
    //Scale b
    let b_sx = scale * xscaler;
    let b_sy = scale * yscaler;

    //Position b
    let b_px = 0;
    let b_py = 0;

    //Points >> + or - ((value * scaler) + positioner)
    b1x = wc - ((55 * b_sx) + b_px);
    b1y = hc - ((75 * b_sy) + b_py);

    b2x = wc + ((55 * b_sx) + b_px);
    b2y = hc - ((75 * b_sy) + b_py);

    b3x = wc + ((55 * b_sx) + b_px);
    b3y = hc + ((75 * b_sy) + b_py);

    b4x = wc - ((55 * b_sx) + b_px);
    b4y = hc + ((75 * b_sy) + b_py);
  }
  //c
  {
    //Scale c
    let c_sx = scale * xscaler;
    let c_sy = scale * yscaler;

    //Position c
    let c_px = 0;
    let c_py = 0;

    //Points >> + or - ((value * scaler) + positioner)
    c1x = wc - ((50 * c_sx) + c_px);
    c1y = hc - ((72 * c_sy) + c_py);

    c2x = wc + ((50 * c_sx) + c_px);
    c2y = hc - ((72 * c_sy) + c_py);

    c3x = wc + ((50 * c_sx) + c_px);
    c3y = hc + ((72 * c_sy) + c_py);

    c4x = wc - ((50 * c_sx) + c_px);
    c4y = hc + ((72 * c_sy) + c_py);
  }
  //d
  {
    //Scale d
    let d_sx = scale * xscaler;
    let d_sy = scale * yscaler;

    //Position d
    let d_px = 0;
    let d_py = 0;

    //Points >> + or - ((value * scaler) + positioner)
    d1x = wc - ((49.5 * d_sx) + d_px);
    d1y = hc - ((71 * d_sy) + d_py);

    d2x = wc + ((49.5 * d_sx) + d_px);
    d2y = hc - ((71 * d_sy) + d_py);

    d3x = wc + ((49.5 * d_sx) + d_px);
    d3y = hc + ((71 * d_sy) + d_py);

    d4x = wc - ((49.5 * d_sx) + d_px);
    d4y = hc + ((71 * d_sy) + d_py);
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
  //g
  {
    //Scale g
    let g_sx = scale * xscaler;
    let g_sy = scale * yscaler;

    //Position g
    let g_px = 0;
    let g_py = 0;

    //Points >> + or - ((value * scaler) + positioner)
    g1x = wc - ((49.5 * g_sx) + g_px);
    g1y = hc - ((71 * g_sy) + g_py);

    g2x = wc + ((49.5 * g_sx) + g_px);
    g2y = hc - ((71 * g_sy) + g_py);

    g3x = wc + ((49.5 * g_sx) + g_px);
    g3y = hc + ((1.5 * g_sy) + g_py);

    g4x = wc - ((49.5 * g_sx) + g_px);
    g4y = hc + ((1.5 * g_sy) + g_py);
  }
  //h
  {
    //Scale h
    let h_sx = scale * xscaler;
    let h_sy = scale * yscaler;

    //Position h
    let h_px = 0;

    //Points >> + or - ((value * scaler) + positioner)
    h1x = wc - ((49.5 * h_sx) + h_px);
    h1y = hc + ((72 * h_sy) + h_py);

    h2x = wc + ((49.5 * h_sx) + h_px);
    h2y = hc + ((72 * h_sy) + h_py);

    h3x = wc + ((49.5 * h_sx) + h_px);
    h3y = hc + ((-1.5 * h_sy) + h_py);

    h4x = wc - ((49.5 * h_sx) + h_px);
    h4y = hc + ((-1.5 * h_sy) + h_py);
  }
  //i
  {
    //Scale
    let i_sx = scale * xscaler;
    let i_sy = scale * yscaler;

    //Position i
    let i_px = 0;

    //Points >> + or - ((value * scaler) + positioner)
    i1x = wc - ((47 * i_sx) + i_px);
    i1y = hc + ((67 * i_sy) + i_py);

    i2x = wc + ((47 * i_sx) + i_px);
    i2y = hc + ((67 * i_sy) + i_py);

    i3x = wc + ((47 * i_sx) + i_px);
    i3y = hc + ((1.5 * i_sy) + i_py);

    i4x = wc - ((47 * i_sx) + i_px);
    i4y = hc + ((1.5 * i_sy) + i_py);

    if (mouseIsPressed && pmouseY < mouseY && i_py < 0) {
      i_py = i_py + 5;
      h_py = h_py + 5;
    }
    if (mouseIsPressed && pmouseY > mouseY && i_py > scale * -60) {
      i_py = i_py - 5;
      h_py = h_py - 5;
    }
  }


  //frA
  {
    //Scale frA
    let frA_sx = scale * xscaler;
    let frA_sy = scale * yscaler;

    //Position frA
    let frA_px = 0;
    let frA_py = 0;

    //Points >> + or - ((value * scaler) + positioner)
    frA1x = wc - ((17 * frA_sx) + frA_px);
    frA1y = hc - ((67 * frA_sy) + frA_py);

    frA2x = wc - ((14 * frA_sx) + frA_px);
    frA2y = hc - ((67 * frA_sy) + frA_py);

    frA3x = wc - ((14 * frA_sx) + frA_px);
    frA3y = hc + ((1.5 * frA_sy) + frA_py);

    frA4x = wc - ((17 * frA_sx) + frA_px);
    frA4y = hc + ((1.5 * frA_sy) + frA_py);

  }
  //frB
  {
    //Scale frB
    let frB_sx = scale * xscaler;
    let frB_sy = scale * yscaler;

    //Position frB
    let frB_px = 0
    let frB_py = 0;

    //Points >> + or - ((value * scaler) + positioner)
    frB1x = wc + ((17 * frB_sx) + frB_px);
    frB1y = hc - ((67 * frB_sy) + frB_py);

    frB2x = wc + ((14 * frB_sx) + frB_px);
    frB2y = hc - ((67 * frB_sy) + frB_py);

    frB3x = wc + ((14 * frB_sx) + frB_px);
    frB3y = hc + ((1.5 * frB_sy) + frB_py);

    frB4x = wc + ((17 * frB_sx) + frB_px);
    frB4y = hc + ((1.5 * frB_sy) + frB_py);

    if (mouseIsPressed && pmouseY < mouseY && frB_py < 0) {
      frB_py = frB_py + 5;
      frB_py = frB_py + 5;
    }
    if (mouseIsPressed && pmouseY > mouseY && frB_py > scale * -60) {
      frB_py = frB_py - 5;
      frB_py = frB_py - 5;
    }
  }
  //frC
  {
    //Scale frC
    let frC_sx = scale * xscaler;
    let frC_sy = scale * yscaler;

    //Position frC
    let frC_px = 0;
    let frC_py = 0

    //Points >> + or - ((value * scaler) + positioner)
    frC1x = wc - ((47 * frC_sx) + frC_px);
    frC1y = hc - ((32.5 * frC_sy) + frC_py);

    frC2x = wc + ((47 * frC_sx) + frC_px);
    frC2y = hc - ((32.5 * frC_sy) + frC_py);

    frC3x = wc + ((47 * frC_sx) + frC_px);
    frC3y = hc - ((34.5 * frC_sy) + frC_py);

    frC4x = wc - ((47 * frC_sx) + frC_px);
    frC4y = hc - ((34.5 * frC_sy) + frC_py);
  }

  //frD
  {
    //Scale frD
    let frD_sx = scale * xscaler;
    let frD_sy = scale * yscaler;

    //Position frD
    let frD_px = 0;

    //Points >> + or - ((value * scaler) + positioner)
    frD1x = wc - ((17 * frD_sx) + frD_px);
    frD1y = hc + ((67 * frD_sy) + frD_py);

    frD2x = wc - ((14 * frD_sx) + frD_px);
    frD2y = hc + ((67 * frD_sy) + frD_py);

    frD3x = wc - ((14 * frD_sx) + frD_px);
    frD3y = hc + ((1.5 * frD_sy) + frD_py);

    frD4x = wc - ((17 * frD_sx) + frD_px);
    frD4y = hc + ((1.5 * frD_sy) + frD_py);

  }
  //frE
  {
    //Scale frE
    let frE_sx = scale * xscaler;
    let frE_sy = scale * yscaler;

    //Position frE
    let frE_px = 0

    //Points >> + or - ((value * scaler) + positioner)
    frE1x = wc + ((17 * frE_sx) + frE_px);
    frE1y = hc + ((67 * frE_sy) + frE_py);

    frE2x = wc + ((14 * frE_sx) + frE_px);
    frE2y = hc + ((67 * frE_sy) + frE_py);

    frE3x = wc + ((14 * frE_sx) + frE_px);
    frE3y = hc + ((1.5 * frE_sy) + frE_py);

    frE4x = wc + ((17 * frE_sx) + frE_px);
    frE4y = hc + ((1.5 * frE_sy) + frE_py);

  }
  //frF
  {
    //Scale frF
    let frF_sx = scale * xscaler;
    let frF_sy = scale * yscaler;

    //Position frF
    let frF_px = 0;

    //Points >> + or - ((value * scaler) + positioner)
    frF1x = wc - ((47 * frF_sx) + frF_px);
    frF1y = hc + ((32.5 * frF_sy) + frF_py);

    frF2x = wc + ((47 * frF_sx) + frF_px);
    frF2y = hc + ((32.5 * frF_sy) + frF_py);

    frF3x = wc + ((47 * frF_sx) + frF_px);
    frF3y = hc + ((34.5 * frF_sy) + frF_py);

    frF4x = wc - ((47 * frF_sx) + frF_px);
    frF4y = hc + ((34.5 * frF_sy) + frF_py);

    if (mouseIsPressed && pmouseY < mouseY && frF_py < 0) {
      frD_py = frD_py + 5;
      frE_py = frE_py + 5;
      frF_py = frF_py + 5;
    }
    if (mouseIsPressed && pmouseY > mouseY && frF_py > scale * -60) {
      frD_py = frD_py - 5;
      frE_py = frE_py - 5;
      frF_py = frF_py - 5;
    }
  }


  //FrGrnd >> FrntWndw HGHLGTS B    frD + frE + frF
  {
    //Stlying BotWindow LeftFrame
    fill(192, 205, 75);
    stroke(lineColour);

    //Draw BotWindow CentreFrame
    beginShape();
    vertex(frC1x, frC1y + scale * 0.8);
    vertex(frC2x, frC2y + scale * 0.8);
    vertex(frC3x, frC3y + scale * 0.8);
    vertex(frC4x, frC4y + scale * 0.8);
    endShape(CLOSE);

    //Draw WINDOW BOT
    beginShape();
    vertex(g1x, g1y - scale * 0.1);
    vertex(g2x, g2y - scale * 0.1);
    vertex(g3x, g3y - scale * 0.1);
    vertex(g4x, g4y - scale * 0.1);
    beginContour();
    vertex(f4x, f4y - scale * 0.3);
    vertex(f3x, f3y - scale * 0.3);
    vertex(f2x, f2y + scale * 1.4);
    vertex(f1x, f1y + scale * 1.4);
    endContour();
    endShape(CLOSE);

  }
  //FrGrnd >> FrntWndw FRAME TOP    frA + frB + frC
  {
    //Stlying TopWindow LeftFrame
    fill(frontWindowTopColour);
    stroke(lineColour);

    //Draw TopWindow LeftFrame
    beginShape();
    vertex(frA1x, frA1y);
    vertex(frA2x, frA2y);
    vertex(frA3x, frA3y);
    vertex(frA4x, frA4y);
    endShape(CLOSE);

    //Draw TopWindow RightFrame
    beginShape();
    vertex(frB1x, frB1y);
    vertex(frB2x, frB2y);
    vertex(frB3x, frB3y);
    vertex(frB4x, frB4y);
    endShape(CLOSE);

    //Draw TopWindow CentreFrame
    beginShape();
    vertex(frC1x, frC1y);
    vertex(frC2x, frC2y);
    vertex(frC3x, frC3y);
    vertex(frC4x, frC4y);
    endShape(CLOSE);

  }
  //FrGrnd >> FrntWndw BACK         d + e
  {
    //Stlying Front Window Back
    fill(frontWindowBackColour);
    stroke(lineColour);

    //Draw Front Window Back
    beginShape();
    vertex(d1x, d1y);
    vertex(d2x, d2y);
    vertex(d3x, d3y);
    vertex(d4x, d4y);
    beginContour();
    vertex(e4x, e4y);
    vertex(e3x, e3y);
    vertex(e2x, e2y);
    vertex(e1x, e1y);
    endContour();
    endShape(CLOSE);

  }
  //FrGrnd >> FrntWndw WINDOW TOP   g + f
  {
    //Stlying WINDOW TOP
    fill(frontWindowTopColour);
    stroke(lineColour);

    //Draw WINDOW TOP
    beginShape();
    vertex(g1x, g1y);
    vertex(g2x, g2y);
    vertex(g3x, g3y);
    vertex(g4x, g4y);
    beginContour();
    vertex(f4x, f4y);
    vertex(f3x, f3y);
    vertex(f2x, f2y);
    vertex(f1x, f1y);
    endContour();
    endShape(CLOSE);

  }
  //FrGrnd >> FrntWndw HGHLGTS B    frD + frE + frF
  {
    //Stlying BotWindow LeftFrame
    frontWindowHighlightColourR = 242 + (i_py / 5);
    frontWindowHighlightColourG = 255 + (i_py / 5);
    frontWindowHighlightColourB = 145 + (i_py / 5);
    fill(frontWindowHighlightColourR, frontWindowHighlightColourG, frontWindowHighlightColourB);
    stroke(lineColour);

    //Draw BotWindow CentreFrame
    beginShape();
    vertex(frF1x, frF1y - scale * 0.7 - (frF_py / 40));
    vertex(frF2x, frF2y - scale * 0.7 - (frF_py / 40));
    vertex(frF3x, frF3y - scale * 0.7 - (frF_py / 40));
    vertex(frF4x, frF4y - scale * 0.7 - (frF_py / 40));
    endShape(CLOSE);

    //Draw WINDOW BOT
    beginShape();
    vertex(h1x, h1y - scale * 3.1 - (frF_py / 200));
    vertex(h2x, h2y - scale * 3.1 - (frF_py / 200));
    vertex(h3x, h3y - scale * 0.1 - (frF_py / 120));
    vertex(h4x, h4y - scale * 0.1 - (frF_py / 120));
    beginContour();
    vertex(i4x, i4y - scale * 0.3 - (frF_py / 35));
    vertex(i3x, i3y - scale * 0.3 - (frF_py / 35));
    vertex(i2x, i2y - scale * 1.4 - (frF_py / 65));
    vertex(i1x, i1y - scale * 1.4 - (frF_py / 65));
    endContour();
    endShape(CLOSE);

  }
  //FrGrnd >> FrntWndw FRAME BOT    frD + frE + frF
  {
    //Stlying BotWindow LeftFrame
    fill(frontWindowBottomColour);
    stroke(lineColour);

    //Draw BotWindow LeftFrame
    beginShape();
    vertex(frD1x, frD1y);
    vertex(frD2x, frD2y);
    vertex(frD3x, frD3y);
    vertex(frD4x, frD4y);
    endShape(CLOSE);

    //Draw BotWindow RightFrame
    beginShape();
    vertex(frE1x, frE1y);
    vertex(frE2x, frE2y);
    vertex(frE3x, frE3y);
    vertex(frE4x, frE4y);
    endShape(CLOSE);

    //Draw BotWindow CentreFrame
    beginShape();
    vertex(frF1x, frF1y);
    vertex(frF2x, frF2y);
    vertex(frF3x, frF3y);
    vertex(frF4x, frF4y);
    endShape(CLOSE);

  }
  //FrGrnd >> FrntWndw WINDOW BOT   h + i
  {
    //Stlying WINDOW BOT
    fill(frontWindowBottomColour);
    stroke(lineColour);

    //Draw WINDOW BOT
    beginShape();
    vertex(h1x, h1y);
    vertex(h2x, h2y);
    vertex(h3x, h3y);
    vertex(h4x, h4y);
    beginContour();
    vertex(i4x, i4y);
    vertex(i3x, i3y);
    vertex(i2x, i2y);
    vertex(i1x, i1y);
    endContour();
    endShape(CLOSE);

  }
  //FrGrnd >> FrntWndw SIDES        a + b
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
  //FrGrnd >> FrntWndw SURROUND     b + c
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
  //FrGrnd >> FrntWndw EDGE         c + d
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

  //FrGrnd >> FrntWndw WALL         0 + a
  {
    //Stlying Wall
    fill(wallColour);
    stroke(lineColour);

    //Draw Wall
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
    endShape(CLOSE);
  }


      //full plant
    {
        fill(10,120,60);

        //Scale P
        let Psx = scale/5.2;
        let Psy = scale/5.2;

        //Position P
        let Ppx = scale*-10;
        let Ppy = scale*0;

      //Leaf1
      {
        beginShape();
        vertex((wc + ((243 * Psx) + Ppx)),(hc + ((228 * Psy) + Ppy)));
        vertex((wc + ((227 * Psx) + Ppx)),(hc + ((170 * Psy) + Ppy)));
        vertex((wc + ((211 * Psx) + Ppx)),(hc + ((157 * Psy) + Ppy)));
        vertex((wc + ((195 * Psx) + Ppx)),(hc + ((156 * Psy) + Ppy)));
        vertex((wc + ((174 * Psx) + Ppx)),(hc + ((165 * Psy) + Ppy)));
        vertex((wc + ((159 * Psx) + Ppx)),(hc + ((184 * Psy) + Ppy)));
        vertex((wc + ((154 * Psx) + Ppx)),(hc + ((209 * Psy) + Ppy)));
        vertex((wc + ((154 * Psx) + Ppx)),(hc + ((233 * Psy) + Ppy)));
        vertex((wc + ((150 * Psx) + Ppx)),(hc + ((268 * Psy) + Ppy)));
        vertex((wc + ((142 * Psx) + Ppx)),(hc + ((287 * Psy) + Ppy)));
        vertex((wc + ((133 * Psx) + Ppx)),(hc + ((298 * Psy) + Ppy)));
        vertex((wc + ((126 * Psx) + Ppx)),(hc + ((304 * Psy) + Ppy)));
        vertex((wc + ((122 * Psx) + Ppx)),(hc + ((304 * Psy) + Ppy)));
        vertex((wc + ((118 * Psx) + Ppx)),(hc + ((305 * Psy) + Ppy)));
        vertex((wc + ((118 * Psx) + Ppx)),(hc + ((306 * Psy) + Ppy)));
        vertex((wc + ((120 * Psx) + Ppx)),(hc + ((307 * Psy) + Ppy)));
        vertex((wc + ((125 * Psx) + Ppx)),(hc + ((307 * Psy) + Ppy)));
        vertex((wc + ((129 * Psx) + Ppx)),(hc + ((308 * Psy) + Ppy)));
        vertex((wc + ((134 * Psx) + Ppx)),(hc + ((308 * Psy) + Ppy)));
        vertex((wc + ((138 * Psx) + Ppx)),(hc + ((306 * Psy) + Ppy)));
        vertex((wc + ((142 * Psx) + Ppx)),(hc + ((301 * Psy) + Ppy)));
        vertex((wc + ((150 * Psx) + Ppx)),(hc + ((297 * Psy) + Ppy)));
        vertex((wc + ((162 * Psx) + Ppx)),(hc + ((294 * Psy) + Ppy)));
        vertex((wc + ((171 * Psx) + Ppx)),(hc + ((282 * Psy) + Ppy)));
        vertex((wc + ((171 * Psx) + Ppx)),(hc + ((268 * Psy) + Ppy)));
        vertex((wc + ((171 * Psx) + Ppx)),(hc + ((258 * Psy) + Ppy)));
        vertex((wc + ((176 * Psx) + Ppx)),(hc + ((249 * Psy) + Ppy)));
        vertex((wc + ((185 * Psx) + Ppx)),(hc + ((236 * Psy) + Ppy)));
        vertex((wc + ((182 * Psx) + Ppx)),(hc + ((223 * Psy) + Ppy)));
        vertex((wc + ((180 * Psx) + Ppx)),(hc + ((209 * Psy) + Ppy)));
        vertex((wc + ((176 * Psx) + Ppx)),(hc + ((192 * Psy) + Ppy)));
        vertex((wc + ((181 * Psx) + Ppx)),(hc + ((176 * Psy) + Ppy)));
        vertex((wc + ((189 * Psx) + Ppx)),(hc + ((169 * Psy) + Ppy)));
        vertex((wc + ((197 * Psx) + Ppx)),(hc + ((161 * Psy) + Ppy)));
        vertex((wc + ((203 * Psx) + Ppx)),(hc + ((159 * Psy) + Ppy)));
        vertex((wc + ((216 * Psx) + Ppx)),(hc + ((165 * Psy) + Ppy)));
        vertex((wc + ((224 * Psx) + Ppx)),(hc + ((171 * Psy) + Ppy)));
        vertex((wc + ((228 * Psx) + Ppx)),(hc + ((186 * Psy) + Ppy)));
        vertex((wc + ((240 * Psx) + Ppx)),(hc + ((228 * Psy) + Ppy)));
        endShape(CLOSE);

        beginShape();
        vertex((wc + ((262 * Psx) + Ppx)),(hc + ((257 * Psy) + Ppy)));
        vertex((wc + ((268 * Psx) + Ppx)),(hc + ((184 * Psy) + Ppy)))
        vertex((wc + ((268 * Psx) + Ppx)),(hc + ((174 * Psy) + Ppy)));
        vertex((wc + ((265 * Psx) + Ppx)),(hc + ((172 * Psy) + Ppy)));
        vertex((wc + ((262 * Psx) + Ppx)),(hc + ((170 * Psy) + Ppy)));
        vertex((wc + ((263 * Psx) + Ppx)),(hc + ((164 * Psy) + Ppy)));
        vertex((wc + ((264 * Psx) + Ppx)),(hc + ((160 * Psy) + Ppy)));
        vertex((wc + ((264 * Psx) + Ppx)),(hc + ((151 * Psy) + Ppy)));
        vertex((wc + ((260 * Psx) + Ppx)),(hc + ((141 * Psy) + Ppy)));
        vertex((wc + ((260 * Psx) + Ppx)),(hc + ((129 * Psy) + Ppy)));
        vertex((wc + ((263 * Psx) + Ppx)),(hc + ((122 * Psy) + Ppy)));
        vertex((wc + ((267 * Psx) + Ppx)),(hc + ((116 * Psy) + Ppy)));
        vertex((wc + ((268 * Psx) + Ppx)),(hc + ((108 * Psy) + Ppy)));
        vertex((wc + ((271 * Psx) + Ppx)),(hc + ((103 * Psy) + Ppy)));
        vertex((wc + ((275 * Psx) + Ppx)),(hc + ((99 * Psy) + Ppy)));
        vertex((wc + ((278 * Psx) + Ppx)),(hc + ((93 * Psy) + Ppy)));
        vertex((wc + ((283 * Psx) + Ppx)),(hc + ((91 * Psy) + Ppy)));
        vertex((wc + ((288 * Psx) + Ppx)),(hc + ((93 * Psy) + Ppy)));
        vertex((wc + ((293 * Psx) + Ppx)),(hc + ((92 * Psy) + Ppy)));
        vertex((wc + ((295 * Psx) + Ppx)),(hc + ((96 * Psy) + Ppy)));
        vertex((wc + ((297 * Psx) + Ppx)),(hc + ((102 * Psy) + Ppy)));
        vertex((wc + ((295 * Psx) + Ppx)),(hc + ((105 * Psy) + Ppy)));
        vertex((wc + ((297 * Psx) + Ppx)),(hc + ((111 * Psy) + Ppy)));
        vertex((wc + ((301 * Psx) + Ppx)),(hc + ((122 * Psy) + Ppy)));
        vertex((wc + ((302 * Psx) + Ppx)),(hc + ((131 * Psy) + Ppy)));
        vertex((wc + ((300 * Psx) + Ppx)),(hc + ((140 * Psy) + Ppy)));
        vertex((wc + ((302 * Psx) + Ppx)),(hc + ((146 * Psy) + Ppy)));
        vertex((wc + ((297 * Psx) + Ppx)),(hc + ((157 * Psy) + Ppy)));
        vertex((wc + ((295 * Psx) + Ppx)),(hc + ((165 * Psy) + Ppy)));
        vertex((wc + ((295 * Psx) + Ppx)),(hc + ((172 * Psy) + Ppy)));
        vertex((wc + ((293 * Psx) + Ppx)),(hc + ((180 * Psy) + Ppy)));
        vertex((wc + ((284 * Psx) + Ppx)),(hc + ((184 * Psy) + Ppy)));
        vertex((wc + ((279 * Psx) + Ppx)),(hc + ((189 * Psy) + Ppy)));
        vertex((wc + ((271 * Psx) + Ppx)),(hc + ((191 * Psy) + Ppy)));
        vertex((wc + ((265 * Psx) + Ppx)),(hc + ((253 * Psy) + Ppy)));
        endShape(CLOSE);

        beginShape();

        vertex((wc + ((251 * Psx) + Ppx)),(hc + ((285 * Psy) + Ppy)));
        vertex((wc + ((244 * Psx) + Ppx)),(hc + ((203 * Psy) + Ppy)));
        vertex((wc + ((243 * Psx) + Ppx)),(hc + ((188 * Psy) + Ppy)));
        vertex((wc + ((237 * Psx) + Ppx)),(hc + ((163 * Psy) + Ppy)));
        vertex((wc + ((226 * Psx) + Ppx)),(hc + ((147 * Psy) + Ppy)));
        vertex((wc + ((212 * Psx) + Ppx)),(hc + ((137 * Psy) + Ppy)));
        vertex((wc + ((198 * Psx) + Ppx)),(hc + ((137 * Psy) + Ppy)));
        vertex((wc + ((182 * Psx) + Ppx)),(hc + ((136 * Psy) + Ppy)));
        vertex((wc + ((170 * Psx) + Ppx)),(hc + ((127 * Psy) + Ppy)));
        vertex((wc + ((162 * Psx) + Ppx)),(hc + ((122 * Psy) + Ppy)));
        vertex((wc + ((153 * Psx) + Ppx)),(hc + ((122 * Psy) + Ppy)));
        vertex((wc + ((146 * Psx) + Ppx)),(hc + ((122 * Psy) + Ppy)));
        vertex((wc + ((139 * Psx) + Ppx)),(hc + ((117 * Psy) + Ppy)));
        vertex((wc + ((132 * Psx) + Ppx)),(hc + ((114 * Psy) + Ppy)));
        vertex((wc + ((126 * Psx) + Ppx)),(hc + ((116 * Psy) + Ppy)));
        vertex((wc + ((119 * Psx) + Ppx)),(hc + ((116 * Psy) + Ppy)));
        vertex((wc + ((110 * Psx) + Ppx)),(hc + ((110 * Psy) + Ppy)));
        vertex((wc + ((104 * Psx) + Ppx)),(hc + ((107 * Psy) + Ppy)));
        vertex((wc + ((100 * Psx) + Ppx)),(hc + ((107 * Psy) + Ppy)));
        vertex((wc + ((93 * Psx) + Ppx)),(hc + ((105 * Psy) + Ppy)));
        vertex((wc + ((90 * Psx) + Ppx)),(hc + ((106 * Psy) + Ppy)));
        vertex((wc + ((100 * Psx) + Ppx)),(hc + ((100 * Psy) + Ppy)));
        vertex((wc + ((114 * Psx) + Ppx)),(hc + ((101 * Psy) + Ppy)));
        vertex((wc + ((123 * Psx) + Ppx)),(hc + ((98 * Psy) + Ppy)));
        vertex((wc + ((133 * Psx) + Ppx)),(hc + ((97 * Psy) + Ppy)));
        vertex((wc + ((145 * Psx) + Ppx)),(hc + ((98 * Psy) + Ppy)));
        vertex((wc + ((153 * Psx) + Ppx)),(hc + ((101 * Psy) + Ppy)));
        vertex((wc + ((162 * Psx) + Ppx)),(hc + ((98 * Psy) + Ppy)));
        vertex((wc + ((170 * Psx) + Ppx)),(hc + ((97 * Psy) + Ppy)));
        vertex((wc + ((179 * Psx) + Ppx)),(hc + ((97 * Psy) + Ppy)));
        vertex((wc + ((186 * Psx) + Ppx)),(hc + ((104 * Psy) + Ppy)));
        vertex((wc + ((197 * Psx) + Ppx)),(hc + ((105 * Psy) + Ppy)));
        vertex((wc + ((206 * Psx) + Ppx)),(hc + ((103 * Psy) + Ppy)));
        vertex((wc + ((220 * Psx) + Ppx)),(hc + ((104 * Psy) + Ppy)));
        vertex((wc + ((228 * Psx) + Ppx)),(hc + ((112 * Psy) + Ppy)));
        vertex((wc + ((233 * Psx) + Ppx)),(hc + ((120 * Psy) + Ppy)));
        vertex((wc + ((244 * Psx) + Ppx)),(hc + ((127 * Psy) + Ppy)));
        vertex((wc + ((241 * Psx) + Ppx)),(hc + ((138 * Psy) + Ppy)));
        vertex((wc + ((240 * Psx) + Ppx)),(hc + ((147 * Psy) + Ppy)));
        vertex((wc + ((244 * Psx) + Ppx)),(hc + ((154 * Psy) + Ppy)));
        vertex((wc + ((244 * Psx) + Ppx)),(hc + ((163 * Psy) + Ppy)));
        vertex((wc + ((244 * Psx) + Ppx)),(hc + ((169 * Psy) + Ppy)));
        vertex((wc + ((243 * Psx) + Ppx)),(hc + ((174 * Psy) + Ppy)));
        vertex((wc + ((247 * Psx) + Ppx)),(hc + ((187 * Psy) + Ppy)));
        vertex((wc + ((248 * Psx) + Ppx)),(hc + ((201 * Psy) + Ppy)));
        vertex((wc + ((253 * Psx) + Ppx)),(hc + ((203 * Psy) + Ppy)));
        endShape();

        beginShape();
        vertex((wc + ((242 * Psx) + Ppx)),(hc + ((262 * Psy) + Ppy)));
        vertex((wc + ((227 * Psx) + Ppx)),(hc + ((214 * Psy) + Ppy)));
        vertex((wc + ((219 * Psx) + Ppx)),(hc + ((203 * Psy) + Ppy)));
        vertex((wc + ((212 * Psx) + Ppx)),(hc + ((203 * Psy) + Ppy)));
        vertex((wc + ((207 * Psx) + Ppx)),(hc + ((207 * Psy) + Ppy)));
        vertex((wc + ((202 * Psx) + Ppx)),(hc + ((207 * Psy) + Ppy)));
        vertex((wc + ((196 * Psx) + Ppx)),(hc + ((208 * Psy) + Ppy)));
        vertex((wc + ((195 * Psx) + Ppx)),(hc + ((213 * Psy) + Ppy)));
        vertex((wc + ((194 * Psx) + Ppx)),(hc + ((219 * Psy) + Ppy)));
        vertex((wc + ((197 * Psx) + Ppx)),(hc + ((223 * Psy) + Ppy)));
        vertex((wc + ((199 * Psx) + Ppx)),(hc + ((226 * Psy) + Ppy)));
        vertex((wc + ((201 * Psx) + Ppx)),(hc + ((218 * Psy) + Ppy)));
        vertex((wc + ((204 * Psx) + Ppx)),(hc + ((212 * Psy) + Ppy)));
        vertex((wc + ((210 * Psx) + Ppx)),(hc + ((212 * Psy) + Ppy)));
        vertex((wc + ((216 * Psx) + Ppx)),(hc + ((209 * Psy) + Ppy)));
        vertex((wc + ((217 * Psx) + Ppx)),(hc + ((206 * Psy) + Ppy)));
        vertex((wc + ((224 * Psx) + Ppx)),(hc + ((215 * Psy) + Ppy)));
        vertex((wc + ((231 * Psx) + Ppx)),(hc + ((235 * Psy) + Ppy)));
        vertex((wc + ((238 * Psx) + Ppx)),(hc + ((260 * Psy) + Ppy)));
        endShape(CLOSE);

        beginShape();
        vertex((wc + ((271 * Psx) + Ppx)),(hc + ((279 * Psy) + Ppy)));
        vertex((wc + ((288 * Psx) + Ppx)),(hc + ((215 * Psy) + Ppy)));
        vertex((wc + ((295 * Psx) + Ppx)),(hc + ((205 * Psy) + Ppy)));
        vertex((wc + ((305 * Psx) + Ppx)),(hc + ((198 * Psy) + Ppy)));
        vertex((wc + ((312 * Psx) + Ppx)),(hc + ((192 * Psy) + Ppy)));
        vertex((wc + ((322 * Psx) + Ppx)),(hc + ((190 * Psy) + Ppy)));
        vertex((wc + ((331 * Psx) + Ppx)),(hc + ((191 * Psy) + Ppy)));
        vertex((wc + ((337 * Psx) + Ppx)),(hc + ((195 * Psy) + Ppy)));
        vertex((wc + ((341 * Psx) + Ppx)),(hc + ((199 * Psy) + Ppy)));
        vertex((wc + ((343 * Psx) + Ppx)),(hc + ((206 * Psy) + Ppy)));
        vertex((wc + ((345 * Psx) + Ppx)),(hc + ((211 * Psy) + Ppy)));
        vertex((wc + ((348 * Psx) + Ppx)),(hc + ((213 * Psy) + Ppy)));
        vertex((wc + ((353 * Psx) + Ppx)),(hc + ((214 * Psy) + Ppy)));
        vertex((wc + ((358 * Psx) + Ppx)),(hc + ((217 * Psy) + Ppy)));
        vertex((wc + ((359 * Psx) + Ppx)),(hc + ((221 * Psy) + Ppy)));
        vertex((wc + ((357 * Psx) + Ppx)),(hc + ((220 * Psy) + Ppy)));
        vertex((wc + ((355 * Psx) + Ppx)),(hc + ((219 * Psy) + Ppy)));
        vertex((wc + ((351 * Psx) + Ppx)),(hc + ((219 * Psy) + Ppy)));
        vertex((wc + ((341 * Psx) + Ppx)),(hc + ((219 * Psy) + Ppy)));
        vertex((wc + ((335 * Psx) + Ppx)),(hc + ((218 * Psy) + Ppy)));
        vertex((wc + ((334 * Psx) + Ppx)),(hc + ((213 * Psy) + Ppy)));
        vertex((wc + ((330 * Psx) + Ppx)),(hc + ((209 * Psy) + Ppy)));
        vertex((wc + ((326 * Psx) + Ppx)),(hc + ((206 * Psy) + Ppy)));
        vertex((wc + ((323 * Psx) + Ppx)),(hc + ((201 * Psy) + Ppy)));
        vertex((wc + ((316 * Psx) + Ppx)),(hc + ((202 * Psy) + Ppy)));
        vertex((wc + ((315 * Psx) + Ppx)),(hc + ((201 * Psy) + Ppy)));
        vertex((wc + ((314 * Psx) + Ppx)),(hc + ((198 * Psy) + Ppy)));
        vertex((wc + ((312 * Psx) + Ppx)),(hc + ((196 * Psy) + Ppy)));
        vertex((wc + ((307 * Psx) + Ppx)),(hc + ((200 * Psy) + Ppy)));
        vertex((wc + ((302 * Psx) + Ppx)),(hc + ((204 * Psy) + Ppy)));
        vertex((wc + ((298 * Psx) + Ppx)),(hc + ((207 * Psy) + Ppy)));
        vertex((wc + ((295 * Psx) + Ppx)),(hc + ((211 * Psy) + Ppy)));
        vertex((wc + ((291 * Psx) + Ppx)),(hc + ((217 * Psy) + Ppy)));
        vertex((wc + ((288 * Psx) + Ppx)),(hc + ((229 * Psy) + Ppy)));
        vertex((wc + ((276 * Psx) + Ppx)),(hc + ((276 * Psy) + Ppy)));
        endShape(CLOSE);

        beginShape();
        vertex((wc + ((260 * Psx) + Ppx)),(hc + ((301 * Psy) + Ppy)));
        vertex((wc + ((269 * Psx) + Ppx)),(hc + ((262 * Psy) + Ppy)));
        vertex((wc + ((279 * Psx) + Ppx)),(hc + ((230 * Psy) + Ppy)));
        vertex((wc + ((287 * Psx) + Ppx)),(hc + ((201 * Psy) + Ppy)));
        vertex((wc + ((293 * Psx) + Ppx)),(hc + ((186 * Psy) + Ppy)));
        vertex((wc + ((298 * Psx) + Ppx)),(hc + ((174 * Psy) + Ppy)));
        vertex((wc + ((301 * Psx) + Ppx)),(hc + ((165 * Psy) + Ppy)));
        vertex((wc + ((308 * Psx) + Ppx)),(hc + ((158 * Psy) + Ppy)));
        vertex((wc + ((316 * Psx) + Ppx)),(hc + ((146 * Psy) + Ppy)));
        vertex((wc + ((328 * Psx) + Ppx)),(hc + ((130 * Psy) + Ppy)));
        vertex((wc + ((339 * Psx) + Ppx)),(hc + ((121 * Psy) + Ppy)));
        vertex((wc + ((350 * Psx) + Ppx)),(hc + ((115 * Psy) + Ppy)));
        vertex((wc + ((362 * Psx) + Ppx)),(hc + ((119 * Psy) + Ppy)));
        vertex((wc + ((369 * Psx) + Ppx)),(hc + ((124 * Psy) + Ppy)));
        vertex((wc + ((374 * Psx) + Ppx)),(hc + ((124 * Psy) + Ppy)));
        vertex((wc + ((379 * Psx) + Ppx)),(hc + ((133 * Psy) + Ppy)));
        vertex((wc + ((377 * Psx) + Ppx)),(hc + ((136 * Psy) + Ppy)));
        vertex((wc + ((376 * Psx) + Ppx)),(hc + ((134 * Psy) + Ppy)));
        vertex((wc + ((374 * Psx) + Ppx)),(hc + ((130 * Psy) + Ppy)));
        vertex((wc + ((371 * Psx) + Ppx)),(hc + ((132 * Psy) + Ppy)));
        vertex((wc + ((366 * Psx) + Ppx)),(hc + ((133 * Psy) + Ppy)));
        vertex((wc + ((357 * Psx) + Ppx)),(hc + ((130 * Psy) + Ppy)));
        vertex((wc + ((351 * Psx) + Ppx)),(hc + ((131 * Psy) + Ppy)));
        vertex((wc + ((344 * Psx) + Ppx)),(hc + ((131 * Psy) + Ppy)));
        vertex((wc + ((337 * Psx) + Ppx)),(hc + ((146 * Psy) + Ppy)));
        vertex((wc + ((331 * Psx) + Ppx)),(hc + ((153 * Psy) + Ppy)));
        vertex((wc + ((327 * Psx) + Ppx)),(hc + ((157 * Psy) + Ppy)));
        vertex((wc + ((322 * Psx) + Ppx)),(hc + ((169 * Psy) + Ppy)));
        vertex((wc + ((322 * Psx) + Ppx)),(hc + ((180 * Psy) + Ppy)));
        vertex((wc + ((318 * Psx) + Ppx)),(hc + ((191 * Psy) + Ppy)));
        vertex((wc + ((313 * Psx) + Ppx)),(hc + ((195 * Psy) + Ppy)));
        vertex((wc + ((302 * Psx) + Ppx)),(hc + ((200 * Psy) + Ppy)));
        vertex((wc + ((295 * Psx) + Ppx)),(hc + ((212 * Psy) + Ppy)));
        vertex((wc + ((286 * Psx) + Ppx)),(hc + ((214 * Psy) + Ppy)));
        vertex((wc + ((277 * Psx) + Ppx)),(hc + ((247 * Psy) + Ppy)));
        vertex((wc + ((269 * Psx) + Ppx)),(hc + ((282 * Psy) + Ppy)));
        endShape(CLOSE);

        fill(2550);
        beginShape();
        vertex((wc + ((255 * Psx) + Ppx)),(hc + ((225 * Psy) + Ppy)));
        vertex((wc + ((303 * Psx) + Ppx)),(hc + ((225 * Psy) + Ppy)));
        vertex((wc + ((307 * Psx) + Ppx)),(hc + ((227 * Psy) + Ppy)));
        vertex((wc + ((309 * Psx) + Ppx)),(hc + ((231 * Psy) + Ppy)));
        vertex((wc + ((308 * Psx) + Ppx)),(hc + ((235 * Psy) + Ppy)));
        vertex((wc + ((305 * Psx) + Ppx)),(hc + ((239 * Psy) + Ppy)));
        vertex((wc + ((303 * Psx) + Ppx)),(hc + ((248 * Psy) + Ppy)));
        vertex((wc + ((303 * Psx) + Ppx)),(hc + ((256 * Psy) + Ppy)));
        vertex((wc + ((305 * Psx) + Ppx)),(hc + ((263 * Psy) + Ppy)));
        vertex((wc + ((308 * Psx) + Ppx)),(hc + ((273 * Psy) + Ppy)));
        vertex((wc + ((318 * Psx) + Ppx)),(hc + ((293 * Psy) + Ppy)));
        vertex((wc + ((324 * Psx) + Ppx)),(hc + ((307 * Psy) + Ppy)));
        vertex((wc + ((327 * Psx) + Ppx)),(hc + ((323 * Psy) + Ppy)));
        vertex((wc + ((328 * Psx) + Ppx)),(hc + ((359 * Psy) + Ppy)));
        vertex((wc + ((321 * Psx) + Ppx)),(hc + ((378 * Psy) + Ppy)));
        vertex((wc + ((299 * Psx) + Ppx)),(hc + ((403 * Psy) + Ppy)));
        vertex((wc + ((273 * Psx) + Ppx)),(hc + ((412 * Psy) + Ppy)));
        vertex((wc + ((255 * Psx) + Ppx)),(hc + ((412 * Psy) + Ppy)));
        vertex((wc + ((260 * Psx) + Ppx)),(hc + ((412 * Psy) + Ppy)));
        vertex((wc + ((242 * Psx) + Ppx)),(hc + ((412 * Psy) + Ppy)));
        vertex((wc + ((216 * Psx) + Ppx)),(hc + ((403 * Psy) + Ppy)));
        vertex((wc + ((194 * Psx) + Ppx)),(hc + ((378 * Psy) + Ppy)));
        vertex((wc + ((187 * Psx) + Ppx)),(hc + ((359 * Psy) + Ppy)));
        vertex((wc + ((188 * Psx) + Ppx)),(hc + ((323 * Psy) + Ppy)));
        vertex((wc + ((191 * Psx) + Ppx)),(hc + ((307 * Psy) + Ppy)));
        vertex((wc + ((197 * Psx) + Ppx)),(hc + ((293 * Psy) + Ppy)));
        vertex((wc + ((207 * Psx) + Ppx)),(hc + ((273 * Psy) + Ppy)));
        vertex((wc + ((210 * Psx) + Ppx)),(hc + ((263 * Psy) + Ppy)));
        vertex((wc + ((212 * Psx) + Ppx)),(hc + ((256 * Psy) + Ppy)));
        vertex((wc + ((212 * Psx) + Ppx)),(hc + ((248 * Psy) + Ppy)));
        vertex((wc + ((210 * Psx) + Ppx)),(hc + ((239 * Psy) + Ppy)));
        vertex((wc + ((207 * Psx) + Ppx)),(hc + ((235 * Psy) + Ppy)));
        vertex((wc + ((206 * Psx) + Ppx)),(hc + ((231 * Psy) + Ppy)));
        vertex((wc + ((208 * Psx) + Ppx)),(hc + ((227 * Psy) + Ppy)));
        vertex((wc + ((212 * Psx) + Ppx)),(hc + ((225 * Psy) + Ppy)));
        endShape(CLOSE);

        fill(255,90,0);
        beginShape();
        vertex((wc + ((255 * Psx) + Ppx)),(hc + ((225 * Psy) + Ppy)));
        vertex((wc + ((303 * Psx) + Ppx)),(hc + ((225 * Psy) + Ppy)));
        vertex((wc + ((307 * Psx) + Ppx)),(hc + ((227 * Psy) + Ppy)));
        vertex((wc + ((309 * Psx) + Ppx)),(hc + ((231 * Psy) + Ppy)));
        vertex((wc + ((206 * Psx) + Ppx)),(hc + ((231 * Psy) + Ppy)));
        vertex((wc + ((208 * Psx) + Ppx)),(hc + ((227 * Psy) + Ppy)));
        vertex((wc + ((212 * Psx) + Ppx)),(hc + ((225 * Psy) + Ppy)));
        endShape(CLOSE);

        fill(10,120,60);
        beginShape();
        vertex((wc + ((276 * Psx) + Ppx)),(hc + ((287 * Psy) + Ppy)));
        vertex((wc + ((276 * Psx) + Ppx)),(hc + ((280 * Psy) + Ppy)));
        vertex((wc + ((280 * Psx) + Ppx)),(hc + ((274 * Psy) + Ppy)));
        vertex((wc + ((284 * Psx) + Ppx)),(hc + ((268 * Psy) + Ppy)));
        vertex((wc + ((286 * Psx) + Ppx)),(hc + ((258 * Psy) + Ppy)));
        vertex((wc + ((288 * Psx) + Ppx)),(hc + ((245 * Psy) + Ppy)));
        vertex((wc + ((286 * Psx) + Ppx)),(hc + ((240 * Psy) + Ppy)));
        vertex((wc + ((284 * Psx) + Ppx)),(hc + ((232 * Psy) + Ppy)));
        vertex((wc + ((282 * Psx) + Ppx)),(hc + ((226 * Psy) + Ppy)));
        vertex((wc + ((282 * Psx) + Ppx)),(hc + ((220 * Psy) + Ppy)));
        vertex((wc + ((283 * Psx) + Ppx)),(hc + ((221 * Psy) + Ppy)));
        vertex((wc + ((281 * Psx) + Ppx)),(hc + ((201 * Psy) + Ppy)));
        vertex((wc + ((275 * Psx) + Ppx)),(hc + ((196 * Psy) + Ppy)));
        vertex((wc + ((273 * Psx) + Ppx)),(hc + ((180 * Psy) + Ppy)));
        vertex((wc + ((267 * Psx) + Ppx)),(hc + ((179 * Psy) + Ppy)));
        vertex((wc + ((260 * Psx) + Ppx)),(hc + ((180 * Psy) + Ppy)));
        vertex((wc + ((253 * Psx) + Ppx)),(hc + ((181 * Psy) + Ppy)));
        vertex((wc + ((241 * Psx) + Ppx)),(hc + ((180 * Psy) + Ppy)));
        vertex((wc + ((235 * Psx) + Ppx)),(hc + ((183 * Psy) + Ppy)));
        vertex((wc + ((233 * Psx) + Ppx)),(hc + ((188 * Psy) + Ppy)));
        vertex((wc + ((234 * Psx) + Ppx)),(hc + ((195 * Psy) + Ppy)));
        vertex((wc + ((237 * Psx) + Ppx)),(hc + ((200 * Psy) + Ppy)));
        vertex((wc + ((243 * Psx) + Ppx)),(hc + ((205 * Psy) + Ppy)));
        vertex((wc + ((243 * Psx) + Ppx)),(hc + ((213 * Psy) + Ppy)));
        vertex((wc + ((242 * Psx) + Ppx)),(hc + ((220 * Psy) + Ppy)));
        vertex((wc + ((244 * Psx) + Ppx)),(hc + ((229 * Psy) + Ppy)));
        vertex((wc + ((249 * Psx) + Ppx)),(hc + ((234 * Psy) + Ppy)));
        vertex((wc + ((257 * Psx) + Ppx)),(hc + ((240 * Psy) + Ppy)));
        vertex((wc + ((260 * Psx) + Ppx)),(hc + ((249 * Psy) + Ppy)));
        vertex((wc + ((262 * Psx) + Ppx)),(hc + ((254 * Psy) + Ppy)));
        vertex((wc + ((265 * Psx) + Ppx)),(hc + ((263 * Psy) + Ppy)));
        vertex((wc + ((267 * Psx) + Ppx)),(hc + ((269 * Psy) + Ppy)));
        vertex((wc + ((267 * Psx) + Ppx)),(hc + ((273 * Psy) + Ppy)));
        endShape(CLOSE);

      }
    }




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
  {
    //Mapping Volume
    vol = map(i_py, 0, (scale * -60), 0.1, 2);
    // print(vol);
    masterVolume(vol);
  }


  //     //Adjusted coordinates
  //   {
  //     let newx = round(mouseX - width / 2);
  //     let newy = round(mouseY - height / 2);
  //     let newxScaled = round(newx/scale);
  //     let newyScaled = round(newy/scale);
  //     fill(0);
  //     noStroke();
  //     text('x:' + newxScaled, 16, 20);
  //     text('y:' + newyScaled, 16, 30);
  //     stroke(0);
  //     // //New axis
  //     // line(width / 2, 0, width / 2, height);
  //     // line(0, height / 2, width, height / 2);
  //   }


}

function mouseReleased() {

  //Click for full screen toggle
  // if (mouseX > width - 65 && mouseX < width - 15 && mouseY > 15 && mouseY < 65) {
  //   let fs = fullscreen();
  //   fullscreen(!fs);
  //   buttonColour = ([0, 100])
  // }

}

function mousePressed(){
  if(!sound.isLooping()){
  sound.loop();
  }
}
