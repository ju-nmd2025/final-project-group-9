import Character from "./character";
import Platform, { createPlatforms, automatePlatforms } from "./platform";
import Spike from "./spike";
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

    // Ezzel hozzuk létre a spikeokat, pl. createPlatforms függvény a platform.js-ben.
    // majd az objektum randomizálásnál meg lesz csinálva a spikeban is
    this.#spikes = [new Spike(180, 300, 210, 240, 240, 300)];
  }

  changeGameState(newGameState) {
    this.currentGameState = newGameState;
  }

  startGame() {
    //ide se árt majd egy refactor
    this.#character.draw();
    this.#character.fall();
    automatePlatforms(this.#platforms, 10, 70, 220, 100);
    //temporary solution, majd ha bement a Spike refactor, akkor move method-ot létrehozni a Spike osztályban
    this.#spikes[0].draw();
    this.moveSpike(this.#spikes[0]);
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
    //ide kell majd leimplementálni hogy hogyan ütközik a karakterünk az objektumokkal
  }

  characterJump() {
    //ezt még ki kell majd csinositani, ha már fent tudunk maradni a platformokon
    if (this.#character.y - this.#character.h < 0) {
      this.#character.y = 0;
    } else {
      this.#character.y -= 150;
    }
  }

  //temporary
  moveSpike(spike) {
    spike.x1 -= 10;
    spike.x2 -= 10;
    spike.x3 -= 10;
    if (spike.x1 + spike.x3 < 0) {
      spike.x1 = 700;
      spike.x2 = 730;
      spike.x3 = 760;
    }
  }
}
