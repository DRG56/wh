var box ;

function setup() {
    createCanvas(1283,663);
box = createSprite(200,200,20,20);
  }
  
  function draw() 
  {
    background(30);
 
    if (keyIsDown (RIGHT_ARROW)) {
        box.position.x = box.position.x +5;
    background ("red")
    }

  
    if (keyIsDown (LEFT_ARROW)) {
        box.position.x = box.position.x -5;
        background ("green")
    }

    if (keyIsDown (UP_ARROW)) {
        box.position.y = box.position.y -5;
        background (" blue")
    }

    if (keyIsDown (DOWN_ARROW)) {
        box.position.y = box.position.y +5;
        background ("yellow")
    }
    drawSprites();
    
  }
  