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
	fill(200,200,200);
	text('test3', 20, 20);
	
}
