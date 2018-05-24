function rot13(str) { // LBH QVQ VG!
    //arr = str.split('');
    var arr = [];
    for (var i = 0; i < str.length; i++){
      var charCode = str.charCodeAt(i);
      if ( charCode < 65 || charCode > 90 ) {
        arr.push( String.fromCharCode(charCode));
      } else if (str.charCodeAt(i) - 13 >= 65) {
        arr.push( String.fromCharCode(charCode - 13));
      } else {
        arr.push( String.fromCharCode(charCode + 13));
      }
    }
    
    return arr.join('');
  
  }
  
  // Change the inputs below to test
  rot13("GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK.");