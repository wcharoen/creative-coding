function setup() {
  createCanvas(400, 400);
  noLoop();
}

function draw() {
  background(220);

  rectMode(CENTER);

  // the basic face circle
  fill(255,220,100);
  stroke("#eebb77");
  strokeWeight(8);
  circle(200,200,250);

  // the mouth 
  fill("#000000");
  stroke("#000000");
  strokeWeight(1);
  //ellipse(200,250,75,120);
  //rect(200 - (75 / 2),250,75,120);

  // 5th parameters give all corners a radius of 20
  // via example: https://p5js.org/reference/#/p5/rect 
  rect(200,250,75,120,30);

  // left eye 
  // line x1,y1,x2,y2
  stroke("#eebb77");
  strokeWeight(8)
  line(160,150,110,180);



 
}