function* primeGenerator() {
    let num = 2;
    const primes = [];

    while (true) {
        if (isPrime(num, primes)) {
            primes.push(num);
            yield num;
        }
        num++;
    }
}

function isPrime(num, primes) {
    for (let prime of primes) {
        if (num % prime === 0) {
            return false;
        }
    }
    return true;
}

const primeGen = primeGenerator();

for (let i = 0; i < 15; i++) {
    console.log(primeGen.next().value);
}