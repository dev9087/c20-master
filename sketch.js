
var r = 0;
var g = 0;
var b=0;

// INITIALIZE ALL YOUR VARIABLES
// Ideally you would create 3 variables. red blue green or r, g, b


function setup(){

  createCanvas(1200,400);
}


function draw(){
  background(r,g,b);


  
  r=map(mouseX,0,1200,0,255);
  g=map(mouseX,100,1200,50,100);
  b=map(mouseX,0,900,155,0);
  
fill(255)
  // Pass the values to the background() function you have learnt previously.
ellipse(mouseX,200,50,50);
  // Create an ellipse that will move around with you mouse about the X axis.
  // Remember to fill the canvas with white paint before creating the ellipse.
}