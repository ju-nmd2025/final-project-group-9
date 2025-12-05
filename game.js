import Character from "./character";
import Platform from "./platform";
import Spike from "./spike";

let character = new Character(50, 50, 50, 50);
let normalPlatform = new Platform(70, 38, 125, 20);
let movingPlatform = new Platform(225, 175, 100, 20);
let breakingPlatform = new Platform(26, 270, 100, 20);
let spike = new Spike(180, 300, 60, 60);

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
  spike.x -= 10;
  if (spike.x + spike.w < 0) {
    spike.x = 500;
  }

  if (character.y + character.h < 320) {
    character.y += 10;
  }

  // Floor
  line(0, 300, 400, 300);
}
function createspikes(n) {
  let spikes = [
    new Spike(180, 300, 210, 240, 240, 300),
    new Spike(380, 300, 410, 440, 440, 300),
  ];
  return spikes;
}
function keyPressed() {
  if (character.y + character.h === 320) {
    character.y -= 150;
  }
}
