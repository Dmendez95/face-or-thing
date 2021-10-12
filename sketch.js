function setup() {
  createCanvas(500, 500);
  frameRate(10);
}

function draw() {
  background(30);
  line(9000,330,0,355)
  //star background movement
 for(var i=1;i<4;i++){
        var diameter=random(1,5);
   let c=color(255,204,0);
   fill(c);
   noStroke(); ellipse(random(width),random(height),diameter,diameter);}  
  
  // moon
  fill(mouseY,250)
  circle (400,60,80)
  
  // stem
  stroke(0, 160, 0);
  strokeWeight(20);
  line(250, 150, 225, 100);

  // orange
  fill(255, 100, 0);
  stroke(120, 60, 0);
  strokeWeight(3);

  // pumpkin circles
  ellipse(250, 250, 400, 200);
  ellipse(250, 250, 300, 200);
  ellipse(250, 250, 200, 200);
  ellipse(250, 250, 100, 200);

  // red/yellow color
  var fireRed = random(255);
  var fireGreen = random(fireRed);
  var fireBlue = random(fireGreen);
  fill(fireRed, fireGreen, fireBlue);
  stroke(0);

  // eyes
  triangle(175, 200, 150, 225, 200, 225);
  triangle(325, 200, 300, 225, 350, 225);
  
  //nose
  triangle(290,285,248,225,220,275)

   // mouth
  arc(
    250, 275,
    250, 75,
    radians(0), radians(180),
    CHORD);  
  //ground
 let c = color(20,75,0);
fill(c);
rect(0,355,9115,9960);
let greenValue = green(c);
print(greenValue); 
fill(0, greenValue, 0);
  

}
