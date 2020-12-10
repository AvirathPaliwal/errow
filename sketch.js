const Engine = Matter.Engine
 const World= Matter.World
 const Bodies = Matter.Bodies

 // ground
 var ground

 //division
 var division,division2,division3,division4,division5,division6,division7
 
 //plinko
 var plinko

var particle

var particles=[];
function setup() {
  createCanvas(600,700);
  engine = Engine.create()
    world = engine.world;
    
    //var Divisions=[];
   // var plinkos=[];
   //ground
  ground = new Ground(600,670,1300,20);

  //division
  
  //plinko
  plinko = new Plinko(300,100,10,10);
   particle = new Particle(200,50,10,10);
}

function draw() {
  background(155); 
  Engine.update(engine); 
 
  // ground
  fill("green")
  ground.display();
  //division
  for(var j = 0; j <  particles.length; j++ ){
    particles[j].display();
  }
//fill("black")
 // division.display()
 // division2.display() 
 // division3.display() 
 // division4.display() 
 // division5.display() 
  //division6.display() 
 // division7.display()
  //plinko
  plinko.display()
 // particle.display()
}