function setup() {
  createCanvas(500, 500);
  background("#0821AC");
}

function draw() {
  stroke("#FFC107");
  fill("#FF1100");
  
  
  if(mouseIsPressed) {
  rect(mouseX,mouseY,20,20);
  }
}
