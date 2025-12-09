import Character from "./character";
import { createPlatforms, automatePlatforms } from "./platform";
import { automateSpikes } from "./spike";
import Button from "./buttons";

export default class GameHandler {
  states = {
    menu: "Menu",
    start: "Start",
    end: "End",
  };

  buttons = {
    startButton: new Button(250, 200, 200, 75, "Start Game"),
    restartButton: new Button(250, 200, 200, 75, "Restart Game"),
  };

  constructor() {
    this.currentGameState = this.states.menu;
    this.gameSpeed = 5;
  }

  #character;
  #platforms = [];
  #spikes = [];

  initializeGameObjects() {
    this.#character = new Character(50, 50, 50, 50);

    this.#platforms = createPlatforms(4, 70, 220, 100);

    this.#spikes = createSpikes(2, 300);
  }

  changeGameState(newGameState) {
    this.currentGameState = newGameState;
  }

  startGame() {
    this.#character.draw();
    automatePlatforms(this.#platforms, this.gameSpeed, 70, 220, 100);
    automateSpikes(this.#spikes, this.gameSpeed, 300);
    this.collidingWithObjects();
  }

  mainMenu() {
    this.initializeGameObjects();
    this.buttons.startButton.draw();
  }

  endGame() {
    this.initializeGameObjects();
    this.buttons.restartButton.draw();
    text("You died :(", 250, 110, 200, 75);
  }

  collidingWithObjects() {
    if (this.#character.isHittingASpike(this.#spikes)) {
      this.changeGameState(this.states.end);
    }
    if (!this.#character.isCollidingWithPlatforms(this.#platforms)) {
      this.#character.fall();
    }
  }

  characterJump() {
    //ezt még ki kell majd csinositani, ha már fent tudunk maradni a platformokon
    if (this.#character.y - this.#character.h < 0) {
      this.#character.y = 0;
    } else {
      this.#character.y -= 150;
    }
  }
}
