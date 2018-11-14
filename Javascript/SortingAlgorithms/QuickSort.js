/**
 * Complexity Analysis:
 * O(n^2) worst case
 * e.g: [1,2,3,4]，每次pivot都选到最小的，不过用随机选取的pivot可以降低这种可能性，从而提高性能
 * O(nlogn) best & average
 * @param {*} array 
 */
const QuickSort = (array) => {
  // Clone original array to prevent its modification.
  let otherArray = [...array];
  
  quickSort(otherArray, 0, otherArray.length - 1);
  
  return otherArray;
}

function quickSort(otherArray, left, right) {
  if(left >= right) {
    return;
  }

  let pivotPos = partition(otherArray, left, right);
  quickSort(otherArray, left, pivotPos - 1);
  quickSort(otherArray, pivotPos + 1, right);
}

/**
 * Extra: QuickSelect, select the kth largest / smallest element from the array
 * @param {*} array 
 * @param {*} k 
 */
const QuickSelect = (array, k) => {
  return quickSelect(array, 0, array.length - 1, k);
}

function quickSelect(array, left, right, k) {
  let pivotPos = partition(array, left, right);
  let m = pivotPos - left + 1;
  if(m === k) {
    return array[pivotPos];
  } else if(m < k) {
    return quickSelect(array, pivotPos + 1, right, k - m);
  } else {
    return quickSelect(array, left, pivotPos - 1, k);
  }
}



// Partition the Array according to pivot
function partition(otherArray, left, right) {
  let pivotIndex = findIndex(left, right);
  let pivot = otherArray[pivotIndex];

  [otherArray[pivotIndex], otherArray[right]] = [otherArray[right], otherArray[pivotIndex]];

  let leftBound = left, rightBound = right - 1;
  
  while(leftBound <= rightBound) {
    if(otherArray[leftBound] < pivot) {
      leftBound++;
    } else if(otherArray[rightBound] >= pivot) {
      rightBound--;
    } else {
      [otherArray[leftBound], otherArray[rightBound]] = [otherArray[rightBound], otherArray[leftBound]];
      leftBound++;
      rightBound--;
    }
  }
  [otherArray[leftBound], otherArray[right]] = [otherArray[right], otherArray[leftBound]];
  
  return leftBound;
}

// random select the pivot
function findIndex(left, right) {
  return left + Math.floor(Math.random() * (right - left + 1));
}
