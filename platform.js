export default class Platform {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }
  draw() {
    push();
    fill(0, 0, 102);
    rect(this.x, this.y, this.w, this.h);
    pop();
  }
}
