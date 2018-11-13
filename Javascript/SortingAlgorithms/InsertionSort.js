// O(n^2) time, O(1) spcae, Stable Sorting
const InsertionSort = (array) => {
  // Clone original array to prevent its modification.
  let otherArray = [...array];

  for(let i = 1; i < otherArray.length; i++) {
    let tmp = otherArray[i];
    let j = i - 1;
    // right shift all elments which are larger than ith element.
    for(; j >= 0 && otherArray[j] > tmp; j--) {
      otherArray[j + 1] = otherArray[j];
    }
    otherArray[j + 1] = tmp;
  }

  return otherArray;
}