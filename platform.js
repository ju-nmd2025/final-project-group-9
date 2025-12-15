export default class Platform {
  constructor(x, y, w, h, breakable, numberOfJumps) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.breakable = breakable;
    this.numberOfJumps = numberOfJumps;
  }
  draw() {
    push();
    if (this.breakable && this.numberOfJumps > 1) {
      fill("red");
    } else {
      fill(211, 211, 211);
    }
    rect(this.x, this.y, this.w, this.h);
    pop();
  }
  move(speed) {
    this.y += speed;
  }
  breakPlatform() {
    return this.breakable && this.numberOfJumps === 2;
  }
}

export { Platform };
