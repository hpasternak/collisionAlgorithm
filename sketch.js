var object2, object1;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  movingRect = createSprite(800,200,80,30);
  movingRect.shapeColor = "green";
  gameObject1 = createSprite(100,100,50,50);
  gameObject1.shapeColor = "red"
  gameObject2 = createSprite(200,100,50,50);
  gameObject2.shapeColor = "blue"
  gameObject3 = createSprite(300,100,50,50);
  gameObject3.shapeColor = "orange"
  gameObject4 = createSprite(400,100,50,50);
  gameObject4.shapeColor = "purple"
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect,gameObject2)) {
    movingRect.shapeColor = "cyan";
    gameObject2.shapeColor = "cyan";
  }
  else {
    movingRect.shapeColor = "yellow";
    gameObject2.shapeColor = "blue";
  }
  drawSprites();
}
