function matrixBorderFlip(input) {
    const matrix = input.map(x => x.split(' ').map(Number));

    let rowLength = matrix.length;
    let colLength = matrix[0].length;

    let row = 0, col = 0;
    let prev, curr;

    while (row < rowLength && col < colLength) {
        if (row + 1 == rowLength || col + 1 == colLength)
            break;

        prev = matrix[row + 1][col];

        for (let i = col; i < colLength; i++) {
            curr = matrix[row][i];
            matrix[row][i] = prev;
            prev = curr;
        }
        row++;

        for (let i = row; i < rowLength; i++) {
            curr = matrix[i][colLength - 1];
            matrix[i][colLength - 1] = prev;
            prev = curr;
        }
        colLength--;

        if (row < rowLength) {
            for (let i = colLength - 1; i >= col; i--) {
                curr = matrix[rowLength - 1][i];
                matrix[rowLength - 1][i] = prev;
                prev = curr;
            }
        }
        rowLength--;

        if (col < colLength) {
            for (let i = rowLength - 1; i >= row; i--) {
                curr = matrix[i][col];
                matrix[i][col] = prev;
                prev = curr;
            }
        }
        col++;
    }

    console.log(matrix.join('\n').split(',').join(' '));
}


matrixBorderFlip([
    "1 2 3",
    "4 5 6",
    "7 8 9"])

matrixBorderFlip([
    "0 1 0 0",
    "0 0 0 1",
    "1 0 0 0",
    "0 1 0 0"])