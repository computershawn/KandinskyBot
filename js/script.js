let canvasWd = 800
let canvasHt = 600

// Make an instance of two and place it on the page.
var elem = document.getElementById('art-canvas')
var params = { width: canvasWd, height: canvasHt }
var two = new Two(params).appendTo(elem)

// Use these variables to control various attributes of the shapes
let x, y, rad0, rad1, sides, wd, ht, opacity, rotation
let rec0, cir0, tri0, arc0, sem0
let fill, stroke, strokeWeight

let triangles = []

// We can use these 2 constants to draw some
// of the shapes at an angle
const RO30 = 1
const RO45 = 2

function refresh() {
  two.clear()
  let backgroundColor = getRandomBackground()
  $('#art-canvas svg').css("background-color", backgroundColor)

  rotation = getAngle(RO30)

  // DRAW A CIRCLE
  // x = Math.round(Math.random()*canvasWd)
  // y = Math.round(Math.random()*canvasHt)
  // rad0 = Math.round(Math.random() * 80 + 20)
  // fill = '#FF8000'
  // stroke = '#000000'
  // strokeWeight = 1
  // opacity = randomRange(0.25, .75, false)
  // doCircle(x, y, rad0, fill, stroke, strokeWeight, opacity)

  // DRAW A RECTANGLE
  x = Math.round(Math.random()*canvasWd)
  y = Math.round(Math.random()*canvasHt)
  wd = 100
  ht = 100
  fill = 'rgb(0, 200, 255)'
  strokeWeight = randomRange(0, 4, true)
  opacity = randomRange(0.25, .75, false)
  doRectangle(x, y, wd, ht, fill, stroke, strokeWeight, opacity, rotation)

  // DRAW TRIANGLES
  let numTriangles = randomRange(1, 5, true)
  for(let i = 0; i < numTriangles; i++) {
    x = Math.round(Math.random()*canvasWd)
    y = Math.round(Math.random()*canvasHt)
    rad0 = Math.round(Math.random() * 80 + 20)
    fill = '#FF0000'
    stroke = '#330000'
    strokeWeight = randomRange(0, 4, true)
    opacity = randomRange(0.25, .75, false)
    let tri = getTriangle(x, y, rad0, fill, stroke, strokeWeight, opacity, rotation)
    triangles.push(tri)
  }

  // // DRAW A HEXAGON
  // x = Math.round(Math.random()*canvasWd)
  // y = Math.round(Math.random()*canvasHt)
  // //rad0 = Math.round(Math.random() * 80 + 20)
  // rad0 = randomRange(20, 100, true)
  // fill = '#0000FF'
  // stroke = '#000044'
  // strokeWeight = randomRange(0, 4, true)
  // opacity = randomRange(0.25, .75, false)
  // doHexagon(x, y, rad0, fill, stroke, strokeWeight, opacity, rotation)

  // DRAW AN ARC
  x = Math.round(Math.random()*canvasWd)
  y = Math.round(Math.random()*canvasHt)
  rad0 = randomRange(20, 200, true)
  rad1 = rad0 + randomRange(1, 8, true)
  fill = '#00FF00'
  strokeWeight = 0
  opacity = randomRange(0.25, .75, false)
  doArc(x, y, rad0, rad1, 0, Math.PI, fill, stroke, strokeWeight, opacity, rotation)

  // DRAW A SEMICIRCLE
  x = Math.round(Math.random()*canvasWd)
  y = Math.round(Math.random()*canvasHt)
  rad0 = 0
  rad1 = randomRange(20, 200, true)
  fill = '#8800FF'
  stroke = '#440088'
  strokeWeight = randomRange(0, 4, true)
  opacity = randomRange(0.25, .75, false)
  doSemiCirc(x, y, rad0, rad1, 0, Math.PI, fill, stroke, strokeWeight, opacity, rotation)


  whiskers(0, 0, 1)
  thickLine(0, 0, 1)
  curve1(0, 0, 2)
  curve2a(0, 0, 1)
  curve2b(0, 0, 2)
  curve3(0, 0, 1)
  //curve4(randomRange(0, 300, true), randomRange(0, 300), Math.random()*3 + 1)
  curve4(0, 0, 1)
  curve5(0, 0, 1)
  circle1(0, 0, 1)
  circle2(0, 0, 1)
  //circle1(randomRange(0, 300, true), randomRange(0, 300), Math.random()*3 + 1)
  //circle2(randomRange(0, 300, true), randomRange(0, 300), Math.random()*3 + 1)
  rectangle1(0, 0, 1)
  rectangle2(0, 0, 1)

  two.update()
}

// To turn off this timed refresh, comment out
// this line and un-comment the 'refresh' on
// the line under it...
let thing = setInterval(refresh, 2000)

// let thing = setInterval(swapComps, 3000)
// let c = 0
// function swapComps() {
//   c += 1
//   if(c % 2 == 0) {
//     refresh()
//   } else {
//     //Draw Mona's composition
//     drawMonaComp()
//   }
// }
