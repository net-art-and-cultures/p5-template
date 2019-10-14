let box;

function setup() {
  createCanvas(400, 400);

function draw() {
  //color the background
  background('White');

  box.x = 150;
  box.y = 300;
  box.size = 75;
  box.color = 'papayawhip';
  box.spin = 45;
  box.show();
}

let x = 200
let y = 100
let z = 0

function setup () {
  createCanvas(window.innerWidth, window.innerHeight)


}

function draw () {
  fill(0, 0, 0, 10)
  rect(0,0, width, height)
  z += 0.1
  x = sin(z) * 100 + 500
  y = cos(z) * 100 + 200
  fill(100, 100, 100)
  circle(x, y, 100)
}
