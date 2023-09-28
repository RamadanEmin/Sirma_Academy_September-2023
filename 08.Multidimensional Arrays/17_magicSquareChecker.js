function magicSquareChecker(input) {
    const matrix = input.map(x => x.split(' ').map(Number));
    const n = matrix.length;

    const magicSum = matrix[0].reduce((sum, num) => sum + num, 0);

    for (let i = 0; i < n; i++) {
        const rowSum = matrix[i].reduce((sum, num) => sum + num, 0);
        if (rowSum !== magicSum) {
            return 'False';
        }
    }

    for (let j = 0; j < n; j++) {
        let colSum = 0;
        for (let i = 0; i < n; i++) {
            colSum += matrix[i][j];
        }
        if (colSum !== magicSum) {
            return 'False';
        }
    }

    let diagonalSum1 = 0;
    for (let i = 0; i < n; i++) {
        diagonalSum1 += matrix[i][i];
    }
    if (diagonalSum1 !== magicSum) {
        return 'False';
    }
      let diagonalSum2 = 0;
      for (let i = 0; i < n; i++) {
          diagonalSum2 += matrix[i][n - 1 - i];
      }
      if (diagonalSum2 !== magicSum) {
          return 'False';
      }
  
      return 'True';
}

console.log(magicSquareChecker([
    "1 2 3",
    "4 5 6",
    "7 8 9"]));

console.log(magicSquareChecker([
    "1 0 0 0",
    "0 0 0 1",
    "0 1 0 0",
    "0 0 1 0"]));

console.log(magicSquareChecker([
    "8 1 6",
    "3 5 7",
    "4 9 2"]));