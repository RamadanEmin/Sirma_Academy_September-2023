function rotateMatrix90Degrees(input) {
    const matrix = input.map(x => x.split(' ').map(Number));
    const rotatedMatrix = [];
    const numRows = matrix.length;
    const numCols = matrix[0].length;

    for (let i = 0; i < numCols; i++) {
        rotatedMatrix.push(new Array(numRows).fill(0));
    }

    for (let i = 0; i < numRows; i++) {
        for (let j = 0; j < numCols; j++) {
            rotatedMatrix[j][i] = matrix[i][j];
        }
    }

    rotatedMatrix.forEach(row => row.reverse());

    console.log(rotatedMatrix);
}

rotateMatrix90Degrees([
    "1 2 3",
    "4 5 6",
    "7 8 9"]);

rotateMatrix90Degrees([
    "0 1 2 3",
    "4 5 6 7",
    "8 9 10 11",
    "12 13 14 15"]);