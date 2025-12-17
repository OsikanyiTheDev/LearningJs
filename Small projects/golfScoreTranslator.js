const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes){
  if (strokes == 1) {
    return names[0]
  } else if(strokes <= par-2) {
    return names[1]
  } else if(strokes == par-1) {
    return names[2]
  } else if (strokes == par) {
    return names[3]
  } else if(strokes == par+1) {
    return names[4]
  } else if(strokes == par+ 2) {
    return names[5]
  } else {
    return names[6]
  }
}

// same function using switch statement

// Correct version using switch (fully equivalent to your if-else version)
function golfScore(par, strokes) {
  switch (true) {
    case strokes === 1:
      return names[0];                  // Hole-in-one!

    case strokes <= par - 2:
      return names[1];                  // Eagle (includes albatross, condor, etc.)

    case strokes === par - 1:
      return names[2];                  // Birdie

    case strokes === par:
      return names[3];                  // Par

    case strokes === par + 1:
      return names[4];                  // Bogey

    case strokes === par + 2:
      return names[5];                  // Double Bogey

    default:
      return names[6];                  // Go Home!
  }
}