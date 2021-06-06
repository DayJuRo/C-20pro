var bg, c1, c2, c3, m1, m2, m3;
var cat, mouse;

function preload() {
    //load the images here
    bg=loadImage("images/garden.png");
    c1=loadAnimation("images/cat1.png");
    c2=loadAnimation("images/cat2.png","images/cat3.png");
    c3=loadAnimation("images/cat4.png");
    m1=loadAnimation("images/mouse1.png");
    m2=loadAnimation("images/mouse2.png","images/mouse3.png");
    m3=loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat=createSprite(870,600);
    cat.addAnimation("cat",c1);
    cat.scale=0.2;

    mouse=createSprite(200,600);
    mouse.addAnimation("mouse",m1);
    mouse.scale=0.15;

}

function draw() {

    background(bg);
    //Write condition here to evalute if tom and jerry collide
  if(cat.x-mouse.x< (cat.width-mouse.width)/2){
      cat.velocityX=0;
      cat.addAnimation("cat",c3);
      cat.x=300;
      cat.scale=0.2;
      mouse.addAnimation("mouse",m3);
      mouse.scale=0.15;
  }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode===LEFT_ARROW){
      cat.velocityX=-5;
      cat.addAnimation("cat",c2);

      mouse.addAnimation("mouse",m2);

  }


}
