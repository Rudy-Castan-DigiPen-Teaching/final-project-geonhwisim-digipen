// Project Checkpoint - Final project
// Geonhwi Sim
// CS099
// spring 2020

function wall_move() {
  switch (current_wall) {
    case wall_number.down_wall:

      User.move1();
      User.right_run();

      if (keyIsDown(87)) {
        User.jump1();
      } else if (keyIsDown(32) && User.x > width - 100) {
        current_wall = 12;
        User.x++
        User.y--
        if (User.x == width - 40 - 10 && User.y == height - 40 - 50) {
          User.x = width - 40 - 10;
          User.y = height - 40 - 50;
        }
      }

      if (User.x == width - 40 - 10 && User.y == height - 40 - 10) {
        scene = scene_numbers.lose;
        current_wall = wall_number.down_wall;
        User.x = 70;
        User.y = height - 48;
        bomb_aud.play();
      }

      if (Particle1.x > User.x - 10 && Particle1.x < User.x + 10 && Particle1.y > User.y - 10) {
        scene = scene_numbers.lose;
        current_wall = wall_number.down_wall;
        User.x = 70;
        User.y = height - 48;
        bomb_aud.play();
        play_bgm.stop();
      }

      break;

    case wall_number.right_wall:

      User.move2();
      User.up_run();

      if (keyIsDown(65)) {
        User.jump2();
      } else if (keyIsDown(32) && User.y < 100) {
        current_wall = 13;
        User.x--
        User.y--
        if (User.x == width - 40 - 50 && User.y == 40 + 10) {
          User.x = width - 40 - 50;
          User.y = 40 + 10;
        }
      }

      if (User.x == width - 40 - 10 && User.y == 40 + 10) {
        scene = scene_numbers.lose;
        current_wall = wall_number.down_wall;
        User.x = 70;
        User.y = height - 48;
        bomb_aud.play();
      }

      if (Particle1.y > User.y - 10 && Particle1.y < User.y + 10 && Particle1.x > User.x - 10) {
        scene = scene_numbers.lose;
        current_wall = wall_number.down_wall;
        User.x = 70;
        User.y = height - 48;
        bomb_aud.play();
        play_bgm.stop();
      }

      break;

    case wall_number.up_wall:

      User.move3();
      User.left_run();

      if (keyIsDown(83)) {
        User.jump3();
      } else if (keyIsDown(32) && User.x < 100) {
        current_wall = 14;
        User.x--
        User.y++
        if (User.x == 40 + 10 && User.y == 40 + 50) {
          User.x = 40 + 10;
          User.y = 40 + 50;
        }
      }

      if (User.x == 40 + 10 && User.y == 40 + 10) {
        scene = scene_numbers.lose;
        current_wall = wall_number.down_wall;
        User.x = 70;
        User.y = height - 48;
        bomb_aud.play();
      }

      if (Particle1.x > User.x - 10 && Particle1.x < User.x + 10 && Particle1.y < User.y + 10) {
        scene = scene_numbers.lose;
        current_wall = wall_number.down_wall;
        User.x = 70;
        User.y = height - 48;
        bomb_aud.play();
        play_bgm.stop();
      }

      break;

    case wall_number.left_wall:

      User.move4();
      User.down_run();

      if (keyIsDown(68)) {
        User.jump4();
      } else if (keyIsDown(32) && User.y > height - 100) {
        current_wall = 11;
        User.x++
        User.y++
        if (User.x == 40 + 50 && User.y == height - 40 - 10) {
          User.x = 40 + 50;
          User.y = height - 40 - 10;
        }
      }

      if (User.x == 40 + 10 && User.y == height - 40 - 10) {
        scene = scene_numbers.lose;
        current_wall = wall_number.down_wall;
        User.x = 70;
        User.y = height - 48;
        bomb_aud.play();
      }

      if (Particle1.y > User.y - 10 && Particle1.y < User.y + 10 && Particle1.x < User.x + 10) {
        scene = scene_numbers.lose;
        current_wall = wall_number.down_wall;
        User.x = 70;
        User.y = height - 48;
        bomb_aud.play();
        play_bgm.stop();
      }

      break;
  }
}