function sumAll(arr) {
    arrTemp = arr.sort(function(a,b){
      return a-b;
    });
    
    var sum = 0;
    for (var i = arrTemp[0]; i <= arrTemp[1]; i++) {
      sum += i;
    }
    
    return sum;
  }
  
  sumAll([10, 4]);