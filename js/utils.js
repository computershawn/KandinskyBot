// JUST A FEW UTILITY FUNCTIONS TO MAKE REPETITIVE
// MATH TASKS A BIT EASIER


// Get a number between minNum and maxNum
// If the 'round' parameter is set to free,
// the function will round the number
function randomRange(minNum, maxNum, round) {
  let num = Math.random() * (maxNum-minNum) + minNum
  if(round) {
    return Math.round(num)
  } else {
    return num
  }
}

function getAngle(angleMode) {
  // Return a random angle from one of the following two
  // arrays. Shapes at 30- and 45-degree angles were common
  // in early 20th century graphic design. We can rotate some
  // or all of our shapes to these special angles
  let thirties = [30, 60, 120, 150, 210, 240, 300, 330]
  let fortyfives = [45, 135, 225, 315]
  let index

  if(angleMode === 1) {
    index = Math.round(Math.random() * (thirties.length-1))
    return thirties[index]
  }
  if(angleMode === 2) {
    index = Math.round(Math.random() * (fortyfives.length-1))
    return fortyfives[index]
  }
  return 0
}

function getRandomBackground() {
  let backgrounds = ["#f0ffdd", "#fff3f6", "#f7f7f7"]
  let index = Math.round(Math.random() * (backgrounds.length-1))
  return backgrounds[index]
}
