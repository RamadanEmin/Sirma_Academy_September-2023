function fillTheMatrix(n, pattern) {
    let counter = 1;
    const matrix = [];

    for (let i = 0; i < n; i++) {
        const row = Array(n).fill(0);
        matrix.push(row);
    }

    for (let row = 0; row < n; row++) {
        for (let col = 0; col < n; col++) {
            if (pattern === 'A') {
                matrix[col][row] = counter++;
            } else if (pattern === 'B') {
                if (row % 2 == 0) {
                    matrix[col][row] = counter++;
                } else {
                    matrix[matrix.length - 1 - col][row] = counter++;
                }
            }
        }
    }

    for (let row = 0; row < n; row++) {
        console.log(matrix[row].join(' '));
    }
}

fillTheMatrix(3, 'A');

fillTheMatrix(3, 'B');