function sumOfEvenNumbers(n) {
    let sum = 0;

    // for (let i = 1; i <= n; i++) {
    //     if (i % 2 == 0) {
    //         sum += i;
    //     }
    // }
    for (let i = 1; i <= n; i++) {
        sum += 2 * i; 
      }

    console.log(sum);
}

sumOfEvenNumbers(3);
sumOfEvenNumbers(5);
sumOfEvenNumbers(1);
sumOfEvenNumbers(0);
sumOfEvenNumbers(10);