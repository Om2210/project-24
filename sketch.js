
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bin1,bin2,bin3, groundSprite, paperObject


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	groundSprite=new Ground(600,390, 1200,10);

	paperObject=new Paper(100,200,10);

	bin1 = new Bin(550,350,10,50);
	bin2 = new Bin(600,350,100,10);
	bin3 = new Bin(650,350,10,50);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  keypressed();
  paperObject.display();
  groundSprite.display();
  bin1.display();
  bin2.display();
  bin3.display();


  drawSprites();
 
}

function keypressed() {
	if(keyCode===UP_ARROW) {
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
	}
}


