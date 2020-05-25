//Colours
let lineColour = ([255]);
let buttonColour = ([0, 100]);

let wallColour = ([165, 175, 175]);
let wallSideTopColour = ([180, 190, 195]);
let wallSideRightColour = ([220, 220, 220]);
let wallSideBottomColour = ([235, 235, 240]);
let wallSideLeftColour = ([215, 225, 225]);

let frontWindowSurroundColour = ([200,200,210]);
let frontWindowEdgeColourTop = ([230]);
let frontWindowEdgeColourRight = ([245]);
let frontWindowEdgeColourBottom = ([234, 234, 255]);
let frontWindowEdgeColourLeft = ([245]);

let frontWindowBackColour = ([215]);
let frontWindowTopColour = ([210,210,220]);
let frontWindowBottomColour = ([200,200,210]);

//Width Centre variable
let hc;
let wc;
let sc;
let scale;

//Window Up Down Movement
let moveValue = 0;
let i_py = 0;
let h_py = 0;

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
  background(165, 227, 255);
  stroke(lineColour);
  strokeWeight(scale/5);

  //Adjusted coordinates
  {
    // let newx = round(mouseX - width / 2);
    // let newy = round(mouseY - height / 2);
    // fill(0);
    // noStroke();
    // text('x:' + newx, mouseX + 16, mouseY);
    // text('y:' + newy, mouseX + 16, mouseY + 10);
    // stroke(0);
    // //New axis
    // line(width / 2, 0, width / 2, height);
    // line(0, height / 2, width, height / 2);
  }

  //a
  {
    //Scale a
    let a_sx = scale;
    let a_sy = scale;

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
    let b_sx = scale;
    let b_sy = scale;

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
    let c_sx = scale;
    let c_sy = scale;

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
    let d_sx = scale;
    let d_sy = scale;

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
    let e_sx = scale;
    let e_sy = scale;

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
    let f_sx = scale;
    let f_sy = scale;

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
    let g_sx = scale;
    let g_sy = scale;

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
    let h_sx = scale;
    let h_sy = scale;

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
    let i_sx = scale;
    let i_sy = scale;

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

    if(mouseIsPressed && pmouseY < mouseY && i_py < 0){
    i_py = i_py +2;
    h_py = h_py +2;
    }
    if(mouseIsPressed && pmouseY > mouseY && i_py > scale*-60){
    i_py = i_py -2;
    h_py = h_py -2;
    }
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



  //Fullscreen button
  //= fs
  {
    //roll over colour change
    if (mouseX > width - 65 && mouseX < width - 15 && mouseY > 15 && mouseY < 65) {
      buttonColour = ([255, 100]);
    } if (width < 250 || height , 400){
      buttonColour = ([0, 0]);
    } else {
      buttonColour = ([0, 100]);
    }

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
//Mapping Volume
vol = map(i_py,0,(scale*-60),0.1,2);
print(vol);
masterVolume(vol);
}

function mouseReleased() {

  //Click for full screen toggle
  if (mouseX > width - 65 && mouseX < width - 15 && mouseY > 15 && mouseY < 65) {
    let fs = fullscreen();
    fullscreen(!fs);
    buttonColour = ([0, 100])
  }
  // //Saves Image of Canvas
  // if (mouseX > 15 && mouseX < 65 && mouseY > 15 && mouseY < 65) {
  //   save('myCanvas.jpg');
  // }

}

function mousePressed(){
  if(!sound.isLooping()){
  sound.loop();
  }
}
