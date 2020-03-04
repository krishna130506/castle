const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(163,250,75,300);
    box2 = new Box(237,250,75,300);
    box3 = new Box(312,300,75,200);
    box4 = new Box(88,300,75,200);
    box5 = new Box(25,250,25,300);
    box6 = new Box(375,250,25,300);


  
    log1 = new Log(143,80,90,PI/7);
    log2 = new Log(217,80,90,PI/7);
    log3 = new Log(292,180,90,PI/7);
    log4 = new Log(68,180,90,PI/7);
    log5 = new Log(183,80,90,-PI/7);
    log6 = new Log(257,80,90,-PI/7);
    log7 = new Log(332,180,90,-PI/7);
    log8 = new Log(108,180,90,-PI/7);


}

function draw(){
    background(0);
    Engine.update(engine);
    
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();

    log1.display();
    log2.display();
    log3.display();
    log4.display();
    log5.display();
    log6.display();
    log7.display();
    log8.display();

}