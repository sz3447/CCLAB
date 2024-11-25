function setup() {
    let canvas = createCanvas(800,800);
    canvas.position(windowWidth/2 - width/2, windowHeight/2 - height/2);
    canvas.parent("p5-canvas-container");
}

function draw() {
}

function windowResized() {
    canvas.position(windowWidth / 2 - width / 2, windowHeight / 2 - height / 2);
  }

function selectSlot(slotNumber) {
    const slots = document.querySelectorAll('.slot');
    slots.forEach(slot => slot.classList.remove('selected'));

    slots[slotNumber - 1].classList.add('selected');
}