//colours

var backgroundc = [0, 170, 255];
var topc = [140, 60, 2];
var rightc = [215, 225, 120];
var bottomc = [245, 245, 170];
var leftc = [215, 225, 0];
var surroundc = [0, 90, 70];

var secondtopc = [0, 80, 110];
var secondrightc = [40, 200, 250];
var secondbottomc = [120, 210, 210];
var secondleftc = [0, 180, 210];
var secondsurroundc = [255, 50, 0];

var thirdtopc = [155, 0, 0];
var thirdrightc = [255, 100, 100];
var thirdbottomc = [255, 150, 150];
var thirdleftc = [255, 40, 40];
var thirdsurroundc = [15, 140, 130];

//variables

var thing = 0;
let on = 0;

//———————————————————————————————————————————————————————————————

function setup() {
  // createCanvas(900, 900);
  createCanvas(windowHeight, windowHeight);
  noCursor();
}

function windowResized() {
  resizeCanvas(windowHeight, windowHeight);
}

function draw() {
  let scalr = windowHeight / 900;
  scale(scalr, scalr);

  background(backgroundc);

  stroke(0);
  strokeWeight(1.2);

  //———————————————————————————————————————————————————————————————

  //Main Window Outer
  let xout = 480;
  let xin = 355;
  let outerx = 0;
  let innerx = 0;

  outerx = map(mouseX, 0, width, 0, xout, true);
  innerx = map(mouseX, 0, width, 0, xin, true);

  //———————————————————————————————————————————————————————————————

  //New Window Outer
  let xsecondout = 282;
  let xsecondin = 244;
  let secondouterx = 0;
  let secondinnerx = 0;
  let secondinx = 0;
  secondouterx = map(mouseX, 0, width, 0, xsecondout, true);
  secondinnerx = map(mouseX, 0, width, 0, xsecondin, true);

  //———————————————————————————————————————————————————————————————

  //Third Window Outer
  let xthirdout = 88;
  let xthirdin = 78;
  let thirdouterx = 0;
  let thirdinnerx = 0;
  let thirdinx = 0;
  thirdouterx = map(mouseX, 0, width, 0, xthirdout, true);
  thirdinnerx = map(mouseX, 0, width, 0, xthirdin, true);

  //———————————————————————————————————————————————————————————————

  //Horizon Line
  //line(width / 2, 0, width / 2, height);
  line(0, 375, width, 375);
  // line(0, 390, width, 390);
  // line(0, 405, width, 405);
  // line(0, 445, width, 445);
  // line(0, 545, width, 545);

  //———————————————————————————————————————————————————————————————

  //Main Window Outer
  let ax = 20 + outerx;
  let ay = 110;

  let bx = 400 + outerx;
  let by = 110;

  let cx = 400 + outerx;
  let cy = 730;

  let dx = 20 + outerx;
  let dy = 730;

  //Main Window Inner
  let ex = 155 + innerx;
  let ey = 179;

  let fx = 436 + innerx;
  let fy = 179;

  let gx = 436 + innerx;
  let gy = 638;

  let hx = 155 + innerx;
  let hy = 638;

  //———————————————————————————————————————————————————————————————

  //DOUBLE UP Main Window Outer
  let dax = 620 + outerx;
  let day = 110;

  let dbx = 1000 + outerx;
  let dby = 110;

  let dcx = 1000 + outerx;
  let dcy = 730;

  let ddx = 620 + outerx;
  let ddy = 730;

  //DOUBLE UP Main Window Inner
  let dex = 599 + innerx;
  let dey = 179;

  let dfx = 1036 + innerx;
  let dfy = 179;

  let dgx = 1036 + innerx;
  let dgy = 638;

  let dhx = 599 + innerx;
  let dhy = 638;

  //———————————————————————————————————————————————————————————————

  //second
  let ix = 350 + secondouterx;
  let iy = 260;

  let jx = 520 + secondouterx;
  let jy = 260;

  let kx = 520 + secondouterx;
  let ky = 520;

  let lx = 350 + secondouterx;
  let ly = 520;

  //secondinner
  let mx = 375 + secondinnerx;
  let my = 275;

  let nx = 522 + secondinnerx;
  let ny = 275;

  let ox = 522 + secondinnerx;
  let oy = 500;

  let px = 375 + secondinnerx;
  let py = 500;

  //———————————————————————————————————————————————————————————————

  //DOUBLE UP second
  let dix = 90 + secondouterx;
  let diy = 260;

  let djx = 260 + secondouterx;
  let djy = 260;

  let dkx = 260 + secondouterx;
  let dky = 520;

  let dlx = 90 + secondouterx;
  let dly = 520;

  //DOUBLE UP secondinner
  let dmx = 151 + secondinnerx;
  let dmy = 275;

  let dnx = 298 + secondinnerx;
  let dny = 275;

  let dox = 298 + secondinnerx;
  let doy = 500;

  let dpx = 151 + secondinnerx;
  let dpy = 500;

  //———————————————————————————————————————————————————————————————

  //third
  let qx = 495 + thirdouterx;
  let qy = 325;

  let rx = 555 + thirdouterx;
  let ry = 325;

  let sx = 555 + thirdouterx;
  let sy = 410;

  let tx = 495 + thirdouterx;
  let ty = 410;

  //third inner
  let ux = 499 + thirdinnerx;
  let uy = 331;

  let vx = 553 + thirdinnerx;
  let vy = 331;

  let wx = 553 + thirdinnerx;
  let wy = 406;

  let xx = 499 + thirdinnerx;
  let xy = 406;

  //———————————————————————————————————————————————————————————————

  //Perspective Lines
  //MainWindow
  //     stroke(0);
  //     line(ax, ay, 538, 375);
  //     line(bx, by, 538, 375);
  //     line(cx, cy, 538, 375);
  //     line(dx, dy, 538, 375);

  //     //Feet
  //     stroke(0);
  //     line(ax-700, ay-400, 538, 375);
  //     line(bx+700, by-400, 538, 375);
  //     line(cx+700, cy+400, 538, 375);
  //     line(dx-700, dy+400, 538, 375);

  //     stroke(0);
  //     line(ax-2800, ay-400, 538, 375);
  //     line(bx+2800, by-400, 538, 375);
  //     line(cx+2800, cy+400, 538, 375);
  //     line(dx-2800, dy+400, 538, 375);

  //     line(ax-5600, ay-400, 538, 375);
  //     line(bx+5600, by-400, 538, 375);
  //     line(cx+5600, cy+400, 538, 375);
  //     line(dx-5600, dy+400, 538, 375);

  //     stroke(255);
  //     line(qx, qy, 538, 375);
  //     line(rx, ry, 538, 375);
  //     line(sx, sy, 538, 375);
  //     line(tx, ty, 538, 375);

  //     line(qx, 0, qx, height);
  //     line(rx, 0, rx, height);

  //     line(0, sy, width, sy);
  //     line(0, qy, width, qy);

  //     line(ux, 0, ux, height);
  //     line(vx, 0, vx, height);

  //     line(0, uy, width, uy);
  //     line(0, wy, width, wy);

  //     line(cx-160, cy+400, 538, 375);
  //     line(0, sy+100, width, sy+100);

  stroke(0);

  //———————————————————————————————————————————————————————————————
  //Sky
  fill(200, 240, 225);
  rect(0, 0, 900, 375);

  //———————————————————————————————————————————————————————————————

  //3rd Window
  //left
  fill(thirdleftc);
  beginShape();
  vertex(qx, qy);
  vertex(ux, uy);
  vertex(xx, xy);
  vertex(tx, ty);
  endShape(CLOSE);
  //top
  fill(thirdtopc);
  beginShape();
  vertex(qx, qy);
  vertex(rx, ry);
  vertex(vx, vy);
  vertex(ux, uy);
  endShape(CLOSE);
  //right
  fill(thirdrightc);
  beginShape();
  vertex(vx, vy);
  vertex(rx, ry);
  vertex(sx, sy);
  vertex(wx, wy);
  endShape(CLOSE);
  //bottom
  fill(thirdbottomc);
  beginShape();
  vertex(xx, xy);
  vertex(wx, wy);
  vertex(sx, sy);
  vertex(tx, ty);
  endShape(CLOSE);

  //———————————————————————————————————————————————————————————————
  //surround
  fill(thirdsurroundc);
  beginShape();
  vertex(0, 0);
  vertex(width / scalr, 0);
  vertex(width / scalr, height / scalr);
  vertex(0, height / scalr);

  beginContour();
  vertex(tx, ty);
  vertex(sx, sy);
  vertex(rx, ry);
  vertex(qx, qy);
  endContour();

  endShape(CLOSE);

  //———————————————————————————————————————————————————————————————

  //PLantPot

  if (mouseX > 600 * scalr) {
    on = 3;
  } else if (mouseX < -(600 * scalr)) {
    on = 0;
  }

  if (on == 3 && mouseX < 215 * scalr) {
    thing = random(0, 5);
  }

  if (on == 3 && mouseX > 885 * scalr) {
    thing = random(0, 5);
  }

  if (thing > 3 && thing < 5) {
    {
      //backleaf
      fill("green");
      beginShape();
      vertex(543 + thirdinnerx, 368);
      vertex(546 + thirdinnerx, 367);
      vertex(546.5 + thirdinnerx, 367.5);
      vertex(547 + thirdinnerx, 368);
      vertex(546 + thirdinnerx, 367);
      vertex(544 + thirdinnerx, 367);
      vertex(543 + thirdinnerx, 369);
      vertex(542 + thirdinnerx, 372);
      vertex(541 + thirdinnerx, 375);
      vertex(539 + thirdinnerx, 380);
      vertex(537 + thirdinnerx, 378);
      vertex(538 + thirdinnerx, 374);
      vertex(539 + thirdinnerx, 372);
      endShape(CLOSE);
      //backleaf2
      beginShape();
      vertex(533 + thirdinnerx, 366);
      vertex(536 + thirdinnerx, 365);
      vertex(536.5 + thirdinnerx, 365.5);
      vertex(537 + thirdinnerx, 366);
      vertex(538 + thirdinnerx, 368);
      vertex(537 + thirdinnerx, 373);
      vertex(534 + thirdinnerx, 380);
      vertex(532 + thirdinnerx, 376);
      vertex(531 + thirdinnerx, 372);
      vertex(530 + thirdinnerx, 370);
      endShape(CLOSE);

      //backleaf3
      beginShape();
      vertex(523 + thirdinnerx, 373);
      vertex(525 + thirdinnerx, 372);
      vertex(528 + thirdinnerx, 374);
      vertex(529 + thirdinnerx, 376);
      vertex(530 + thirdinnerx, 377);
      vertex(535 + thirdinnerx, 383);
      vertex(533 + thirdinnerx, 388);
      vertex(532 + thirdinnerx, 383);
      vertex(531 + thirdinnerx, 381);
      vertex(526 + thirdinnerx, 378);
      vertex(524 + thirdinnerx, 376);
      vertex(520 + thirdinnerx, 375);
      vertex(519 + thirdinnerx, 377);
      vertex(521 + thirdinnerx, 373);

      endShape(CLOSE);

      //Pot
      fill(rightc);
      beginShape();
      vertex(542 + thirdinnerx, 387);
      vertex(542 + thirdinnerx, 388);
      vertex(540 + thirdinnerx, 390);
      vertex(543 + thirdinnerx, 396);
      vertex(543 + thirdinnerx, 400);
      vertex(540 + thirdinnerx, 407);
      vertex(535 + thirdinnerx, 408);
      vertex(530 + thirdinnerx, 407);
      vertex(527 + thirdinnerx, 400);
      vertex(527 + thirdinnerx, 396);
      vertex(530 + thirdinnerx, 390);
      vertex(528 + thirdinnerx, 388);
      vertex(528 + thirdinnerx, 387);
      vertex(535 + thirdinnerx, 387.5);
      endShape(CLOSE);

      //Plant
      //leaf4
      fill("green");
      beginShape();
      vertex(541 + 1.02 * thirdinnerx, 381);
      vertex(545 + 1.02 * thirdinnerx, 380);
      vertex(547 + 1.02 * thirdinnerx, 381);
      vertex(548 + 1.02 * thirdinnerx, 383);
      vertex(547 + 1.02 * thirdinnerx, 387);
      vertex(544 + 1.02 * thirdinnerx, 382);
      vertex(538 + 1.02 * thirdinnerx, 384);
      endShape(CLOSE);
      //leaf1
      beginShape();
      vertex(538 + 1.02 * thirdinnerx, 378);
      vertex(536 + 1.02 * thirdinnerx, 378.5);
      vertex(535 + 1.02 * thirdinnerx, 378);
      vertex(534 + 1.02 * thirdinnerx, 382);
      vertex(533 + 1.02 * thirdinnerx, 388);
      vertex(534 + 1.02 * thirdinnerx, 393);
      vertex(536 + 1.02 * thirdinnerx, 396);
      vertex(538 + 1.02 * thirdinnerx, 392);
      vertex(539 + 1.02 * thirdinnerx, 387);
      endShape(CLOSE);
      //leaf2
      beginShape();
      vertex(529 + thirdinnerx, 380);
      vertex(524 + thirdinnerx, 382);
      vertex(522 + thirdinnerx, 388);
      vertex(523 + thirdinnerx, 393);
      vertex(525 + thirdinnerx, 395);
      vertex(525 + thirdinnerx, 392);
      vertex(526 + thirdinnerx, 387);
      vertex(529 + thirdinnerx, 383);
      endShape(CLOSE);
      //leaf3
      beginShape();
      vertex(532 + 1.01 * thirdinnerx, 382);
      vertex(528 + 1.01 * thirdinnerx, 382);
      vertex(525 + 1.01 * thirdinnerx, 386);
      vertex(526 + 1.01 * thirdinnerx, 390);
      vertex(528 + 1.01 * thirdinnerx, 393);
      vertex(528 + 1.01 * thirdinnerx, 390);
      vertex(530 + 1.01 * thirdinnerx, 385);
      vertex(530 + 1.01 * thirdinnerx, 382);
      endShape(CLOSE);
    }
  }

  print("thing", thing);
  print("on", on);
  //———————————————————————————————————————————————————————————————

  //Floor
  fill(10, 63, 143);
  rect(0, 480, width / scalr, height / scalr);

  //———————————————————————————————————————————————————————————————

  //2nd Window
  //left
  fill(secondleftc);
  beginShape();
  vertex(ix, iy);
  vertex(mx, my);
  vertex(px, py);
  vertex(lx, ly);
  endShape(CLOSE);
  //top
  fill(secondtopc);
  beginShape();
  vertex(ix, iy);
  vertex(jx, jy);
  vertex(nx, ny);
  vertex(mx, my);
  endShape(CLOSE);
  //right
  fill(secondrightc);
  beginShape();
  vertex(nx, ny);
  vertex(jx, jy);
  vertex(kx, ky);
  vertex(ox, oy);
  endShape(CLOSE);
  //bottom
  fill(secondbottomc);
  beginShape();
  vertex(px, py);
  vertex(ox, oy);
  vertex(kx, ky);
  vertex(lx, ly);
  endShape(CLOSE);

  //———————————————————————————————————————————————————————————————

  //DOUBLE UP 2nd Window
  //DOUBLE UP left
  fill(secondleftc);
  beginShape();
  vertex(dix, diy);
  vertex(dmx, dmy);
  vertex(dpx, dpy);
  vertex(dlx, dly);
  endShape(CLOSE);
  //DOUBLE UP top
  fill(secondtopc);
  beginShape();
  vertex(dix, diy);
  vertex(djx, djy);
  vertex(dnx, dny);
  vertex(dmx, dmy);
  endShape(CLOSE);
  //DOUBLE UP right
  fill(secondrightc);
  beginShape();
  vertex(dnx, dny);
  vertex(djx, djy);
  vertex(dkx, dky);
  vertex(dox, doy);
  endShape(CLOSE);
  //DOUBLE UP bottom
  fill(secondbottomc);
  beginShape();
  vertex(dpx, dpy);
  vertex(dox, doy);
  vertex(dkx, dky);
  vertex(dlx, dly);
  endShape(CLOSE);

  //———————————————————————————————————————————————————————————————

  //surround
  fill(secondsurroundc);
  beginShape();
  vertex(0, 0);
  vertex(width / scalr, 0);
  vertex(width / scalr, height / scalr);
  vertex(0, height / scalr);

  beginContour();
  vertex(lx, ly);
  vertex(kx, ky);
  vertex(jx, jy);
  vertex(ix, iy);
  endContour();

  //double up
  beginContour();
  vertex(dlx, dly);
  vertex(dkx, dky);
  vertex(djx, djy);
  vertex(dix, diy);
  endContour();

  endShape(CLOSE);

  //———————————————————————————————————————————————————————————————

  //———————————————————————————————————————————————————————————————

  //Main Window
  //left
  fill(leftc);
  beginShape();
  vertex(ax, ay);
  vertex(ex, ey);
  vertex(hx, hy);
  vertex(dx, dy);
  endShape(CLOSE);
  //top
  fill(topc);
  beginShape();
  vertex(ax, ay);
  vertex(bx, by);
  vertex(fx, fy);
  vertex(ex, ey);
  endShape(CLOSE);
  //right
  fill(rightc);
  beginShape();
  vertex(fx, fy);
  vertex(bx, by);
  vertex(cx, cy);
  vertex(gx, gy);
  endShape(CLOSE);
  //bottom
  fill(bottomc);
  beginShape();
  vertex(hx, hy);
  vertex(gx, gy);
  vertex(cx, cy);
  vertex(dx, dy);
  endShape(CLOSE);

  //DOUBLE UP Main Window
  //DOUBLE UP left
  fill(leftc);
  beginShape();
  vertex(dax, day);
  vertex(dex, dey);
  vertex(dhx, dhy);
  vertex(ddx, ddy);
  endShape(CLOSE);
  //DOUBLE UP top
  fill(topc);
  beginShape();
  vertex(dax, day);
  vertex(dbx, dby);
  vertex(dfx, dfy);
  vertex(dex, dey);
  endShape(CLOSE);
  //DOUBLE UP right
  fill(rightc);
  beginShape();
  vertex(dfx, dfy);
  vertex(dbx, dby);
  vertex(dcx, dcy);
  vertex(dgx, dgy);
  endShape(CLOSE);
  //DOUBLE UP bottom
  fill(bottomc);
  beginShape();
  vertex(dhx, dhy);
  vertex(dgx, dgy);
  vertex(dcx, dcy);
  vertex(ddx, ddy);
  endShape(CLOSE);

  //———————————————————————————————————————————————————————————————

  //surround
  fill(surroundc);
  beginShape();
  vertex(0, 0);
  vertex(width / scalr, 0);
  vertex(width / scalr, height / scalr);
  vertex(0, height / scalr);

  beginContour();
  vertex(dx, dy);
  vertex(cx, cy);
  vertex(bx, by);
  vertex(ax, ay);
  endContour();

  //DOUBLEUP
  beginContour();
  vertex(ddx, ddy);
  vertex(dcx, dcy);
  vertex(dbx, dby);
  vertex(dax, day);
  endContour();

  endShape(CLOSE);

  //———————————————————————————————————————————————————————————————

  // stroke(0);
  // line(dix, diy, 538, 375);
  // line(djx, djy, 538, 375);
  // line(dkx, dky, 538, 375);
  // line(dlx, dly, 538, 375);

  //   //coordinates
  //   noStroke();
  //   fill(0);
  //   text('x: ' + mouseX, mouseX + 20, mouseY);
  //   text('y: ' + mouseY, mouseX + 20, mouseY + 10);
  //   text('x: ' + mouseX, width - 50, height - 30);
  //   text('y: ' + mouseY, width - 50, height - 20);

  //   stroke(255, 0, 0);
  //   point(mouseX, mouseY);
}
