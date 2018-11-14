// O(n^2) time, O(1) space, NOT stable sort
const SelectionSort = (array) => {
  // Clone original array to prevent its modification.
  let otherArray = [...array];

  for(let i = 0; i < otherArray.length; i++) {
    let minIndex = i;

    for(let j = i + 1; j < otherArray.length; j++) {
      if(otherArray[j] < otherArray[minIndex]) {
        minIndex = j;
      }
    }
    [otherArray[minIndex], otherArray[i]] = [otherArray[i], otherArray[minIndex]];
  }

  return otherArray;
}
