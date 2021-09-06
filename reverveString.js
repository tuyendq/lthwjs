const reverseString = function(str) {
    var strTemp = str.split('');  
    strTemp.reverse();
    return strTemp.join('');
}

export default reverseString;