function summOddNumbers(n) {
    let sum = 0;

    // for (let i = 0; i < n; i++) {
    //     console.log(2 * i + 1);
    //     sum += 2 * i + 1;
    // }

    for (let i = 1; i <= n * 2; i += 2) {
        console.log(i);
        sum += i;
    }

    console.log(`Sum: ${sum}`);
}

summOddNumbers(5);
summOddNumbers(3);