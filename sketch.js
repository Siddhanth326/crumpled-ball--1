var ball;
var wall1,ground;
var options={
	isStatic:false,
	restitution:0.3,
	friction:0.5,
	density:1.2
	
}
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	wall1=createSprite(769,665,10,90);
	wall1.shapeColor="red"
	wall2=createSprite(674,665,10,90);
	wall2.shapeColor="red"
	wall3=createSprite(720,685,89,10);
	wall3.shapeColor="red"
	ground=createSprite(400,695,799,10);
	ground.shapeColor="green"
	ball=createSprite(200,680,18,18);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  wall1.display();
  wall2.display();
  wall3.display();
  ground.display();
  ball.display();

  drawSprites();
 
}
function keyPressed(){
	if(keyCode === UP_ARROW){

		Matter.Body.applyForce(ballObject.body,paperObject.body.position,{x:85,y:85});
	}
}



