export function createSpike(x1, y1, x2, y2, x3, y3) {
  let spike = {};
  spike.x1 = x1;
  spike.y1 = y1;
  spike.x2 = x2;
  spike.y2 = y2;
  spike.x3 = x3;
  spike.y3 = y3;

  spike.draw = function () {
    push();
    fill("pink");
    triangle(this.x1, this.y1, this.x2, this.y2, this.x3, this.y3);
    pop();
  };
  return spike;
}
