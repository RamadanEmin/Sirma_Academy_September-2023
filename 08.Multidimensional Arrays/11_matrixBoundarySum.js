function matrixBoundarySum(input) {
    const matrix = input.map(x => x.split(' ').map(Number));
    let sum = 0;

    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            if (row === 0 || row === numRows - 1 || col === 0 || col === numCols - 1) {
                sum += matrix[row][col];
            }
        }
    }

    console.log(sum);
}

matrixBoundarySum(["1 2 3",
    "4 5 6",
    "7 8 9"]);

matrixBoundarySum(["1 2 3 0",
    "4 5 6 7",
    "0 8 9 1"]);