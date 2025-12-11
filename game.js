import GameHandler from "./gameHandler";

let handler = new GameHandler();

function setup() {
  createCanvas(700, 400);
}

function draw() {
  background(135, 216, 230);
  switch (handler.currentGameState) {
    case handler.states.menu:
      handler.mainMenu();
      break;

    case handler.states.start:
      handler.startGame();
      break;

    case handler.states.end:
      handler.endGame();
      break;

    default:
      console.error("An error has occured.");
  }
}

function keyPressed() {
  handler.characterJump();
}
function mousePressed() {
  switch (handler.currentGameState) {
    case handler.states.menu:
      if (handler.buttons.startButton.isMouseOnButton()) {
        handler.changeGameState(handler.states.start);
      }
      break;
    case handler.states.end:
      if (handler.buttons.restartButton.isMouseOnButton()) {
        handler.changeGameState(handler.states.menu);
      }
      break;
    default:
      console.error("An error has occured.");
  }
}
