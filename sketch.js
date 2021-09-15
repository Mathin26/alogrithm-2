var fixedrect,movingrect,obj1,obj2



function setup() {
  createCanvas(1200,800);
 
 fixedrect= createSprite(400, 200, 50, 100);
 movingrect= createSprite(1000, 200, 100, 50);
 obj1=createSprite(200,200,50,100)
 obj2=createSprite(600,200,50,100)
 obj2.shapeColor="green"
 obj1.shapeColor="green"
 
 fixedrect.shapeColor="green"
 movingrect.shapeColor="green"
 fixedrect.debug=true
 movingrect.debug=true
 obj2.debug=true
 obj1.debug=true
 fixedrect.velocityX=5
movingrect.velocityX=-5
}

function draw() {
  background(0);  
 bounceoff(fixedrect,movingrect)

  
  drawSprites();
}