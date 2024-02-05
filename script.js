/**
 * Project 1 - Interactive Image
 * Name: 
 * Comments: 
 */

// Global Variables go here

function setup(){
  // this function will run once
  createCanvas(600, 400); // create a 600x400 pixel drawing canvas

}

function draw(){
  // this function runs again and again (60x per second)
  background(200); //light gray background
  
  // Body
  fill(255); // white color
  ellipse(270,300,200,200);
  ellipse(270,200,150,150);
  ellipse(270,100,100,100);

  // Eyes
  fill(0); // black color
  ellipse(250,90,10,10)
  ellipse (290,90,10,10)

  // Nose
  fill(250,150,0); // orange color 
  triangle(270, 110, 270, 120, 320, 115)

  // Buttons
  fill(0); //  black color
  ellipse(270,300,10,10);
  ellipse(270,230,10,10);
  ellipse(270,180,10,10);
  

  // Mouth
  noFill();
  stroke(0);
  arc(270,125,70,15,0,PI)


  


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