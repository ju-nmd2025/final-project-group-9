export function createPlatform(x, y, w, h) {
  const platform = {};
  platform.x = x;
  platform.y = y;
  platform.w = w;
  platform.h = h;

  platform.draw = function () {
    push();
    fill(0, 0, 102);
    rect(this.x, this.y, this.w, this.h);
    pop();
  };
  return platform;
}
