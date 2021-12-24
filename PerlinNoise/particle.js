
function Particle() {
  this.pos=createVector(random(width),random(height));
  this.vel=createVector(0,0);
  this.acc=createVector(0,0);
  this.maxSpeed = 2;
  
  this.follow = function(vectors){
    var x = floor(this.pos.x /scl);
    var y = floor(this.pos.y /scl);
    var index = x +y * cols;
    var force = vectors[index];
    this.applyForce(force);
  };
  
  this.update = function(){
    this.vel.add(this.acc);
    this.vel.limit(this.maxSpeed);
    this.pos.add(this.vel);
    this.acc.mult(0);
  };
  
  this.applyForce = function(force){
    this.acc.add(force);
  };

  this.show = function(){
    // You can cycle through these to get some funky patterns.
    //stroke(this.pos.x,this.pos.x,this.pos.x,random(25));
    stroke(random(this.pos.x+200),random(this.pos.y),random(this.pos.y+200),15);
    //stroke(this.pos.x,this.pos.y,this.pos.y,(this.pos.x/(this.pos.x*5)));
    //stroke(this.pos.x,this.pos.y,this.pos.y,(this.pos.x/this.pos.y*2)/3);
    strokeWeight(1);
    point(this.pos.x,this.pos.y);
  };

  this.edges = function(){
    if (this.pos.x > width){this.pos.x=0;}
    if (this.pos.x < 0){this.pos.x=width;}
    if (this.pos.y > height){this.pos.y=0;}
    if (this.pos.y < 0){this.pos.y=height;}
  };

}
