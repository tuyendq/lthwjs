'use strict';
/**
 * @param {integer} n
 */
function countdown(n) {
    if (n < 1) {
        return [];
    } else {
        var arrayCount = countdown(n - 1);
        arrayCount.unshift(n);
        return arrayCount;
    }
}