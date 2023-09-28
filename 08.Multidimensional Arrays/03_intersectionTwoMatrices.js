function intersectionTwoMatrices(matrix1, matrix2) {
    const result = [];

    for (let row = 0; row < matrix1.length; row++) {
        const newRow = [];

        for (let col = 0; col < matrix1[row].length; col++) {
            if (matrix1[row][col] === matrix2[row][col]) {
                newRow.push(matrix1[row][col]);
            } else {
                newRow.push('*');
            }
        }

        result.push(newRow.join(' '));
    }

    return result.join('\n');
}

console.log(intersectionTwoMatrices([
    "a b c d",
    "a b c d",
    "a b c d"],
    ["k b c k",
    "a b g d",
    "a k c d"]));

console.log(intersectionTwoMatrices([
    "1 2",
    "3 4",
    "5 6",
    "7 8",
    "9 1"],
    ["0 2",
    "3 1",
    "1 6",
    "7 4",
   "1 1"]));