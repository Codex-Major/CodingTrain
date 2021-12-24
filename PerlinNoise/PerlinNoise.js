
var inc = 0.1;
var scl = 10;
var cols, rows;
var tOff = 0;
var fr;
var particles = [];
var flowfield = [];

function setup() {
  fr = createP('');
  createCanvas(500,300);
  cols = floor(width / scl);
  rows = floor(height / scl);
  flowfield = new Array(cols * rows);
  for(var i = 0; i < 2250; i++){
    particles[i] = new Particle();
  }
  background(0);
}

function draw() {
  //background(0);
  var yOff = 0;
  for (var y = 0; y < rows; y++){
    var xOff = 0;
    for (var x = 0; x < cols; x++){
      var index = (x+y*cols);
      var angle = noise(xOff, yOff, tOff)* TWO_PI/0.2;
      var v = p5.Vector.fromAngle(angle);
      v.setMag(0.3);
      flowfield[index] = v;
      xOff += inc;
      //stroke(255,50);
      //strokeWeight(1);
      push();
      //translate(x*scl, y*scl);
      //rotate(v.heading());
      //line(0, 0, scl, 0);
      pop();
    }
    yOff += inc;
    //tOff += 0.001;
  }
  for(var i=0; i<particles.length; i++){
    particles[i].follow(flowfield);
    particles[i].update();
    particles[i].show();
    particles[i].edges();
  }
  fr.html(floor(frameRate()));
}
