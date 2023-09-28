function spiralMatrixTraversal(input) {
    const matrix = input.map(x => x.split(' ').map(Number));
    const result = [];
    
    while (matrix.length) {
        result.push(...matrix.shift());
        
        for (let i = 0; i < matrix.length; i++) {
            if (matrix[i].length > 0) {
                result.push(matrix[i].pop());
            }
        }
        
        if (matrix.length > 0) {
            result.push(...matrix.pop().reverse());
        }
        
        for (let i = matrix.length - 1; i >= 0; i--) {
            if (matrix[i].length > 0) {
                result.push(matrix[i].shift());
            }
        }
    }

    console.log(result.join(' '));
}

spiralMatrixTraversal([
    "1 2 3",
    "4 5 6",
    "7 8 9"]);

spiralMatrixTraversal([
    "1 2 3 4",
    "5 6 7 8",
    "9 10 11 12",
    "13 14 15 16"]);

spiralMatrixTraversal([
    "1 2",
    "3 4"]);