const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var apple;
var angryB, boyImg;
var landscape;
var treeImg;
var stoneImg;
var rope;
var ground;
var score = 0;
var boy;

function preload(){

  landscape = loadImage("landscape.jpg");
  treeImg = loadImage("tree.png");

  angryB = loadImage("angryboy.png");
  boyImg = loadImage("boy.png");
 

   stoneImg = loadImage("stone-removebg-preview.png");

}


function setup() {
  createCanvas(900,700);

  var  stone_options={
    density: 15,
    friction: 4
 
  
  }
  console.log(stone_options)

  engine = Engine.create();
  world = engine.world;

  //tree sprite
  tree = createSprite(600,400,20,20);
  tree.scale = 2.5;
  tree.addImage(treeImg);

  //stone body
  stone = Bodies.circle(200,550,15,stone_options);
  console.log(stone);
  World.add(world,stone);

  ground = Bodies.rectangle(450,690, 900, 20, {isStatic: true});
  World.add(world, ground);

  apple1 = new Apple(550,250,20);
  apple2 = new Apple(700,210,20);
  apple3 = new Apple(440,360,20);
  apple4 = new Apple(700,360,20);
  console.log(apple1);

  rope = new Rope({x:200, y:550}, stone);

  //boy sprite
  boy = createSprite(150,600,20,20);
  boy.scale = 1;
  boy.addImage("boyImg",boyImg);
  boy.addImage("angryB",angryB);



}


function draw(){

  background(landscape);

  Engine.update(engine);

  drawSprites();

  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, 900,20);
  

  apple1.display();
  apple2.display();
  apple3.display();
  apple4.display();

  
  imageMode(CENTER);
  image(stoneImg, stone.position.x, stone.position.y, 20, 20);

  rope.display();

  detectCollision(apple1.body, stone);
  detectCollision(apple2.body, stone);
  detectCollision(apple3.body, stone);
  detectCollision(apple4.body, stone);

  if(score>= 4){

    reset();
  }

  textSize(35);
  text(`Score:${score}`, width - 200, 50);
 

}

function mouseDragged(){

  Matter.Body.setPosition(stone, {x: mouseX, y:mouseY});
}

function mouseReleased(){

  rope.dettach();
  
}

function keyPressed(){

  if(keyCode == 32){

    Matter.Body.setPosition(stone, {x: mouseX, y:mouseY});
     rope.attach(stone);
  }

}

function detectCollision(body1, body2){

  var d = dist(body1.position.x, body1.position.y, body2.position.x, body2.position.y );
  console.log(d);

  if(d< 20 + 15 ){
    console.log("inside if condition");
    
    Matter.Body.setStatic(body1, false);
    score += 1;
    
  }

}

function reset(){

    swal({
    title: `Good Job! You got all the apples!`,
  //  text: "Oops you lost the race....!!!",
    imageUrl:
      "https://cdn.shopify.com/s/files/1/1061/1924/products/Thumbs_Up_Sign_Emoji_Icon_ios10_grande.png",
    imageSize: "100x100",
    confirmButtonText: "Thanks For Playing"
  });

  score = 0;
}
