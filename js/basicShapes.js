
function doTriangle(xC, yC, triangleRadius, fill , stroke, strokeWeight, opacity) {
  tri0 = two.makePolygon(xC, yC, triangleRadius, 3)
  tri0.opacity = opacity
  tri0.fill = fill
  if(strokeWeight === 0) {
    tri0.noStroke()
  } else {
    tri0.stroke = stroke
    tri0.linewidth = strokeWeight
  }
}

function doHexagon(xC, yC, hexRadius, fill , stroke, strokeWeight, opacity) {
  hex0 = two.makePolygon(xC, yC, hexRadius, 6)
  hex0.rotation = Math.PI / 2
  hex0.opacity = opacity
  hex0.fill = fill
  if(strokeWeight === 0) {
    hex0.noStroke()
  } else {
    hex0.stroke = stroke
    hex0.linewidth = strokeWeight
  }
}

function doArc(xC, yC, radius0, radius1, startAngle, endAngle, fill, stroke, strokeWeight, opacity) {
  arc0 = two.makeArcSegment(xC, yC, radius0, radius1, startAngle, endAngle)
  arc0.opacity = opacity
  arc0.fill = fill
  if(strokeWeight === 0) {
    arc0.noStroke()
  } else {
    arc0.stroke = stroke
    arc0.linewidth = strokeWeight
  }
}

function doCircle(xC, yC, circleRadius, fill, stroke, strokeWeight, opacity) {
  cir0 = two.makeCircle(xC, yC, circleRadius)
  cir0.opacity = opacity
  cir0.fill = fill
  if(strokeWeight === 0) {
    cir0.noStroke()
  } else {
    cir0.stroke = stroke
    cir0.linewidth = strokeWeight
  }
}

function doRectangle(xC, yC, width, height, fill, stroke, strokeWeight, opacity) {
  rec0 = two.makeRectangle(x, y, width, height)
  rec0.opacity = opacity
  rec0.fill = fill
  if(strokeWeight === 0) {
    rec0.noStroke()
  } else {
    rec0.stroke = stroke
    rec0.linewidth = strokeWeight
  }
}
