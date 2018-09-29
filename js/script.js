// class definition for PulseColor;
class PulseColor {

  constructor(cList, rate) {
    this.interpValue = 0;
    this.interval = rate / 100;
    this.color = "#ffffff";
    this.scale = chroma.scale(cList);
  }

  update() {
    //reverse interval if out of bounds
    if (this.interpValue >= 1 || this.interpValue < 0) {
      this.interval *= -1;
    }

    // otherwise change the interpValue
    this.interpValue += this.interval;

    this.color = this.scale(this.interpValue);

  }

  getColor() {
    return this.color;
  }

}

// define and populate dynamic colors array
let dynamicColorsArray = [];
let colorLookup = [{
    colors: [chroma(232, 184, 165), chroma(215, 216, 211)],
    step: 2
  },
  {
    colors: [chroma(62, 54, 122), chroma(206, 211, 196), chroma(199, 209, 213)],
    step: 7
  },
  {
    colors: [chroma(211, 207, 177), chroma(226, 215, 131), chroma(63, 147, 130)],
    step: 5
  },
  {
    colors: [chroma(37, 58, 83), chroma(208, 30, 48), chroma(222, 197, 76), chroma(228, 177, 83)],
    step: 1
  },
  {
    colors: [chroma(230, 173, 180), chroma(148, 38, 56), chroma(41, 90, 150), chroma(120, 167, 149), chroma(65, 140, 161), chroma(174, 151, 57), chroma(205, 129, 35)],
    step: 4
  },
  {
    colors: [chroma(0, 49, 139), chroma(57, 118, 161), chroma(43, 42, 43)],
    step: 1
  },
  {
    colors: [chroma(231, 167, 144), chroma(231, 199, 180)],
    step: 5
  }
];
colorLookup.forEach(item => {
  let newDynamicColor = new PulseColor(item.colors, item.step);
  dynamicColorsArray.push(newDynamicColor);
})


var position_right_eye;
let canvasWd = 800
let canvasHt = 600

// Make an instance of two and place it on the page.
var elem = document.getElementById('art-canvas')
var params = {
  width: canvasWd,
  height: canvasHt
}
var two = new Two(params).appendTo(elem)

// Use these variables to control various attributes of the shapes
let x, y, rad0, rad1, sides, wd, ht, opacity, rotation
let rec0, cir0, tri0, arc0, sem0
let fill, stroke, strokeWeight
// We can use these 2 constants to draw some
// of the shapes at an angle
const RO30 = 1
const RO45 = 2

let triangles = []

let paramsLookup;
let monaShapesParams;

// randomRange(0, 6, true)

function setRandomParams() {

  monaShapesParams = [];

  for (let i = 0; i < 12; i++) {
    let params = [randomRange(0, 300, true), randomRange(0, 300), Math.random() * 3 + 1];
    monaShapesParams.push(params);
  }

  paramsLookup = {
    background: getRandomBackground(),
    rectangle: {
      x: Math.round(Math.random() * canvasWd),
      y: Math.round(Math.random() * canvasHt),
      wd: 100,
      ht: 100,
      fill: dynamicColorsArray[randomRange(0, 6, true)],
      strokeWeight: randomRange(0, 4, true),
      opacity: randomRange(0.25, .75, false)
    },
    triangles: [{
        x: Math.round(Math.random() * canvasWd),
        y: Math.round(Math.random() * canvasHt),
        rad0: Math.round(Math.random() * 80 + 20),
        fill: dynamicColorsArray[randomRange(0, 6, true)],
        stroke: '#330000',
        strokeWeight: randomRange(0, 4, true),
        opacity: randomRange(0.25, .75, false),
      },
      {
        x: Math.round(Math.random() * canvasWd),
        y: Math.round(Math.random() * canvasHt),
        rad0: Math.round(Math.random() * 80 + 20),
        fill: dynamicColorsArray[randomRange(0, 6, true)],
        stroke: '#330000',
        strokeWeight: randomRange(0, 4, true),
        opacity: randomRange(0.25, .75, false),
      },
      {
        x: Math.round(Math.random() * canvasWd),
        y: Math.round(Math.random() * canvasHt),
        rad0: Math.round(Math.random() * 80 + 20),
        fill: dynamicColorsArray[randomRange(0, 6, true)],
        stroke: '#330000',
        strokeWeight: randomRange(0, 4, true),
        opacity: randomRange(0.25, .75, false),
      }
    ],
    arc: {
      x: Math.round(Math.random() * canvasWd),
      y: Math.round(Math.random() * canvasHt),
      rad0: randomRange(20, 200, true),
      rad1: randomRange(1, 8, true),
      fill: dynamicColorsArray[randomRange(0, 6, true)],
      strokeWeight: 0,
      opacity: randomRange(0.25, .75, false),
    },
    simicircle: {
      x: Math.round(Math.random() * canvasWd),
      y: Math.round(Math.random() * canvasHt),
      rad0: 0,
      rad1: randomRange(20, 200, true),
      fill: dynamicColorsArray[randomRange(0, 6, true)],
      stroke: '#440088',
      strokeWeight: randomRange(0, 4, true),
      opacity: randomRange(0.25, .75, false)
    },
    rotation: getAngle(RO30)
  }
}






