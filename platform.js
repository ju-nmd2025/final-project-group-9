export default class Platform {
  constructor(x, y, w, h, type) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.type = type;
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

function createPlatforms(n, standardWidth, standardHeight, standardSpace) {
  let platforms = [new Platform(140, 200, 125, 10, generatePlatformType())];
  for (let i = 0; i < n; i++) {
    platforms.push(
      generatePlatform(
        platforms[i].x,
        platforms[i].w,
        standardSpace,
        standardHeight,
        standardWidth
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

    if (platforms.length < 5) {
      platforms.push(
        generatePlatform(
          platforms[platforms.length - 1].x,
          platforms[platforms.length - 1].w,
          standardSpace,
          standardHeight,
          standardWidth
        )
      );
    }

    if (platforms[i].x + platforms[i].w < 0) {
      platforms.splice(i, 1);
      platforms.push(
        generatePlatform(
          platforms[platforms.length - 1].x,
          platforms[platforms.length - 1].w,
          standardSpace,
          standardHeight,
          standardWidth
        )
      );
    }
  }
}

function generatePlatform(x, w, defaultSpace, standardHeight, standardWidth) {
  let generatedX = x + w + defaultSpace - Math.floor(20 * Math.random());
  let generatedY = standardHeight - Math.floor(120 * Math.random());
  let generatedWidth = standardWidth + Math.floor(90 * Math.random());
  return new Platform(
    generatedX,
    generatedY,
    generatedWidth,
    10,
    generatePlatformType()
  );
}

function generatePlatformType() {
  let types = {
    0: "Normal",
    1: "Breaking",
    2: "Moving",
  };
  return types[Math.floor(3 * Math.random())];
}

export { Platform, createPlatforms, automatePlatforms };
