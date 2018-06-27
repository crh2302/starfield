/**
Cervantes Hernandez
Classic starfield 2d starfield.
This program was made following the youtube video called:
Coding Challenge #1: Starfield in Processing - The Coding Train
source: https://www.youtube.com/watch?v=17WoOqgXsRM
*/
var canvas_width = 500;
var canvas_height = 500;
var star_count = 400
var stars_speed = 20
var stars = new Array(star_count);

function setup() {

  createCanvas(canvas_width,canvas_height);
   for (var i = 0; i < stars.length; i++) {
     stars[i] = new Star();
   }
}

function draw() {
  background(0);
  speed = map(mouseX,0,width,0,stars_speed)
  translate(0.5*width, 0.5*height);
  for (var i = 0; i < stars.length; i++) {
    stars[i].update();
    stars[i].show();
  }
}

class Star {
  constructor() {
    this.x = random(-width,width);
    this.y = random(-height,height);
    this.z = random(height);
  }
  update(){
    this.z -= speed;
    if(this.z < 0.0){ //reset star
      this.x = random(-width,width);
      this.y = random(-height,height);
      this.z = random(height);
    }
  }

  show(){
    var offsetX =100.00*this.x/this.z;
    var offsetY =100.00*this.y/this.z;
    var r = map(this.z,0,width,4,0);
    noStroke();
    fill(255,255,255);

    ellipse(offsetX,offsetY,r,r);
  }

}
