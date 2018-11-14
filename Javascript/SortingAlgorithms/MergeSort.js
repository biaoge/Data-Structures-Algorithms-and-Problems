/**
 * Merge Sort
 * @param {*} array 
 * logN levels, for each level, we use merge function, which is O(n), so the total time complexity is O(nlogn), O(n) space
 * 
 */
const MergeSort = (array) => {
  let otherArray = [...array];
  let helper = new Array(otherArray.length);
  mergeSort(otherArray, helper, 0, otherArray.length - 1);

  return otherArray;
}

function mergeSort(otherArray, helper, left, right) {
  if(left >= right) {
    return;
  }

  let mid = Math.floor((right - left) / 2) + left;
  mergeSort(otherArray, helper, left, mid);
  mergeSort(otherArray, helper, mid + 1, right);

  merge(otherArray, helper, left, mid, right);
}

function merge(otherArray, helper, left, mid, right) {
  for(let k = left; k <= right; k++) {
    helper[k] = otherArray[k];
  }

  let leftIndex = left, rightIndex = mid + 1;
  let k = left;

  while(leftIndex <= mid && rightIndex <= right) {
    if(helper[leftIndex] <= helper[rightIndex]) {
      otherArray[k++] = helper[leftIndex++];
    } else {
      otherArray[k++] = helper[rightIndex++];
    }
  }

  while(leftIndex <= mid) {
    otherArray[k++] = helper[leftIndex++];
  }

  while(rightIndex <= right) {
    otherArray[k++] = helper[rightIndex++];
  }
}
