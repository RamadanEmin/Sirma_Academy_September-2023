function negativePositiveNumbers(arr = []) {
    const result = [];

    for (const item of arr) {
        if (item < 0) {
            result.unshift(item);
        } else {
            result.push(item);
        }
    }

    console.log(result.join('\n'));
}

negativePositiveNumbers([7, -2, 8, 9]);
negativePositiveNumbers([3, -2, 0, -1]);