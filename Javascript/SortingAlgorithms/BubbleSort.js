// O(n^2) time, O(1) Space,  Stable Sort: maintain the relative order of records with equal keys (e.g: value)
const BubbleSort = (array) => {
  // Flag that holds info about whether the swap has occur or not.
  let flag = false;
  // Clone original array to prevent its modification.
  const otherArray = [...array];

  for(let i = 0; i < otherArray.length; i++) {
    flag = false;

    for(let j = 0; j < otherArray.length - i; j++) {
      if(otherArray[j] > otherArray[j + 1]) {
        [otherArray[j], otherArray[j + 1]] = [otherArray[j + 1], otherArray[j]];
        
        flag = true;
      }
    }
  }

  // If there were no swaps then array is already sorted and there is
  // no need to proceed.
  if(!flag) {
    return otherArray;
  }
  return otherArray;
}
