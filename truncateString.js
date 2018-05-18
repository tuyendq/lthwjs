function truncateString(str, num) {
    // Clear out that junk in your trunk
    var strResult = "";
    if (num >= str.length){
      strResult = str;
    } else if (num <= 3){
      strResult = str.slice(0, num) + "...";
    } else {
      strResult = str.slice(0, num - 3) + "...";
    }
      
    return strResult;
  }
  
  truncateString("A-tisket a-tasket A green and yellow basket", 11);