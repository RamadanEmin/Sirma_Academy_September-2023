function alternativeCondition(n) {
    let currentNumber = 1;
  
    for (let i = 1; i <= n; i++) {
      let row = ' '.repeat(n - i); // Add leading spaces
      for (let j = 1; j <= i; j++) {
        row += currentNumber + ' ';
        currentNumber++;
      }
      console.log(row);
    }
}
  alternativeCondition(3);
  alternativeCondition(4);
  alternativeCondition(6);
  