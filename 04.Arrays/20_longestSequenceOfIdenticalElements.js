function longestSequenceOfIdenticalElements(arr = []) {
    let longestSequence = [];
    let currentSequence = [];
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === arr[i - 1]) {
        currentSequence.push(arr[i]);
      } else {
        currentSequence = [arr[i]];
      }
  
      if (currentSequence.length >= longestSequence.length) {
        longestSequence = currentSequence.slice();
      }
    }
  
    console.log(longestSequence.join(' '));
}

longestSequenceOfIdenticalElements([2, 2, 2, 3, 4, 4, 2, 2, 2, 1]);
longestSequenceOfIdenticalElements([1, 1, 1, 2, 3, 1, 3, 3, 1, 1]);
longestSequenceOfIdenticalElements([1, 1, 2, 3, 4, 5, 6, 2, 2]);
longestSequenceOfIdenticalElements([4, 4, 4, 4]);
longestSequenceOfIdenticalElements([0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5]);