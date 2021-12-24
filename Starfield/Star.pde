class Star {
  float x;
  float y;
  float z;
  
  float pz;

  Star(){
    x = random(-width,width);
    y = random(-height,height);
    z = random(width);
    pz = z;
  }
  
  void update(){
    var speed = map(mouseX,0,width,0,75);
    z = z-speed;
    
    if(z<1){
      x = random(-width,width);
      y = random(-height,height);
      z = random(-width,width);
      pz = z;
    }
    
  }
  
  void show(){
    fill(random(z),random(z),random(z),255);
    noStroke();
    float sx = map(x/z,0,1,0,width);
    float sy = map(y/z,0,1,0,height);
    float r = map(z,0,width,3,0);
    ellipse(sx,sy,r,r);
    
    float px = map(x/pz,0,1,0,width);
    float py = map(y/pz,0,1,0,height);
    
    pz = z;
    
    stroke(random(z),random(z),random(z),255);
    line(px,py,sx,sy);
    
    
  }
  
}
