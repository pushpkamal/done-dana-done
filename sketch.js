const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;

var computerbase;
var Playerbase;
var player;
var computer;


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	
   //Create Player Base and Computer Base Object
   computerbase = new ComputerBase(300,450,180,150);  
   
   Playerbase = new PlayerBase(1200,450,180,150);

   player = new Player(300,280,100,250);
   computer = new Player(1200,280,100,250);


 }

function draw() {

  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

   //Display Playerbase and computer base 
   computerbase.display();
   Playerbase.display();
   player.display();
   computer.display();
   //display Player and computerplayer


}
