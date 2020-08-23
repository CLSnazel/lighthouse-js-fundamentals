function howManyHundreds(num){
  let numDiff = num % 100;
  numHundreds = (num - numDiff) / 100;
  return numHundreds;
}

console.log(howManyHundreds(894));