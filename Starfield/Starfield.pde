Star[] stars = new Star[20000];

void setup(){
  size(600,600);
  for(int i=0; i<stars.length; i++){
    stars[i] = new Star();
  }
}

void draw(){
  //var speed = map(mouseX,0,width,0,20);
  background(0);
  translate(width/2,height/2);
  for(int i=0; i<stars.length; i++){
    stars[i].update();
    stars[i].show();
  }
}
