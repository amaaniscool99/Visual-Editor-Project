var car, wall;


function setup() {
  createCanvas(800,400);
car = createSprite(50, 200, 50, 50);
wall = createSprite (300, 200, 50, 100); 

}

function draw() {
  background(255,255,255);  
  car.x = World.mouseX;
   
  if(car.x - wall.x < car.width/2 + wall.width/2 &&
     wall.x - car.x < wall.width /2 + car.width/2 &&
      car.y - wall.y < car.height/2 + wall.height/2 && 
      car.y - car.y < wall.height/2 + car.height/2) 
      {
         wall.shapeColor = "red";
        car.shapeColor = "red";
      } 
      else { 
        wall.shapeColor = "green"; 
      car.shapeColor = "green"; 
    }
  drawSprites();
}