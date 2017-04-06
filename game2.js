var k;
var col = 6;
row = 8;

var slider1, slider2;

function setup() {
  //createve
  slider1 = createSlider(1, 30, 6, 1);
  slider1.position(10, 10);
  slider1.style('width', '100px');
  slider2 = createSlider(1, 30, 8, 1);
  slider2.position(10, 30);
  slider2.style('width', '100px');
  //end
  
  
  
	createCanvas(windowWidth,windowHeight);
		if (windowWidth > windowHeight) {
			k = (windowHeight/row)*0.8;
			cnv = createCanvas(k*col, k*row);
			cnv.position(windowWidth/2-k*col/2, 0);
		cnv.background(50);
	} else {
			k = (windowWidth/col)*0.8;
			cnv = createCanvas(k*col, k*row);
			cnv.position(windowWidth/2-k*col/2, 0);
		cnv.background(240);
	}
}

function draw() {
  //creative
    col = slider1.value();
    row = slider2.value();
    	createCanvas(windowWidth,windowHeight);
		if (windowWidth > windowHeight) {
			k = (windowHeight/row)*0.8;
			cnv = createCanvas(k*col, k*row);
			cnv.position(windowWidth/2-k*col/2, 0);
		cnv.background(50);
	} else {
			k = (windowWidth/col)*0.8;
			cnv = createCanvas(k*col, k*row);
			cnv.position(windowWidth/2-k*col/2, 0);
		cnv.background(240);
	}
  //end
  
  
	stroke(200,200,200);
	
	   for(var i = 1; i < col; i++) {
	    line(i*k, 0, i*k, k*row);
	}
	   for(var i = 1; i < row; i++) {
	    line(0, i*k, k*col, k*i);
	}
} //draw

function Brick() {
  this.number = 3;
  this.start = random(col - this.number + 1);
  
    this.function = show() 
    {
            for (var i = 1; i < this.number + 1; i++){
                
            }
    }//show
  
  
}//Brick





function windowResized() {
  	if (windowWidth > windowHeight)
	{
			k = (windowHeight/8)*0.8;
			cnv = createCanvas(k*6, k*8);
			cnv.position(windowWidth/2-k*col/2, 0);
		cnv.background(60);
	} else
	{
			k = (windowWidth/6)*0.8;
			cnv = createCanvas(k*6, k*8);
			cnv.position(windowWidth/2-k*col/2, 0);
		cnv.background(240);
	}
}


