function christmasTree(n) {
    let pattern = '';
    for (let i = 0; i < n * 2 + 3; i++) {
        if (i == n + 1) {
            pattern += '|';
        } else {
            pattern += ' ';
        }
    }
    pattern += '\n';

    for (let i = 1; i <= n; i++) {
        let spaces = ' '.repeat(n - i);
        let stars = '*'.repeat(i);
        pattern+=`${spaces}${stars} | ${stars}${spaces}\n`;
    }

    console.log(pattern);
}

christmasTree(1);
christmasTree(2);
christmasTree(3);
christmasTree(4);