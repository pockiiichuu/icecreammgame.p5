//custom variables
var r = 239;
var g = 233;
var b = 174;
var t = 0;
var z = 0;
var l = 0;
var a = 0;


function setup() {
 // put setup code here
createCanvas(500,500);
    
     
}

function draw() {
  // put drawing code here
  background("#FEC3A6"); //apricot bg
  fill (r, g, b, z);
  noStroke();
  ellipse (width/2, height/4, 200, 200); //scoop
  fill (200,173,127, t);
  triangle (width/2-100, height/4+50, width/2+100, height/4+50,       width/2, height-20); //cone
  stroke(191, 154, 202, l);
  strokeWeight(5);
  line(width/2, height/4, 200, 100); // sprinkles
  stroke(89, 9, 37, l);
  strokeWeight(5);
  line(width/2, height/4, 300, 100); //sprinkles
  noStroke();
  fill (193, 18, 31, a);
  ellipse (width/2, 20, 40, 40); // cherry
    
    textSize(15);
    fill(255);
    text('press c to make a cone', 10, 400);
   text('press s to get a scoop', 10, 420);
 text('click on the scoop to get a color of your choice!', 10, 440);
    text('press L put in sprinkles', 10, 460);
    text('click a for some cherry ', 10, 480);
}

//changing the color values when 's' is pressed
function keyPressed() {
    if (key === 'c'){
    t = 255;
  }
    if (key === 's'){
        z = 255;
    }
    if (key === 'l'){
        l = 255;
    }
    if (key === 'a'){
        a = 255;
    }
}

function mouseClicked(){
    if (r === 239){
      r = random(0,255);
    }
    if (g === 233){
        g = random(0, 255);
    }
    if (b === 174){
        g = random(0, 255);
    }
}