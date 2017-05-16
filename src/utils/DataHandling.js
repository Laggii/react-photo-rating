const defaultComparator = (firstElement, secondElement) => {
  if (firstElement < secondElement) {
    return -1;
  } else if (firstElement > secondElement) {
    return 1;
  } else {
    return 0;
  }
};

const swapIndices = (array, firstIndex, secondIndex) => {
  [array[firstIndex], array[secondIndex]] = [array[secondIndex], array[firstIndex]];
};

/**
 * Default Array.prototype.sort() in javascript is unstable and leads to different results in browsers
 * Since tile array is always almost sorted, insertion sort will be the good choice
 *
 * @param array
 * @param comparator
 * @returns {array}
 */
export const insertionSort = (array, comparator) => {
  comparator = comparator || defaultComparator;

  for (let i = 0; i < array.length; i++) {
    for (let currIndex = i; currIndex > 0; currIndex--) {
      if (comparator(array[currIndex], array[currIndex - 1]) < 0) {
        swapIndices(array, currIndex, currIndex - 1);
      } else {
        break;
      }
    }
  }

  return array;
};

export const randomNumber = (min, max) => {
  return Math.round(min - 0.5 + Math.random() * (max - min + 1));
};

