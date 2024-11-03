
let dancer;

function setup() {
  // no adjustments in the setup function needed...
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("p5-canvas-container");
  dancer = new ShylaDancer (width / 2, height / 2);
}

function draw() {
  background(0);
  dancer.update();
  dancer.display();
}

class ShylaDancer {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;
    this.size = 100;
    this.bounceHeight = 5; //set bounce hight
    this.bounceSpeed = 0.1; //set bounce speed
    this.limbWiggle = 0; 
    this.limbWiggleSpeed = 0.05; // set speed for the limb wiggkles
    this.color = color(30, 144, 255)
  }

  update() {
    this.y += sin(frameCount * this.bounceSpeed) * this.bounceHeight;
    this.limbWiggle += this.limbWiggleSpeed;
  }

  display() {
    push();
    translate(this.x, this.y);

     fill(this.color);
    ellipse(0, 0, this.size, this.size); // Body
    fill(0);
    //face
    ellipse( -20, -5 , 10, 10)
    ellipse( 20, -5 , 10, 10)
    arc(0,0,10,40,0,PI)
    
    //hat
    fill(205, 133, 63)
      rect(-20, -60, 40, 20);
      arc(0, -60, 60, 40, PI, 0);
      rect(-40, -50, 80, 10); 
    
    //  wiggly limbs
    stroke(255);
    line(-45, 10 + sin(this.limbWiggle) * 10, -70, 20); // Left arm
    line(45, 10 + sin(this.limbWiggle) * 10, 70, 20); // Right arm
    line(-15, 50, -15 + sin(this.limbWiggle) * 5, 90); // Left leg
    line(15, 50, 15 + sin(this.limbWiggle) * 5, 90); // Right leg
    

//small lasso-thing
    stroke(128, 0, 0);
    noFill();
    beginShape();
    vertex(70, 10); // Start from the right arm
    vertex(70, -20); // Draw the lasso curve
    vertex(90, -10);
    vertex(70, 0);
    endShape();
 
    
    pop();
  }

  drawReferenceShapes() {
    noFill();
    stroke(255, 0, 0);
    line(-5, 0, 5, 0);
    line(0, -5, 0, 5);
    stroke(255);
    rect(-100, -100, 200, 200);
    fill(255);
    stroke(0);
  }
}

/*
GOAL:
The goal is for you to write a class that produces a dancing being/creature/object/thing. In the next class, your dancer along with your peers' dancers will all dance in the same sketch that your instructor will put together. 

RULES:
For this to work you need to follow one rule: 
  - Only put relevant code into your dancer class; your dancer cannot depend on code outside of itself (like global variables or functions defined outside)
  - Your dancer must perform by means of the two essential methods: update and display. Don't add more methods that require to be called from outside (e.g. in the draw loop).
  - Your dancer will always be initialized receiving two arguments: 
    - startX (currently the horizontal center of the canvas)
    - startY (currently the vertical center of the canvas)
  beside these, please don't add more parameters into the constructor function 
  - lastly, to make sure our dancers will harmonize once on the same canvas, please don't make your dancer bigger than 200x200 pixels. 
*/