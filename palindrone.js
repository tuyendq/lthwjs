/* eslint-disable no-console */
'use strict';

const palindrome = function(str) {
  // Good luck!
  const nonAlphanumeric = /\s+|[.,/#!$%^&*;:{}=\-_`~()]/gi;  
  let strTemp = str.replace(nonAlphanumeric, "");
  strTemp = strTemp.toLowerCase();
  if (strTemp === reverseString(strTemp)) {
    return true;
  } else {
    return false;
  }
};
  
const reverseString = function(str) {
  let strTemp = str.split('');  
  strTemp.reverse();
  return strTemp.join('');
};

console.log(palindrome('anna'));
console.log(palindrome('test'));