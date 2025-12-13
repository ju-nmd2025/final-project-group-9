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
    startButton: new Button(250, 200, 200, 75, "Start Game"),
    restartButton: new Button(250, 200, 200, 75, "Restart Game"),
  };

  constructor() {
    this.currentGameState = this.states.menu;
    this.gameSpeed = 5;
  }

  #character;
  #platforms = [];

  initializeGameObjects() {
    this.#character = new Character(50, 50, 50, 50);

    this.#platforms = this.createPlatforms(4, 70, 220, 100);
  }

  changeGameState(newGameState) {
    this.currentGameState = newGameState;
  }

  startGame() {
    this.#character.draw();
    this.automatePlatforms(this.#platforms, this.gameSpeed, 70, 220, 100);
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
    if (!this.#character.isCollidingWithPlatforms(this.#platforms)) {
      this.#character.fall();
    }
  }

  characterJump() {
    if (this.#character.y - this.#character.h < 0) {
      this.#character.y = 0;
    } else {
      this.#character.y -= 150;
    }
  }

  createPlatforms(n, maxWidth, maxHeight, maxSpace) {
    let platforms = [new Platform(140, 200, 125, 10, false)];
    for (let i = 0; i < n; i++) {
      platforms.push(
        this.generatePlatform(
          platforms[i].x,
          platforms[i].w,
          maxSpace,
          maxHeight,
          maxWidth
        )
      );
    }
    return platforms;
  }

  automatePlatforms(platforms, gameSpeed, maxWidth, maxHeight, maxSpace) {
    for (let i = 0; i < platforms.length; i++) {
      platforms[i].draw();
      platforms[i].move(gameSpeed);

      if (platforms[i] instanceof MovingPlatform) {
        platforms[i].movePlatformVertically(120, 220);
      }

      if (platforms.length < 5) {
        platforms.push(
          this.generatePlatform(
            platforms[platforms.length - 1].x,
            platforms[platforms.length - 1].w,
            maxSpace,
            maxHeight,
            maxWidth
          )
        );
      }

      if (platforms[i].x + platforms[i].w < 0) {
        platforms.splice(i, 1);
        platforms.push(
          this.generatePlatform(
            platforms[platforms.length - 1].x,
            platforms[platforms.length - 1].w,
            maxSpace,
            maxHeight,
            maxWidth
          )
        );
      }
    }
  }
  generatePlatform(x, w, defaultSpace, maxHeight, maxWidth) {
    let generatedX = x + w + defaultSpace - Math.floor(20 * Math.random());
    let generatedY = maxHeight - Math.floor(120 * Math.random());
    let generatedWidth = maxWidth + Math.floor(90 * Math.random());

    const types = {
      0: new Platform(generatedX, generatedY, generatedWidth, 10, false),
      1: new Platform(generatedX, generatedY, generatedWidth, 10, true),
      2: new MovingPlatform(
        generatedX,
        generatedY,
        generatedWidth,
        10,
        false,
        "Down"
      ),
    };

    return types[Math.floor(3 * Math.random())];
  }
}

export { GameHandler };
