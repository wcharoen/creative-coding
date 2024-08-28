
let square_size = 40;
let cols = 14;
let rows = 18;
let cushion = 8;

function setup() {
  createCanvas(600, 800);
  noLoop();
}

function draw() {
  background(255);

  translate(38,38);

  strokeWeight(2);
  noFill();

  rectMode(CENTER);
  angleMode(DEGREES); //https://p5js.org/reference/#/p5/angleMode 

  // x is columns
  // y is rows
  for (let x = 0; x < (square_size * cols) ; x += square_size){
  	for (let y = 0; y < (square_size * rows); y += square_size){

  		push(); // push resets drawing back to the underlining coordinates

  		translate(x,y);

  		// https://p5js.org/reference/#/p5/rotate
  		let rotation_amount = random(-90,90);

		let rotate_by = map(y, 0,rows * square_size,0,rotation_amount);
  		rotate(rotate_by);



  		let x_offset = random(-10,10);
  		let y_offset = random(-20,20);

  		let y_shift = map(y,0,rows * square_size,0, y_offset);
  		let x_shift = map(x,0,cols * square_size,0, x_offset);

  		rect(x_shift, y_shift,square_size - cushion,square_size - cushion);


  		pop();

  	}
  }


}