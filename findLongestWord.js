function findLongestWord(str) {
    var arrTemp = str.split(' ');
    var arrLength = arrTemp.length;
    maxLength = 0;
    for (var i = 0; i < arrLength; i++){
      if (arrTemp[i].length > maxLength ){
        maxLength = arrTemp[i].length;
      } else {
        //do nothing
      }
    }
    
    return maxLength;
    //return str.length;
  }
  
  findLongestWord("The quick brown fox jumped over the lazy dog yeahhhhhhh");