let t1 = 'Kate Moross'
let t2 = 'Virtual Professional Practice Talk via Microsoft Teams on Thursday 30th April'
let t3 = 'Microsoft Teams'
let t4 = 'Thursday 30th April'
let t5 = '16:30'

function setup() {
  if (windowWidth > windowHeight) {
    createCanvas(windowHeight - 5, windowHeight - 5);
  }
  if (windowWidth < windowHeight) {
    createCanvas(windowWidth, windowWidth);
  }
}

function windowResized() {
  if (windowWidth > windowHeight - 5) {
    resizeCanvas(windowHeight - 5, windowHeight - 5)
  }
  if (5 + windowWidth < windowHeight) {
    resizeCanvas(windowWidth, windowWidth)
  }
}

function draw() {
  background(70, 190, 255);
  noCursor();

  noStroke();

  let mapx = map(mouseX, 0, width, -1, 1, true);
  let mapy = map(mouseX, 0, width, -1, 1, true);
  let randn = random(0, 0);
  var x1 = ((width * ( 2/ 3)) - mouseX) + (.5 * cos(mapx));
  var y1 = ((width / 3) - (mouseY)) + .5 * tan(mapy);

  let w = width / 350
  let h = height / 350

  let xw = -32 * h;
  let yw = -320 * h;

  textAlign(LEFT);
    strokeWeight(0);
    fill(255);
    textFont('Avenir');
    textStyle( BOLD);
    textSize(h*49);
    text(t1, h*4, h*31);
    textStyle(NORMAL);
    textSize(h*7.);
    text(t2, h*5, h*345);
    //text(t3, h*105, h*345);
    //text(t4, h*205, h*345);
    textStyle(ITALIC);
    text(t5, h*325, h*345);
  //flower
  {
    //stem
    {
      fill("#54a060");
      let stem_x = xw;
      let stem_y = yw;
      let stem_xScale = h;
      let stem_yScale = h;
      beginShape();
      vertex((stem_xScale * 314) + stem_x, (stem_yScale * 693) + stem_y);
      vertex((stem_xScale * 311) + stem_x, (stem_yScale * 644) + stem_y);
      vertex((stem_xScale * 308) + stem_x, (stem_yScale * 629) + stem_y);
      vertex((stem_xScale * 299) + stem_x, (stem_yScale * 576) + stem_y);
      vertex((stem_xScale * 293) + stem_x, (stem_yScale * 547) + stem_y);
      vertex((stem_xScale * 281) + stem_x, (stem_yScale * 497) + stem_y);
      vertex((stem_xScale * 275) + stem_x, (stem_yScale * 472) + stem_y);
      vertex((stem_xScale * 264) + stem_x, (stem_yScale * 452) + stem_y);
      vertex((stem_xScale * 248) + stem_x, (stem_yScale * 447) + stem_y);
      vertex((stem_xScale * 249) + stem_x, (stem_yScale * 436) + stem_y);
      vertex((stem_xScale * 255) + stem_x, (stem_yScale * 434) + stem_y);
      vertex((stem_xScale * 262) + stem_x, (stem_yScale * 434) + stem_y);
      vertex((stem_xScale * 265) + stem_x, (stem_yScale * 434) + stem_y);
      vertex((stem_xScale * 272) + stem_x, (stem_yScale * 431) + stem_y);
      vertex((stem_xScale * 282) + stem_x, (stem_yScale * 429) + stem_y);
      vertex((stem_xScale * 285) + stem_x, (stem_yScale * 429) + stem_y);
      vertex((stem_xScale * 285) + stem_x, (stem_yScale * 434) + stem_y);
      vertex((stem_xScale * 282) + stem_x, (stem_yScale * 442) + stem_y);
      vertex((stem_xScale * 281) + stem_x, (stem_yScale * 448) + stem_y);
      vertex((stem_xScale * 280) + stem_x, (stem_yScale * 454) + stem_y);
      vertex((stem_xScale * 280) + stem_x, (stem_yScale * 460) + stem_y);
      vertex((stem_xScale * 280) + stem_x, (stem_yScale * 470) + stem_y);
      vertex((stem_xScale * 283) + stem_x, (stem_yScale * 482) + stem_y);
      vertex((stem_xScale * 286) + stem_x, (stem_yScale * 493) + stem_y);
      vertex((stem_xScale * 288) + stem_x, (stem_yScale * 503) + stem_y);
      vertex((stem_xScale * 302) + stem_x, (stem_yScale * 558) + stem_y);
      vertex((stem_xScale * 307) + stem_x, (stem_yScale * 568) + stem_y);
      vertex((stem_xScale * 308) + stem_x, (stem_yScale * 573) + stem_y);
      vertex((stem_xScale * 312) + stem_x, (stem_yScale * 606) + stem_y);
      vertex((stem_xScale * 313) + stem_x, (stem_yScale * 616) + stem_y);
      vertex((stem_xScale * 315) + stem_x, (stem_yScale * 622) + stem_y);
      vertex((stem_xScale * 317) + stem_x, (stem_yScale * 629) + stem_y);
      vertex((stem_xScale * 317) + stem_x, (stem_yScale * 636) + stem_y);
      vertex((stem_xScale * 317) + stem_x, (stem_yScale * 638) + stem_y);
      vertex((stem_xScale * 318) + stem_x, (stem_yScale * 643) + stem_y);
      vertex((stem_xScale * 319) + stem_x, (stem_yScale * 688) + stem_y);
      endShape(CLOSE);
      //ENDstem
    }
    //pet1
    {
      fill("#fafffc");
      let pet1_x = xw + x1;
      let pet1_y = yw + y1;
      let pet1_xScale = h;
      let pet1_yScale = h;
      beginShape();
      vertex((pet1_xScale * 254) + pet1_x, (pet1_yScale * 442) + pet1_y);
      vertex((pet1_xScale * 241) + pet1_x, (pet1_yScale * 443) + pet1_y);
      vertex((pet1_xScale * 238) + pet1_x, (pet1_yScale * 444) + pet1_y);
      vertex((pet1_xScale * 231) + pet1_x, (pet1_yScale * 445) + pet1_y);
      vertex((pet1_xScale * 230) + pet1_x, (pet1_yScale * 447) + pet1_y);
      vertex((pet1_xScale * 228) + pet1_x, (pet1_yScale * 449) + pet1_y);
      vertex((pet1_xScale * 227) + pet1_x, (pet1_yScale * 451) + pet1_y);
      vertex((pet1_xScale * 225) + pet1_x, (pet1_yScale * 453) + pet1_y);
      vertex((pet1_xScale * 224) + pet1_x, (pet1_yScale * 456) + pet1_y);
      vertex((pet1_xScale * 224) + pet1_x, (pet1_yScale * 458) + pet1_y);
      vertex((pet1_xScale * 230) + pet1_x, (pet1_yScale * 458) + pet1_y);
      vertex((pet1_xScale * 234) + pet1_x, (pet1_yScale * 458) + pet1_y);
      vertex((pet1_xScale * 240) + pet1_x, (pet1_yScale * 458) + pet1_y);
      vertex((pet1_xScale * 245) + pet1_x, (pet1_yScale * 456) + pet1_y);
      vertex((pet1_xScale * 248) + pet1_x, (pet1_yScale * 455) + pet1_y);
      vertex((pet1_xScale * 251) + pet1_x, (pet1_yScale * 452) + pet1_y);
      vertex((pet1_xScale * 254) + pet1_x, (pet1_yScale * 449) + pet1_y);
      vertex((pet1_xScale * 256) + pet1_x, (pet1_yScale * 447) + pet1_y);
      vertex((pet1_xScale * 257) + pet1_x, (pet1_yScale * 446) + pet1_y);
      endShape(CLOSE);
      //ENDpet1
    }
    //pet2
    {
      fill("#fafffc");
      let pet2_x = xw + x1;
      let pet2_y = yw - y1;
      let pet2_xScale = h;
      let pet2_yScale = h;
      beginShape();
      vertex((pet2_xScale * 258) + pet2_x, (pet2_yScale * 447) + pet2_y);
      vertex((pet2_xScale * 254) + pet2_x, (pet2_yScale * 451) + pet2_y);
      vertex((pet2_xScale * 251) + pet2_x, (pet2_yScale * 455) + pet2_y);
      vertex((pet2_xScale * 251) + pet2_x, (pet2_yScale * 458) + pet2_y);
      vertex((pet2_xScale * 252) + pet2_x, (pet2_yScale * 460) + pet2_y);
      vertex((pet2_xScale * 255) + pet2_x, (pet2_yScale * 462) + pet2_y);
      vertex((pet2_xScale * 259) + pet2_x, (pet2_yScale * 463) + pet2_y);
      vertex((pet2_xScale * 264) + pet2_x, (pet2_yScale * 463) + pet2_y);
      vertex((pet2_xScale * 267) + pet2_x, (pet2_yScale * 461) + pet2_y);
      vertex((pet2_xScale * 268) + pet2_x, (pet2_yScale * 456) + pet2_y);
      vertex((pet2_xScale * 268) + pet2_x, (pet2_yScale * 451) + pet2_y);
      vertex((pet2_xScale * 268) + pet2_x, (pet2_yScale * 448) + pet2_y);
      vertex((pet2_xScale * 266) + pet2_x, (pet2_yScale * 446) + pet2_y);
      vertex((pet2_xScale * 265) + pet2_x, (pet2_yScale * 445) + pet2_y);
      endShape(CLOSE);
      //ENDpet2
    }
    //pet3
    {
      fill("#fafffc");
      let pet3_x = xw - y1;
      let pet3_y = yw + y1 + y1;
      let pet3_xScale = h;
      let pet3_yScale = h;
      beginShape();
      vertex((pet3_xScale * 267) + pet3_x, (pet3_yScale * 444) + pet3_y);
      vertex((pet3_xScale * 268) + pet3_x, (pet3_yScale * 454) + pet3_y);
      vertex((pet3_xScale * 268) + pet3_x, (pet3_yScale * 456) + pet3_y);
      vertex((pet3_xScale * 270) + pet3_x, (pet3_yScale * 458) + pet3_y);
      vertex((pet3_xScale * 273) + pet3_x, (pet3_yScale * 459) + pet3_y);
      vertex((pet3_xScale * 275) + pet3_x, (pet3_yScale * 459) + pet3_y);
      vertex((pet3_xScale * 279) + pet3_x, (pet3_yScale * 460) + pet3_y);
      vertex((pet3_xScale * 284) + pet3_x, (pet3_yScale * 460) + pet3_y);
      vertex((pet3_xScale * 286) + pet3_x, (pet3_yScale * 459) + pet3_y);
      vertex((pet3_xScale * 288) + pet3_x, (pet3_yScale * 457) + pet3_y);
      vertex((pet3_xScale * 286) + pet3_x, (pet3_yScale * 455) + pet3_y);
      vertex((pet3_xScale * 284) + pet3_x, (pet3_yScale * 452) + pet3_y);
      vertex((pet3_xScale * 280) + pet3_x, (pet3_yScale * 450) + pet3_y);
      vertex((pet3_xScale * 278) + pet3_x, (pet3_yScale * 447) + pet3_y);
      vertex((pet3_xScale * 277) + pet3_x, (pet3_yScale * 446) + pet3_y);
      2
      vertex((pet3_xScale * 273) + pet3_x, (pet3_yScale * 444) + pet3_y);
      endShape(CLOSE);
      //ENDpet3
    }
    //pet4
    {
      fill("#fafffc");
      let pet4_x = xw - x1;
      let pet4_y = yw - x1 - y1;
      let pet4_xScale = h;
      let pet4_yScale = h;
      beginShape();
      vertex((pet4_xScale * 281) + pet4_x, (pet4_yScale * 444) + pet4_y);
      vertex((pet4_xScale * 285) + pet4_x, (pet4_yScale * 448) + pet4_y);
      vertex((pet4_xScale * 287) + pet4_x, (pet4_yScale * 448) + pet4_y);
      vertex((pet4_xScale * 292) + pet4_x, (pet4_yScale * 449) + pet4_y);
      vertex((pet4_xScale * 295) + pet4_x, (pet4_yScale * 449) + pet4_y);
      vertex((pet4_xScale * 298) + pet4_x, (pet4_yScale * 449) + pet4_y);
      vertex((pet4_xScale * 302) + pet4_x, (pet4_yScale * 449) + pet4_y);
      vertex((pet4_xScale * 305) + pet4_x, (pet4_yScale * 449) + pet4_y);
      vertex((pet4_xScale * 306) + pet4_x, (pet4_yScale * 448) + pet4_y);
      vertex((pet4_xScale * 306) + pet4_x, (pet4_yScale * 447) + pet4_y);
      vertex((pet4_xScale * 304) + pet4_x, (pet4_yScale * 445) + pet4_y);
      vertex((pet4_xScale * 301) + pet4_x, (pet4_yScale * 443) + pet4_y);
      vertex((pet4_xScale * 298) + pet4_x, (pet4_yScale * 442) + pet4_y);
      vertex((pet4_xScale * 294) + pet4_x, (pet4_yScale * 440) + pet4_y);
      vertex((pet4_xScale * 289) + pet4_x, (pet4_yScale * 440) + pet4_y);
      vertex((pet4_xScale * 283) + pet4_x, (pet4_yScale * 439) + pet4_y);
      vertex((pet4_xScale * 281) + pet4_x, (pet4_yScale * 439) + pet4_y);
      endShape(CLOSE);
      //ENDpet4
    }
    //pet5
    {
      fill("#fafffc");
      let pet5_x = xw + y1;
      let pet5_y = yw - x1;
      let pet5_xScale = h;
      let pet5_yScale = h;
      beginShape();
      vertex((pet5_xScale * 286) + pet5_x, (pet5_yScale * 440) + pet5_y);
      vertex((pet5_xScale * 301) + pet5_x, (pet5_yScale * 443) + pet5_y);
      vertex((pet5_xScale * 308) + pet5_x, (pet5_yScale * 443) + pet5_y);
      vertex((pet5_xScale * 309) + pet5_x, (pet5_yScale * 443) + pet5_y);
      vertex((pet5_xScale * 313) + pet5_x, (pet5_yScale * 442) + pet5_y);
      vertex((pet5_xScale * 315) + pet5_x, (pet5_yScale * 441) + pet5_y);
      vertex((pet5_xScale * 317) + pet5_x, (pet5_yScale * 439) + pet5_y);
      vertex((pet5_xScale * 318) + pet5_x, (pet5_yScale * 436) + pet5_y);
      vertex((pet5_xScale * 315) + pet5_x, (pet5_yScale * 436) + pet5_y);
      vertex((pet5_xScale * 312) + pet5_x, (pet5_yScale * 436) + pet5_y);
      vertex((pet5_xScale * 307) + pet5_x, (pet5_yScale * 435) + pet5_y);
      vertex((pet5_xScale * 304) + pet5_x, (pet5_yScale * 433) + pet5_y);
      vertex((pet5_xScale * 300) + pet5_x, (pet5_yScale * 432) + pet5_y);
      vertex((pet5_xScale * 297) + pet5_x, (pet5_yScale * 432) + pet5_y);
      vertex((pet5_xScale * 293) + pet5_x, (pet5_yScale * 433) + pet5_y);
      vertex((pet5_xScale * 289) + pet5_x, (pet5_yScale * 434) + pet5_y);
      vertex((pet5_xScale * 285) + pet5_x, (pet5_yScale * 435) + pet5_y);
      vertex((pet5_xScale * 282) + pet5_x, (pet5_yScale * 435) + pet5_y);
      endShape(CLOSE);
      //ENDpet5
    }
    //pet6
    {
      fill("#fafffc");
      let pet6_x = xw + x1 + x1;
      let pet6_y = yw - y1 - y1;
      let pet6_xScale = h;
      let pet6_yScale = h;
      beginShape();
      vertex((pet6_xScale * 287) + pet6_x, (pet6_yScale * 436) + pet6_y);
      vertex((pet6_xScale * 301) + pet6_x, (pet6_yScale * 432) + pet6_y);
      vertex((pet6_xScale * 305) + pet6_x, (pet6_yScale * 429) + pet6_y);
      vertex((pet6_xScale * 309) + pet6_x, (pet6_yScale * 427) + pet6_y);
      vertex((pet6_xScale * 311) + pet6_x, (pet6_yScale * 424) + pet6_y);
      vertex((pet6_xScale * 313) + pet6_x, (pet6_yScale * 421) + pet6_y);
      vertex((pet6_xScale * 314) + pet6_x, (pet6_yScale * 418) + pet6_y);
      vertex((pet6_xScale * 309) + pet6_x, (pet6_yScale * 419) + pet6_y);
      vertex((pet6_xScale * 306) + pet6_x, (pet6_yScale * 420) + pet6_y);
      vertex((pet6_xScale * 303) + pet6_x, (pet6_yScale * 422) + pet6_y);
      vertex((pet6_xScale * 299) + pet6_x, (pet6_yScale * 424) + pet6_y);
      vertex((pet6_xScale * 295) + pet6_x, (pet6_yScale * 426) + pet6_y);
      vertex((pet6_xScale * 293) + pet6_x, (pet6_yScale * 427) + pet6_y);
      vertex((pet6_xScale * 288) + pet6_x, (pet6_yScale * 429) + pet6_y);
      vertex((pet6_xScale * 287) + pet6_x, (pet6_yScale * 429) + pet6_y);
      vertex((pet6_xScale * 285) + pet6_x, (pet6_yScale * 430) + pet6_y);
      endShape(CLOSE);
      //ENDpet6
    }
    //pet7
    {
      fill("#fafffc");
      let pet7_x = xw + x1 + y1;
      let pet7_y = yw - y1;
      let pet7_xScale = h;
      let pet7_yScale = h;
      beginShape();
      vertex((pet7_xScale * 284) + pet7_x, (pet7_yScale * 433) + pet7_y);
      vertex((pet7_xScale * 299) + pet7_x, (pet7_yScale * 421) + pet7_y);
      vertex((pet7_xScale * 301) + pet7_x, (pet7_yScale * 417) + pet7_y);
      vertex((pet7_xScale * 302) + pet7_x, (pet7_yScale * 414) + pet7_y);
      vertex((pet7_xScale * 302) + pet7_x, (pet7_yScale * 411) + pet7_y);
      vertex((pet7_xScale * 301) + pet7_x, (pet7_yScale * 410) + pet7_y);
      vertex((pet7_xScale * 297) + pet7_x, (pet7_yScale * 411) + pet7_y);
      vertex((pet7_xScale * 294) + pet7_x, (pet7_yScale * 415) + pet7_y);
      vertex((pet7_xScale * 290) + pet7_x, (pet7_yScale * 419) + pet7_y);
      vertex((pet7_xScale * 286) + pet7_x, (pet7_yScale * 422) + pet7_y);
      vertex((pet7_xScale * 280) + pet7_x, (pet7_yScale * 425) + pet7_y);
      vertex((pet7_xScale * 277) + pet7_x, (pet7_yScale * 428) + pet7_y);
      endShape(CLOSE);
      //ENDpet7
    }
    //pet8
    {
      fill("#fafffc");
      let pet8_x = xw - x1;
      let pet8_y = yw + y1;
      let pet8_xScale = h;
      let pet8_yScale = h;
      beginShape();
      vertex((pet8_xScale * 279) + pet8_x, (pet8_yScale * 432) + pet8_y);
      vertex((pet8_xScale * 282) + pet8_x, (pet8_yScale * 418) + pet8_y);
      vertex((pet8_xScale * 282) + pet8_x, (pet8_yScale * 414) + pet8_y);
      vertex((pet8_xScale * 282) + pet8_x, (pet8_yScale * 410) + pet8_y);
      vertex((pet8_xScale * 282) + pet8_x, (pet8_yScale * 406) + pet8_y);
      vertex((pet8_xScale * 280) + pet8_x, (pet8_yScale * 404) + pet8_y);
      vertex((pet8_xScale * 277) + pet8_x, (pet8_yScale * 406) + pet8_y);
      vertex((pet8_xScale * 275) + pet8_x, (pet8_yScale * 410) + pet8_y);
      vertex((pet8_xScale * 274) + pet8_x, (pet8_yScale * 414) + pet8_y);
      vertex((pet8_xScale * 271) + pet8_x, (pet8_yScale * 419) + pet8_y);
      vertex((pet8_xScale * 270) + pet8_x, (pet8_yScale * 424) + pet8_y);
      vertex((pet8_xScale * 269) + pet8_x, (pet8_yScale * 427) + pet8_y);
      vertex((pet8_xScale * 269) + pet8_x, (pet8_yScale * 430) + pet8_y);
      vertex((pet8_xScale * 270) + pet8_x, (pet8_yScale * 432) + pet8_y);
      endShape(CLOSE);
      //ENDpet8
    }
    //pet9
    {
      fill("#fafffc");
      let pet9_x = xw - y1 - y1;
      let pet9_y = yw + x1;
      let pet9_xScale = h;
      let pet9_yScale = h;
      beginShape();
      vertex((pet9_xScale * 271) + pet9_x, (pet9_yScale * 430) + pet9_y);
      vertex((pet9_xScale * 271) + pet9_x, (pet9_yScale * 418) + pet9_y);
      vertex((pet9_xScale * 271) + pet9_x, (pet9_yScale * 415) + pet9_y);
      vertex((pet9_xScale * 270) + pet9_x, (pet9_yScale * 413) + pet9_y);
      vertex((pet9_xScale * 270) + pet9_x, (pet9_yScale * 411) + pet9_y);
      vertex((pet9_xScale * 268) + pet9_x, (pet9_yScale * 408) + pet9_y);
      vertex((pet9_xScale * 266) + pet9_x, (pet9_yScale * 405) + pet9_y);
      vertex((pet9_xScale * 265) + pet9_x, (pet9_yScale * 404) + pet9_y);
      vertex((pet9_xScale * 263) + pet9_x, (pet9_yScale * 406) + pet9_y);
      vertex((pet9_xScale * 262) + pet9_x, (pet9_yScale * 409) + pet9_y);
      vertex((pet9_xScale * 261) + pet9_x, (pet9_yScale * 411) + pet9_y);
      vertex((pet9_xScale * 261) + pet9_x, (pet9_yScale * 413) + pet9_y);
      vertex((pet9_xScale * 261) + pet9_x, (pet9_yScale * 416) + pet9_y);
      vertex((pet9_xScale * 260) + pet9_x, (pet9_yScale * 418) + pet9_y);
      vertex((pet9_xScale * 259) + pet9_x, (pet9_yScale * 421) + pet9_y);
      vertex((pet9_xScale * 259) + pet9_x, (pet9_yScale * 425) + pet9_y);
      vertex((pet9_xScale * 259) + pet9_x, (pet9_yScale * 427) + pet9_y);
      vertex((pet9_xScale * 259) + pet9_x, (pet9_yScale * 430) + pet9_y);
      vertex((pet9_xScale * 260) + pet9_x, (pet9_yScale * 431) + pet9_y);
      vertex((pet9_xScale * 260) + pet9_x, (pet9_yScale * 432) + pet9_y);
      endShape(CLOSE);
      //ENDpet9
    }
    //pet10
    {
      fill("#fafffc");
      let pet10_x = xw + y1 + y1;
      let pet10_y = yw + x1 + y1;
      let pet10_xScale = h;
      let pet10_yScale = h;
      beginShape();
      vertex((pet10_xScale * 263) + pet10_x, (pet10_yScale * 430) + pet10_y);
      vertex((pet10_xScale * 261) + pet10_x, (pet10_yScale * 427) + pet10_y);
      vertex((pet10_xScale * 260) + pet10_x, (pet10_yScale * 423) + pet10_y);
      vertex((pet10_xScale * 259) + pet10_x, (pet10_yScale * 420) + pet10_y);
      vertex((pet10_xScale * 255) + pet10_x, (pet10_yScale * 416) + pet10_y);
      vertex((pet10_xScale * 249) + pet10_x, (pet10_yScale * 414) + pet10_y);
      vertex((pet10_xScale * 246) + pet10_x, (pet10_yScale * 413) + pet10_y);
      vertex((pet10_xScale * 240) + pet10_x, (pet10_yScale * 412) + pet10_y);
      vertex((pet10_xScale * 238) + pet10_x, (pet10_yScale * 413) + pet10_y);
      vertex((pet10_xScale * 239) + pet10_x, (pet10_yScale * 414) + pet10_y);
      vertex((pet10_xScale * 240) + pet10_x, (pet10_yScale * 415) + pet10_y);
      vertex((pet10_xScale * 242) + pet10_x, (pet10_yScale * 416) + pet10_y);
      vertex((pet10_xScale * 243) + pet10_x, (pet10_yScale * 418) + pet10_y);
      vertex((pet10_xScale * 244) + pet10_x, (pet10_yScale * 420) + pet10_y);
      vertex((pet10_xScale * 245) + pet10_x, (pet10_yScale * 422) + pet10_y);
      vertex((pet10_xScale * 248) + pet10_x, (pet10_yScale * 425) + pet10_y);
      vertex((pet10_xScale * 252) + pet10_x, (pet10_yScale * 430) + pet10_y);
      vertex((pet10_xScale * 254) + pet10_x, (pet10_yScale * 431) + pet10_y);
      vertex((pet10_xScale * 256) + pet10_x, (pet10_yScale * 431) + pet10_y);
      endShape(CLOSE);
      //ENDpet10
    }
    //pet11
    {
      fill("#fafffc");
      let pet11_x = xw + y1;
      let pet11_y = yw - x1 - x1;
      let pet11_xScale = h;
      let pet11_yScale = h;
      beginShape();
      vertex((pet11_xScale * 258) + pet11_x, (pet11_yScale * 431) + pet11_y);
      vertex((pet11_xScale * 255) + pet11_x, (pet11_yScale * 430) + pet11_y);
      vertex((pet11_xScale * 251) + pet11_x, (pet11_yScale * 428) + pet11_y);
      vertex((pet11_xScale * 246) + pet11_x, (pet11_yScale * 426) + pet11_y);
      vertex((pet11_xScale * 240) + pet11_x, (pet11_yScale * 425) + pet11_y);
      vertex((pet11_xScale * 233) + pet11_x, (pet11_yScale * 424) + pet11_y);
      vertex((pet11_xScale * 228) + pet11_x, (pet11_yScale * 423) + pet11_y);
      vertex((pet11_xScale * 222) + pet11_x, (pet11_yScale * 423) + pet11_y);
      vertex((pet11_xScale * 221) + pet11_x, (pet11_yScale * 425) + pet11_y);
      vertex((pet11_xScale * 222) + pet11_x, (pet11_yScale * 428) + pet11_y);
      vertex((pet11_xScale * 225) + pet11_x, (pet11_yScale * 429) + pet11_y);
      vertex((pet11_xScale * 230) + pet11_x, (pet11_yScale * 431) + pet11_y);
      vertex((pet11_xScale * 235) + pet11_x, (pet11_yScale * 432) + pet11_y);
      vertex((pet11_xScale * 241) + pet11_x, (pet11_yScale * 433) + pet11_y);
      vertex((pet11_xScale * 245) + pet11_x, (pet11_yScale * 433) + pet11_y);
      vertex((pet11_xScale * 249) + pet11_x, (pet11_yScale * 433) + pet11_y);
      vertex((pet11_xScale * 257) + pet11_x, (pet11_yScale * 434) + pet11_y);
      endShape(CLOSE);
      //ENDpet11
    }
    //pet12
    {
      fill("#fafffc");
      let pet12_x = xw - x1 - x1;
      let pet12_y = yw - x1 + y1;
      let pet12_xScale = h;
      let pet12_yScale = h;
      beginShape();
      vertex((pet12_xScale * 258) + pet12_x, (pet12_yScale * 435) + pet12_y);
      vertex((pet12_xScale * 249) + pet12_x, (pet12_yScale * 433) + pet12_y);
      vertex((pet12_xScale * 247) + pet12_x, (pet12_yScale * 432) + pet12_y);
      vertex((pet12_xScale * 241) + pet12_x, (pet12_yScale * 432) + pet12_y);
      vertex((pet12_xScale * 238) + pet12_x, (pet12_yScale * 432) + pet12_y);
      vertex((pet12_xScale * 234) + pet12_x, (pet12_yScale * 433) + pet12_y);
      vertex((pet12_xScale * 225) + pet12_x, (pet12_yScale * 436) + pet12_y);
      vertex((pet12_xScale * 222) + pet12_x, (pet12_yScale * 438) + pet12_y);
      vertex((pet12_xScale * 222) + pet12_x, (pet12_yScale * 440) + pet12_y);
      vertex((pet12_xScale * 224) + pet12_x, (pet12_yScale * 442) + pet12_y);
      vertex((pet12_xScale * 228) + pet12_x, (pet12_yScale * 442) + pet12_y);
      vertex((pet12_xScale * 232) + pet12_x, (pet12_yScale * 442) + pet12_y);
      vertex((pet12_xScale * 237) + pet12_x, (pet12_yScale * 443) + pet12_y);
      vertex((pet12_xScale * 243) + pet12_x, (pet12_yScale * 443) + pet12_y);
      vertex((pet12_xScale * 247) + pet12_x, (pet12_yScale * 443) + pet12_y);
      vertex((pet12_xScale * 251) + pet12_x, (pet12_yScale * 442) + pet12_y);
      vertex((pet12_xScale * 254) + pet12_x, (pet12_yScale * 442) + pet12_y);
      vertex((pet12_xScale * 257) + pet12_x, (pet12_yScale * 441) + pet12_y);
      vertex((pet12_xScale * 259) + pet12_x, (pet12_yScale * 440) + pet12_y);
      endShape(CLOSE);
      //ENDpet12
    }
    //pet13
    {
      fill("#fafffc");
      let pet13_x = xw - x1 - y1;
      let pet13_y = yw + x1 + x1;
      let pet13_xScale = h;
      let pet13_yScale = h;
      beginShape();
      vertex((pet13_xScale * 257) + pet13_x, (pet13_yScale * 444) + pet13_y);
      vertex((pet13_xScale * 251) + pet13_x, (pet13_yScale * 449) + pet13_y);
      vertex((pet13_xScale * 250) + pet13_x, (pet13_yScale * 450) + pet13_y);
      vertex((pet13_xScale * 249) + pet13_x, (pet13_yScale * 450) + pet13_y);
      vertex((pet13_xScale * 248) + pet13_x, (pet13_yScale * 453) + pet13_y);
      vertex((pet13_xScale * 247) + pet13_x, (pet13_yScale * 455) + pet13_y);
      vertex((pet13_xScale * 246) + pet13_x, (pet13_yScale * 457) + pet13_y);
      vertex((pet13_xScale * 246) + pet13_x, (pet13_yScale * 459) + pet13_y);
      vertex((pet13_xScale * 250) + pet13_x, (pet13_yScale * 460) + pet13_y);
      vertex((pet13_xScale * 252) + pet13_x, (pet13_yScale * 460) + pet13_y);
      vertex((pet13_xScale * 255) + pet13_x, (pet13_yScale * 459) + pet13_y);
      vertex((pet13_xScale * 259) + pet13_x, (pet13_yScale * 458) + pet13_y);
      vertex((pet13_xScale * 261) + pet13_x, (pet13_yScale * 455) + pet13_y);
      vertex((pet13_xScale * 262) + pet13_x, (pet13_yScale * 452) + pet13_y);
      vertex((pet13_xScale * 263) + pet13_x, (pet13_yScale * 449) + pet13_y);
      vertex((pet13_xScale * 263) + pet13_x, (pet13_yScale * 447) + pet13_y);
      2
      vertex((pet13_xScale * 263) + pet13_x, (pet13_yScale * 445) + pet13_y);
      endShape(CLOSE);
      //ENDpet13
    }
    //pet14
    {
      fill("#fafffc");
      let pet14_x = xw - x1 + y1;
      let pet14_y = yw + x1 - y1;
      let pet14_xScale = h;
      let pet14_yScale = h;
      beginShape();
      vertex((pet14_xScale * 275) + pet14_x, (pet14_yScale * 431) + pet14_y);
      vertex((pet14_xScale * 276) + pet14_x, (pet14_yScale * 424) + pet14_y);
      vertex((pet14_xScale * 277) + pet14_x, (pet14_yScale * 421) + pet14_y);
      vertex((pet14_xScale * 278) + pet14_x, (pet14_yScale * 418) + pet14_y);
      vertex((pet14_xScale * 283) + pet14_x, (pet14_yScale * 414) + pet14_y);
      vertex((pet14_xScale * 286) + pet14_x, (pet14_yScale * 411) + pet14_y);
      vertex((pet14_xScale * 290) + pet14_x, (pet14_yScale * 410) + pet14_y);
      vertex((pet14_xScale * 291) + pet14_x, (pet14_yScale * 410) + pet14_y);
      vertex((pet14_xScale * 292) + pet14_x, (pet14_yScale * 411) + pet14_y);
      vertex((pet14_xScale * 292) + pet14_x, (pet14_yScale * 413) + pet14_y);
      vertex((pet14_xScale * 291) + pet14_x, (pet14_yScale * 416) + pet14_y);
      vertex((pet14_xScale * 291) + pet14_x, (pet14_yScale * 421) + pet14_y);
      vertex((pet14_xScale * 289) + pet14_x, (pet14_yScale * 426) + pet14_y);
      vertex((pet14_xScale * 287) + pet14_x, (pet14_yScale * 429) + pet14_y);
      vertex((pet14_xScale * 283) + pet14_x, (pet14_yScale * 432) + pet14_y);
      endShape(CLOSE);
      //ENDpet14
    }
    //pet14
    {
      fill("#fafffc");
      let pet14_x = xw + x1 - y1;
      let pet14_y = yw + y1;
      let pet14_xScale = h;
      let pet14_yScale = h;
      beginShape();
      vertex((pet14_xScale * 257) + pet14_x, (pet14_yScale * 434) + pet14_y);
      vertex((pet14_xScale * 253) + pet14_x, (pet14_yScale * 433) + pet14_y);
      vertex((pet14_xScale * 250) + pet14_x, (pet14_yScale * 432) + pet14_y);
      vertex((pet14_xScale * 246) + pet14_x, (pet14_yScale * 430) + pet14_y);
      vertex((pet14_xScale * 243) + pet14_x, (pet14_yScale * 428) + pet14_y);
      vertex((pet14_xScale * 240) + pet14_x, (pet14_yScale * 426) + pet14_y);
      vertex((pet14_xScale * 237) + pet14_x, (pet14_yScale * 424) + pet14_y);
      vertex((pet14_xScale * 233) + pet14_x, (pet14_yScale * 421) + pet14_y);
      vertex((pet14_xScale * 233) + pet14_x, (pet14_yScale * 419) + pet14_y);
      vertex((pet14_xScale * 237) + pet14_x, (pet14_yScale * 419) + pet14_y);
      vertex((pet14_xScale * 242) + pet14_x, (pet14_yScale * 420) + pet14_y);
      vertex((pet14_xScale * 245) + pet14_x, (pet14_yScale * 420) + pet14_y);
      vertex((pet14_xScale * 253) + pet14_x, (pet14_yScale * 422) + pet14_y);
      vertex((pet14_xScale * 258) + pet14_x, (pet14_yScale * 425) + pet14_y);
      vertex((pet14_xScale * 261) + pet14_x, (pet14_yScale * 428) + pet14_y);
      endShape(CLOSE);
      //ENDpet14
    }
    //yellow
    {
      fill("#e4c500");
      let yellow_x = mouseX-(267*h);
      let yellow_y = mouseY-(434*h);
      let yellow_xScale = h;
      let yellow_yScale = h;
      beginShape();
      vertex((yellow_xScale * 271) + yellow_x, (yellow_yScale * 447) + yellow_y);
      vertex((yellow_xScale * 276) + yellow_x, (yellow_yScale * 447) + yellow_y);
      vertex((yellow_xScale * 276) + yellow_x, (yellow_yScale * 446) + yellow_y);
      vertex((yellow_xScale * 277) + yellow_x, (yellow_yScale * 445) + yellow_y);
      vertex((yellow_xScale * 278) + yellow_x, (yellow_yScale * 444) + yellow_y);
      vertex((yellow_xScale * 281) + yellow_x, (yellow_yScale * 443) + yellow_y);
      vertex((yellow_xScale * 283) + yellow_x, (yellow_yScale * 442) + yellow_y);
      vertex((yellow_xScale * 285) + yellow_x, (yellow_yScale * 442) + yellow_y);
      vertex((yellow_xScale * 285) + yellow_x, (yellow_yScale * 439) + yellow_y);
      vertex((yellow_xScale * 285) + yellow_x, (yellow_yScale * 436) + yellow_y);
      vertex((yellow_xScale * 286) + yellow_x, (yellow_yScale * 432) + yellow_y);
      vertex((yellow_xScale * 286) + yellow_x, (yellow_yScale * 430) + yellow_y);
      vertex((yellow_xScale * 284) + yellow_x, (yellow_yScale * 429) + yellow_y);
      vertex((yellow_xScale * 283) + yellow_x, (yellow_yScale * 428) + yellow_y);
      vertex((yellow_xScale * 281) + yellow_x, (yellow_yScale * 427) + yellow_y);
      vertex((yellow_xScale * 279) + yellow_x, (yellow_yScale * 426) + yellow_y);
      vertex((yellow_xScale * 277) + yellow_x, (yellow_yScale * 428) + yellow_y);
      vertex((yellow_xScale * 276) + yellow_x, (yellow_yScale * 428) + yellow_y);
      vertex((yellow_xScale * 275) + yellow_x, (yellow_yScale * 426) + yellow_y);
      vertex((yellow_xScale * 272) + yellow_x, (yellow_yScale * 425) + yellow_y);
      vertex((yellow_xScale * 271) + yellow_x, (yellow_yScale * 425) + yellow_y);
      vertex((yellow_xScale * 268) + yellow_x, (yellow_yScale * 424) + yellow_y);
      vertex((yellow_xScale * 265) + yellow_x, (yellow_yScale * 424) + yellow_y);
      vertex((yellow_xScale * 263) + yellow_x, (yellow_yScale * 424) + yellow_y);
      vertex((yellow_xScale * 261) + yellow_x, (yellow_yScale * 424) + yellow_y);
      vertex((yellow_xScale * 259) + yellow_x, (yellow_yScale * 422) + yellow_y);
      vertex((yellow_xScale * 256) + yellow_x, (yellow_yScale * 421) + yellow_y);
      vertex((yellow_xScale * 254) + yellow_x, (yellow_yScale * 423) + yellow_y);
      vertex((yellow_xScale * 252) + yellow_x, (yellow_yScale * 424) + yellow_y);
      vertex((yellow_xScale * 251) + yellow_x, (yellow_yScale * 426) + yellow_y);
      vertex((yellow_xScale * 250) + yellow_x, (yellow_yScale * 428) + yellow_y);
      vertex((yellow_xScale * 250) + yellow_x, (yellow_yScale * 431) + yellow_y);
      vertex((yellow_xScale * 250) + yellow_x, (yellow_yScale * 434) + yellow_y);
      vertex((yellow_xScale * 249) + yellow_x, (yellow_yScale * 437) + yellow_y);
      vertex((yellow_xScale * 250) + yellow_x, (yellow_yScale * 439) + yellow_y);
      vertex((yellow_xScale * 252) + yellow_x, (yellow_yScale * 440) + yellow_y);
      vertex((yellow_xScale * 254) + yellow_x, (yellow_yScale * 442) + yellow_y);
      vertex((yellow_xScale * 255) + yellow_x, (yellow_yScale * 445) + yellow_y);
      vertex((yellow_xScale * 260) + yellow_x, (yellow_yScale * 445) + yellow_y);
      vertex((yellow_xScale * 263) + yellow_x, (yellow_yScale * 445) + yellow_y);
      vertex((yellow_xScale * 267) + yellow_x, (yellow_yScale * 447) + yellow_y);
      vertex((yellow_xScale * 268) + yellow_x, (yellow_yScale * 447) + yellow_y);
      vertex((yellow_xScale * 269) + yellow_x, (yellow_yScale * 447) + yellow_y);
      endShape(CLOSE);
      //ENDyellow
    }
  }
}
