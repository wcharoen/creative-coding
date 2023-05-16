/* 
In this sketch, I implement bouncing so that the white
circle stays within the boundaries of the canvas, but I 
have attempted to add a "squishing" effect to make the ball
appear more cartoon-like. I'm not sure if that works.
*/

// x and y positions of circle
let cx = 0; 
let cy = 0; 

// width and height of circle
let cw = 80; 
let ch = 80; 

// horizontal and vertical speeds
let hspeed = Math.random() * 40;
let vspeed = Math.random() * 40;

// how much stretching to do
let vstretch = 50;
let hstretch = 50;

function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(20); 
  noStroke();

  // circle color
  fill(255);

  // shift drawing plane to the center of the sketch
  translate(400,400);
  
  // check for horizontal collisions, reverse h direction
  if (cx > width/2 - 40 || cx < -width/2 + 40){
    hspeed = -hspeed;
  }
  
  // check for vertical collisions, reverse v direction
  if (cy > height/2 - 40 || cy < -height/2 + 40){
    vspeed = -vspeed;
  }
  
  // adjust the x and y positions by the h and v factors
  cx += hspeed;
  cy += vspeed;
  
  // checking for nearness to the x edges
  let reach = ch;
  if (abs(cx) > 110){
    // adjust the stretch linearly as circle approaches edge
    reach = map(abs(cx),110,160,ch, ch + vstretch)
  }
  
  // checking for nearness to the y edges
  let spread = cw;
  if (abs(cy) > 110){
    // adjust the stretch linearly
    spread = map(abs(cy),110,160,cw, cw + hstretch)
  }
  
  // draw the circle
  ellipse(cx,cy,spread,reach);
}