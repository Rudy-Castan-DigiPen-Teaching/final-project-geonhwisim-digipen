// Project Checkpoint - Final project
// Geonhwi Sim
// CS099
// spring 2020

var volumes;
var scene_numbers = {
  main: 1,
  play1: 2,
  lose: 3,
  win1: 4,
  option: 5,
  credit: 6,
  story1: 7,
  story2: 8,
  story3: 9,
  how_to: 10,
  play2: 11,
  win2: 12,
  win3: 13,
  win4: 14,
  win5: 15
}
var scene = scene_numbers.main;

var wall_number = {
  down_wall: 11,
  right_wall: 12,
  up_wall: 13,
  left_wall: 14
}
var current_wall = wall_number.down_wall;

var running_man = []
var googlyEyes1 = []
var googlyEyes2 = []
var googlyEyes3 = []

function setup() {
  createCanvas(800, 800);

  User = new user();
  Particle1 = new particle(random(40, width - 40), random(40, height - 40), 5, 10);
  Particle2 = new particle(random(40, width - 40), random(40, height - 40), 5, 10);
  Particle3 = new particle(random(40, width - 40), random(40, height - 40), 5, 10);
  Play_button = new button(width / 2, height * 4 / 7);
  Option_button = new button(width / 2, height * 5 / 7);
  Credit_button = new button(width / 2, height * 6 / 7);
  Return_button = new button(700, 700);
  Skip_button = new button(750, 750);
  Volume_up_button = new button(width/2 + 100, height/2);
  Volume_down_button = new button(width/2 + 200, height/2);

  for (var i = 0; i < 2; i++) {
    googlyEyes1[i] = new googly_eyes();
  }
  for (var j = 0; j < 2; j++) {
    googlyEyes2[j] = new googly_eyes();
  }
  
  for (var k = 0; k < 2; k++) {
    googlyEyes3[k] = new googly_eyes();
  }

  switch (scene) {
    case scene_numbers.main:
    break;
      
    case scene_numbers.play1:
      if (User.x > width / 2 && height - 70 < User.y && User.y < height - 40) {
        googlyEyes1.splice(0, 1);
      }
      break;

    case scene_numbers.play2:
      if (User.y < height / 2) {
        googlyEyes2.splice(0, 1);
      }
      break;
      
    case scene_numbers.play3:
      if (User.y >= 50 && User.x < width/3) {
        googlyEyes3.splice(0, 1);
      }
      break;
  }
  
  volumes = 2;
}

