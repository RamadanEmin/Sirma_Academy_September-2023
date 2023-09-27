function specialNumbers(n) {
    const specialNumbers = [];

    for (let number = 1111; number <= 9999; number++) {
        const digits = number.toString().split('').map(Number);
        const isSpecial = digits.every((digit) => n % digit === 0);

        if (isSpecial) {
            specialNumbers.push(number);
        }
    }

    return specialNumbers.join('\n');
}

console.log(specialNumbers(3));