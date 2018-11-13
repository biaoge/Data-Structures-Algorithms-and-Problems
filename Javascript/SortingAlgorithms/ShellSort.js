// O(n^1.5) time complexity for Knuth Gap sequence.  O(1) space, NOT stable
const ShellSort = (array) => {
  // Clone original array to prevent its modification.
  const otherArray = [...array];

  let gap = 1;

  // this is Knuth Gap Sequence, which made shell sort time complexity O(n^1.5)
  while(gap < otherArray.length) {
    gap = gap * 3 + 1;
  }

  for(; gap > 0; gap = Math.floor(gap / 3)) {
    for(let i = gap; i < otherArray.length; i++) {
      let tmp = otherArray[i];
      
      let j = i - gap;
      for(; j >= 0 && otherArray[j] > tmp; j -= gap) {
        otherArray[j + gap] = otherArray[j];
      }
      otherArray[j + gap] = tmp;
    }
  }

  return otherArray;
}
