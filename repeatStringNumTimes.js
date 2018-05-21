function repeatStringNumTimes(str, num) {
    // repeat after me
    var strResult = "";
    if (num <= 0) {
      strResult = "";
    } else {
      for (var i = 0; i < num; i++){
        strResult = strResult.concat(str);
      }
    }
    return strResult;
  }
  
  repeatStringNumTimes("abc", 3);