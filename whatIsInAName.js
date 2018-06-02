function whatIsInAName(collection, source) {
    // What's in a name?
    var arr = [];
    // Only change code below this line
    var sourceKeys = Object.keys(source);
    
    arr = collection.filter(function(obj){
        var exist;
        for (var i = 0; i < sourceKeys.length; i++){
          if (obj.hasOwnProperty(sourceKeys[i])) {
            if (obj[sourceKeys[i]] == source[sourceKeys[i]]) {
              exist = true;
            } else {
              exist = false;
              break;
            }
          } else {
            return false;
          }
        }
        return exist;
    });
  
    // Only change code above this line
    return arr;
  }
  
  whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 });