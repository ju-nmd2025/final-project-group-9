export default class Character {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }
  draw() {
    fill(255, 204, 0);
    noStroke();
    ellipse(this.x, this.y, this.w, this.h);
  }

  fall() {
    this.y += 8;
  }
}
