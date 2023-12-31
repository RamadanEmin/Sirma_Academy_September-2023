function rhombusFromAsterisks(n) {
    let string = '';
    for (let i = 1; i <= n; i++) {
        for (let j = n; j > i; j--) {
            string += ' ';
        }
        for (let k = 0; k < i; k++) {
            string += '* ';
        }
        string += '\n';
    }

    for (let i = 1; i <= n - 1; i++) {
        for (let j = 0; j < i; j++) {
            string += ' ';
        }
        for (let k = (n - i); k > 0; k--) {
            string += '* ';
        }
        string += '\n';
    }
    console.log(string);
}

rhombusFromAsterisks(1);
rhombusFromAsterisks(2);
rhombusFromAsterisks(3);
rhombusFromAsterisks(4);