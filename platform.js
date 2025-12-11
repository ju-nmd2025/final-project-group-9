export default class Platform {
  constructor(x, y, w, h, breakable) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.breakable = breakable;
  }
  draw() {
    push();
    fill(211, 211, 211);
    rect(this.x, this.y, this.w, this.h);
    pop();
  }
  move(speed) {
    this.x -= speed;
  }
}

export { Platform };
