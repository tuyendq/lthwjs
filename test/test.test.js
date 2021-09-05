import { expect } from 'chai';
describe('Array', () => {
  it('should return -1 when the value is not presetn', () => {
    const expected = -1;
    const actual = [1, 2, 3].indexOf(4);
    expect(actual).to.deep.equal(expected);
  });
});