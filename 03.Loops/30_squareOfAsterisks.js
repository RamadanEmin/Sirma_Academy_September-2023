function squareOfAsterisks(n) {
    for (let i = 1; i <= n; i++) {
        let asteriks = '';
        for (let j = 1; j <= n; j++) {
            asteriks += '* ';
        }
        console.log(asteriks.trim());
    }
}

squareOfAsterisks(2);
squareOfAsterisks(3);