function chessboardChecker(input) {
    const board = input.map(x => x.split(' ').map(Number));
    const numRows = board.length;
    const numCols = board[0].length;

    function threatensEachOther(row1, col1, row2, col2) {
        return (
            row1 === row2 || 
            col1 === col2 || 
            Math.abs(row1 - row2) === Math.abs(col1 - col2) 
        );
    }

    for (let row1 = 0; row1 < numRows; row1++) {
        for (let col1 = 0; col1 < numCols; col1++) {
            if (board[row1][col1] === 1) {
                for (let row2 = 0; row2 < numRows; row2++) {
                    for (let col2 = 0; col2 < numCols; col2++) {
                        if (
                            board[row2][col2] === 1 &&
                            !(row1 === row2 && col1 === col2) && 
                            threatensEachOther(row1, col1, row2, col2)
                        ) {
                            return 'Yes'; 
                        }
                    }
                }
            }
        }
    }

    return 'No'; 
}

console.log(chessboardChecker([
    "0 1 0 0",
    "0 0 0 1",
    "1 0 0 0",
    "0 0 1 0"]));

console.log(chessboardChecker([
    "0 1 0 0",
    "0 0 0 1",
    "1 0 0 0",
    "0 1 0 0"]));

console.log(chessboardChecker([
    "0 1 0 0",
    "0 0 0 0",
    "1 0 0 0",
    "0 0 0 0"]));