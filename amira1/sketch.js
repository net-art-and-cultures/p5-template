/* global alpha blue brightness color green hue lerpColor lightness red saturation p5.Color background clear colorMode fill noFill noStroke stroke arc ellipse circle line point quad rect square triangle ellipseMode noSmooth rectMode smooth strokeCap strokeJoin strokeWeight bezier bezierDetail bezierPoint bezierTangent curve curveDetail curveTightness curvePoint curveTangent beginContour beginShape bezierVertex curveVertex endContour endShape quadraticVertex vertex plane box sphere cylinder cone ellipsoid torus p5.Geometry loadModel model HALF_PI PI QUARTER_PI TAU TWO_PI DEGREES RADIANS print frameCount deltaTime focused cursor frameRate noCursor displayWidth displayHeight windowWidth windowHeight windowResized width height fullscreen pixelDensity displayDensity getURL getURLPath getURLParams preload setup draw remove disableFriendlyErrors noLoop loop push pop redraw p5.Element select selectAll removeElements changed input createDiv createP createSpan createImg createA createSlider createButton createCheckbox createSelect createRadio createColorPicker createInput createFileInput createVideo createAudio VIDEO AUDIO createCapture createElement p5.MediaElement p5.Graphics createCanvas resizeCanvas noCanvas createGraphics blendMode setAttributes applyMatrix resetMatrix rotate rotateX rotateY rotateZ scale shearX shearY translate storeItem getItem clearStorage removeItem createStringDict createNumberDict p5.TypedDict p5.NumberDict append arrayCopy concat reverse shorten shuffle sort splice subset float int str boolean byte char unchar hex unhex join match matchAll nf nfc nfp nfs split splitTokens trim deviceOrientation accelerationX accelerationY accelerationZ pAccelerationX pAccelerationY pAccelerationZ rotationX rotationY rotationZ pRotationX pRotationY pRotationZ turnAxis setMoveThreshold setShakeThreshold deviceMoved deviceTurned deviceShaken keyIsPressed key keyCode keyPressed keyReleased keyTyped keyIsDown movedX movedY mouseX mouseY pmouseX pmouseY winMouseX winMouseY pwinMouseX pwinMouseY mouseButton mouseIsPressed mouseMoved mouseDragged mousePressed mouseReleased mouseClicked doubleClicked mouseWheel requestPointerLock exitPointerLock touches touchStarted touchMoved touchEnded createImage saveCanvas saveFrames p5.Image loadImage image tint noTint imageMode pixels blend copy filter get loadPixels set updatePixels loadJSON loadStrings loadTable loadXML loadBytes httpGet httpPost httpDo p5.XML createWriter p5.PrintWriter save saveJSON saveStrings saveTable p5.Table p5.TableRow day hour minute millis month second year createVector p5.Vector abs ceil constrain dist exp floor lerp log mag map max min norm pow round sq sqrt noise noiseDetail noiseSeed randomSeed random randomGaussian acos asin atan atan2 cos sin tan degrees radians angleMode textAlign textLeading textSize textStyle textWidth textAscent textDescent loadFont text textFont p5.Font orbitControl debugMode noDebugMode ambientLight directionalLight pointLight lights lightFalloff loadShader createShader shader resetShader normalMaterial texture textureMode textureWrap ambientMaterial emissiveMaterial specularMaterial shininess p5.Shader camera perspective ortho createCamera p5.Camera setCamera */

function setup () {
  // put setup code here
  createCanvas(window.innerWidth, window.innerHeight)
}

function draw () {
  // put drawing code here
  noStroke()
  const skin = [173, 128, 101]
  const hair = [46, 26, 15]
  const blush = [191, 133, 98]
  const shirt = [235, 138, 80]
  const lips = [163, 80, 31]
  //hair
  fill(hair)
  rect(60, 50, 280, 400, 60, 60, 0, 0)
  //shirt
  fill(shirt)
  rect(65, 370, 270, 100, 300, 300, 0, 0)
  //drawing face and neck
  fill(skin)
  ellipse(200, 200, 200, 300)
  rect(150, 300, 100, 100)
  fill(blush)
  ellipse(250, 250, 30, 30)
  ellipse(150, 250, 30, 30)
  //eyes
  fill(255)
  ellipse(150, 200, 50, 40)
  ellipse(250, 200, 50, 40)
  //bangs
  fill(hair)
  rect(70, 50, 250, 100, 60, 60, 0, 0)
  fill(shirt)
  rect(80, 100, 25, 10)
  //eyeroll
  fill(0)
  if(mouseIsPressed){
    ellipse(150, 200, 20, 20)
    ellipse(250, 200, 20, 20)
    fill(hair)
    quad(120, 150, 180, 155, 180, 170, 120, 160)
    quad(230, 155, 290, 150, 290, 160, 230, 170)
    fill(lips)
    rect(190, 280, 25, 30, 20, 20, 0, 0)
  }
  else{
    fill(0)
    ellipse(150, 200, 20, 20)
    ellipse(250, 200, 20, 20)
    fill(hair)
    rect(120, 160, 45, 10)
    rect(230, 160, 45, 10)
    fill(lips)
    rect(190, 280, 25, 30, 0, 0, 20, 20)
  }
}
