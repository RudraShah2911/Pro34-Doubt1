const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var hero, monster, ground, bg
//var box1, box2, box3, box4, box5, box6, box7, box8, box9, box10, box11, box12, box13, box14, box15, box16, box17, box18

function preload() {
//preload the images here

bg = loadImage("images/GamingBackground.png")
hero = loadImage("images/Superhero-01.png")
monster = loadImage("images/Monster-01.png")

}

function setup() {
  createCanvas(1000,500);
  // create sprites here

  hero = createSprite (100,250,10,10)

}

function draw() {
  background(bg);

  hero.display();

}

