let NUM_OF_PARTICLES = 100; // Number of particles per click
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

//remove particles if life 0 or off the canvas
    if (p.life <= 0 || (p.type === "stars" && p.y > height)) {
      particles.splice(i, 1);
    }
  }

//continuous falling stars
  if (frameCount % 3 === 0) {
    particles.push(new Particle(random(width), 0, "stars"));
  }
}

function mousePressed() {
  for (let i = 0; i < NUM_OF_PARTICLES; i++) {
    particles.push(new Particle(mouseX, mouseY, "explode"));
  }
}

class Particle {
  constructor(startX, startY, type) {
    this.x = startX;
    this.y = startY;
    this.type = type; 
    this.dia = type === "stars" ? random(5, 9) : random(5, 20);
    this.life = 255;

    if (this.type === "stars") {
      this.speedx = 0;
      this.speedy = random(2, 5);
      this.r = 14;
      this.g = 243;
      this.b = 197; 
    } else {
      this.speedx = random(-5, 5);
      this.speedy = random(-5, 5);
      this.r = random(132, 132);
      this.g = random(130, 255);
      this.b = random(152, 255);
    }
  }

  update() {
    this.x += this.speedx;
    this.y += this.speedy;

//no fade if shape type is stars but will fade if not
    if (this.type === "stars") {
      this.life = 255; 
    } else {
      this.life -= 4; 
    }
  }

  checkBounds() {
    if (this.type === "explode") {
//the firework particles bounce off the canvas

      if (this.x <= 0 || this.x >= width) {
        this.speedx *= -1;
        this.x = constrain(this.x, 0, width);
      }

      if (this.y <= 0 || this.y >= height) {
        this.speedy *= -1;
        this.y = constrain(this.y, 0, height);
      }
    }
  }

  display() {
    push();
    translate(this.x, this.y);
    fill(this.r, this.g, this.b, this.life);
    noStroke();

    //set elipse shape for the stars and different shape for the other firework
    if (this.type === "stars") {
      ellipse(0, 0, this.dia, this.dia * 2); 
    } else {
      ellipse(0, 0, this.dia); 
    }
    pop();
  }
}