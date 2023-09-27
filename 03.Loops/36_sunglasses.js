function sunglasses(n) {
    const topBottomRow = '*'.repeat(2 * n) + ' '.repeat(n) + '*'.repeat(2 * n);
    const middleRows = [];

    for (let i = 0; i < n - 2; i++) {
        if (i === Math.floor((n - 1) / 2) - 1) {
            middleRows.push('*' + '/'.repeat(2 * n - 2) + '*' + '|'.repeat(n) + '*' + '/'.repeat(2 * n - 2) + '*');
        } else {
            middleRows.push('*' + '/'.repeat(2 * n - 2) + '*' + ' '.repeat(n) + '*' + '/'.repeat(2 * n - 2) + '*');
        }
    }

    console.log(topBottomRow);

    for (const row of middleRows) {
        console.log(row);
    }

    console.log(topBottomRow);
}

sunglasses(3);
sunglasses(4);
sunglasses(5);
