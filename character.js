export default class Character {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }
  draw() {
    push();
    fill(255, 204, 0);
    noStroke();
    ellipse(this.x, this.y, this.w, this.h);
    pop();
  }

  fall() {
    if (this.y + this.w / 2 <= 300) {
      this.y += 8;
    }
  }

  isCollidingWithPlatforms(platforms) {
    for (const platform of platforms) {
      if (
        this.x + this.w / 2 >= platform.x &&
        this.x - this.w / 2 <= platform.x + platform.w &&
        this.y + this.h / 2 <= platform.y - platform.h &&
        this.y + this.h / 2 >= platform.y - platform.h - 10
      ) {
        return true;
      }
    }
    return false;
  }

  isHittingASpike(spikes) {
    for (const spike of spikes) {
      if (
        this.x + this.w / 2 > spike.x &&
        this.x - this.w / 2 < spike.x + spike.w &&
        this.y + this.h / 2 > spike.y - spike.h
      ) {
        return true;
      }
    }
    return false;
  }
}
