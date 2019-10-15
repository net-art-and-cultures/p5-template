/* global alpha blue brightness color green hue lerpColor lightness red saturation p5.Color background clear colorMode fill noFill noStroke stroke arc ellipse circle line point quad rect square triangle ellipseMode noSmooth rectMode smooth strokeCap strokeJoin strokeWeight bezier bezierDetail bezierPoint bezierTangent curve curveDetail curveTightness curvePoint curveTangent beginContour beginShape bezierVertex curveVertex endContour endShape quadraticVertex vertex plane box sphere cylinder cone ellipsoid torus p5.Geometry loadModel model HALF_PI PI QUARTER_PI TAU TWO_PI DEGREES RADIANS print frameCount deltaTime focused cursor frameRate noCursor displayWidth displayHeight windowWidth windowHeight windowResized width height fullscreen pixelDensity displayDensity getURL getURLPath getURLParams preload setup draw remove disableFriendlyErrors noLoop loop push pop redraw p5.Element select selectAll removeElements changed input createDiv createP createSpan createImg createA createSlider createButton createCheckbox createSelect createRadio createColorPicker createInput createFileInput createVideo createAudio VIDEO AUDIO createCapture createElement p5.MediaElement p5.Graphics createCanvas resizeCanvas noCanvas createGraphics blendMode setAttributes applyMatrix resetMatrix rotate rotateX rotateY rotateZ scale shearX shearY translate storeItem getItem clearStorage removeItem createStringDict createNumberDict p5.TypedDict p5.NumberDict append arrayCopy concat reverse shorten shuffle sort splice subset float int str boolean byte char unchar hex unhex join match matchAll nf nfc nfp nfs split splitTokens trim deviceOrientation accelerationX accelerationY accelerationZ pAccelerationX pAccelerationY pAccelerationZ rotationX rotationY rotationZ pRotationX pRotationY pRotationZ turnAxis setMoveThreshold setShakeThreshold deviceMoved deviceTurned deviceShaken keyIsPressed key keyCode keyPressed keyReleased keyTyped keyIsDown movedX movedY mouseX mouseY pmouseX pmouseY winMouseX winMouseY pwinMouseX pwinMouseY mouseButton mouseIsPressed mouseMoved mouseDragged mousePressed mouseReleased mouseClicked doubleClicked mouseWheel requestPointerLock exitPointerLock touches touchStarted touchMoved touchEnded createImage saveCanvas saveFrames p5.Image loadImage image tint noTint imageMode pixels blend copy filter get loadPixels set updatePixels loadJSON loadStrings loadTable loadXML loadBytes httpGet httpPost httpDo p5.XML createWriter p5.PrintWriter save saveJSON saveStrings saveTable p5.Table p5.TableRow day hour minute millis month second year createVector p5.Vector abs ceil constrain dist exp floor lerp log mag map max min norm pow round sq sqrt noise noiseDetail noiseSeed randomSeed random randomGaussian acos asin atan atan2 cos sin tan degrees radians angleMode textAlign textLeading textSize textStyle textWidth textAscent textDescent loadFont text textFont p5.Font orbitControl debugMode noDebugMode ambientLight directionalLight pointLight lights lightFalloff loadShader createShader shader resetShader normalMaterial texture textureMode textureWrap ambientMaterial emissiveMaterial specularMaterial shininess p5.Shader camera perspective ortho createCamera p5.Camera setCamera */

function setup () {
  // put setup code here
  createCanvas(window.innerWidth, window.innerHeight)
}

function draw () {
  background(255)
  stroke(40)
  //ground
  strokeWeight(3)
  line(170, 426, 540, 426)
  line(550, 426, 600, 426)
  line(160, 426, 165, 426)
  //speedy lines
  line(610, 340, 660, 340)
  line(690, 340, 790, 340)
  line(610, 300, 720, 300)
  line(730, 300, 760, 300)
  line(610, 320, 675, 320)
  line(680, 320, 690, 320)
  line(610, 280, 640, 280)
  line(645, 280, 685, 280)
  //sky
  noStroke()
  fill(115, 217, 188)
  ellipse(170, 170, 200, 200)
  fill(255)
  rect(220, 160, 60, 10)
  ellipse(227, 160, 15, 15)
  ellipse(240, 155, 25, 25)
  ellipse(260, 150, 35, 35)
  ellipse(217, 163, 15, 15)
  rect(85, 230, 80, 5)
  ellipse(90, 210, 50, 50)
  ellipse(110, 215, 40, 40)
  ellipse(130, 220, 30, 30)
  ellipse(150, 225, 20, 20)
  ellipse(162, 230, 10, 10)
    //van
  fill(40)
  rect(230, 195, 30, 5, 5, 5, 0, 0)
  rect(345, 185, 40, 15, 0, 10, 0, 0)
  triangle(330, 200, 345, 185, 345, 200)
  rect(425, 185, 40, 15, 0, 10, 0, 0)
  triangle(410, 200, 425, 185, 425, 200)
  strokeWeight(2)
  stroke(255)
  line(365, 190, 365, 197)
  line(370, 190, 370, 197)
  line(375, 190, 375, 197)
  line(445, 190, 445, 197)
  line(450, 190, 450, 197)
  line(455, 190, 455, 197)
  strokeWeight(2)
  fill(255)
  stroke(0)
  var x = 200
  var y = 200
  rect(x, y, 400, 200, 20)
  line(202, 350, 598, 350)
  noStroke()
  fill(240)
  rect(202, 370, 398, 28, 0, 0, 0, 20)
  fill(255)
  stroke(255)
  triangle(500, 400, 600, 350, 600, 400)
  stroke(0)
  line(500, 400, 600, 350)
  noStroke()
  fill(115, 217, 188)
  rect(201, 320, 398, 15)
  stroke(115, 217, 188)
  strokeWeight(2.5)
  line(202, 338, 598, 338)
  //windows
  fill(255)
  stroke(0)
  rect(225, 225, 40, 70)
  fill(230)
  rect(265, 225, 40, 70)
  //weirdboxes
  fill(0)
  rect(210, 210, 5, 5)
  rect(220, 210, 5, 5)
  rect(580, 210, 5, 5)
  rect(570, 210, 5, 5)
  ellipse(555, 360, 5, 5)
  //door
  fill(255)
  stroke(0)
  rect(315, 270, 50, 130, 20, 20, 0, 0)
  fill(230)
  noStroke()
  rect(325, 280, 30, 119, 20, 20, 0, 0)
  stroke(0)
  strokeWeight(3)
  line(360, 320, 360, 350)
  //windowBig
  fill(40)
  noStroke()
  rect(395, 235, 155, 60, 10)
  stroke(255)
  line(395, 265, 550, 265)
  line(472.5, 235, 472.5, 295)
  noStroke()
  fill(115, 217, 188)
  rect(392, 226, 159, 10, 5)
  //wheels
  fill(255)
  stroke(40)
  strokeWeight(2)
  ellipse(270, 400, 50, 50)
  ellipse(405, 400, 50, 50)
  ellipse(470, 400, 50, 50)
  fill(115, 217, 188)
  noStroke()
  ellipse(270, 400, 20, 20)
  ellipse(405, 400, 20, 20)
  ellipse(470, 400, 20, 20)
}