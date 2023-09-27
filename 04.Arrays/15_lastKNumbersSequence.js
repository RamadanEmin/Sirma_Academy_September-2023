function lastKNumbersSequence(n, k) {
    const sequence = [1];

    for (let i = 1; i < n; i++) {
        let nextElement = 0;

        for (let j = Math.max(0, i - k); j < i; j++) {
            nextElement += sequence[j];
        }

        sequence.push(nextElement);
    }

    console.log(sequence.join(' '));
}

lastKNumbersSequence(6, 3);
lastKNumbersSequence(8, 2);