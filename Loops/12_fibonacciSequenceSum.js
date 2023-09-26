function fibonacciSequenceSum(n) {
    let sum = 0;
    let fib1 = 0;
    let fib2 = 1;

    for (let i = 0; i <= n; i++) {
        sum += fib1;
        const nextFib = fib1 + fib2;
        fib1 = fib2;
        fib2 = nextFib;
    }

    console.log(sum);
}

fibonacciSequenceSum(3);
fibonacciSequenceSum(5);
fibonacciSequenceSum(1);
fibonacciSequenceSum(0);
fibonacciSequenceSum(10);