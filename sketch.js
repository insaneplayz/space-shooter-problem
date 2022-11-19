//Help me in line 80,81,82



//variable here
var pc, pcImg;
var fireballs, ballImg;
var enemy, enemyImg, boomImg;
var enemysGroup, funsGroup;
var score = 0;
var fun, funImg;
var lifeX, lifeXImg;
var he2, he1, he3, heImg
var hearts = 2
var dg;
var shoots;
var blast, blastImg;
function preload() {
  bg = loadImage("images/bg.jpg");
  pcImg = loadImage("images/ufo.png");
  ballImg = loadImage("images/fireball.png");
  enemyImg = loadImage("images/enemy.png");
  boomImg = loadImage("images/boom.png");
  funImg = loadImage("images/gift.png");
  lifeXImg = loadImage("images/life.png");
  heImg = loadImage("images/heart.png");
  blastImg = loadImage("images/boom.png")

  dg = loadSound("dialogs.mp3");
  shoots = loadSound("shoo.mp3")
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  dg.play()

  pc = createSprite(width / 2, 650, 20, 20);
  pc.addImage(pcImg);
  pc.scale = 0.5;

  fireballs = createSprite(2000, 200, 20, 20);
  fireballs.addImage(ballImg);
  fireballs.scale = 0.2

  he1 = createSprite(100, 100);
  he1.addImage(heImg);
  he1.scale = 0.3

  he2 = createSprite(100, 200);
  he2.addImage(heImg);
  he2.scale = 0.3

  he3 = createSprite(100, 300);
  he3.addImage(heImg);
  he3.scale = 0.3

  blast = createSprite(2000, 100,);
  blast.addImage(blastImg)
  blast.scale = 0.5

  enemysGroup = new Group();
  funsGroup = new Group();


}
dg.play()

function draw() {
  background(bg);


  movement();
  shoot();
  spawnEnemy()
  spawnfun()

  textSize(30);
  text("Score: " + score, 1500, 100)

  /*if(fireballs.isTouching(enemysGroup)){

    score += 5
  

  }*/
  if (fireballs.isTouching(funsGroup)) {
    funsGroup.destroyEach()
    score += 70

  }
  if (enemysGroup.collide(pc)) {
    he3.destroy();
    enemysGroup.destroyEach();
    hearts = hearts - 1
    console.log("game over")


      ;


  }

  if (hearts < 1) {
    he2.destroy()
  }

  if (hearts < 0) {
    he1.destroy();
    pc.destroy();
    enemysGroup.setVelocityYEach(0);
    swal({
      title: `Awesome! you have got a score of ` + score,
      text: "You Have ben robbed by enemy's",
      imageUrl:
        "https://raw.githubusercontent.com/vishalgaddam873/p5-multiplayer-car-race-game/master/assets/cup.png",
      imageSize: "100x100",
    })
  }


  pc.depth += fireballs.depth

  drawSprites();
}
function movement() {
  pc.x = World.mouseX;
  pc.y = World.mouseY;
}
function shoot() {
  if (mouseWentDown("leftButton")) {
    fireballs.x = pc.x
    fireballs.y = pc.y
    fireballs.velocityY = -150
    shoots.play()
  }
}
function spawnEnemy() {
  if (frameCount % 100 === 0) {
    x = random(200, 1650);
    y = random(-20, -100)
    z = random(2, 5)
    t = random
    var enemy = createSprite(x, y);
    enemy.addImage(enemyImg);
    enemy.velocityY = z
    enemy.lifetime = 300
    enemysGroup.add(enemy)
  }

}
function spawnfun() {
  if (frameCount % 700 === 0) {
    x = random(200, 1650);
    y = random(-20, -100)
    z = random(2, 5)
    t = random
    var fun = createSprite(x, y);
    fun.addImage(funImg);
    fun.velocityY = z
    fun.lifetime = 300
    funsGroup.add(fun)
  }
}