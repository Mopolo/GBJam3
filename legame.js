var multiplicator = 3;

var width = 160*multiplicator;
var height = 144*multiplicator;

var color1 = '#abd530';
var color2 = '#5c611a';
var color3 = '#595c1a';
var color4 = '#effeb3';

function line(startX, startY, endX, endY, lineWidth) {
	if (typeof lineWidth == 'undefined') {
		lineWidth = 1;
	}

	return new Kinetic.Line({
        points: [startX, startY, endX, endY],
        stroke: color2,
        strokeWidth: lineWidth,
        lineCap: 'butt',
        lineJoin: 'bevel'
    });
}

var stage = new Kinetic.Stage({
    container: 'leGame',
    width: width,
    height: height
});

var staticLayer = new Kinetic.Layer();

staticLayer.add(new Kinetic.Rect({
    x: 0,
    y: 0,
    width: stage.getWidth(),
    height: stage.getHeight(),
    fill: color1,
}));

// Borders:
staticLayer.add(line(0, 0, 0, width, 4*multiplicator));
staticLayer.add(line(0, 0, width, 0, 4*multiplicator));
staticLayer.add(line(0, height, width, height, 4*multiplicator));
staticLayer.add(line(width, 0, width, height, 4*multiplicator));

// Right separator:
staticLayer.add(line(width*0.7, 0, width*0.7, height, 2*multiplicator));

staticLayer.add(new Kinetic.Text({
    text: 'SCORE',
    x: width - 44*multiplicator,
    y: 4*multiplicator,
    fontSize: 40,
    fontFamily: 'Courier New',
    fill: color4
}));

for (var i = 1; i < height/8*multiplicator; i++) {
    //staticLayer.add(line());
}

stage.add(staticLayer);
staticLayer.draw();

var dynamicLayer = new Kinetic.Layer();

var score = new Kinetic.Text({
    text: '000000',
    x: width - 44*multiplicator,
    y: 20*multiplicator,
    fontSize: 34,
    fontFamily: 'Courier New',
    fill: color3
});

dynamicLayer.add(score);

stage.add(dynamicLayer);
dynamicLayer.draw();

var loop = function() {
    score.setText(Math.ceil(Math.random(1,999999)*999999, 1));
    dynamicLayer.draw();
};

setInterval(loop, 100);