let sound;
function preload(){
  soundFormats('mp3');
  sound = loadSound('X_Birds.mp3');
}

function setup(){
  let cnv = createCanvas(400, 400);
  cnv.mousePressed(csPressed);
  background(22);
  fill(255);
  text('tap here to play', 160, 200);
}

function draw (){

}

function csPressed(){
    sound.playMode('restart');
    sound.play();
}
