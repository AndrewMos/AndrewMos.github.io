var k;

function setup() {
	createCanvas(windowWidth,windowHeight);
		if (windowWidth > windowHeight)
	{
			k = windowHeight/8;
			cnv = createCanvas(k*6, k*8);
			cnv.position(0, 0);
		cnv.background(50);
	} else
	{
			k = windowWidth/6;
			cnv = createCanvas(k*6, k*8);
			cnv.position(0, 0);
		cnv.background(240);
	}
}

function draw() {
	text('test', 20, 20);
	
}
