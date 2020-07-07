// Project Checkpoint - Final project
// Geonhwi Sim
// CS099
// spring 2020

class button {
  constructor(x = 0, y = 0) {
    var button_width = 100;
    var button_height = 100;
    this.left = x - button_width / 2;
    this.top = y - button_height / 2;
    this.width = button_width;
    this.height = button_height;
    this.mouseIsOver = false;
    this.mouseWasPressed = false;
  }

  draw() {
    push();
    translate(this.left, this.top);
    image(button1, 0, 0, this.width, this.height);
    if (this.mouseIsOver) {
      if (mouseIsPressed) {
        image(button3, 0, 0, this.width, this.height);
      } else {
        image(button2, 0, 0, this.width, this.height);
      }
    }
    pop();
  }

  draw_return() {
    push();
    translate(this.left, this.top);
    image(returnKey_img, 0, 0, this.width, this.height);
    if (this.mouseIsOver) {
      image(playAgain_img, -50, -50, this.width * 2, this.height * 2);
    }
    pop();
  }

  draw_return2() {
    push();
    translate(this.left, this.top);
    image(returnKey_img, 0, 0, this.width, this.height);
    if (this.mouseIsOver) {
      image(backToMain_img, -50, -50, this.width * 2, this.height * 2);
    }
    pop();
  }
  
  draw_upbutton() {
    push();
    translate(this.left, this.top);
    image(up_img, 0, 0, this.width, this.height);
    if (this.mouseIsOver) {
      image(up2_img, 0, 0, this.width, this.height);
    }
    pop();
  }
  
  draw_downbutton() {
    push();
    translate(this.left, this.top);
    image(down_img, 0, 0, this.width, this.height);
    if (this.mouseIsOver) {
      image(down2_img, 0, 0, this.width, this.height);
    }
    pop();
  }

  click_button() {
    var left = this.left;
    var top = this.top;
    var right = left + this.width;
    var bottom = top + this.height;

    var within_x = mouseX > left && mouseX < right;
    var within_y = mouseY > top && mouseY < bottom;

    this.mouseIsOver = within_x && within_y;

    var clicked_it = this.mouseIsOver && this.mouseWasPressed && !mouseIsPressed;

    this.mouseWasPressed = mouseIsPressed;

    return clicked_it;
  }
}