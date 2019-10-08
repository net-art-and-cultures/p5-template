/* global alpha blue brightness color green hue lerpColor lightness red saturation p5.Color background clear colorMode fill noFill noStroke stroke arc ellipse circle line point quad rect square triangle ellipseMode noSmooth rectMode smooth strokeCap strokeJoin strokeWeight bezier bezierDetail bezierPoint bezierTangent curve curveDetail curveTightness curvePoint curveTangent beginContour beginShape bezierVertex curveVertex endContour endShape quadraticVertex vertex plane box sphere cylinder cone ellipsoid torus p5.Geometry loadModel model HALF_PI PI QUARTER_PI TAU TWO_PI DEGREES RADIANS print frameCount deltaTime focused cursor frameRate noCursor displayWidth displayHeight windowWidth windowHeight windowResized width height fullscreen pixelDensity displayDensity getURL getURLPath getURLParams preload setup draw remove disableFriendlyErrors noLoop loop push pop redraw p5.Element select selectAll removeElements changed input createDiv createP createSpan createImg createA createSlider createButton createCheckbox createSelect createRadio createColorPicker createInput createFileInput createVideo createAudio VIDEO AUDIO createCapture createElement p5.MediaElement p5.Graphics createCanvas resizeCanvas noCanvas createGraphics blendMode setAttributes applyMatrix resetMatrix rotate rotateX rotateY rotateZ scale shearX shearY translate storeItem getItem clearStorage removeItem createStringDict createNumberDict p5.TypedDict p5.NumberDict append arrayCopy concat reverse shorten shuffle sort splice subset float int str boolean byte char unchar hex unhex join match matchAll nf nfc nfp nfs split splitTokens trim deviceOrientation accelerationX accelerationY accelerationZ pAccelerationX pAccelerationY pAccelerationZ rotationX rotationY rotationZ pRotationX pRotationY pRotationZ turnAxis setMoveThreshold setShakeThreshold deviceMoved deviceTurned deviceShaken keyIsPressed key keyCode keyPressed keyReleased keyTyped keyIsDown movedX movedY mouseX mouseY pmouseX pmouseY winMouseX winMouseY pwinMouseX pwinMouseY mouseButton mouseIsPressed mouseMoved mouseDragged mousePressed mouseReleased mouseClicked doubleClicked mouseWheel requestPointerLock exitPointerLock touches touchStarted touchMoved touchEnded createImage saveCanvas saveFrames p5.Image loadImage image tint noTint imageMode pixels blend copy filter get loadPixels set updatePixels loadJSON loadStrings loadTable loadXML loadBytes httpGet httpPost httpDo p5.XML createWriter p5.PrintWriter save saveJSON saveStrings saveTable p5.Table p5.TableRow day hour minute millis month second year createVector p5.Vector abs ceil constrain dist exp floor lerp log mag map max min norm pow round sq sqrt noise noiseDetail noiseSeed randomSeed random randomGaussian acos asin atan atan2 cos sin tan degrees radians angleMode textAlign textLeading textSize textStyle textWidth textAscent textDescent loadFont text textFont p5.Font orbitControl debugMode noDebugMode ambientLight directionalLight pointLight lights lightFalloff loadShader createShader shader resetShader normalMaterial texture textureMode textureWrap ambientMaterial emissiveMaterial specularMaterial shininess p5.Shader camera perspective ortho createCamera p5.Camera setCamera */

function setup () {
  // put setup code here
  createCanvas(window.innerWidth, window.innerHeight)

}

function draw () {
  background(0)
  const hue = map(mouseY, 0, windowWidth, 0, 255)
  const greyscale = map(mouseX, 0, windowWidth, 200, 50)
  colorMode(HSB, 255)
  const c = color(hue, greyscale, 255)
  colorMode(RGB, 255)
  const g = color(greyscale)
  const noiseY = map(mouseY, 0, windowHeight, 50, 200)
  const noiseX = map(mouseX, 0, windowWidth, 100, 400)
  const noiseY2 = map(mouseY, 0, windowHeight, -100, windowHeight / 2)
  for (let i = 0; i < 6; i++) {
    stroke(g)
    line(0, 0, windowWidth / 2 + noiseX, noiseY + i * windowHeight / 6 )
    line(0, 0, noiseX + i * windowWidth / 6, windowHeight / 2 + noiseY)
    line(0, windowHeight, windowWidth / 2 - noiseX, i * windowHeight / 6 - noiseY)
    line(0, windowHeight, i * windowWidth / 6 - noiseX, 0)
    line(windowWidth, 0, windowWidth / 2 + noiseY, i * windowHeight / 6 + noiseX)
    line(windowWidth, 0, i * windowWidth / 6 + noiseY, windowHeight / 2 + noiseX)
    line(windowWidth, windowHeight, windowWidth / 2 - noiseY, i * windowHeight / 6 - noiseX)
    line(windowWidth, windowHeight, i * windowWidth / 6 - noiseY, 0)
  }
  for (let j = 0; j < 12; j++) {
    stroke(g)
    line(windowWidth / 2, 0, j * windowWidth / 12 + noiseX, noiseY2)
    line(windowWidth / 2, windowHeight, j * windowWidth / 12 - noiseX, windowHeight / 2 + noiseY2)
    line(0, windowHeight / 2, noiseX, j * windowHeight / 12 + noiseY)
    line(windowWidth, windowHeight / 2, windowWidth / 2 - noiseX, j * windowHeight / 12 - noiseY)
    stroke(c)
    line(windowWidth / 2, windowHeight / 2, j * windowWidth / 12 + noiseX, windowHeight + noiseY2)
    line(windowWidth / 2, windowHeight / 2, j * windowWidth / 12 - noiseX, noiseY2)
  }
}
