
var Engine = Matter.Engine;
var World = Matter.World;
var Bodies = Matter.Bodies;
 
// CREATE GLOBAL VARIABLES
// For Engine, World, Bodies and any other that you have in mind to make your coding life easier.
// remember to create an array of boxes.
var engine;
var world;


var ground;
 
var boxes = [];
var gSlider;
 
 
function setup() {
    createCanvas(400,400);

    // Create an instance of Engine, World
    engine = Engine.create();
    world = engine.world;
 
    // A slider is already created for you here. This slider will dictate the gravity of the world
    gSlider = createSlider(0, 100, 20);
    gSlider.position(200, 0);
    
 
    // Create a ground rectangle that would hold all the boxes and add it to the world.
    var options = {
        isStatic: true
    }
    
    ground = Bodies.rectangle(200, 385 , 400, 10, options);
    World.add(world, ground);

}
 
function mousePressed() {
    if (mouseY < 375) {
        // Every time a mouse press occures create a new box.
        boxes.push(new Boxs(mouseX, mouseY, random(10, 30), random(10, 45)));
    }
}
 
function draw() {
    // Draw all the elements including the slider that 
    
    Engine.update(engine);

    background(51);
    // This is the value of your gravity. You can optionally show it to the viewer.
    var fVal = gSlider.value();
 
    // Use a for loop to show all the boxes
    for (var i = 0; i < boxes.length; i++) {
        boxes[i].show();
    }
    noStroke();
    fill(170);
    strokeWeight(5);
    rectMode(CENTER);
    rect(ground.position.x, ground.position.y, 400, 20);
    fill(255);

    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);

    

}
 

// You can either create a file for the class Box or build a simple function that creates one box at a time.
// I have gone for the second option.

   
