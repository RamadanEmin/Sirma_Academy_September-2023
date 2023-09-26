function factorialCalculation(n) {
    let factorial = 1;

    for (let i = 1; i <= n; i++) {
        factorial *= i;
    }

    console.log(factorial);
}

factorialCalculation(5);
factorialCalculation(3);
factorialCalculation(0);
factorialCalculation(1);
factorialCalculation(10);