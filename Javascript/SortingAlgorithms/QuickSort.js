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
  
  quickSort(0, otherArray.length - 1);
  
  return otherArray;

  function quickSort(left, right) {
    if(left >= right) {
      return;
    }

    let pivotPos = partition(left, right);
    quickSort(left, pivotPos - 1);
    quickSort(pivotPos + 1, right);
  }

  // Partition the Array according to pivot
  function partition(left, right) {
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
  
}