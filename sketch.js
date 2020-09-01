var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,groundSprite,boxdrop1sprite,boxdrop2sprite,boxdrop3sprite;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2
boxdrop1sprite=createSprite(350,650,200,20);
boxdrop1sprite.shapeColor="red"
boxdrop2sprite=createSprite(450,620,20,100);
boxdrop2sprite.shapeColor="red"
boxdrop3sprite=createSprite(250,620,20,100);
boxdrop3sprite.shapeColor="red"
	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 World.add(world, ground);
 boxdrop1= Bodies.rectangle(350,650,200,20,{isStatic:true})
World.add(world,boxdrop1);
boxdrop2= Bodies.rectangle(450,620,20,100,{isStatic:true})
World.add(world,boxdrop2);
boxdrop3= Bodies.rectangle(350,620,20,100,{isStatic:true})
World.add(world,boxdrop2);
packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.45, isStatic:true});
	World.add(world, packageBody);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  //engine.update(Engine);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	// Look at the hints in the document and understand how to make the package body fall only on
	Matter.Body.setStatic(packageBody, false);
    
  }
}



