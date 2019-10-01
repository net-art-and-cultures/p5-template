// scene boolean variables
welcomeBool = true;
startBool = false;
gameBool = false;
winBool = false;
loseBool = false;

// play variables
var char, box, goal, topWall, bottomWall, leftWall, rightWall, obstacles, timeLeft;
var speed = 5;
var fixedPositionX = [125, 175, 225, 275, 325, 375, 425, 475, 525, 575, 625, 675];
var fixedPositionY = [125, 175, 225, 275, 325, 375, 425, 475];
var score = 0;
var startTime, endTime, timeDiff; 
var seconds = 0;

function gameObjects() {
	createCanvas(800, 600);
	background('#FC9E27');

	goal = createSprite(random(fixedPositionX), random(fixedPositionY), 49, 49);
	goal.shapeColor = color('#03B2B2');

	box = createSprite(random(fixedPositionX), random(fixedPositionY), 49, 49);
	box.shapeColor = color('#033A5A')

	char = createSprite(random(fixedPositionX), random(fixedPositionY), 49, 49);
	char.shapeColor = color('#EE3438');
}

function startTimer() {
  startTime = new Date();
};

function endTimer() {
  endTime = new Date();
  timeDiff = endTime - startTime; //in ms
  // strip the ms
  timeDiff /= 1000;

  // get seconds 
  seconds = Math.floor(timeDiff);
}

function preload() {
	soundFormats('mp3');
	musicSound = loadSound('res/music.mp3');
	chimeSound = loadSound('res/chime.mp3');
	winSound = loadSound('res/win.mp3');
	loseSound = loadSound('res/lose.mp3');
	musicSound.setLoop(true);
}

function setup() {
	createCanvas(800, 600);
	background('#FC9E27');

	musicSound.setVolume(0.5);

	topWall = createSprite(400, 25, 800, 50);
	topWall.shapeColor = color('#F0F282');

	bottomWall = createSprite(400, 575, 800, 50);
	bottomWall.shapeColor = color('#F0F282');

	leftWall = createSprite(25, 300, 50, 800);
	leftWall.shapeColor = color('#F0F282');

	rightWall = createSprite(775, 300, 50, 800);
	rightWall.shapeColor = color('#F0F282');

	obstacles = new Group();

	obstacles.add(topWall);
	obstacles.add(bottomWall);
	obstacles.add(leftWall);
	obstacles.add(rightWall);

	gameObjects();
}

function draw() {
	if(welcomeBool == true) {
		welcome();
	}

	if(startBool == true) {
		start();
	}

	if(gameBool == true) {
		game();
	}

	if(winBool == true) {
		win();
	}

	if(loseBool == true) {
		lose();
	}
}

function keyPressed() {
	if (keyCode === 13 && welcomeBool == true) {
		musicSound.play();
		welcomeBool = false;
		startBool = true;
		gameBool = false;
		winBool = false;
		loseBool = false;
	}

	if (keyCode === 32 && startBool == true) {
		welcomeBool = false;
		startBool = false;
		gameBool = true;
		winBool = false;
		loseBool = false;
		goal.remove();
		box.remove();
		char.remove();
		speed = 5;
		score = 0;
		startTimer();
		gameObjects();
	}

	if (keyCode === 32 && gameBool == true) {
		welcomeBool = false;
		startBool = false;
		gameBool = true;
		winBool = false;
		loseBool = false;
		goal.remove();
		box.remove();
		char.remove();
		speed = 5;
		score = 0;
		seconds = 0;
		startTimer();
		gameObjects();
	}

	if (keyCode === 32 && winBool == true) {
		welcomeBool = true;
		startBool = false;
		gameBool = false;
		winBool = false;
		loseBool = false;
		goal.remove();
		box.remove();
		char.remove();
		speed = 5;
		score = 0;
		seconds = 0;
		startTimer();
		gameObjects();
	}

	if (keyCode === 32 && loseBool == true) {
		welcomeBool = true;
		startBool = false;
		gameBool = false;
		winBool = false;
		loseBool = false;
		goal.remove();
		box.remove();
		char.remove();
		speed = 5;
		score = 0;
		seconds = 0;
		startTimer();
		gameObjects();
	}
}

