function finalPosition(moves) {
  //calculates the position of the parade based on array of moves
  let pos = [ 0, 0 ]
  for(let move of moves){
    if(move === 'north'){
      pos[1] += 1;
    }
    else if(move === 'south'){
      pos[1] -= 1;
    }
    else if(move === 'west'){
      pos[0] -= 1;
    }
    else if(move === 'east'){
      pos[0] += 1;
    }
  }
  return pos; 
}

const moves = ['north', 'north', 'west', 'west', 'north', 'east','north'] 

console.log(finalPosition(moves)); // should be [-1. 4]