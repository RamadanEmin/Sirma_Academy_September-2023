function matrixDiagonalSum(input) {
    let firstDiagonalSum = 0;
    let secondDiagonalSum = 0;

    const matrix = input.map(x => x.split(' ').map(Number));
    for (let i = 0; i < matrix.length; i++) {
        firstDiagonalSum += matrix[i][i];
        secondDiagonalSum += matrix[matrix.length - 1 - i][i];
    }

    console.log(firstDiagonalSum + secondDiagonalSum);
}

matrixDiagonalSum([
    "1 2 3",
    "4 5 6",
    "7 8 9"]);

matrixDiagonalSum([
    "10 11",
    "14 15"]);