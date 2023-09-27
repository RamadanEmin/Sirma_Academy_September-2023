function pyramidWithIncreasingDigits(n) {
    for (let i = 1; i <= n; i++) {
        let row = '';

        for (let j = 1; j <= n - i; j++) {
            row += ' ';
        }

        for (let j = i; j <= 2 * i - 1; j++) {
            row += j;
        }
        for (let j = 2 * i - 2; j >= i; j--) {
            row += j;
        }

        console.log(row);
    }
}

pyramidWithIncreasingDigits(5);
pyramidWithIncreasingDigits(4);
pyramidWithIncreasingDigits(3);