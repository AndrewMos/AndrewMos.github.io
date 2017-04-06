var k;

function setup() {
	createCanvas(windowWidth,windowHeight);
		if (windowWidth > windowHeight)
	{
			k = windowHeight/8;
			cnv = createCanvas(k*6, windowHeight);
			cnv.position(0, 0);
	} else
	{
			k = windowWidth/6;
			cnv = createCanvas(k*6, k*8);
			cnv.position(0, 0);
	}
}

function draw() {
	cnv.background(200);
}
