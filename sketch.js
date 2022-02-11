
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800,500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground= new Ground(400,490,800,20);
	left = new Ground(500,440,20,80);
	right = new Ground(700,440,20,80);
	
	var ballprops = {
		restitution:0.5,
		frictionAir:0.01,
		density:1.2,
		isStatic:false
	}
	ball = Bodies.circle(200,200,20,ballprops)
	World.add(world,ball);
}



function draw() {
  rectMode(CENTER);
  background("red");
  Engine.update(engine);
  ground.show();
  left.show();
  right.show();
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20);
 
}

function keyPressed()
{
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(ball,ball.position,{x:60,y:-50})
	}
}



