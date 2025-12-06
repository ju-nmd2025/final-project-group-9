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
  move(speed) {
    this.x -= speed;
  }
}

function createPlatforms(n, standardWidth, standardHeight) {
  let platforms = [];
  for (let i = 0; i < n; i++) {
    let platformWidth = standardWidth + Math.floor(90 * Math.random());
    platforms.push(
      new Platform(
        200,
        standardHeight - Math.floor(120 * Math.random()),
        platformWidth,
        8
      )
    );
  }
  return platforms;
}

function automatePlatforms(platforms, gameSpeed) {
  for (let i = 0; i < platforms.length; i++) {
    platforms[i].draw();
    platforms[i].move(gameSpeed);
  }
}

export { Platform, createPlatforms, automatePlatforms };
