function palindrome(str) {
    // Good luck!
    var nonAlphanumeric = /\s+|[.,\/#!$%\^&\*;:{}=\-_`~()]/gi;  
    strTemp = str.replace(nonAlphanumeric, "");
    strTemp = strTemp.toLowerCase();
    if (strTemp === reverseString(strTemp)){
      return true;
    } else {
    return false;
    }
  }
  
  function reverseString(str){
    var strTemp = str.split('');  
    strTemp.reverse();
    return strTemp.join('');
  }