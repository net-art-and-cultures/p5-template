var steps = 50;
var verts = 4;
var counter = 0;
var speed = 100;
var strk = false;
var fill = true;
var playing = true;
//color cyan = color(255,0,0, 14);
//color blue = color(255,125,25,15);
//color vSColor;
//color sSColor;
var colorSwitcherX;
var colorSwitcherY;

function setup()
{
  createCanvas(400,400);
  background(0,0,0);
  blendMode(SUBTRACT);
  textSize(14);
}

function draw()
{
  if(playing)
  {
    counter++;
    background(255, 255, 255, 20);
  //recreate window repetition thing

    push();
    fill(255);
    text("vertices: " + verts,20,20);
    text("speed: " + (200-speed),20,40);
    text("line: " + strk,20,60);
    pop();

    push();
    translate(width/2, height/2);
    for (var i = 0; i < steps; i++)
    {
      noFill();

      if (i%2==0){
        //stroke(255,0,0, 50-2*i);
        if(fill){
          // fill(255,0,0, 14);
        }
        polygon(0, 0, i*3, 50);
      }
      else {
        if(fill){
          //stroke(255,125,0,50-2*i);
          // fill(255,125,25,15);
        }
        polygon(0, 0, i*3, verts);
      }

      rotate(0.1 * counter/speed);
    }
    pop();
  }
}

function polygon(x, y, radius, npoints)
{
  var angle = TWO_PI / npoints;
  beginShape();
  for (var a = 0; a < TWO_PI; a += angle) {
    var sx = x + cos(a) * radius;
    var sy = y + sin(a) * radius;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}

function keyPressed()
{
  if(key == ENTER)
  {
    playing = !playing;
  }
    if(key == ' ')
  {
    if(verts < 10)
    verts++;
    else
      verts = 2;
  }
  if(key == 'l')
  {
    if(strk)
      stroke(0);
    else
      stroke(255,255,255,225);
    strk = !strk;
  }
  if(key == 'f')
  {
    fill = !fill;
  }
  if(key == '-')
  {
    speed++;
  }
  if(key == '=')
  {
    speed--;
  }
  if(key == 'c')
  {
    colorSwitcherX = mouseX;
    colorSwitcherY = mouseY;
  }
}
