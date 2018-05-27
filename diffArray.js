function diffArray(arr1, arr2) {
    var newArr1 = [];
    var newArr2 = [];
    // Same, same; but different.
    
    newArr1 = arr1.filter(function(val){
      return arr2.indexOf(val) === -1;
    });
    
      newArr2 = arr2.filter(function(val){
      return arr1.indexOf(val) === -1;
    }); 
    
    return newArr1.concat(newArr2);
  }
  
  diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);