export default class Spike {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }
  draw() {
    push();
    fill("pink");
    triangle(
      this.x,
      this.y,
      this.x + this.w / 2,
      this.y - this.h,
      this.x + this.w,
      this.y
    );
    pop();
  }
  move(gameSpeed) {
    this.x -= gameSpeed;
  }
  /*drawSpikes(spikes, gameSpeed, canvasWidth) {
    for (let i = 0; i < spikes.length; i++) {
      spikes[i].draw();
      spikes[i].move(gameSpeed);

      if (spikes[i].x1 + spikes[i].x3 < 0) {
      }
    }
  }*/
}
