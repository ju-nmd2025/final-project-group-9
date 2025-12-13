import MovingPlatform from "./movingPlatform.js";

export default class Character {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }
  draw() {
    push();
    fill(255, 204, 0);
    noStroke();
    ellipse(this.x, this.y, this.w, this.h);
    pop();
  }

  fall() {
    if (this.y + this.w / 2 <= 300) {
      this.y += 8;
    }
  }

  isCollidingWithPlatforms(platforms) {
    for (let i = 0; i < platforms.length; i++) {
      if (
        this.x + this.w / 2 >= platforms[i].x &&
        this.x - this.w / 2 <= platforms[i].x + platforms[i].w &&
        this.y + this.h / 2 <= platforms[i].y - platforms[i].h &&
        this.y + this.h / 2 >= platforms[i].y - platforms[i].h - 10
      ) {
        if (platforms[i] instanceof MovingPlatform) {
          if (platforms[i].direction == "Up") {
            this.y -= 2;
          } else {
            this.y += 2;
          }
        }
        if (platforms[i].breakable) {
          platforms.splice(i, 1);
          return false;
        }
        return true;
      }
    }
    return false;
  }

  

export { Character };


