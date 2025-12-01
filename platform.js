export function createPlatform(x, y, w, h, r, g, b) {
  let platform = {};
  platform.x = x;
  platform.y = y;
  platform.w = w;
  platform.h = h;
  platform.r = r;
  platform.g = g;
  platform.b = b;

  platform.draw = function () {
    push();
    fill(this.r, this.g, this.b);
    rect(this.x, this.y, this.w, this.h);
    pop();
  };
  return platform;
}
