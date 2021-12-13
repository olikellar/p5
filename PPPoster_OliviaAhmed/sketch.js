class Mover {
  constructor(x, y, r) {
    this.pos = createVector(x, y);
    this.vel = createVector(random(-8, 8), 0);
    this.acc = createVector(0, 0);
    this.rad = r;
  }

  applyForce(force) {
    this.acc.add(force);
  }

  edges() {
    if (this.pos.y > height - this.rad - (height / 11.7)) {
      this.pos.y = height - this.rad - (height / 11.7);
      this.vel.y *= random(-0.89, -0.95);
    }
    if (this.pos.y == height - this.rad - (height / 11.7)) {
      this.vel.x *= random(0.99, 0.98);
    }

    if (this.pos.x >= width - this.rad - (height / 11.7)) {
      this.pos.x = width - this.rad - (height / 11.7);
      this.vel.x *= random(-0.99, -0.95);
    }
    if (this.pos.x <= 0 + this.rad + (height / 11.7)) {
      this.pos.x = 0 + this.rad + (height / 11.7);
      this.vel.x *= random(-0.99, -0.95);
    }

  }

  clicked(px, py) {
    let d = dist(px, py, this.pos.x, this.pos.y);
    let sideMotion = (px - this.pos.x) / -5;
    let upMotion = random(-26,-18)
    if (d < this.rad) {
      this.acc.add(sideMotion, upMotion);
    }
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.set(0, 0);
  }

  show() {
    stroke(0);
    strokeWeight(1);
    fill(221, 255, 51);
    ellipse(this.pos.x, this.pos.y, this.rad * 2);
  }
}
