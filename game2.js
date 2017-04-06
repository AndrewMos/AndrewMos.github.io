var k;

function setup() {
	createCanvas(windowWidth,windowHeight);
		if (windowWidth > windowHeight)
	{
			k = (windowHeight/8)*0.8;
			cnv = createCanvas(k*6, k*8);
			cnv.position(0, 0);
		cnv.background(50);
	} else
	{
			k = (windowWidth/6)*0.8;
			cnv = createCanvas(k*6, k*8);
			cnv.position(0, 0);
		cnv.background(240);
	}
}

function draw() {
	stroke(200,200,200);
	
	   for(var i = 1; i < 6; i++)
	{
	    line(i*k, 0, i*k, k*8);
	}
	   for(var i = 1; i < 8; i++)
	{
	    line(0, i*k, k*6, k*i);
	}
}


function windowResized() {
  	if (windowWidth > windowHeight)
	{
			k = (windowHeight/8)*0.8;
			cnv = createCanvas(k*6, k*8);
			cnv.position(0, 0);
		cnv.background(50);
	} else
	{
			k = (windowWidth/6)*0.8;
			cnv = createCanvas(k*6, k*8);
			cnv.position(0, 0);
		cnv.background(240);
	}
}
