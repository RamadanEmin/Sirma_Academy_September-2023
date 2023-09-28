function excelSumFormula(matrix,range) {
    const [start, end] = range.split(":");
    const [startRow, startCol] = getCoordinates(start);
    const [endRow, endCol] = getCoordinates(end);
    let sum = 0;

    function getCoordinates(cell) {
        const col = cell.charCodeAt(0) - "A".charCodeAt(0);
        const row = parseInt(cell.slice(1)) - 1;
        return [row, col];
    }

    for (let row = startRow; row <= endRow; row++) {
        for (let col = startCol; col <= endCol; col++) {
            sum += matrix[row][col];
        }
    }

    console.log(sum);
}

excelSumFormula([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]],
    "A1:C2");

excelSumFormula([
    [0, 1, 0, 0],
    [0, 0, 0, 1],
    [1, 0, 0, 0],
    [0, 1, 0, 0]],
    "A1:B4");

excelSumFormula([
    [0, 1, 0, 0],
    [0, 0, 0, 0],
    [1, 0, 0, 0],
    [0, 0, 0, 0]],
    "A1:C4");