let img;
let img2;
let img3;
var x = 100
var y = 100
var x2 = 50
var y2 = 50
var x3 = 30
var y3 = 40

function preload (){
  img = loadImage('https://i.imgur.com/AITIwSu.png')
  img2 = loadImage('https://i.imgur.com/sM0RGE3.png')
  img3 = loadImage('https://i.imgur.com/Mf2H37D.png')
}

function setup () {
  // put setup code here
  createCanvas(window.innerWidth, window.innerHeight)
}

function draw () {
  // put drawing code here
  background(mouseX, mouseY, 250)
  if (mouseIsPressed) {
    fill(0)
  } else {
    fill(255)
  }
  ellipse(mouseX, mouseY, 80, 80)

  image(img, x, y, 500, 600)
  image(img2, x2, y2, 400, 500)
  image(img3, x3, y3, 100, 200)
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    x = x - 7
    x2 = x2 - 4
    x3 = x3 - 9
  } else if (keyCode === RIGHT_ARROW) {
    x = x + 7
    x2 = x2 + 4
    x3 = x3 + 9
  }

}
