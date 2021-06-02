let hero;
let force;
let gravity;
let mySound;
let sNum = 0;
let enemys=[];
let img

function setup() {
  createCanvas(400, 400);
//laoding assets
  soundFormats('mp3');
  //mySound = loadSound("assets/energy.mp3");
   img = loadImage("mathman.jpeg");
  let img2 = loadImage("glitch.jpeg")

  hero = new Mover(img);
  force = createVector(-0.01, 0);
  gravity = createVector(0, 0.01);
  
  for(let i=0;i<300; i++){
    enemys.push(new Baddies(img2,i));
  }
}

function keyPressed() {
  if (key == " ") {
    let jump = createVector(0, -1);
    hero.applyForce(jump);
  }
}

function mousePressed() {
  sNum++;
}

function draw() {
  if (sNum%3 === 0) {
    open();
  } else if (sNum%3 === 1) {
    game();
  } else if (sNum%3 === 2) {
    close();
  }
}

function open() {
  background(20, 200, 10);
  text("Welcome to the Game! Good luck and enjoy!", 100, 100);
     // mySound.play();

}

function close() {
  background(200, 20, 10);
  text("Thanks for playing, try again later!", 100, 100);
}

function game() {
  background(10,30,20);

  hero.applyForce(gravity);
  translate(-hero.pos.x + 100, 0);
  // if (mouseIsPressed) {
  //    hero.applyForce(force);
  //  }
  hero.update();
  hero.show();
  hero.edges();
  
  for(let i=0; i<enemys.length; i++){
    enemys[i].show();
    enemys[i].update();
    hero.hit(enemys[i]);
  }
  //fill("blue");
  //rect(200, 300, 20, 20);
}
