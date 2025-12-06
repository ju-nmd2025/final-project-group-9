import GameHandler from "./gameHandler";

let handler = new GameHandler();

function setup() {
  createCanvas(700, 400);
}

function draw() {
  background(100, 100, 100);
  line(0, 300, 700, 300);
  switch (handler.currentGameState) {
    case handler.states.menu:
      console.log("Temporary");
      break;

    case handler.states.start:
      handler.startGame();
      break;

    case handler.states.end:
      console.log("Temporary");
      break;

    default:
      console.error("An error has occured.");
  }
}

function keyPressed() {
  handler.characterJump();
}
