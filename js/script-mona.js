// Make an instance of two and place it on the page.
var elem = document.getElementById('draw-shapes');
var params = { width: 285, height: 200 };
var two = new Two(params).appendTo(elem);

// two has convenience methods to create shapes.
var lineCircle = two.makeCircle(70, 70, 30);
//circle.fill = '#FF8000';
lineCircle.stroke = "rgba(0, 0, 0, 1)"; // Accepts all valid css color
lineCircle.linewidth = 3;

var lineCircle = two.makeCircle(190, 150, 25);
//circle.fill = '#FF8000';
lineCircle.stroke = "rgba(0, 0, 0, 1)"; // Accepts all valid css color
lineCircle.linewidth = 3;

var fillCircle = two.makeCircle(70, 70, 10);
fillCircle.fill = '#FF8000';
fillCircle.stroke = "rgba(0, 0, 0, 1)"; // Accepts all valid css color
fillCircle.linewidth = 2;

var fillCircle = two.makeCircle(190, 150, 10);
fillCircle.fill = 'rgb(0, 200, 255)';
fillCircle.stroke = "rgba(0, 0, 0, 1)"; // Accepts all valid css color
fillCircle.linewidth = 1;

var rect1 = two.makeRectangle(28, 120, 41, 5);
rect1.fill = 'rgb(0, 200, 255)';
rect1.opacity = 0.75;
rect1.noStroke();

var rect2 = two.makeRectangle(180, 100, 41, 50);
rect2.fill = '#FF8000';
rect2.opacity = 0.75;
rect2.noStroke();

var line1 = two.makeLine(234, 65, 255, 100);
line1.linewidth = 1;
line1.stroke = "rgba(0, 0, 0, 1)";

var line2 = two.makeLine(234, 70, 250, 100);
line2.linewidth = 1;
line2.stroke = "rgba(0, 0, 0, 1)";

var line3 = two.makeLine(234, 75, 245, 100);
line3.linewidth = 1;
line3.stroke = "rgba(0, 0, 0, 1)";

var line4Thick = two.makeLine(54, 144, 216, 234);
line4Thick .linewidth = 4;
line4Thick .stroke = "rgba(0, 0, 0, 1)";


var curve1 = two.makeCurve(200, 45, 230, 60, 216, 86,true);
curve1.linewidth = 2;
curve1.scale = 1;
curve1.rotation = 0.0;
curve1.noFill();


var curve2 = two.makeCurve(140, 30, 155, 60, 140, 85, 130, 100, 125, 120, 140, 155, true);
curve2.linewidth = 2;
curve2.scale = 1;
curve2.rotation = 0.0;
curve2.noFill();


var curve3 = two.makeCurve(115, 77, 103, 108, 118, 155, true);
curve3.linewidth = 2;
curve3.scale = 1;
curve3.rotation = 0.0;
curve3.noFill();

var curve4 = two.makeCurve(140, 52, 108, 108, 126, 155, true);
curve4.linewidth = 2;
curve4.scale = 1;
curve4.rotation = 0.0;
curve4.noFill();

/*two.bind('update', function(frameCount) {
  curve4.scale = 1 + frameCount/100;
});
two.play();

*/

// Don't forget to tell two to render everything
// to the screen
two.update();
