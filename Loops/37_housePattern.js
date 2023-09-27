function housePattern(n) {
    const roofHeight = Math.floor(n / 2) + 1;

    if (n % 2 != 0) {
        for (let i = 1; i <= roofHeight; i++) {
            const spaces = ' '.repeat(roofHeight - i);
            const stars = '*'.repeat(2 * i - 1);
            console.log(spaces + stars + spaces);
        }
    } else {
        for (let i = 1; i < roofHeight; i++) {
            const spaces = ' '.repeat(roofHeight - i - 1);
            const stars = '*'.repeat(2 * i);
            console.log(spaces + stars + spaces);
        }
    }

    console.log('*' + ' '.repeat(n - 2) + '*');
    console.log('*' + ' '.repeat(n - 2) + '*');
}

housePattern(7);
housePattern(4);
housePattern(3);