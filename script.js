/**
 * Project 1 - Interactive Image
 * Name: 
 * Comments: 
 */

let pandaX = 200; // x coordinate
let pandaY = 200; // y coordinate

function setup(){
  // this function will run once
  createCanvas(400, 400); // create a 400x400 pixel drawing canvas

}

function draw(){
  // this function runs again and again (60x per second)
  background(0, 100, 0); // green background

  translate(width / 2, height / 2); // center of canvas
  
  // Face
  fill (225); // white color
  ellipse (0, 0, 150, 150); // ellipse face

  // Eyes
  fill (0); // black eyes
  ellipse (-25, -25, 30, 30); // left eye
  ellipse (25, -25, 30, 30); // right eye

  // Pupil
  fill (255); // white pupil
  ellipse (-20, -20, 10, 10); // right eye
  ellipse (20, -20, 10, 10); // left eye

  // Ears
  fill (0); // black ears
  ellipse (-70, -70, 50, 50); // left ear
  ellipse (70, -70, 50, 50); // right ear

  // Nose
  fill (0); // black nose 
  ellipse (0, 20, 20, 20)

  // Mouth
  noFill();
  stroke (0); // black color
  arc (0, 40, 80, 40, 0, PI)

  // Line from Nose to Mouth
  stroke (0); // black color 
  line (0, 20, 0, 60); // 

  // Blush on Cheeks
  fill (255, 192, 203); // pink color
  ellipse (-40, 10, 20, 10); // left blush
  ellipse (40, 10, 20, 10); // right blush

/* 
  Use the following if()...else() structure to incorporate mouse click control of your animation
*/
  if(mouseIsPressed){
    //check each frame to see if the mouse is pressed, then do something
  } else {
    // do something here if the mouse is NOT pressed
  }
}

/** 
 * the mousePressed() function is separate from draw(). 
 * It only runs (one time) if the mouse is clicked
*/
function mousePressed(){
  // add code here if you want something to execute once each time the mouse is pressed
}