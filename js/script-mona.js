// Make an instance of two and place it on the page.
// var elem = document.getElementById('art-canvas');
// var params = { width: 800, height: 600 };
// var two = new Two(params).appendTo(elem);


function circle1(dx, dy, sc) {
  // two has convenience methods to create shapes.
  var lineCircle = two.makeCircle(189, 150, 60);
  //circle.fill = '#FF8000';
  lineCircle.stroke = "rgba(0, 0, 0, 1)"; // Accepts all valid css color
  lineCircle.linewidth = 5;

  var fillCircle = two.makeCircle(189, 150, 10);
  fillCircle.fill = '#FF8000';
  fillCircle.stroke = "rgba(0, 0, 0, 1)"; // Accepts all valid css color
  fillCircle.linewidth = 3;

  lineCircle.scale = sc;
  lineCircle.translation.set(dx, dy)
  fillCircle.scale = sc;
  fillCircle.translation.set(dx, dy)
}

function circle2(dx, dy, sc) {
  var lineCircle = two.makeCircle(450, 400, 50);
  //circle.fill = '#FF8000';
  lineCircle.stroke = "rgba(0, 0, 0, 1)"; // Accepts all valid css color
  lineCircle.linewidth = 4;

  var fillCircle = two.makeCircle(450, 400, 10);
  fillCircle.fill = 'rgb(0, 200, 255)';
  fillCircle.stroke = "rgba(0, 0, 0, 1)"; // Accepts all valid css color
  fillCircle.linewidth = 2;

  lineCircle.scale = sc;
  lineCircle.translation.set(dx, dy)
  fillCircle.scale = sc;
  fillCircle.translation.set(dx, dy)
}

function rectangle1(dx, dy, sc) {
  var rect1 = two.makeRectangle(72, 250, 50, 20);
  rect1.fill = 'rgb(0, 200, 255)';
  rect1.opacity = 0.75;
  rect1.noStroke();
  rect1.scale = sc;
  rect1.translation.set(dx, dy)
}

function rectangle2(dx, dy, sc) {
  var rect2 = two.makeRectangle(340, 230, 100, 70);
  rect2.fill = '#FF8000';
  rect2.opacity = 0.75;
  rect2.noStroke();
  rect2.scale = sc;
  rect2.translation.set(dx, dy)

}

function whiskers(dx, dy, sc) {
  var line1 = two.makeLine(560, 110, 600, 250);
  line1.linewidth = 3;
  line1.stroke = "rgba(0, 0, 0, 1)";
  line1.scale = sc;
  line1.translation.set(dx, dy)

  var line2 = two.makeLine(565, 90, 650, 250);
  line2.linewidth = 3;
  line2.stroke = "rgba(0, 0, 0, 1)";
  line2.scale = sc;
  line2.translation.set(dx, dy)

  var line3 = two.makeLine(576, 70, 700, 250);
  line3.linewidth = 3;
  line3.stroke = "rgba(0, 0, 0, 1)";
  line3.scale = sc;
  line3.translation.set(dx, dy)

}

function thickLine(dx, dy, sc) {
  var line4Thick = two.makeLine(140, 342, 540, 570);
  line4Thick .linewidth = 10;
  line4Thick.scale = sc;
  line4Thick.translation.set(dx, dy)
  line4Thick .stroke = "rgba(0, 0, 0, 1)";
}

function curve1(dx, dy, sc) {
  var curve1 = two.makeCurve(520, 108, 566, 160, 530, 216, true);
  curve1.linewidth = 2;
  curve1.scale = sc;
  curve1.translation.set(dx, dy)
  curve1.rotation = 0.0;
  curve1.noFill();
}

function curve2a(dx, dy, sc) {
  var curve2 = two.makeCurve(324, 108, 360, 180, 350, 220, 306, 290, 306, 350, 342, 378, true);
  curve2.linewidth = 2;
  curve2.scale = sc;
  curve2.translation.set(dx, dy)
  curve2.rotation = 0.0;
  curve2.noFill();
}

function curve2b(dx, dy, sc) {
  var curve2 = two.makeCurve(324, 108, 360, 180, 350, 220, 306, 290, 306, 350, 342, 378, true);
  curve2.linewidth = 2;
  curve2.scale = sc;
  curve2.translation.set(dx, dy)
  curve2.rotation = 0.5;
  curve2.noFill();
}

function curve3(dx, dy, sc) {
  var curve3 = two.makeCurve(315, 144, 330, 180, 288, 270, 280, 300, 300, 378, 340, 400, true);
  curve3.linewidth = 2;
  curve3.scale = sc;
  curve3.translation.set(dx, dy)
  curve3.rotation = 0.0
  curve3.noFill()
}

function curve4(dx, dy, sc) {
  var curve4 = two.makeCurve(295, 198, 268, 235, 250, 290, 275, 388, 305, 410, true);
  curve4.linewidth = 2
  curve4.scale = sc
  curve4.translation.set(dx, dy)
  curve4.rotation = 0.0
  curve4.noFill()
}

function curve5(dx, dy, sc) {
  var curve5 = two.makeCurve(400, 100, 500, 300, 300, 500, true);
  curve5.linewidth = 3;
  curve5.scale = sc;
  curve5.translation.set(dx, dy)
  curve5.rotation = 0.0;
  curve5.noFill();
}



//two.update();
