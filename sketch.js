
//See README for intended functions of the game
//variables for timer that counts down from 60
let timer = 60;
let countDownSwitch = false;

//Add an image
let img;

let red = [255, 0, 0];
let green = [0, 255, 0];

//changes the size of the Canvas
//centers ellipse on the screen
//loads image saved in file
function setup() {
  createCanvas(700, 400);
  ellipseMode(CENTER);
	squareColor = 0;
  img = loadImage ('old_dictionary.jpg')
  rectMode(CENTER);
}
//adds text, changes size, adds elipse, adds timer
function draw() {
//adds background image
  image(img, 0, 0);
  textSize(30)
  textAlign(CENTER,CENTER);
  textSize(20);
  text('uh·lee·jns', 200, 100);
  text('allegience', 350, 150);
  text('allegaince', 550, 150);
  text('allegiance', 200, 150);
  noStroke();
  fill(squareColor)
  text('Score: ', 160, 30);
  textSize(50)
  //ellipse(50, 50, 90, 90); // ellipse(x, y, width, height)
  text(timer, 50, 55);//Call Timer
  if (frameCount % 60 == 0 && timer > 0){
  	timer--;
  }
  //
  if (timer == 0){
  	textSize(50);
    text('Times Up!', width/2, height/2);
  }
  if (mouseIsPressed) {
  	squareColor = color(green);
  }
}
//Could not run code that highlights color correctly
// When the user clicks the mouse
//function mousePressed() {
//if ((correctx < mousex < 100) && (correcty < mousey < 250)) {
//alue = 0;
//}
//else {
// fill(0);
 //}
//}