function reset() {

  setRandomParams();

}

reset();

var posToGo;
var increment;
var oldPosToGo;


function refresh() {

  dynamicColorsArray.forEach(color => {
    color.update();
  })

  two.clear()
  let backgroundColor = paramsLookup.background;
  $('#art-canvas svg').css("background-color", backgroundColor)

  rotation = paramsLookup.rotation+(position_right_eye*10);


  // DRAW A RECTANGLE
  x = paramsLookup.rectangle.x;
  y = paramsLookup.rectangle.y;
  wd = paramsLookup.rectangle.wd;
  ht = paramsLookup.rectangle.ht;
  fill = paramsLookup.rectangle.fill.getColor();
  strokeWeight = paramsLookup.rectangle.strokeWeight;
  opacity = paramsLookup.rectangle.opacity;
  doRectangle(x, y, wd, ht, fill, stroke, strokeWeight, opacity, rotation)

  // DRAW TRIANGLES
  let numTriangles = 3;
  for (let i = 0; i < numTriangles; i++) {
    x = paramsLookup.triangles[i].x;
    y = paramsLookup.triangles[i].y;
    rad0 = paramsLookup.triangles[i].rad0;
    fill = paramsLookup.triangles[i].fill.getColor();
    stroke = paramsLookup.triangles[i].stroke;
    strokeWeight = paramsLookup.triangles[i].strokeWeight;
    opacity = paramsLookup.triangles[i].opacity;
    let tri = getTriangle(x, y, rad0, fill, stroke, strokeWeight, opacity, rotation)
    triangles.push(tri)
  }

  // DRAW AN ARC
  x = paramsLookup.arc.x
  y = paramsLookup.arc.y;
  rad0 = paramsLookup.arc.rad0;
  rad1 = paramsLookup.arc.rad0 + paramsLookup.arc.rad1;
  fill = paramsLookup.arc.fill.getColor();
  strokeWeight = paramsLookup.arc.strokeWeight;
  opacity = paramsLookup.arc.opacity;
  doArc(x, y, rad0, rad1, 0, Math.PI, fill, stroke, strokeWeight, opacity, rotation)

  // DRAW A SEMICIRCLE
  x = paramsLookup.simicircle.x;
  y = paramsLookup.simicircle.y;
  rad0 = paramsLookup.simicircle.rad0;
  rad1 = paramsLookup.simicircle.rad1;
  fill = paramsLookup.simicircle.fill.getColor();
  stroke = paramsLookup.simicircle.stroke;
  strokeWeight = paramsLookup.simicircle.strokeWeight;
  opacity = paramsLookup.simicircle.opacity;
  doSemiCirc(x, y, rad0, rad1, 0, Math.PI, fill, stroke, strokeWeight, opacity, rotation)


  posToGo = 200-(position_right_eye-9)*10;
  posToGo = posToGo/100;
  console.log(posToGo);

  whiskers(monaShapesParams[0][0], monaShapesParams[0][1], monaShapesParams[0][2]+posToGo)
  thickLine(monaShapesParams[1][0], monaShapesParams[1][1], monaShapesParams[1][2]+posToGo)
  curve1(monaShapesParams[2][0], monaShapesParams[2][1], monaShapesParams[2][2]+posToGo)
  curve2a(monaShapesParams[3][0], monaShapesParams[3][1], monaShapesParams[3][2]+posToGo)
  curve2b(monaShapesParams[4][0], monaShapesParams[4][1], monaShapesParams[4][2]+posToGo)
  curve3(monaShapesParams[5][0], monaShapesParams[5][1], monaShapesParams[5][2]+posToGo)
  //curve4(randomRange(0, 300, true), randomRange(0, 300), Math.random()*3 + 1)
  curve4(monaShapesParams[6][0], monaShapesParams[6][1], monaShapesParams[6][2]+posToGo)
  curve5(monaShapesParams[7][0], monaShapesParams[7][1], monaShapesParams[7][2]+posToGo)
  circle1(monaShapesParams[8][0], monaShapesParams[8][1], monaShapesParams[8][2]+posToGo)
  circle2(monaShapesParams[9][0], monaShapesParams[9][1], monaShapesParams[9][2]+posToGo)
  //circle1(randomRange(0, 300, true), randomRange(0, 300), Math.random()*3 + 1)
  //circle2(randomRange(0, 300, true), randomRange(0, 300), Math.random()*3 + 1)
  rectangle1(monaShapesParams[10][0], monaShapesParams[10][1], monaShapesParams[10][2]+posToGo)
  rectangle2(monaShapesParams[11][0], monaShapesParams[11][1], monaShapesParams[11][2]+posToGo)

  oldPosToGo = posToGo;

  two.update()
}

document.onmousedown = () => {
  reset();
}


// To turn off this timed refresh, comment out
// this line and un-comment the 'refresh' on
// the line under it...
let thing = setInterval(refresh, 100)