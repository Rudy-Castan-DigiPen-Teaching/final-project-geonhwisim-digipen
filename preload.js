// Project Checkpoint - Final project
// Geonhwi Sim
// CS099
// spring 2020

function preload() {
  bg_img = loadImage('preload/background_filter.png');
  button1 = loadImage('preload/handcuffs.png');
  button2 = loadImage('preload/handcuffs_keys.png');
  button3 = loadImage('preload/handcuffs_open.png');
  title_img = loadImage('preload/title.png');
  option_img = loadImage('preload/option.png');
  play_img = loadImage('preload/play.png');
  credit_img = loadImage('preload/credit.png');
  story1_img = loadImage('preload/story1.png');
  story2_img = loadImage('preload/story2.png');
  story3_img = loadImage('preload/story3.png');
  howToPlay_img = loadImage('preload/howtoplay.png');
  skip_img = loadImage('preload/skip.png');
  blocks_img = loadImage('preload/blocks.png');
  returnKey_img = loadImage('preload/return_key.png');
  playAgain_img = loadImage('preload/playagain.png');
  backToMain_img = loadImage('preload/backtomain.png');
  die_img = loadImage('preload/you_died.png');
  option_t_img = loadImage('preload/option_t.png');
  credit_t_img = loadImage('preload/credit_p.png');
  edstory1_img = loadImage('preload/ed_story1.jpg');
  edstory2_img = loadImage('preload/ed_story2.jpg');
  edstory3_img = loadImage('preload/ed_story3.jpg');
  edstory4_img = loadImage('preload/ed_story4.png');
  edstory5_img = loadImage('preload/ed_story5.jpg');
  theend_img = loadImage('preload/the_end.png');
  volume_img = loadImage('preload/volume.png');
  up_img = loadImage('preload/up.png');
  down_img = loadImage('preload/down.png');
  up2_img = loadImage('preload/up2.png');
  down2_img = loadImage('preload/down2.png');
  
  handcuff_aud = createAudio('A_preload/handcuff.mp3');
  main_bgm = createAudio('A_preload/main_bgm.mp3');
  warp_aud = createAudio('A_preload/warp.mp3');
  bomb_aud = createAudio('A_preload/bomb.mp3');
  play_bgm = createAudio('A_preload/play_bgm.mp3');
  win_bgm = createAudio('A_preload/win_bgm.mp3');
}