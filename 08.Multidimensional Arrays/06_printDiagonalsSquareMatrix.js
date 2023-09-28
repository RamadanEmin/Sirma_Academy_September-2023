function printDiagonalsSquareMatrix(input) {
    const firstDiagonal=[];
    const secondDiagonal=[];

    const matrix = input.map(x => x.split(' ').map(Number));
    for (let i = 0; i < matrix.length; i++) {
        firstDiagonal.push(matrix[i][i]);
        secondDiagonal.push(matrix[matrix.length - 1 - i][i]);
    }

    console.log(firstDiagonal.join(' '));
    console.log(secondDiagonal.join(' '));
}

printDiagonalsSquareMatrix([
    "1 2 3",
    "1 2 3",
    "1 2 3"])

printDiagonalsSquareMatrix([
    "1 2 3 2",
    "1 1 2 4",
    "1 2 1 4",
    "2 2 3 1"])