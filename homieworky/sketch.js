/* global alpha blue brightness color green hue lerpColor lightness red saturation p5.Color background clear colorMode fill noFill noStroke stroke arc ellipse circle line point quad rect square triangle ellipseMode noSmooth rectMode smooth strokeCap strokeJoin strokeWeight bezier bezierDetail bezierPoint bezierTangent curve curveDetail curveTightness curvePoint curveTangent beginContour beginShape bezierVertex curveVertex endContour endShape quadraticVertex vertex plane box sphere cylinder cone ellipsoid torus p5.Geometry loadModel model HALF_PI PI QUARTER_PI TAU TWO_PI DEGREES RADIANS print frameCount deltaTime focused cursor frameRate noCursor displayWidth displayHeight windowWidth windowHeight windowResized width height fullscreen pixelDensity displayDensity getURL getURLPath getURLParams preload setup draw remove disableFriendlyErrors noLoop loop push pop redraw p5.Element select selectAll removeElements changed input createDiv createP createSpan createImg createA createSlider createButton createCheckbox createSelect createRadio createColorPicker createInput createFileInput createVideo createAudio VIDEO AUDIO createCapture createElement p5.MediaElement p5.Graphics createCanvas resizeCanvas noCanvas createGraphics blendMode setAttributes applyMatrix resetMatrix rotate rotateX rotateY rotateZ scale shearX shearY translate storeItem getItem clearStorage removeItem createStringDict createNumberDict p5.TypedDict p5.NumberDict append arrayCopy concat reverse shorten shuffle sort splice subset float int str boolean byte char unchar hex unhex join match matchAll nf nfc nfp nfs split splitTokens trim deviceOrientation accelerationX accelerationY accelerationZ pAccelerationX pAccelerationY pAccelerationZ rotationX rotationY rotationZ pRotationX pRotationY pRotationZ turnAxis setMoveThreshold setShakeThreshold deviceMoved deviceTurned deviceShaken keyIsPressed key keyCode keyPressed keyReleased keyTyped keyIsDown movedX movedY mouseX mouseY pmouseX pmouseY winMouseX winMouseY pwinMouseX pwinMouseY mouseButton mouseIsPressed mouseMoved mouseDragged mousePressed mouseReleased mouseClicked doubleClicked mouseWheel requestPointerLock exitPointerLock touches touchStarted touchMoved touchEnded createImage saveCanvas saveFrames p5.Image loadImage image tint noTint imageMode pixels blend copy filter get loadPixels set updatePixels loadJSON loadStrings loadTable loadXML loadBytes httpGet httpPost httpDo p5.XML createWriter p5.PrintWriter save saveJSON saveStrings saveTable p5.Table p5.TableRow day hour minute millis month second year createVector p5.Vector abs ceil constrain dist exp floor lerp log mag map max min norm pow round sq sqrt noise noiseDetail noiseSeed randomSeed random randomGaussian acos asin atan atan2 cos sin tan degrees radians angleMode textAlign textLeading textSize textStyle textWidth textAscent textDescent loadFont text textFont p5.Font orbitControl debugMode noDebugMode ambientLight directionalLight pointLight lights lightFalloff loadShader createShader shader resetShader normalMaterial texture textureMode textureWrap ambientMaterial emissiveMaterial specularMaterial shininess p5.Shader camera perspective ortho createCamera p5.Camera setCamera */
txt = "they are at war with the hum.  the hum, however, would not die "
txts = "sleep with a broken-angled neck, gently, so as not to suggest death"
txtss = "p l u c k t e e t h g o u g e e y e s a n d j a r t h e m "
count = 0
radius = 100
y = 0
pauseRate= 0.08
defaultRate = 60

function setup () {
  createCanvas(window.innerWidth, window.innerHeight)
}

function draw () {

  if (count == 0) {
    background(255)
  }

  fill(0)

  var one = txt.substring(0,count)
  var two = txts.substring(0,count)

  text(one, 10, 10 + count*6)
  text(two, 400, 10 + count*10)

  movementCircular()

  count++
  y+=10

  if(count > txt.length){
    count = 0
    y = 0

    frameRate(pauseRate)
  } else {
    frameRate(defaultRate)
  }

}

function movementCircular() {
  if(count == 0) {
    background(255)
   }

  translate(800, height/2)
  angle = 2 * PI * count/txt.length
  x = cos(angle) * radius
  y = sin(angle) * radius

  text(txtss[count], x, y)

  count++

  if(count > txt.length) {
    count = 0
    y = 0
    frameRate(pauseRate)
  } else {
    frameRate(defaultRate)
  }
}
