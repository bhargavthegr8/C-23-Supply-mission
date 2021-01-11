var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var box1, box2, box3, box2a;
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

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)
	
	
	
	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.4, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	box1=new Box(300,610,20,100);
	box2=new Box2(410,630,202,20);
	box2a=new Box(410,650,202,20);
	box3=new Box(520,610,20,100);
	
	Engine.run(engine);
    
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);

  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  drawSprites();

  keyPressed();

  box1.display();
  box2a.display();
  box3.display();
 
  
}

function keyPressed() {
	
    if (keyCode === DOWN_ARROW) {
        Matter.Body.setStatic(packageBody,false);
    }
}



