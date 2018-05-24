function getIndexToIns(arr, num) {
    // Find my place in this sorted array.
    arr.sort(function(a,b){
             return a - b;
             });
    var IndexToIns = 0;
    if (num > arr[arr.length-1]) {
      return arr.length;
    }
    
    for (var i = 0; i < arr.length; i++) {
      if (num <= arr[i]) {
        IndexToIns = i;
        break;
      }
    }
    
    return IndexToIns;
  }
  
  getIndexToIns([2, 5, 10], 15);