const quicksort = require('./index');

describe('Test the implementation of quick sort', () => {
  it('should sort an array', () => {
    expect(quicksort([2, 3, 1, 4])).toEqual([1, 2, 3, 4]);
  });

  it('should sort an array', () => {
    expect(quicksort([3, 2, 1])).toEqual([1, 2, 3]);
  });

  it('should return an already sorted array', () => {
    expect(quicksort([1, 2, 3])).toEqual([1, 2, 3]);
  });
});
