function maximumSumof2x2(input = []) {
    let maxSum = Number.NEGATIVE_INFINITY;
    let maxSubmatrix = [];

    const matrix = input.map(x => x.split(' ').map(Number));
    for (let row = 0; row < matrix.length - 1; row++) {
        for (let col = 0; col < matrix[row].length - 1; col++) {
            const currentSum = matrix[row][col] + matrix[row][col + 1] +
                matrix[row + 1][col] + matrix[row + 1][col + 1];

            if (currentSum > maxSum) {
                maxSum = currentSum;
                maxSubmatrix = [
                    [matrix[row][col], matrix[row][col + 1]],
                    [matrix[row + 1][col], matrix[row + 1][col + 1]]
                ];
            }
        }
    }
    return [maxSum, maxSubmatrix];
}

console.log(maximumSumof2x2(["7 1 3 3 2 1",
    "1 3 9 8 5 6",
    "4 6 7 9 1 0"]));

console.log(maximumSumof2x2(["10 11 12 13",
    "14 15 16 17"]));