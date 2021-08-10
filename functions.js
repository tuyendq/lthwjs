/* eslint-disable no-console */
'use strict';

console.log('Hi');

// global variable
var a = 5;

function myFunction(){
    a = 3;
    return a * a;
}

console.log('a = ' + a);
console.log('Call myFunction(): ' + myFunction());
console.log('a = ' + a);

// initiate counter
// var counter = 0
// increment counter
function add(){
    var counter = 0;
    function plus(){
        counter += 1;
    }
    plus();
    return counter;
}

console.log('Counter is: ' + add());

console.log('Counter is: ' + add());

// IIFE
var add2 = (function () {
    var counter = 0;
    return function () { 
        counter += 2;
        return counter;
    };
})();

console.log('Call add2 1st time: ' + add2());
console.log('Call add2 2nd time: ' + add2());
console.log('Call add2 3rd time: ' + add2());

console.log('Counter is: ' + add());
console.log('Counter is: ' + add());
console.log('Call add2 3rd time: ' + add2());

var fn = function forDebugOnly(message) {
    console.log(message);
};
fn('Anything here');
// forDebugOnly(); // Use fn() to call
