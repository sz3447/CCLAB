// CCLab Mini Project - 9.R Particle World Template

let NUM_OF_PARTICLES = 3; // Decide the initial number of particles.

let particles = [];

function setup() {
  let canvas = createCanvas(800, 600);
  canvas.parent("p5-canvas-container");

  // generate particles
  for (let i = 0; i < NUM_OF_PARTICLES; i++) {
    particles[i] = new Particle(random(width), random(height));
  }
}

function draw() {
  background(50, 50, 50, 25);

  // update and display
  for (let i = 0; i < particles.length; i++) {
    let p = particles[i];
    p.update();
    p.display();
  }
}

function mousePressed(){
  for(let i = 0; 1 < NUM_OF_PARTICLES; i++){
    particles.push(new Particle(mouseX, mouseY));
  }
}

class Particle {
  // constructor function
  constructor(startX, startY) {
    // properties (variables): particle's characteristics
    this.x = startX;
    this.y = startY;
    this.dia = random(10,30);
    this.shape = random() > 0.5 ? "ellipse" : "rectangle";

    this.speedx = random(-3,3);
    this.speedy = random(-3,3);

    this.r = random(255);
    this.g = random(255);
    this.b = random(255);
  }
  // methods (functions): particle's behaviors
  update() {
    this.x += this.speedx;
    this.y += this.speedy;
  
    //colorchange per frame
    this.r = (this.r + random(-5,5)) % 255;
    this.g = (this.g + random(-5,5)) % 255;
    this.b = (this.b + random(-5,5)) % 255;
  }
  display() {
    // particle's appearance
    push();
    translate(this.x, this.y);

    fill (this.r, this.g, this.b);
    noStroke();

    //draw either ellipse or rectange
    if(this.shape === "ellipse"){
      ellipse (0,0, this.dia);
    } else {
      rectMode(CENTER);
      rect (0,0, this.dia, this.dia);
    }

    pop();
  }
}
