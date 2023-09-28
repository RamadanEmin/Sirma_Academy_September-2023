function matrixAddition(matrix1, matrix2) {
    const result = [];

    for (let row = 0; row < matrix1.length; row++) {
        const newRow = [];

        for (let col = 0; col < matrix1[row].length; col++) {
            const sum = matrix1[row][col] + matrix2[row][col];
            newRow.push(sum);
        }

        result.push(newRow);
    }

    return result;
}

console.log(matrixAddition([[1, 2], [3, 4]],[[2, 2], [2, 2]]));
console.log(matrixAddition([[1, 2, 3], [4, 3, 1]],[[1, 2, 3], [4, 2, 2]]));