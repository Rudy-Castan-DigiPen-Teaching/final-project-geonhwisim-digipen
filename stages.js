// Project Checkpoint - Final project
// Geonhwi Sim
// CS099
// spring 2020

function wall_draw(size) {
  var cols = 20;
  var rows = 20;
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      image(blocks_img, i * 40, j * 40, size, size);
    }
  }
  push();
  noStroke();
  fill(220);
  image(bg_img, 41, 41, 717, 717);
  pop();
}

function block(pos_x, pos_y, n) {
  for (let i = 0; i <= n; i++) {
    rect(pos_x + i * 80, pos_y, 78, 38)
  }
}

function portal1(x, y) {
  ellipse(x, y, 20, 50);
}

function portal2(x, y) {
  ellipse(x, y, 50, 20);
}

class googly_eyes {
  constructor() {
    var googlyEyes = []
  }
  
  draw(x, y, size, fill_color) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.fill_color = fill_color;
    
    push();
    fill(this.fill_color);
    circle(this.x, this.y, this.size);
    fill(255);
    circle(this.x - 8, this.y - 2, this.size/2);
    circle(this.x + 8, this.y -2, this.size/2);
    fill(0);
    circle(this.x - 10, this.y + 1, this.size/4);
    circle(this.x + 12, this.y - 2, this.size/4);
    pop();
  }
}
