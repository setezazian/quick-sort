const quicksort = (array) => {
  if (array.length <= 1) {
    return array;
  }
  const right = [];
  const left = [];
  const pivotValue = array[0];

  for (let i = 1; i < array.length; i += 1) {
    if (array[i] < pivotValue) {
      left.push(array[i]);
    } else {
      right.push(array[i]);
    }
  }
  return quicksort(left).concat(pivotValue, quicksort(right));
};

module.exports = quicksort;
