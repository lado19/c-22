var fr,mr; 
var go1,go2,go3,go4;

function setup() { 
  createCanvas(1200,800);
   fr=createSprite(200, 200, 50, 50);
   fr.shapeColor="green";
   fr.debug = true;
   mr=createSprite(400,200,80,30) 
 mr.shapeColor="green";
 mr.debug = true;
 mr.velocityY = -5;
 fr.velocityY = +5;

  }
  function draw() { 
  background(0);
  bounceOff(mr,fr);
    
  
   drawSprites(); 
      }
   function bounceOff(o1,o2) {
   if(o1.x-o2.x<o2.width/2+o1.width/2 &&
      o2.x-o1.x<o2.width/2+o1.width/2 ) {
    o1.velocityX = o1.velocityX*(-1);
    o2.velocityX = o2.velocityX*(-1);

      }    
   if( o1.y-o2.y<o2.height/2+o1.height/2 &&
      o2.y-o1.y<o2.height/2+o1.height/2) {
      o1.velocityY = o1.velocityY*(1);
      o2.velocityY = o2.velocityY*(1);
      }
    }