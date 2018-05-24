function destroyer(arr) {
    // Remove all the values
    var arrResult = arguments[0];
    
    var numArgs = arguments.length;
    var arr2 = [];
    for (var i = 1; i < numArgs; i++){
      arr2.push(arguments[i]);
    }
      
    for (var j = 0; j < arr2.length; j++){
      arrResult = arrResult.filter(function(val){
        return (val !== arr2[j]);
      });
    }
      
    return arrResult;
  
  }
  
  destroyer([3, 5, 1, 2, 2], 2, 3, 5);