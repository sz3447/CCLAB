let x;
let y;
let R = 100;
let vNumber = 200;
let smoothness = 0.5;

//background variables
let backgroundCircles = 100
let backgroundradius = 500
let backgroundposition = []
let change = 0
let colorchange = 0
let yoff = 0.0;

//creature variables
let creatureCircles = 300
let creatureradius = 150
let creatureposition = []
let blocks = []

function setup() {
    let canvas = createCanvas(800, 500);
    canvas.id("p5-canvas");
    canvas.parent("p5-canvas-container");
}

function draw() {
    strokeWeight(2);
    background (0)
    
  // clicker interactive

  if (mouseIsPressed == true){
    fill(0,126,78)
  }
  
  //BACKGROUND PART
  //push function to add thing
  //createVector: https://p5js.org/reference/p5/createVector/
    
    for (let i = 0; i < backgroundCircles; i++){
      backgroundposition.push(createVector(0,0))
    }
    
  //circle positions; moving by applying transformation (livecode)
  
    for (let i = 0; i < backgroundCircles; i++){
      let angle = TWO_PI/backgroundCircles * i + change;
      let x = width/2 + backgroundradius * cos(angle)
      let y = height/2 + backgroundradius * sin(angle)
      backgroundposition[i].set(x,y)
    }
  
  //ripple
  //checking if the mouse is there
    for (let i = 0; i < backgroundCircles; i++) {
      let d = dist(mouseX, mouseY, backgroundposition[i].x,   backgroundposition[i].y);
      
  //when the mouse is there, resize the circle
    let ripple = backgroundradius + map (d,0,100,20,-20)
  
  //ripple circle
  ellipse(backgroundposition[i].x, backgroundposition[i].y, ripple, ripple)
  
  //change color of circle per offset circle within rgb values
  stroke((change + i *10 + colorchange) %255, 65, 500)
      
  //cool effect
  line (width/2, height/2, backgroundposition[i].x, backgroundposition[i].y)
  
  noFill()
  }
  
  //CREATURE PART  
  //creature design part  
  for (let i = 0; i < creatureCircles; i++){
   creatureposition.push(createVector(0,0))
  }
  colorchange += 1
    
  for (let i=0; i < creatureCircles; i++){
     let angle = TWO_PI/creatureCircles * i + change
    let x = width/2 + creatureradius * cos(angle)
    let y =  height/2 + creatureradius * sin(angle)
    creatureposition[i].set(x,y)
    
  }
     let mouseNear = false;
  for (let i = 0; i < creatureCircles; i++){
    let d = dist(mouseX, mouseY, creatureposition[i].x, creatureposition[i].y);
    
  let ripple = creatureradius + map (d,0,100,20,-20)
  
  ellipse(creatureposition[i].x, creatureposition[i].y, ripple, ripple)
  
  stroke((change + i *10 + colorchange) %255, 128)
  
  if (d< 150){
    mouseNear = true
  }
  }
   if (!mouseNear) {
    shootblock()
  }
  
  //p5 resouces bock updater
  updateBlocks();
  function shootblock() {
    let block = {
      x: random(width),
      y: random(height),
      size: random(20, 50),
      color: color(random(255), random(255), random(255)),
      life: 600
    };
    blocks.push(block);
  }
  
  // Function to update and display color blocks
  function updateBlocks() {
    for (let i = blocks.length - 1; i >= 0; i--) {
      let block = blocks[i];
      //fill by block rbg levels
      fill(random[2], random[2], random[2]);
      noStroke();
      rect(block.x, block.y, block.size, block.size);
      // Reduce life to create fade effect (alpha)
      block.life -= 5; // Adjust this value for fading speed
  
      // Remove the block if it's fully faded
      if (block.life <= 5) {
        blocks.splice(i, 1);
      }
    }
  }
    //coding train blob: part of the creature
  translate(width/2, height/2);
  
    var radius = 150;
  
    beginShape();
    fill(255, 71, 60,60)
    stroke(0)
    let xoff = 0;
    for (var a = 0; a < TWO_PI; a += 0.1) {
      let offset = map(noise(xoff, yoff), 0, 1, -25, 25);
      let r = radius + offset;
      let x = r * cos(a);
      let y = r * sin(a);
      vertex(x, y);
      xoff += 0.1;
    }
    endShape();
    yoff += 0.01;
  

}

