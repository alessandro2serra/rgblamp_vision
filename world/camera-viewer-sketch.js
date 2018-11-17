var s = function( sketch ) {
    var rSlider, gSlider, bSlider;
    var capture;

    sketch.setup = function() {
	// create canvas
	var c=sketch.createCanvas(710, 400);
	sketch.frameRate(30);
	sketch.textSize(15);
	sketch.noStroke();
	
	rSlider=sketch.select("#rslider");
	gSlider=sketch.select("#gslider");
	bSlider=sketch.select("#bslider");
	capture = sketch.createCapture(sketch.VIDEO);
	capture.hide();
    }
    
    sketch.draw = function() {
	
	var r = rSlider.value();
	var g = gSlider.value();
	var b = bSlider.value();

	sketch.image(capture, 0, 0,710,400);
	sketch.loadPixels();
	
	for (var x = 0; x < sketch.width; x++) {
	    for (var y = 0; y < sketch.height; y++ ) {
		// Calculate the 1D location from a 2D grid
		var loc = (x + y*sketch.width)*4;
		// Get the R,G,B values from img
		var red,green,blue;
		red = sketch.pixels[loc];
		green = sketch.pixels[loc+1];
		blue = sketch.pixels[loc+2];
		red=sketch.constrain(red*r/100, 0, 255);
		green=sketch.constrain(green*g/100, 0, 255);
		blue=sketch.constrain(blue*b/100, 0, 255);
		var pixloc = loc;
		sketch.pixels[pixloc] = red;
		sketch.pixels[pixloc+1] = green;
		sketch.pixels[pixloc+2] = blue;
		sketch.pixels[pixloc+3] = 255;
	    }
	}
	sketch.updatePixels();
    }
};

var myp5 = new p5(s, 'p5sketch');


