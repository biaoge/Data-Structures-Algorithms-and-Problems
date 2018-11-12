const BubbleSort = (array) => {
  let flag = false;
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

  if(!flag) {
    return otherArray;
  }
  return otherArray;
}

// console.log(BubbleSort([3,5,4,2]));