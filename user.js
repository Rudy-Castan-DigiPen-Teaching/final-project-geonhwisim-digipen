// Project Checkpoint - Final project
// Geonhwi Sim
// CS099
// spring 2020

class user {
  constructor(x, y) {
    this.x = 70;
    this.y = height - 48;
    this.r = 20;
    this.vx = 0;
    this.vy = 0;
    this.gravity = 2;

    var first_wall = 1;
    var second_wall = 2;
    var third_wall = 3;
    var fourth_wall = 4;
  }

  update() {}

  jump1() {
    this.vy = -15;
  }

  jump2() {
    this.vx = -15;
  }

  jump3() {
    this.vy = +15;
  }

  jump4() {
    this.vx = +15;
  }

  right_run() {
    this.vx = 10;
    this.x += this.vx;
    this.x = constrain(this.x, 0 + 40 + this.r / 2, width - 40 - this.r / 2);
  }

  left_run() {
    this.vx = 7;
    this.x -= this.vx;
    this.x = constrain(this.x, 0 + 40 + this.r / 2, width - 40 - this.r / 2);
  }

  up_run() {
    this.vy = 7;
    this.y -= this.vy;
    this.y = constrain(this.y, 0 + 40 + this.r / 2, height - 40 - this.r / 2);
  }

  down_run() {
    this.vy = 7;
    this.y += this.vy;
    this.y = constrain(this.y, 0 + 40 + this.r / 2, height - 40 - this.r / 2);
  }

  move1() {
    this.y += this.vy;
    this.vy += this.gravity;
    this.y = constrain(this.y, 0 + 40 + this.r / 2, height - 40 - this.r / 2);
  }

  move2() {
    this.x += this.vx;
    this.vx += this.gravity;
    this.x = constrain(this.x, 0 + 40 + this.r / 2, width - 40 - this.r / 2);
  }

  move3() {
    this.y += this.vy;
    this.vy -= this.gravity;
    this.y = constrain(this.y, 0 + 40 + this.r / 2, height - 40 - this.r / 2);
  }

  move4() {
    this.x += this.vx;
    this.vx -= this.gravity;
    this.x = constrain(this.x, 0 + 40 + this.r / 2, width - 40 - this.r / 2);
  }

  draw() {
    push();
    fill(0);
    circle(this.x, this.y, this.r);
    pop();
  }
}