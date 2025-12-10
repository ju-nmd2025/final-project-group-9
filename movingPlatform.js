import Platform from "./platform";

export default class MovingPlatform extends Platform {
  constructor(x, y, w, h, breakable, direction) {
    super(x, y, w, h, breakable);
    this.direction = direction;
  }
  movePlatformVertically(upperThreshold, lowerThreshold) {
    switch (this.direction) {
      case "Up":
        if (this.y - this.h >= upperThreshold) {
          this.y -= 2;
        } else {
          this.direction = "Down";
        }
        break;

      case "Down":
        if (this.y <= lowerThreshold) {
          this.y += 2;
        } else {
          this.direction = "Up";
        }
        break;

      default:
        console.error("Direction property of object is invalid.");
    }
  }
}
