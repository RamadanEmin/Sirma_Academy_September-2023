function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;

    if (num % 2 === 0 || num % 3 === 0) return false;

    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }

    return true;
}

function evenPairs(initial1, initial2, diff1, diff2) {
    for (let i = initial1; i <= initial1 + diff1; i++) {
        for (let j = initial2; j <= initial2 + diff2; j++) {
            if (isPrime(i) && isPrime(j)) {
                console.log(`${i}${j}`);
            }
        }
    }
}

evenPairs(10, 20, 5, 5);
evenPairs(10, 30, 9, 6);