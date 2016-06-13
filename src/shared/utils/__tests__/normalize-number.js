jest.unmock('../normalize-number');

import normalizeNumber from '../normalize-number';

describe('normalizeNumber', () => {
  it('should normalize a string to return only numbers', () => {
    const string = 'a1b2c3d4e5';
    const expectation = '12345';

    expect(normalizeNumber(string)).toEqual(expectation);
  });
});
