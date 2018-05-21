function mutation(arr) {
    var string1 = arr[0].toLowerCase();
    var string2 = arr[1].toLowerCase();
    for (var i = 0; i < arr[1].length; i++){
      if (string1.indexOf(string2.charAt(i)) !== -1){
        continue;
      } else {
        return false;
      }          
    }
    return true;
  }
  
  mutation(["Mary", "Army"]);
  