var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight=300;
var score =0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  //create division objects
  for (var k = 0; k <=80; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

 
  

 for (var c = 150; c <=260; c = c + 200) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }


  for (var k =250; k <=260; k = k + 200) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }


  for (var k =350; k <=400; k = k + 200) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }



  for (var k =450; k <=500; k = k + 200) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }


  

  for (var k =550; k <=600; k = k + 200) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }
  



  for (var k =650; k <=700; k = k + 200) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }


  for (var k =750; k <=800; k = k + 200) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }


  //create 1st row of plinko objects
  for (var j = 75; j <=width; j=j+50) { 
    plinkos.push(new Plinko(j,75));
  }

  //create 2nd row of plinko objects
  for (var j = 50; j <=width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,175));
  }

  //create 3rd row of plinko objects

  for (var j = 25; j <=width-25; j=j+50) 
  {
    plinkos.push(new Plinko(j,225));
  }
  //create 4th row of plinko objects

  for (var j = 15; j <=width-35; j=j+50) 
  {
    plinkos.push(new Plinko(j,325));
  }
  //create particle objects
  
  }

    

 


function draw() {
  background("black");
  textSize(20)
 
  Engine.update(engine);
  ground.display();
  
  //display the plinkos 
  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();   
  }
   
  //display the divisions
  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }

  //display the paricles 

}