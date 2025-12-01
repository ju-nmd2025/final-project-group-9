import { createCharacter } from "./character";
import platform from "platform";
import { createSpike } from "./spike";

let character = createCharacter(50, 50, 50, 50);

function setup() {
  createCanvas(400, 400);
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
  platform.draw();
  createSpike(180, 300, 210, 240, 240, 300).draw();

  platform.x -= 10;
  if (platform.x + platform.w < 0) {
    platform.x = 500;
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
