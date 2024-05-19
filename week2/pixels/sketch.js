function preload(){
	img = loadImage();
}

function setup() {
  createCanvas(800, 800);
  
}

function draw() {
  background(220);
image(img,10,10,100,100);
}