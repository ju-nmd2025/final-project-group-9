import GameHandler from "./gameHandler.js";

let handler = new GameHandler();

function setup() {
  createCanvas(400, 700);
  createCanvas(400, 700);
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
  if (handler.currentGameState === handler.states.start) {
    switch (keyCode) {
      case LEFT_ARROW:
        handler.characterMove(-15);
        break;
      case RIGHT_ARROW:
        handler.characterMove(15);
        break;
      default:
        console.error(
          "You pressed a wrong button! You can move the character with the Left and Right Arrow!"
        );
    }
  }
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

window.setup = setup;

window.draw = draw;

window.addEventListener("click", function (event) {
  mousePressed();
});

window.addEventListener("keydown", function (event) {
  keyPressed();
});
