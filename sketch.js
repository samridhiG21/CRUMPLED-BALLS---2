const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paperObject, paperIMG;
var stick1 , stick2 , stick3 , ground;

function preload()
{
	paperIMG = loadImage("paper.png");
}

function setup() {
	createCanvas(1000, 600);

	paperObject=createSprite(100, 525, 50,50);
	paperObject.addImage(paperIMG);
	paperObject.scale=0.1;

	engine = Engine.create();
	world = engine.world;

	paperBody = Bodies.circle(100 , 525 , 70 , {restitution:0.3, isStatic:true});
	World.add(world, paperBody);

	//Create the Bodies Here.
	ground = new Ground;

	stick1 = new Stick(950,495,15,100);
	stick2 = new Stick(785,495,15,100);
	stick3 = new Stick(867.7,538,150,15);

	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(0);

	ground.display();
	stick1.display();
	stick2.display();
	stick3.display();

  drawSprites();
 
  keyPressed();

}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
	}
}