function welcome() {
	push();
	fill(0);
	textAlign(CENTER);
	textSize(48);
	textStyle(BOLD);
	text('Push That Brick', 400, 260);
	pop();

	push();
	fill('#033A5A');
	rectMode(CENTER)
	smooth();
	noStroke();
	rect(400, 350, 420, 60, 20);
	pop();

	push();
	fill(255);
	textAlign(CENTER);
	textSize(32);
	textStyle(BOLD);
	text('Press [enter] to continue', 400, 360);
	pop();
}

function start() {
	background('#FC9E27');

	push();
	fill(0);
	textAlign(CENTER);
	textSize(42);
	textStyle(BOLD);
	text('Move      to push      into      .', 400, 260);
	pop();

	push();
	fill('#033A5A');
	rectMode(CENTER)
	smooth();
	noStroke();
	rect(400, 350, 480, 60, 20);
	pop();

	push();
	fill(255);
	textAlign(CENTER);
	textSize(32);
	textStyle(BOLD);
	text('Press [space] to start / restart', 400, 360);
	pop();

	push();
	fill('#EE3438');
	rectMode(CENTER);
	strokeWeight(0)
	square(265, 245, 50);
	pop();

	push();
	fill('#033A5A');
	rectMode(CENTER);
	strokeWeight(0)
	square(485, 245, 50);
	pop();

	push();
	fill('#03B2B2');
	rectMode(CENTER);
	strokeWeight(0)
	square(630, 245, 50);
	pop();
}

function game() {
	background('#FC9E27');

	char.velocity.x = 0;
	char.velocity.y = 0;

	if (keyIsDown(LEFT_ARROW) | keyIsDown(65))
	char.velocity.x = speed * -1;

	if (keyIsDown(RIGHT_ARROW) | keyIsDown(68))
	char.velocity.x = speed;

	if (keyIsDown(UP_ARROW) | keyIsDown(87))
	char.velocity.y = speed * -1;

	if (keyIsDown(DOWN_ARROW) | keyIsDown(83))
	char.velocity.y = speed;

	timeLeft = 60 - seconds;

	push();
	fill(0);
	textAlign(CENTER);
	textSize(32);
	textStyle(BOLD);
	text('Points: ' + score + '/15', 400, 90);
	text('Time left: ' + timeLeft + ' seconds', 400, 535);
	pop();

	if (box.overlap(obstacles)) {
		goal.remove();
		box.remove();
		char.remove();
		gameObjects();
	}

	if (box.overlap(goal)){
		goal.remove();
		box.remove();
		char.remove();
		speed = speed * 1.1;
		score++;
		chimeSound.play();
		gameObjects();
	}

	if (score >= 15) {
		musicSound.stop();
		winSound.play();
		welcomeBool = false;
		startBool = false;
		gameBool = false;
		winBool = true;
		loseBool = false;
	}

	if (timeLeft <= 0) {
		musicSound.stop();
		loseSound.play();
		welcomeBool = false;
		startBool = false;
		gameBool = false;
		winBool = false;
		loseBool = true;
	}

	char.collide(obstacles);
	box.collide(obstacles);

	char.displace(box);

	endTimer();

	drawSprites();
}

function win() {
	background('#FC9E27');

	push();
	fill(0);
	textAlign(CENTER);
	textSize(42);
	textStyle(BOLD);
	text('You scored ' + Math.round(map(timeLeft, 0, 30, 100, 1000, 0-1000)) + ' and won!', 400, 260);
	pop();

	push();
	fill('#033A5A');
	rectMode(CENTER)
	smooth();
	noStroke();
	rect(400, 350, 420, 60, 20);
	pop();

	push();
	fill(255);
	textAlign(CENTER);
	textSize(32);
	textStyle(BOLD);
	text('Press [space] to restart', 400, 360);
	pop();
}

function lose() {
	background('#FC9E27');

	push();
	fill(0);
	textAlign(CENTER);
	textSize(42);
	textStyle(BOLD);
	text('Your time ran out!', 400, 260);
	pop();

	push();
	fill('#033A5A');
	rectMode(CENTER)
	smooth();
	noStroke();
	rect(400, 350, 420, 60, 20);
	pop();

	push();
	fill(255);
	textAlign(CENTER);
	textSize(32);
	textStyle(BOLD);
	text('Press [space] to restart', 400, 360);
	pop();
}