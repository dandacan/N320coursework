class Ball {
  //construct with base position and velocity
    constructor() {
      this.position = { x: 100, y: 100 };
      this.velocity = { x: 10, y: 0 };
    }
    
    update() {
      
      this.position.x += this.velocity.x;
      this.position.y += this.velocity.y;
      
      circle(this.position.x, this.position.y, 20);
      
      if(this.position.x < 0 || this.position.x > 400) {
        World.ballBeyond(this);
      }
    }
    
  }
class Box {

  constructor(x, y) {
    this.position = { x: x, y: y };
    this.size = {x: 5, y:5};
  }

  update() {
      fill("#FFF");
      rect(this.position.x, this.position.y, this.size.x, this.size.y);
    }
    grow(){
      this.size.x += 5;
      this.size.y += 5;
    } 
}
var World = {
  bgcolor: [237, 119, 83],
  boxes: [],
   update: function(){
    for (var i = this.boxes.length - 1; i >= 0; i--) {
      this.boxes[i].update();
    }
  },
  ballBeyond: function(whichBall) {
    this.bgcolor = [ Math.random()*255, Math.random()*255, 83 ];
    for (var i = this.boxes.length - 1; i >= 0; i--) {
      this.boxes[i].grow();
    }
    whichBall.position.x = 100;
    whichBall.velocity.x = (Math.random() - .5) * 20;
  }
}




var ball = new Ball();
World.boxes.push(new Box(0,0));
World.boxes.push(new Box(200,200));

function setup() {
  createCanvas(400,300);
  
}

function draw() {
  background( World.bgcolor );
  ball.update();
  World.update();
}

