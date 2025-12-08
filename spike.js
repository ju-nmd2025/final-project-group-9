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

function createSpikes(n, defaultSpace) {
  let spikes = [new Spike(180, 300, 60, 60)];
  for (let i = 0; i < n; i++) {
    let spikeStartingPoint = generateSpikeStartingPoint(
      spikes[i].x,
      spikes[i].w,
      defaultSpace
    );
    spikes.push(new Spike(spikeStartingPoint, 300, 60, 60));
  }
  return spikes;
}

function automateSpikes(spikes, gameSpeed, defaultSpace) {
  for (let i = 0; i < spikes.length; i++) {
    spikes[i].draw();
    spikes[i].move(gameSpeed);

    if (spikes[i].x + spikes[i].w < 0) {
      spikes.splice(i, 1);
      spikes.push(
        new Spike(
          generateSpikeStartingPoint(
            spikes[spikes.length - 1].x,
            spikes[spikes.length - 1].w,
            defaultSpace
          ),
          300,
          60,
          60
        )
      );
    }
  }
}

function generateSpikeStartingPoint(x, w, defaultSpace) {
  return x + w + defaultSpace - Math.floor(150 * Math.random());
}
export { Spike, createSpikes, automateSpikes };
