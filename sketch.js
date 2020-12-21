const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world, body;
var ground, ball, box;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }

    ground = Bodies.rectangle(200,390,200,20,ground_options);
    World.add(world,ground);
    var ball_options ={
        restitution: 1.0
    }
    ball = Bodies.circle(200,100,30,ball_options);
    box = Bodies.rectangle(200,40,50,50,ball_options);
    World.add(world, ball);
    World.add(world,box);
    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);
    rect(box.position.x, box.position.y,50,50)
    ellipse(ball.position.x, ball.position.y,30,30);
}