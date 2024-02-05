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
  
  // 
  fill(250,130,50);//orange color
  ellipse(300,200,150,100);
  
  // 
  fill(250,130,50);//orange color
  triangle(225,200,240,240,100,200);
  

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