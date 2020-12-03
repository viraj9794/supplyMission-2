var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground

var wall1, wall2, wall3, wall4;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var myEngine, myWorld;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	myEngine=Engine.create();
	myWorld=myEngine.world;

	packageSprite=createSprite(width/2, 200, 10,10);
	packageSprite.addImage(packageIMG);
	packageSprite.scale=0.2;

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);
	
	wall1= new Wall(400, 650, 200, 20);
	wall2= new Wall(300, 620, 20, 100);
	wall3= new Wall(500, 620, 20, 100);

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

//Engine.update(myEngine);

  if (keyDown ("space") ){
keyPressed();
  }
  
wall1.display();
wall2.display();
wall3.display();

  drawSprites();
 
}
function keyPressed(){
	Matter.Body.setStatic(packageBody ,false);
}