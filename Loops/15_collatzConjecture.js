function collatzConjecture(n) {
    let result = [];
    while (n != 1) {
        result.push(n);

        if (n % 2 == 0) {
            n /= 2;
        } else {
            n = n * 3 + 1;
        }
    }
    result.push(1);

    console.log(result.join(' '));
}

collatzConjecture(6);
collatzConjecture(12);
collatzConjecture(9);
collatzConjecture(200);
collatzConjecture(15);