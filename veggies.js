function judgeVegetable(vegetables, characteristic) {
  bestVeggie = vegetables[0];
  for(let i = 0; i < vegetables.length; i++){
    if(vegetables[i][characteristic] > bestVeggie[characteristic]){
      bestVeggie = vegetables[i];
    }
  }
  return bestVeggie['submitter'];
}

const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const metric = 'plumpness'

console.log(judgeVegetable(vegetables, metric));
