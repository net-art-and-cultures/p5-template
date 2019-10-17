function setup() {
 createCanvas(window.innerWidth, window.innerHeight)
}

function draw() {
 background(random(255), 0, random(255))

push();
 translate(width * 0.1, height * 0.5)
 rotate(frameCount / -100.0);
 flower(0, 0, 30, 70, 5);
 pop();
 fill(random(255), 0, random(255))
 noStroke()
  rect(485,200,30,200)

 push();
 translate(width * 0.4, height * 0.5)
 rotate(frameCount / -100.0);
 flower(0, 0, 30, 70, 20);
 pop();
 fill(random(255), 0, random(255))
 noStroke()
  rect(60,200,30,200)


 push();
 translate(width * 0.7, height * 0.5)
 rotate(frameCount / -100.0);
 flower(0,0, 30, 99, 25);
 pop();
 fill(random(255), 0, random(255))
 noStroke()
  rect(275,200,30,200)

}

function flower(x, y, radius1, radius2, npoints) {
 let angle = TWO_PI / npoints;
 let halfAngle = angle / 2.0;
 beginShape();
 for (let a = 0; a < TWO_PI; a += angle) {
   let sx = x + cos(a) * radius2;
   let sy = y + sin(a) * radius2;
   vertex(sx, sy);
   sx = x + cos(a + halfAngle) * radius1;
   sy = y + sin(a + halfAngle) * radius1;
   vertex(sx, sy);

 }
 endShape(CLOSE);
}
