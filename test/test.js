import { describe, it } from 'assert';
import { equal } from 'assert/strict';
describe('Array', () => {
  it('should return -1 when the value is not presetn', () => {
    equal([1, 2, 3].indexOf(4), -1);
  });
});