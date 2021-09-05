/* eslint-disable no-console */

const reverseString = function(str) {
  let strTemp = str.split('');  
  strTemp.reverse();
  return strTemp.join('');
};

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

// export default palindrome;  // When import, use any name for 'palindrome'
export { palindrome };  // When import, must use the same function name


// console.log(palindrome('anna'));
// console.log(palindrome('test'));