function compareMatrices(matrix1, matrix2) {
    if (matrix1.length !== matrix2.length || matrix1[0].length !== matrix2[0].length) {
        return "not equal";
    }

    for (let row = 0; row < matrix1.length; row++) {
        for (let col = 0; col < matrix1[row].length; col++) {
            if (matrix1[row][col] !== matrix2[row][col]) {
                return "not equal";
            }
        }
    }

    return "equal";
}

console.log(compareMatrices(
    [[1, 2, 3], [2, 1, 3]],
    [[1, 2, 3], [2, 1, 3]]));

console.log(compareMatrices(
    [[1, 2, 3], [4, 5, 6]],
    [[1, 3], [4, 5]]));