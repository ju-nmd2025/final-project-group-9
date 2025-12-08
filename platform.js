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

function createPlatforms(n, standardWidth, standardHeight, standardSpace) {
  let platforms = [new Platform(140, 200, 125, 10)];
  for (let i = 0; i < n; i++) {
    let platformStartingPoint = generatePlatformStartingPoint(
      platforms[i].x,
      platforms[i].w,
      standardSpace
    );
    platforms.push(
      new Platform(
        platformStartingPoint,
        standardHeight - Math.floor(120 * Math.random()),
        standardWidth + Math.floor(90 * Math.random()),
        10
      )
    );
  }
  return platforms;
}

function automatePlatforms(
  platforms,
  gameSpeed,
  standardWidth,
  standardHeight,
  standardSpace
) {
  for (let i = 0; i < platforms.length; i++) {
    platforms[i].draw();
    platforms[i].move(gameSpeed);

    if (platforms[i].x + platforms[i].w < 0) {
      platforms.splice(i, 1);
      platforms.push(
        new Platform(
          generatePlatformStartingPoint(
            platforms[platforms.length - 1].x,
            platforms[platforms.length - 1].w,
            standardSpace
          ),
          standardHeight - Math.floor(120 * Math.random()),
          standardWidth + Math.floor(90 * Math.random()),
          10
        )
      );
    }
  }
}

function generatePlatformStartingPoint(x, w, defaultSpace) {
  return x + w + defaultSpace - Math.floor(20 * Math.random());
}

export { Platform, createPlatforms, automatePlatforms };
