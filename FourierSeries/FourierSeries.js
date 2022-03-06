let t = 0;
let timeslider;
let circleSlider;
let circleRadSlider;
let circleSliderX = 20;
let circleSliderY = 20;
let rSlider;
let gSlider;
let bSlider;
let wave = [];

function setup() {
  createCanvas(800,400);
  circleSlider = createSlider(0,10,1);
  circleRadSlider = createSlider(0,155,1);
  timeSlider = createSlider(1,10,1);
  circleSlider.position(circleSliderX, circleSliderY);
  circleRadSlider.position(circleSliderX,circleSliderY+30);
  timeSlider.position(circleSliderX,circleSliderY+60);
  rSlider = createSlider(0,255,1);
  rSlider.position(circleSliderX,circleSliderY+90);
  gSlider = createSlider(0,255,1);
  gSlider.position(circleSliderX,circleSliderY+120);
  bSlider = createSlider(0,255,1);
  bSlider.position(circleSliderX,circleSliderY+150);
}

function draw() {
  background(0);
  fill(255);
  stroke(255);
  let numOfCircles = circleSlider.value();
  text("# of circles: "+numOfCircles, circleSliderX, circleSliderY);
  let circlesRadius = circleRadSlider.value();
  text("Radius of circles: "+circlesRadius, circleSliderX, circleSliderY+30);
  let timeStep = timeSlider.value()/100;
  text("Timestep: "+timeStep, circleSliderX, circleSliderY+60);
  let rHue = rSlider.value();
  text("R: "+rHue, circleSliderX, circleSliderY+90);
  let gHue = gSlider.value();
  text("G: "+gHue, circleSliderX, circleSliderY+120);
  let bHue = bSlider.value();
  text("B: "+bHue, circleSliderX, circleSliderY+150);
  
  translate(200,200);
  fill(255);
  let x = 0;
  let y = 0;
  
  let ylabelY = -10;
  let circName = 0;
  
  for(let i = 0; i < numOfCircles; i++) {
    let prevX = x;
    let prevY = y;
    let n = i * 2 +1;
    let r = circlesRadius * (4/(n*PI));
    x += r * cos(n*t);
    y += r * sin(n*t);

    ylabelY+=20;
    circName+=1;
    stroke(255);
    fill(255);
    text("Y"+circName+": "+y*-1, -180,ylabelY);
    ellipse(0,0,4);
    noFill();
    ellipse(prevX,prevY,r*2);

    strokeWeight(1);
    stroke(rHue,gHue,bHue);
    fill(rHue,gHue,bHue);
    line(prevX,prevY,x,y);
    ellipse(x,y,4);

  }
  wave.unshift(y);
  translate(100,0);
  line(x-100, y, 0, wave[0]);
  
  beginShape();
  noFill();
  for(let i = 0; i < wave.length; i++){
    vertex(i, wave[i]);
  }
  endShape();
  
  t+=timeStep;
  
  if(wave.length > 350) {
    wave.pop();
  }
  
}
