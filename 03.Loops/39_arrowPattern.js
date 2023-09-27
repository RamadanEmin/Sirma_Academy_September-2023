function arrowPattern(n) {
    for (let i = 1; i < n; i++) {
        let row = '';

        for (let j = 1; j <= n - i; j++) {
            row += ' ';
        }

        for (let j = 1; j <= i; j++) {
            row += '* ';
        }

        console.log(row);
    }

    for (let i = 1; i < n; i++) {
        let row = '';

        for (let j = 0; j < n / 2; j++) {
            row += ' ';
        }

        for (let j = 1; j <= n - 1; j++) {
            row += '*';
        }

        console.log(row);
    }
}

arrowPattern(7);
arrowPattern(4);
arrowPattern(6);