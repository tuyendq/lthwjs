import { expect } from 'chai';
import { removeNonAlphanumeric } from './regex.js';

describe('Remove non-alphanumeric', () => {
  it('"TEST123*** TEST" will return "TEST123TEST"', () => {
    let exptected = 'TEST123TEST';
    let actual = removeNonAlphanumeric('TEST123*** TEST');
    expect(actual).to.deep.equal(exptected);
  });

  it('"TEST123***!@#$^&*()[]|   TEST" will return "TEST123TEST"', () => {
    let exptected = 'TEST123TEST';
    let actual = removeNonAlphanumeric('TEST123***!@#$^&*()[]|   TEST');
    expect(actual).to.deep.equal(exptected);
  });  
});

// Run this command to test
// npx mocha regex.test.js --require @babel/register