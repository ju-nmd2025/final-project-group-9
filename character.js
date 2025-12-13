export default class Character {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }
  jump(height) {
    this.y -= height;
  }
  draw() {
    push();
    fill(255, 204, 0);
    noStroke();
    ellipse(this.x, this.y, this.w, this.h);
    pop();
  }

  fall() {
    this.y += 10;
  }
}

export { Character };
