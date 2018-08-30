function makeLoadedDie() {
  var list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
  var currentNum = 0;
  var counter = 0;

  return function() {
    currentNum = list[counter];
    counter += 1;
    return currentNum;
  }
}

var rollLoadedDie = makeLoadedDie();

console.log(rollLoadedDie());  // 5
console.log(rollLoadedDie());  // 4
console.log(rollLoadedDie());  // 6