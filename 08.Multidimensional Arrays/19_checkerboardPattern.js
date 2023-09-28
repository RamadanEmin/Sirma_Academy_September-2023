function checkerboardPattern(n){
    const checkerboard = [];
    for (let i = 0; i < n; i++) {
        const row = [];
        for (let j = 0; j < n; j++) {
            if ((i + j) % 2 === 0) {
                row.push(0);
            } else {
                row.push(1);
            }
        }
        checkerboard.push(row);
    }
     console.log(checkerboard.join('\n').split(',').join(' '));
}

checkerboardPattern(3);
checkerboardPattern(4);