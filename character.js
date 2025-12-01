export function createCharacter(x, y, w, h) {
  let character = {};
  character.x = x;
  character.y = y;
  character.w = w;
  character.h = h;

  character.draw = function () {
    //Character
    fill(255, 204, 0);
    noStroke();
    ellipse(this.x, this.y, this.w, this.h);
  };
  return character;
}
