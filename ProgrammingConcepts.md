# Programming Concepts

// Project Checkpoint - Final project
// Geonhwi Sim
// CS099
// spring 2020

## Shapes
-circle(), ellipse() -> googly eyes
Ex) circle(x, y, size);
circle(x-10, y+5, size-10);
circle(x+10, y+5, size-10);
-	rect() -> blocks
Ex) rect(x, y, w, h)

### Shapes - result
I used shapes to make googly eyes. Didn't use it to make blocks.
Ex) ellipse(x, y, 20, 50);

## Colors
-fill() -> fill the colors of googly eyes and blocks etc..

### Colors - result
I used colors to fill the colors of googly eyes.
Ex) fill(fill_color);

## Variables
-Const numbers to set the state of character, so I’m not being confused with the state of charter
Ex) const character_alive = 0;
const character_dead = 1;
-Var arrays, I will make var to make block settings
Ex) var block_a = []

### Variables - result
I used variables to set the state of walls, scenes. And used it for declare arrays, set the several sizes.
Ex) var googlyEyes1 = []

## Conditional statements
-If characters fall down it consider as game over, the block will fall down if character step on 
Ex) if (character.x < height + 50) {
	switch(character_state) {
	case 1:
	game_over = true;
	break;}
}
-If characters collect all of the googly eyes next stage will open, I will use it on changing state
Ex) if(googly_eyes == 0) {
stage_change = true;
}

### Conditional statements - result
I used conditional statements to declare the range of death, and eating googly eyes. And made a standard to get to another scenes.
Ex) if(Return_button.click_button() == true) {}

## Loops
-I will use loop to make stage’s platform, it will make the setting for player, so they can play games.
Ex) var block_array= []
var rows;
var columns;
for(let I = 0; I < rows; ++i) {
block_array.push(new Array(columns);
return block_array;
}

### Loops - result
I used loops to make blocks that make stages, and used it on arrays.
Ex) for(let i = 0; i < cols; i++) {}

## Functions
-Make googly eyes, it will help me to use googly eyes easier
Ex) function Googly_eyes(x, y, size) {
circle(x, y, size);
circle(x-10, y+5, size-10);
circle(x+10, y+5, size-10);
}
-Make block array, it will help me to make stages easier
Ex) function Make2DArray(rows, cols) {
var block_array = []
for(let i = 0; i < rows; ++i) {
block_array.push(new Array(cols);
return block_array;
}

### Functions - result
I used functions to make stages easily, and setting of users moving change based on wall.
Ex) function wall_move() {}

## Classes
-Using Vec2 class, so the character will be under control of gravity
Ex) class Vec2 {
constructor(x, y) {
this.x = x
this.y = y}
}
-And I don’t have detail but I will use it to make distinguish of each elements.

### Classes - result
I used classes to make particles(obstructor), buttons, and users. But I didn't use Vec2 class.
Ex) class user {}

## Arrays
-Making blocks, so I don’t have to write code long. I will use push
Ex) var block_array = []
-Make main character moving and loading images, it will make me short the code and make smooth moving
Ex) var character_walking = []
for (var I = 1; I <20; I++) {
character_walking.push(loadImage(‘image/walk (‘ + I +’).png’))
}
Ex 2) image(character_walking[frameCount % character_walking.ength], x, y, size);

### Arrays - result
I used arrays to make googly eyes. But I didn't use it to make moving of main character and blocks.
Ex) googlyEyes1 = []
