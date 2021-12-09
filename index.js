const quicksort = (array) => {
  if (array.length <= 1) {
    return array;
  }
  const right = [];
  const left = [];
  const pivotValue = array[Math.floor(array.length / 2)];

  for (let i = 0; i < array.length; i += 1) {
    if (i === Math.floor(array.length / 2)) {
      // eslint-disable-next-line no-continue
      continue;
    }
    if (array[i] < pivotValue) {
      left.push(array[i]);
    } else {
      right.push(array[i]);
    }
  }
  return quicksort(left).concat(pivotValue, quicksort(right));
};

module.exports = quicksort;
