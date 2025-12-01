import { createCharacter } from "./character";
import { createPlatform } from "./platform";
import { createSpike } from "./spike";

let character = createCharacter(50, 50, 50, 50);
let normalPlatform = createPlatform(70, 38, 125, 20, 0, 0, 102);
let movingPlatform = createPlatform(225, 175, 100, 20, 0, 0, 102);
let breakingPlatform = createPlatform(26, 270, 100, 20, 0, 0, 102);
let spike = createSpike(180, 300, 210, 240, 240, 300);

function setup() {
  createCanvas(700, 400);
}

// Obstacle / Spike / Death
function drawObstacle() {
  push();
  fill("red");
  triangle(180, 300, 210, 240, 240, 300);
  pop();
}

let x = 100;
let y = 100;

function draw() {
  background(100, 100, 100);

  character.draw();
  normalPlatform.draw();
  breakingPlatform.draw();
  movingPlatform.draw();

  createSpike(180, 300, 210, 240, 240, 300).draw();

  normalPlatform.x -= 10;
  if (normalPlatform.x + normalPlatform.w < 0) {
    normalPlatform.x = 500;
  }

  breakingPlatform.x -= 10;
  if (breakingPlatform.x + breakingPlatform.w < 0) {
    breakingPlatform.x = 500;
  }

  movingPlatform.x -= 10;
  if (movingPlatform.x + movingPlatform.w < 0) {
    movingPlatform.x = 500;
  }

  spike.draw();
  spike.x1 -= 10;
  spike.x2 -= 10;
  spike.x3 -= 10;
  if (spike.x1 + spike.x3 < 0) {
    spike.x1 = 500;
    spike.x2 = 530;
    spike.x3 = 560;
  }

  if (character.y + character.h < 320) {
    character.y += 10;
  }

  // Floor
  line(0, 300, 400, 300);
}

function keyPressed() {
  if (character.y + character.h === 320) {
    character.y -= 150;
  }
}
