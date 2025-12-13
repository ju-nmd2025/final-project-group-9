import Platform from "./platform.js";

export default class MovingPlatform extends Platform {
  constructor(x, y, w, h, breakable, numberOfJumps, direction) {
    super(x, y, w, h, breakable, numberOfJumps);
    this.direction = direction;
  }
  movePlatformHorizontally(leftThreshold, rightThreshold) {
    switch (this.direction) {
      case "Left":
        if (this.x >= leftThreshold) {
          this.x -= 3;
        } else {
          this.direction = "Right";
        }
        break;

      case "Right":
        if (this.x + this.w <= rightThreshold) {
          this.x += 3;
        } else {
          this.direction = "Left";
        }
        break;

      default:
        console.error("Direction property of object is invalid.");
    }
  }
}

export { MovingPlatform };
