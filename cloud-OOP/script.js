let x,y;

function setup() {
    let canvas = createCanvas(400, 400);
    canvas.parent("p5-container");

}

function draw() {
    background(220);
    cloud();
    move();
}

function cloud(){
push();
translate(x,y);
noStroke();

circle(0,0,100);

for(let a=0; a<2+PI;a+=PI/6){
    push();
    rotate(a);
    circle(s*0.5,0,s*0.5 );
    pop();
}
}