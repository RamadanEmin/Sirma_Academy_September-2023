function halfRhombusFromAsterisks(n) {
    for (let i = 1; i <= n; i++) {
        let asteriks = '';
        for (let j = 1; j <= i; j++) {
            asteriks += '* ';
        }
        console.log(asteriks);
    }

    for (let i = n - 1; i > 0; i--) {
        let asteriks = '';
        for (let j = 1; j <= i; j++) {
            asteriks += '* ';
        }
        console.log(asteriks);
    }
}

halfRhombusFromAsterisks(1);
halfRhombusFromAsterisks(2);
halfRhombusFromAsterisks(3);
halfRhombusFromAsterisks(4);