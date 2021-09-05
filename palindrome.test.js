import { expect } from 'chai';
import { palindrome } from './palindrome.js';

describe('Check if a string is palindrome', () => {
  it('Return true for "anna"', () => {
    let expected = true;
    let actual = palindrome('anna');
    expect(actual).to.deep.equal(expected);
  })

  it('Return true for "ann a"', () => {
    let expected = true;
    let actual = palindrome('anna');
    expect(actual).to.deep.equal(expected);
  })

  it('Return false for "test "', () => {
    let expected = false;
    let actual = palindrome('test ');
    expect(actual).to.deep.equal(expected);
  })
});

// Run this command to test
// npx mocha palindrome.test.js --require @babel/register