function draw() {
  handcuff_aud.volume(map(volumes, 0, 10, 0, 1));
  main_bgm.volume(map(volumes, 0, 10, 0, 1));
  warp_aud.volume(map(volumes, 0, 10, 0, 1));
  bomb_aud.volume(map(volumes, 0, 10, 0, 1));
  play_bgm.volume(map(volumes, 0, 10, 0, 1));
  win_bgm.volume(map(volumes, 0, 10, 0, 1));
  
  background(bg_img);
  print(handcuff_aud.volume());

  switch (scene) {
    case scene_numbers.main:
      main_bgm.play();
      push();
      imageMode(CENTER)
      image(title_img, width / 2, height / 4, 500, 350);
      pop();
      Play_button.draw();
      image(play_img, width / 2 - 75, height * 4 / 7 - 80, 150, 150);
      Option_button.draw();
      image(option_img, width / 2 - 75, height * 5 / 7 - 80, 150, 150);
      Credit_button.draw();
      image(credit_img, width / 2 - 75, height * 6 / 7 - 80, 150, 150);
      if (Play_button.click_button() == true) {
        scene = scene_numbers.story1;
        handcuff_aud.play();
      } else if (Option_button.click_button() == true) {
        scene = scene_numbers.option;
        handcuff_aud.play();
      } else if (Credit_button.click_button() == true) {
        scene = scene_numbers.credit;
        handcuff_aud.play();
      }
      break;

    case scene_numbers.story1:
      image(story1_img, 0, 0);
      Skip_button.draw();
      image(skip_img, 700, 700, 100, 100)
      if (Skip_button.click_button() == true) {
        scene = scene_numbers.story2
        handcuff_aud.play();
      }
      break;

    case scene_numbers.story2:
      image(story2_img, 0, 0);
      Skip_button.draw();
      image(skip_img, 700, 700, 100, 100)
      if (Skip_button.click_button() == true) {
        scene = scene_numbers.story3
        handcuff_aud.play();
      }
      break;

    case scene_numbers.story3:
      image(story3_img, 0, 0);
      Skip_button.draw();
      image(skip_img, 700, 700, 100, 100)
      if (Skip_button.click_button() == true) {
        scene = scene_numbers.how_to
        handcuff_aud.play();
      }
      break;

    case scene_numbers.how_to:
      image(howToPlay_img, 0, 0);
      Skip_button.draw();
      image(skip_img, 700, 700, 100, 100)
      if (Skip_button.click_button() == true) {
        scene = scene_numbers.play1
        handcuff_aud.play();
        main_bgm.stop();
      }
      break;

    case scene_numbers.play1:
      play_bgm.play();
      wall_draw(38);
      User.draw();

      push();
      Particle1.draw();
      Particle1.update();
      pop();

      wall_move();

      if (User.x < width / 2 && height - 70 < User.y && User.y < height - 40) {
        googlyEyes1[0].draw(width / 2, height - 40 - 15, 30, 'lavender');
      }
      if (User.x > width / 2 && height - 70 < User.y && User.y < height - 40) {
        portal2(width - 80, height - 40);
      }
      if (User.x == width - 100) {
        warp_aud.play();
        scene = scene_numbers.play2
        current_wall = wall_number.down_wall;
        User.x = 70;
        User.y = height - 48;
      }
      break;

    case scene_numbers.play2:
      wall_draw(38);
      User.draw();
      push();
      Particle1.draw();
      Particle1.update();
      Particle2.draw();
      Particle2.update();
      pop();

      wall_move();
      
      switch (current_wall) {
        case wall_number.down_wall:
          if (Particle2.x > User.x - 10 && Particle2.x < User.x + 10 && Particle2.y > User.y - 10) {
            scene = scene_numbers.lose;
            current_wall = wall_number.down_wall;
            User.x = 70;
            User.y = height - 48;
            bomb_aud.play();
            play_bgm.stop();
          }
          break;

        case wall_number.right_wall:
          if (Particle2.y > User.y - 10 && Particle2.y < User.y + 10 && Particle2.x > User.x - 10) {
            scene = scene_numbers.lose;
            current_wall = wall_number.down_wall;
            User.x = 70;
            User.y = height - 48;
            bomb_aud.play();
            play_bgm.stop();
          }
          break;

        case wall_number.up_wall:
          if (Particle2.x > User.x - 10 && Particle2.x < User.x + 10 && Particle2.y < User.y + 10) {
            scene = scene_numbers.lose;
            current_wall = wall_number.down_wall;
            User.x = 70;
            User.y = height - 48;
            bomb_aud.play();
            play_bgm.stop();
          }
          break;

        case wall_number.left_wall:
          if (Particle2.y > User.y - 10 && Particle2.y < User.y + 10 && Particle2.x < User.x + 10) {
            scene = scene_numbers.lose;
            current_wall = wall_number.down_wall;
            User.x = 70;
            User.y = height - 48;
            bomb_aud.play();
            play_bgm.stop();
          }
          break;
      }

      if (User.y > height / 2) {
        googlyEyes2[0].draw(width - 40 - 15, height / 2, 30, 'red');
      }
      if (User.y < height / 2) {
        portal1(40, 200);
      }
      if (User.y < 200 && User.y > 150 && User.x < 80) {
        warp_aud.play();
        scene = scene_numbers.play3;
        current_wall = wall_number.down_wall;
        User.x = 70;
        User.y = height - 48;
      }
      break;

    case scene_numbers.play3:
      wall_draw(38);
      User.draw();
      push();
      Particle1.draw();
      Particle1.update();
      Particle2.draw();
      Particle2.update();
      Particle3.draw();
      Particle3.update();
      pop();
      
      wall_move();

      switch (current_wall) {
        case wall_number.down_wall:
          if (Particle2.x > User.x - 10 && Particle2.x < User.x + 10 && Particle2.y > User.y - 10) {
            scene = scene_numbers.lose;
            current_wall = wall_number.down_wall;
            User.x = 70;
            User.y = height - 48;
            bomb_aud.play();
            play_bgm.stop();
          }
          if (Particle3.x > User.x - 10 && Particle3.x < User.x + 10 && Particle3.y > User.y - 10) {
            scene = scene_numbers.lose;
            current_wall = wall_number.down_wall;
            User.x = 70;
            User.y = height - 48;
            bomb_aud.play();
            play_bgm.stop();
          }
          break;

        case wall_number.right_wall:
          if (Particle2.y > User.y - 10 && Particle2.y < User.y + 10 && Particle2.x > User.x - 10) {
            scene = scene_numbers.lose;
            current_wall = wall_number.down_wall;
            User.x = 70;
            User.y = height - 48;
            bomb_aud.play();
            play_bgm.stop();
          }
          if (Particle3.y > User.y - 10 && Particle3.y < User.y + 10 && Particle3.x > User.x - 10) {
            scene = scene_numbers.lose;
            current_wall = wall_number.down_wall;
            User.x = 70;
            User.y = height - 48;
            bomb_aud.play();
            play_bgm.stop();
          }
          break;

        case wall_number.up_wall:
          if (Particle2.x > User.x - 10 && Particle2.x < User.x + 10 && Particle2.y < User.y + 10) {
            scene = scene_numbers.lose;
            current_wall = wall_number.down_wall;
            User.x = 70;
            User.y = height - 48;
            bomb_aud.play();
            play_bgm.stop();
          }
          if (Particle3.x > User.x - 10 && Particle3.x < User.x + 10 && Particle3.y < User.y + 10) {
            scene = scene_numbers.lose;
            current_wall = wall_number.down_wall;
            User.x = 70;
            User.y = height - 48;
            bomb_aud.play();
            play_bgm.stop();
          }
          break;

        case wall_number.left_wall:
          if (Particle2.y > User.y - 10 && Particle2.y < User.y + 10 && Particle2.x < User.x + 10) {
            scene = scene_numbers.lose;
            current_wall = wall_number.down_wall;
            User.x = 70;
            User.y = height - 48;
            bomb_aud.play();
            play_bgm.stop();
          }
          if (Particle3.y > User.y - 10 && Particle3.y < User.y + 10 && Particle3.x < User.x + 10) {
            scene = scene_numbers.lose;
            current_wall = wall_number.down_wall;
            User.x = 70;
            User.y = height - 48;
            bomb_aud.play();
            play_bgm.stop();
          }
          break;
      }
      
      if (User.y >= 50 && User.x > 70) {
        googlyEyes3[0].draw(70, 50, 30, 'blue');
      }
      if (User.x < 70) {
        portal1(40, 350);
      }
      if (User.y < 350 && User.y > 320 && User.x < 80) {
        warp_aud.play();
        scene = scene_numbers.win1;
        current_wall = wall_number.down_wall;
        User.x = 70;
        User.y = height - 48;
        play_bgm.stop();
      }
      break;

    case scene_numbers.lose:
      image(die_img, 0, 0);
      Return_button.draw_return();
      if (Return_button.click_button() == true) {
        main_bgm.play();
        scene = scene_numbers.main;
      }
      break;

    case scene_numbers.win1:
      image(edstory1_img, 0, 0);
      Skip_button.draw();
      image(skip_img, 700, 700, 100, 100);
      if (Skip_button.click_button() == true) {
        scene = scene_numbers.win2;
      }
      play_bgm.stop();
      win_bgm.play();
      break;

    case scene_numbers.win2:
      image(edstory2_img, 0, 0);
      Skip_button.draw();
      image(skip_img, 700, 700, 100, 100);
      if (Skip_button.click_button() == true) {
        scene = scene_numbers.win3;
      }
      break;

    case scene_numbers.win3:
      image(edstory3_img, 0, 0);
      Skip_button.draw();
      image(skip_img, 700, 700, 100, 100);
      if (Skip_button.click_button() == true) {
        scene = scene_numbers.win4;
      }
      break;

    case scene_numbers.win4:
      image(edstory4_img, 0, 0);
      Skip_button.draw();
      image(skip_img, 700, 700, 100, 100);
      if (Skip_button.click_button() == true) {
        scene = scene_numbers.win5;
      }
      break;

    case scene_numbers.win5:
      image(edstory5_img, 0, 0);
      image(theend_img, 100, 100);
      break;

    case scene_numbers.option:
      push();
      imageMode(CENTER);
      image(option_t_img, width / 2, height / 4);
      image(volume_img, width/2 - 200, height/ 2);
      pop();
      Volume_up_button.draw_upbutton();
      if(Volume_up_button.click_button() == true) {
        volumes +=1
        if(volumes > 10) {
          volumes = 10;
        }
      }
      Volume_down_button.draw_downbutton();
      if(Volume_down_button.click_button() == true) {
        volumes -=1
        if(volumes < 0) {
          volumes = 0;
        }
      }
      Return_button.draw_return2();
      if (Return_button.click_button() == true) {
        scene = scene_numbers.main;
      }
      break;

    case scene_numbers.credit:
      push();
      imageMode(CENTER);
      image(credit_t_img, width / 2, height / 4);

      textAlign(CENTER, CENTER);
      stroke(255);
      fill(255);
      textSize(20);
      text('Made by Geonhwi Sim', width / 2, height / 3 + 50);
      text('Thanks to Rudy Castan', width / 2, height / 3 + 100);
      text('All images made by Geonhwi Sim', width / 2, 3* height/5-60);
      text('main_bgm from https://maoudamashii.jokersounds.com/list/game12.html', width/2, 3* height/5 - 30);
      text('play_bgm from https://maoudamashii.jokersounds.com/list/bgm6.html', width/2, 3* height/5);
      text('win_bgm from https://maoudamashii.jokersounds.com/list/bgm6.html', width/2, 3* height/5 + 30);
      text('handcuff_audio from https://www.youtube.com/watch?v=6MGJ0WhWfTA&t=12s', width/2, 3* height/5 + 60);
      text('warp_audio from https://maoudamashii.jokersounds.com/list/se13.html', width/2, 3* height/5 + 90);
      text('bomb_audio from https://maoudamashii.jokersounds.com/list/se13.html', width/2, 3* height/5 + 120);
      pop();
      Return_button.draw_return2();
      if (Return_button.click_button() == true) {
        scene = scene_numbers.main;
      }
      break;
  }
}