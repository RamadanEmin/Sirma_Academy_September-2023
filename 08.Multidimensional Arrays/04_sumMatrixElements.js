function sumMatrixElements(matrix) {
    let sumMatrix = 0;
    let matrixColumns;

    for (let row = 0; row < matrix.length; row++) {
        matrixColumns = matrix[row].length;
        for (let column = 0; column < matrix[row].length; column++) {
            sumMatrix += matrix[row][column];
        }
    }

    console.log(matrix.length);
    console.log(matrixColumns);
    console.log(sumMatrix);
}

sumMatrixElements([[7, 1, 3, 3, 2, 1], [1, 3, 9, 8, 5, 6], [4, 6, 7, 9, 1, 0]]);
sumMatrixElements([[10, 11, 12, 13], [14, 15, 16, 17]]);