import Character from "./character";
import Platform, { createPlatforms, automatePlatforms } from "./platform";
import Spike from "./spike";

export default class GameHandler {
  states = {
    menu: "Menu",
    start: "Start",
    end: "End",
  };

  // A buttons objektumba kell létrehozni a gombokat, hasonlóan a states-hez pl. startButton : new Button ()
  buttons = {};

  constructor() {
    this.currentGameState = this.states.start;
    this.initiateGameObjects();
  }

  #character;
  #platforms = [];
  #spikes = [];

  initiateGameObjects() {
    this.#character = new Character(50, 50, 50, 50);

    this.#platforms = createPlatforms(4, 70, 10);

    // Ezzel hozzuk létre a spikeokat, pl. createPlatforms függvény a platform.js-ben. Ez a jelenlegi implementáció csak
    this.#spikes = [new Spike(180, 300, 210, 240, 240, 300)];
  }

  startGame() {
    this.#character.draw();
    this.#spikes[0].draw();
    this.#character.fall();
    automatePlatforms(this.#platforms, 10);
  }

  mainMenu() {
    this.initiateGameObjects();
  }

  endGame() {}

  collidingWithObjects() {}

  characterJump() {
    this.#character.y -= 150;
  }
}
