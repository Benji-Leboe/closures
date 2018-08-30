var countdownGenerator = function (x) {
  var count = x;
  var output = "";

  return function(){
    if(count > 0){
      output = "T-minus " + count + "...";
      count -= 1;
      return output;
    }else if(count === 0){
      output = "Blast Off!";
      count -= 1;
      return output;
    }else{
      output = "Rockets already gone, bub!";
      return output;
    }
  }
};

var countdown = countdownGenerator(3);
console.log(countdown()); // T-minus 3...
console.log(countdown()); // T-minus 2...
console.log(countdown()); // T-minus 1...
console.log(countdown()); // Blast Off!
console.log(countdown()); // Rockets already gone, bub!
console.log(countdown()); // Rockets already gone, bub!