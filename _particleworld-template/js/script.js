let NUM_OF_PARTICLES = 100; //num particl per click
let particles = [];

function setup() {
  let canvas = createCanvas(800, 600);
  canvas.parent("p5-canvas-container");
}

function draw() {
  background(50, 50, 50, 25); 

  for (let i = particles.length - 1; i >= 0; i--) {
    let p = particles[i];
    p.update();
    p.display();
    p.checkBounds();

    if (p.life <= 0) {
      particles.splice(i, 1);
    }
   
  }
}

function mousePressed() {
  for (let i = 0; i < NUM_OF_PARTICLES; i++) {
    particles.push(new Particle(mouseX, mouseY));
  }
}

class Particle {
  constructor(startX, startY) {

    this.x = startX;
    this.y = startY;
    this.dia = random(10, 30); 
    this.shape = random() > 0.5 ? "ellipse" : "rectangle"; // Random shape

    this.speedx = random(-3, 3);
    this.speedy = random(-3, 3);

    this.r = random(255);
    this.g = random(255);
    this.b = random(255);
  }


  update() {
    this.x += this.speedx;
    this.y += this.speedy;
    this.life -= 2;

    //random color change by fgrame
    this.r = (this.r + random(-5, 5)) % 255;
    this.g = (this.g + random(-5, 5)) % 255;
    this.b = (this.b + random(-5, 5)) % 255;
  }

  checkBounds(){
    if(this.x <=0 || this.x >= width);{
      this.speedx *= -1;
      this.x = constrain(this.x, 0, width);
    }

    if (this.y <= 0 || this.y >= height);{
      this.speedy *= -1;
      this.y = constrain(this.y, 0, height);
    }
 }  

  display() {
    push();
    translate(this.x, this.y);
    fill(this.r, this.g, this.b, this.life);
    noStroke();

//draw ellipse or rectiange
    if (this.shape === "ellipse") {
      ellipse(0, 0, this.dia);
    } else {
      rectMode(CENTER);
      rect(0, 0, this.dia, this.dia);
    }
    pop();
  }


}