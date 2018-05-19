function chunkArrayInGroups(arr, size) {
    // Break it up.
    var arrResult = [];
    var numOfGroups = 0;
    if (arr.length % size == 0) {
      numOfGroups = Math.floor(arr.length / size);
    } else {
      numOfGroups = Math.floor(arr.length / size) + 1;
    }
    
    for (var i = 0; i < numOfGroups; i++){
      arrResult.push(arr.slice(i*size, i*size + size));
      }
    
      
    return arrResult;
  }
  
  chunkArrayInGroups(["a", "b", "c", "d","e"], 2);