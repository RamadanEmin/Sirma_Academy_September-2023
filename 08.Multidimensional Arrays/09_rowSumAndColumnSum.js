function rowSumAndColumnSum(input) {
    const matrix = input.map(x => x.split(' ').map(Number));
    const numRows = matrix.length;
    const numCols = matrix[0].length;
    const rowSums = [];
    const colSums = [];

    for (let j = 0; j < numCols; j++) {
        let colSum = 0;
        for (let i = 0; i < numRows; i++) {
            if (j < 1) {
                const rowSum = matrix[i].reduce((sum, current) => sum + current, 0);
                rowSums.push(rowSum);
            }
            colSum += matrix[i][j];
        }
        colSums.push(colSum);
    }

    console.log(`Row Sums: ${rowSums.join(', ')}`);
    console.log(`Column Sums: ${colSums.join(', ')}`);
}

rowSumAndColumnSum([
    "1 2",
    "3 4",
    "5 6"]);

rowSumAndColumnSum([
    "1 2 3",
    "4 5 6",
    "7 8 9"]);