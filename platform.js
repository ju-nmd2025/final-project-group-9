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

//randomizáció nem működik teljesen, másik issue keretében javitva lesz
function createPlatforms(n, standardWidth, standardHeight) {
  let platforms = [];
  for (let i = 0; i < n; i++) {
    let platformWidth = standardWidth + Math.floor(90 * Math.random());
    platforms.push(
      new Platform(
        200,
        standardHeight - Math.floor(120 * Math.random()),
        platformWidth,
        10
      )
    );
  }
  return platforms;
}

function automatePlatforms(platforms, gameSpeed) {
  for (let i = 0; i < platforms.length; i++) {
    platforms[i].draw();
    platforms[i].move(gameSpeed);

    if (platforms[i].x + platforms[i].w < 0) {
      platforms[i].x = 700;
    }
  }
}

export { Platform, createPlatforms, automatePlatforms };
