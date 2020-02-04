{
    const inside1 = 'inside1 in a scope.';
    let inside2 = 'inside2 in a scope.';
    var inside3 = 'inside3 in a scope';
    var inside4 = 'inside4 in a scope';
}
console.log(inside4);
console.log(inside3);
// console.log(inside2);
// console.log(inside1);
console.log('Can you read this line?');

function isClosure() {
    const inFunc = 'here is inside a function';
    return inFunc;
}

console.log(isClosure);
console.log(isClosure());

function multiply(multiplier) {
    return function (number) {
        return number * multiplier;
    }
}

let multiply10 = multiply(10);
console.log(multiply10(3));
let multiply4 = multiply(4);
console.log(multiply4(15));
