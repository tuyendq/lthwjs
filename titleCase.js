function titleCase(str) {
    var arTemp = str.toLowerCase().split(' ');
    for (var i = 0; i < arTemp.length; i++){
      arTemp[i] = arTemp[i].replace(arTemp[i].charAt(0), arTemp[i].charAt(0).toUpperCase());
    }
    
    return arTemp.join(' ');
  }
  
  titleCase("hERE's MY HANDLE HERE IS MY ");  