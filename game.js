import { createCharacter } from "./character";
import { createPlatform } from "./platform";
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
  const normalPlatform1 = createPlatform(70, 38, 125, 20).draw();
  const normalPlatform2 = createPlatform(70, 68, 125, 18).draw();
  const normalPlatform3 = createPlatform(70, 98, 125, 20).draw();

  const movingPlatform1 = createPlatform(225, 175, 100, 20).draw();
  const movingPlatform2 = createPlatform(225, 205, 100, 20).draw();
  const movingPlatform3 = createPlatform(225, 235, 100, 20).draw();

  const breakingPlatform1 = createPlatform(26, 270, 100, 20).draw();
  const breakingPlatform2 = createPlatform(26, 300, 100, 20).draw();
  const breakingPlatform4 = createPlatform(26, 330, 100, 20).draw();
  //platform.draw();
  createSpike(180, 300, 210, 240, 240, 300).draw();

  /*platform.x -= 10;
    if(platform.x + platform.w < 0){
        platform.x = 500;
    }*/

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
