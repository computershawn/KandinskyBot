let canvasWd = 800
let canvasHt = 600

// Make an instance of two and place it on the page.
var elem = document.getElementById('draw-shapes')
var params = { width: canvasWd, height: canvasHt }
var two = new Two(params).appendTo(elem)

// two has convenience methods to create shapes.
let x, y, rad0, rad1, sides, wd, ht, opacity
let rec0, cir0, tri0, arc0
let fill, stroke, strokeWeight

function refresh() {
  two.clear()

  // DRAW A CIRCLE
  x = Math.round(Math.random()*canvasWd)
  y = Math.round(Math.random()*canvasHt)
  rad0 = Math.round(Math.random() * 80 + 20)
  fill = '#FF8000'
  stroke = '#000000'
  strokeWeight = 1
  opacity = randomRange(0.25, .75, false)
  doCircle(x, y, rad0, fill, stroke, strokeWeight, opacity)


  // DRAW A RECTANGLE
  x = Math.round(Math.random()*canvasWd)
  y = Math.round(Math.random()*canvasHt)
  wd = 100
  ht = 100
  fill = 'rgb(0, 200, 255)'
  strokeWeight = randomRange(0, 4, true)
  opacity = randomRange(0.25, .75, false)
  doRectangle(x, y, wd, ht, fill, stroke, strokeWeight, opacity)


  // DRAW A TRIANGLE
  x = Math.round(Math.random()*canvasWd)
  y = Math.round(Math.random()*canvasHt)
  rad0 = Math.round(Math.random() * 80 + 20)
  fill = '#FF0000'
  stroke = '#330000'
  strokeWeight = randomRange(0, 4, true)
  opacity = randomRange(0.25, .75, false)
  doTriangle(x, y, rad0, fill, stroke, strokeWeight, opacity)


  // DRAW A HEXAGON
  x = Math.round(Math.random()*canvasWd)
  y = Math.round(Math.random()*canvasHt)
  //rad0 = Math.round(Math.random() * 80 + 20)
  rad0 = randomRange(20, 100, true)
  fill = '#0000FF'
  stroke = '#000044'
  strokeWeight = randomRange(0, 4, true)
  opacity = randomRange(0.25, .75, false)
  doHexagon(x, y, rad0, fill, stroke, strokeWeight, opacity)


  // DRAW AN ARC
  x = Math.round(Math.random()*canvasWd)
  y = Math.round(Math.random()*canvasHt)
  rad0 = randomRange(20, 100, true)
  rad1 = randomRange(20, 100, true)
  if(Math.abs(rad0 - rad1) < 2) {
    rad1 = rad0 + 2
  }
  fill = '#00FF00'
  stroke = '#0022FF'
  strokeWeight = randomRange(0, 4, true)
  opacity = randomRange(0.25, .75, false)
  doArc(x, y, rad0, rad1, 0, Math.PI, fill, stroke, strokeWeight, opacity)

  two.update()
}

// To turn off this timed refresh, comment out
// this line and un-comment the 'refresh' on
// the line under it...
let thing = setInterval(refresh, 2000)
//refresh()
