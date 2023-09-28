function maximalSum(input) {
    const matrix = input.map(x => x.split(' ').map(Number));
    let maxSum = -Infinity;
    let resultMatrix = [];

    for (let i = 0; i < matrix.length - 2; i++) {
        for (let j = 0; j < matrix[i].length - 2; j++) {
            let currentSum = 0;
            let currentMatrix = [];

            for (let row = 0; row < 3; row++) {
                currentMatrix.push([]);
                for (let col = 0; col < 3; col++) {
                    currentMatrix[row][col] = matrix[i + row][j + col];
                    currentSum += matrix[i + row][j + col];
                }
            }

            if (currentSum > maxSum) {
                maxSum = currentSum;
                resultMatrix = currentMatrix;
            }
        }
    }

    console.log(`Sum = ${maxSum}`);
    console.log(resultMatrix.join('\n').split(',').join(' '));
}

maximalSum([
    "1 5 5 2 4",
    "2 1 4 14 3",
    "3 7 11 2 8",
    "4 8 12 16 4"]);

maximalSum([
    "1 0 4 3 1 1",
    "1 3 1 3 0 4",
    "6 4 1 2 5 6",
    "2 2 1 5 4 1",
    "3 3 3 6 0 5"]);