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
    if (this.y + this.w <= 320) {
      this.y += 8;
    }
  }

  isColliding(objects, gameSpeed) {
    for (const object of objects) {
      if (
        this.x + this.w > object.x &&
        this.x + this.w < object.x + object.w &&
        this.y + this.h > object.y - object.h
      ) {
        return true;
      }
    }
    return false;
  }
}
