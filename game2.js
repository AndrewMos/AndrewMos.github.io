var k;
var col = 6;
row = 8;
var brick;

function setup() {
  frameRate(5);
 
  
	createCanvas(windowWidth,windowHeight);
		if (windowWidth > windowHeight) {
			k = (windowHeight/row)*0.8;
			cnv = createCanvas(k*col, k*row);
			cnv.position(windowWidth/2-k*col/2, 0);
	} else {
			k = (windowWidth/col)*0.8;
			cnv = createCanvas(k*col, k*row);
			cnv.position(windowWidth/2-k*col/2, 0);
	}
}

function draw() {
  cnv.background(100);
  translate(cnv.position);
  lines();
  
   brick = new Brick();
	brick.show();
} //draw

function Brick() {
  this.level = 8;
  this.number = 3;
  this.start = ceil(random(col - this.number + 1));
  
    this.show = function() 
    {
            for (var i = 0; i < this.number; i++){
		    stroke(20);
                rect(k * (this.start - 1 + i), k *(this.level - 1), k, k);
            }
    }//show
  
  
}//Brick


function lines() {
  	stroke(200,200,200);
	
	   for(var i = 1; i < col; i++) {
	    line(i*k, 0, i*k, k*row);
	}
	   for(var i = 1; i < row; i++) {
	    line(0, i*k, k*col, k*i);
	}
}


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




