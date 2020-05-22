let cnvs;
let button;
let sound;
let picture;

//slider variables
let sliderVol;
let sliderPan;
let sliderRate;

var col = 255;

function preload(){
  //loads image file
  picture = loadImage('garden.png');
}

function setup(){
  cnvs = createCanvas(400, 600);
  //creates button labelled 'play'
  button = createButton('play');
  button.mousePressed(togglePlaying)
  button.position(10,570);

  //loads image file
  picture.resize(400,715);
  image(picture,0,0);

  //allows for multiple file formats
  soundFormats('m4a');
  //loads sound file, when loaded calls "loaded" function
  sound = loadSound('X_30SecsBirds.m4a', loaded);

  //volume slider min(0) max(2) start(1) step(0.02)
  sliderVol = createSlider(0,2,1,0.02);
  sliderVol.position(305, 535);
  sliderVol.style('width', '80px');
  //pan slider min(-0.7) max(0.7) start(0) step(0.01)
  sliderPan = createSlider(-0.7,0.7,0,0.01);
  sliderPan.position(305,555);
  sliderPan.style('width', '80px');
  //rate slider min(0.1) max(2) start(1) step(0.01)
  sliderRate = createSlider(0.1,1.9,1,0.01);
  sliderRate.position(305,575);
  sliderRate.style('width', '80px');



}

function draw (){
  //sound properties attached to slider values
  sound.setVolume(sliderVol.value());
  sound.pan(sliderPan.value());
  sound.rate(sliderRate.value());

}

function loaded(){
  //once sound is loaded THEN this function is called
  //mouse pressed on canvas triggers "pressStart" function
  cnvs.mousePressed(pressStart);

}

function pressStart(){
  // //once sound file is loaded, "loaded" is called
  // //then a mouse press triggers this function
  // //
  // if (!sound.isPlaying()) {
  // sound.playMode('restart');
  // sound.play();
  // } else {
  // sound.pause();
  // }
}

function togglePlaying(){
  // // when button is pressed this funtion is called
  // // if the sound is playing then it stops
  // // if not it starts, plays and pauses from where left off
  if (!sound.isPlaying()) {
    // sound.playMode('restart');
    sound.loop();
    button.html('pause');
    } else {
    sound.pause();
    button.html('play');
  }
}
