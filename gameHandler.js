import Character from "./character.js";
import Platform from "./platform.js";
import Button from "./buttons.js";
import MovingPlatform from "./movingPlatform.js";

export default class GameHandler {
  states = {
    menu: "Menu",
    start: "Start",
    end: "End",
  };

  buttons = {
    startButton: new Button(100, 300, 200, 75, "Start Game"),
    restartButton: new Button(100, 300, 200, 75, "Restart Game"),
  };

  constructor() {
    this.currentGameState = this.states.menu;
    this.maxWidth = 100;
    this.maxSpace = 40;
    this.numberOfPlatforms = 10;
    this.jumpHeight = 150;
  }

  #character;
  #platforms = [];

  initializeGameObjects() {
    this.#character = new Character(200, 575, 50, 50);

    this.#platforms = this.createPlatforms();
  }

  changeGameState(newGameState) {
    this.currentGameState = newGameState;
  }

  startGame() {
    this.#character.draw();
    this.automatePlatforms(this.#platforms);
    this.checkIfCharacterCollidesWithPlatform();
  }

  mainMenu() {
    this.initializeGameObjects();
    this.buttons.startButton.draw();
  }

  endGame() {
    this.initializeGameObjects();
    this.buttons.restartButton.draw();
    text("You died :(", 100, 200, 200, 75);
  }

  characterJump() {
    this.#character.jump(this.jumpHeight);
  }
  characterMove(amountToMove) {
    this.#character.x += amountToMove;
    if (this.#character.x + this.#character.w / 2 < 0) {
      this.#character.x = 400;
    }
    if (this.#character.x - this.#character.w / 2 > 400) {
      this.#character.x = 0;
    }
  }

  createPlatforms() {
    let platforms = [new Platform(175, 600, 50, 10, false, 0)];
    for (let i = 0; i < this.numberOfPlatforms; i++) {
      platforms.push(this.generatePlatform(platforms[i].y, platforms[i].h));
    }
    return platforms;
  }

  automatePlatforms(platforms) {
    for (let i = 0; i < platforms.length; i++) {
      platforms[i].draw();
      platforms[i].move(3);

      if (platforms[i] instanceof MovingPlatform) {
        platforms[i].movePlatformHorizontally(100, 300);
      }

      if (platforms.length < this.numberOfPlatforms) {
        platforms.push(
          this.generatePlatform(
            platforms[platforms.length - 1].y,
            platforms[platforms.length - 1].h
          )
        );
      }

      if (platforms[i].y > 700) {
        platforms.splice(i, 1);
        platforms.push(
          this.generatePlatform(
            platforms[platforms.length - 1].y,
            platforms[platforms.length - 1].h
          )
        );
      }
    }
  }

  checkIfCharacterCollidesWithPlatform() {
    if (!this.isCollidingWithPlatforms(this.#platforms)) {
      this.#character.fall();
    } else {
      this.characterJump(this.jumpHeight);
    }
    if (this.#character.y - this.#character.h / 2 > 700) {
      this.changeGameState(this.states.end);
    }
  }

  generatePlatform(y, h) {
    let generatedX = Math.floor(300 * Math.random());
    let generatedY = y - h - this.maxSpace - Math.floor(20 * Math.random());
    let generatedWidth = this.maxWidth - Math.floor(20 * Math.random());

    const types = {
      0: new Platform(generatedX, generatedY, generatedWidth, 10, false, 0),
      1: new Platform(generatedX, generatedY, generatedWidth, 10, true, 0),
      2: new MovingPlatform(
        generatedX,
        generatedY,
        generatedWidth,
        10,
        false,
        0,
        "Right"
      ),
    };

    return types[Math.floor(3 * Math.random())];
  }

  isCollidingWithPlatforms(platforms) {
    for (let i = 0; i < platforms.length; i++) {
      if (
        this.#character.x + this.#character.w / 2 > platforms[i].x &&
        this.#character.x - this.#character.w / 2 <
          platforms[i].x + platforms[i].w &&
        this.#character.y + this.#character.h / 2 <= platforms[i].y &&
        this.#character.y + this.#character.h / 2 >= platforms[i].y - 5
      ) {
        if (platforms[i].breakPlatform()) {
          platforms.splice(i, 1);
          return false;
        }
        platforms[i].numberOfJumps++;
        return true;
      }
    }
    return false;
  }
}

export { GameHandler };
