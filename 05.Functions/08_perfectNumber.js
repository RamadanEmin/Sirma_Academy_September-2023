function perfectNumber(number) {
    let sum = 0;
    const result = [];

    if (number < 1) {
        console.log('It\'s not so perfect.');
    }
    for (let i = 1; i <= number / 2; i++) {
        if (number % i == 0) {
            sum += i;
            result.push(i);
        }
    }

    if (sum == number) {
        console.log('Perfect number!');
        console.log(result.join(' + '));
    } else {
        console.log('It\'s not so perfect.');
    }
}

perfectNumber(6);
perfectNumber(28);
perfectNumber(1236498);