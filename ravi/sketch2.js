function setup () {
    createCanvas(window.innerWidth, window.innerHeight)
    rect(300, 200, 500, 300)
    circle(170,100,200,50)
    ellipse(900,400,700,50)
}
function draw (){
  if (mouseIsPressed) {
    fill(255)
    rect(mouseX, mouseY, 80, 80)
  } else {
    fill(0)
  }
  
  ellipse(mouseX, mouseY, 8, 8)


}
