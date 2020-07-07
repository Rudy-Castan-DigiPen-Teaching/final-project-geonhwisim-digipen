// Project Checkpoint - Final project
// Geonhwi Sim
// CS099
// spring 2020

class particle {
  constructor(x, y, radius, s) {
    this.x = x
    this.y = y
    this.radius = radius
    this.new_x = cos(PI / 5) * s
    this.new_y = sin(PI / 5) * s
  }

  update() {
    this.x += this.new_x
    this.y += this.new_y

    if (this.x > width - 40 - this.radius || this.x < 40 + this.radius) {
      this.new_x = -this.new_x
    }
    if (this.y > height - 40 - this.radius || this.y < 40 + this.radius) {
      this.new_y = -this.new_y
    }
  }

  draw() {
    strokeWeight(3);
    stroke(255);
    fill(255);
    circle(this.x, this.y, this.radius);
  }
}
