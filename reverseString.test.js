import { expect } from "chai";
// import { reverseString } from './reverveString.js';
// DO NOT use curly bracket { reverseString } if 'export default reverseString'
// import reverseString from './reverveString.js';
import reverseThisString from './reverveString.js';

describe('Reverse a string function', () => {
  it('"hello" will return "olleh"', () => {
    let expected = 'olleh';
    // let actual = reverseString('hello');
    let actual = reverseThisString('hello');
    expect(actual).to.deep.equal(expected);
  });
});

// Run command to test
// npx mocha reverseString.test.js --require @babel/register