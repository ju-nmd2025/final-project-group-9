import Character from "./character";
import Platform, { createPlatforms, automatePlatforms } from "./platform";
import Spike, { automateSpikes } from "./spike";
import Button from "./buttons";

export default class GameHandler {
  states = {
    menu: "Menu",
    start: "Start",
    end: "End",
  };

  // A buttons objektumba kell létrehozni a gombokat, hasonlóan a states-hez pl. startButton : new Button ()
  buttons = {
    startButton: new Button(250, 200, 200, 75, "Start Game"),
    restartButton: new Button(250, 200, 200, 75, "Restart Game"),
  };

  constructor() {
    this.currentGameState = this.states.menu;
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
    //ide se árt majd egy refactor
    this.#character.draw();
    this.#character.fall();
    automatePlatforms(this.#platforms, 10, 70, 220, 100);
    automateSpikes(this.#spikes, 10, 300);
    this.collidingWithObjects();
  }

  mainMenu() {
    this.initializeGameObjects();
    this.buttons.startButton.draw();
  }

  endGame() {
    this.initializeGameObjects();
    this.buttons.restartButton.draw();
  }

  collidingWithObjects() {
    if (this.#character.isColliding(this.#spikes, 10)) {
      this.changeGameState(this.states.end);
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
