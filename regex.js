/* eslint-disable no-console */
const removeNonAlphanumeric = function(string) {
  let re = /[^a-zA-Z0-9]/gi;
  return string.replace(re, '');
};

export { removeNonAlphanumeric };

// console.log(removeNonAlphanumeric('TEST123*** TEST'));
// console.log(removeNonAlphanumeric('TEST123***!@#$^&*()[]|   TEST'));
