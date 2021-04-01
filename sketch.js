const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine
var world 
var Ground
var ground1
var ground2
var box1
var box2
var box3
var box4
var box5
var box6
var box7
var box8
var box9
var box10
var box11
var box12
var Polygon
var slingshot1
function setup(){
createCanvas(1200,400)
engine = Engine.create();
world = engine.world;
Ground=new ground(600,380,1200,20)
ground1=new ground(500,150,160,20)
ground2=new ground(750,250,160,20)
box1=new box(500,100,40,40)
box2=new box(700,200,40,40)
box3=new box(800,200,40,40)
box4=new box(750,200,40,40)
box5=new box(450,100,40,40)
box6=new box(550,100,40,40)
box7=new box(475,50,40,40)
box8=new box(520,70,40,40)
box9=new box(500,20,40,40)
box10=new box(720,100,40,40)
box11=new box(770,80,40,40)
box12=new box(750,60,40,40)
Polygon=new polygon(300,30,40,40)
slingshot1=new slingshot (Polygon.body,{x:100,y:30})
}
function draw(){
    Engine.update(engine);
    background("black")
    Ground.display()
    ground1.display()
    ground2.display()
    box1.display()
    box2.display()
    box3.display()
    box4.display()
    box5.display()
    box6.display()
    box7.display()
    box8.display()
    box9.display()
    box10.display()
    box11.display()
    box12.display()
    Polygon.display()
    slingshot1.display()
}
function mouseDragged(){
    Matter.Body.setPosition(Polygon.body, {x: mouseX , y: mouseY});
}
function mouseReleased(){
    slingshot1.fly()
}