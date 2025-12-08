export default class Button {
  constructor(x, y, w, h, text) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.text = text;
  }
  draw() {
    textSize(20);
    textAlign(CENTER, CENTER);
    push();
    fill(250, 250, 250);
    rect(this.x, this.y, this.w, this.h);
    pop();
    text(this.text, this.x, this.y, this.w, this.h);
  }
  isMouseOnButton() {
    if (
      mouseX > this.x &&
      mouseX < this.x + this.w &&
      mouseY > this.y &&
      mouseY < this.y + this.h
    ) {
      return true;
    } else {
      return false;
    }
  }
}
