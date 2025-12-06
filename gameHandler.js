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
    //temporary, amikor meg lesznek a gombok és view-k ki lehet törölni
    this.initiateGameObjects();
  }

  #character;
  #platforms = [];
  #spikes = [];

  initiateGameObjects() {
    this.#character = new Character(50, 50, 50, 50);

    //Másik issuenak a része addig kézzel hozunk létre platformokat
    //this.#platforms = createPlatforms(4, 70, 300);

    this.#platforms = [
      new Platform(70, 38, 125, 20),
      new Platform(225, 175, 100, 20),
      new Platform(26, 270, 100, 20),
      new Platform(70, 38, 125, 20),
    ];

    // Ezzel hozzuk létre a spikeokat, pl. createPlatforms függvény a platform.js-ben.
    // majd az objektum randomizálásnál meg lesz csinálva a spikeban is
    this.#spikes = [new Spike(180, 300, 210, 240, 240, 300)];
  }

  startGame() {
    //ide se árt majd egy refactor
    this.#character.draw();
    this.#character.fall();
    automatePlatforms(this.#platforms, 10);
    //temporary solution, majd ha bement a Spike refactor, akkor move method-ot létrehozni a Spike osztályban
    this.#spikes[0].draw();
    this.moveSpike(this.#spikes[0]);
  }

  mainMenu() {
    //uncomment ha meg lesznek a view-k
    //this.initiateGameObjects();
  }

  endGame() {
    //ha endview és restart gomb meg van akkor itt kell majd implementálni
  }

  collidingWithObjects() {
    //ide kell majd leimplementálni hogy hogyan ütközik a karakterünk az objektumokkal
  }

  characterJump() {
    //ezt még ki kell majd csinositani, ha már fent tudunk maradni a platformokon
    this.#character.y -= 150;
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
