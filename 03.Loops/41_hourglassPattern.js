function hourglassPattern(n){
 // Draw the top part of the hourglass
 for (let i = 0; i < n; i++) {
    let row = ' '.repeat(i) + '#' + ' '.repeat(n - i - 1) + '#' + ' '.repeat(i);
    console.log(row);
  }

  // Draw the middle part of the hourglass
  let middleRow = '#'.repeat(2 * n + 1);
  console.log(middleRow);

  // Draw the bottom part of the hourglass
  for (let i = n - 1; i >= 0; i--) {
    let row = ' '.repeat(i) + '#' + ' '.repeat(n - i - 1) + '#' + ' '.repeat(i);
    console.log(row);
  }
}

hourglassPattern(5);
// hourglassPattern(8);
// hourglassPattern(2);