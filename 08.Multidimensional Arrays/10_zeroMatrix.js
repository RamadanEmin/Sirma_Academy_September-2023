function zeroMatrix(input) {
    const matrix = input.map(x => x.split(' ').map(Number));
    const copiedMatrix = JSON.parse(JSON.stringify(matrix));

    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            if (matrix[row][col] === 0) {
                for (let i = 0; i < matrix.length; i++) {
                    copiedMatrix[i][col] = 0;
                }
                for (let i = 0; i < matrix[row].length; i++) {
                    copiedMatrix[row][i] = 0;
                }
            }
        }
    }

    console.log(copiedMatrix.join('\n'));
}

zeroMatrix([
    "1 2 3",
    "4 0 6",
    "7 8 9"]);

zeroMatrix([
    "1 2 3 0",
    "4 5 6 7",
    "0 8 9 1"]);