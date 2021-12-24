PImage pic;

void setup(){
  size(550,300);
  pic = loadImage("cat.jpg");
  background(0);
  //threshold effect
  //pic.filter(GRAY);
  image(pic,0,0);
}

int index(int x, int y) {
  return x + y * pic.width;
}

void draw(){
  pic.loadPixels();
  for (int y=0; y< pic.width-1; y++){
    for (int x=1; x< pic.height-1; x++){
      int index = x+y*pic.width;
      color pix = pic.pixels[index(x,y)];
      
      float oldR = red(pix);
      float oldG = green(pix);
      float oldB = blue(pix);
      
      int factor = 1;
      int newR = round(factor*oldR/255)*(255/factor);
      int newG = round(factor*oldG/255)*(255/factor);
      int newB = round(factor*oldB/255)*(255/factor);
      
      pic.pixels[index] = color(newR,newG,newB);
      
      float errR = oldR - newR;
      float errG = oldG - newG;
      float errB = oldB - newB;
      
      //pixels[x + 1][y    ] := pixels[x + 1][y    ] + quant_error × 7 / 16
      index = index(x+1,y);
      color c = pic.pixels[index];
      float r = red(c);
      float g = green(c);
      float b = blue(c);
      r = r + errR * 7/16.0;
      g = g + errG * 7/16.0;
      b = b + errB * 7/16.0;
      pic.pixels[index] = color(r,g,b);
      
      //pixels[x - 1][y + 1] := pixels[x - 1][y + 1] + quant_error × 3 / 16
      index = index(x-1,y+1);
      c = pic.pixels[index];
      r = red(c);
      g = green(c);
      b = blue(c);
      r = r + errR * 3/16.0;
      g = g + errG * 3/16.0;
      b = b + errB * 3/16.0;
      pic.pixels[index] = color(r,g,b);
      
      //pixels[x    ][y + 1] := pixels[x    ][y + 1] + quant_error × 5 / 16
      index = index(x,y+1);
      c = pic.pixels[index];
      r = red(c);
      g = green(c);
      b = blue(c);
      r = r + errR * 5/16.0;
      g = g + errG * 5/16.0;
      b = b + errB * 5/16.0;
      pic.pixels[index] = color(r,g,b);
      
      //pixels[x + 1][y + 1] := pixels[x + 1][y + 1] + quant_error × 1 / 16
      index = index(x+1,y+1);
      c = pic.pixels[index];
      r = red(c);
      g = green(c);
      b = blue(c);
      r = r + errR * 1/16.0;
      g = g + errG * 1/16.0;
      b = b + errB * 1/16.0;
      pic.pixels[index] = color(r,g,b);
      
    }
  }
  pic.updatePixels();
  image(pic,225+20,0);
}
