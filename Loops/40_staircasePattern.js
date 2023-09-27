function staircasePattern(n) {
    let pattern = '#'.repeat(n + 2) + '\n';

    for (let i = 1; i < n / 2; i++) {
        let space = ' '.repeat(i);
        let innerSpace = '-'.repeat(n - i * 2);
        pattern += `${space}#${innerSpace}#${space}\n`;
    }

    if (n % 2 == 0) {
        let space = ' '.repeat(n / 2);
        pattern += space + '##' + space + '\n';

        for (let i = 1; i < n / 2; i++) {
            let spaces = ' '.repeat(n - (n / 2) - i);
            let innerSpace = '-'.repeat(i * 2);
            pattern += `${spaces}#${innerSpace}#${spaces}\n`;
        }
    } else {
        let space = ' '.repeat(n / 2 + 1);
        pattern += space + '#' + space + '\n';


        for (let i = 0; i < n / 2 - 1; i++) {
            let spaces = ' '.repeat(n - (n / 2) - i);
            let innerSpace = '-'.repeat(1 + i * 2);
            pattern += `${spaces}#${innerSpace}#${spaces}\n`;
        }
    }

    pattern += '#'.repeat(n + 2)
    console.log(pattern);
}

staircasePattern(5);
staircasePattern(8);
staircasePattern(2);