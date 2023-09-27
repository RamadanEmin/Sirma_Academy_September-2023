equalSumOfOddAndEvenPositions

function equalSumOfOddAndEvenPositions(start, end) {
    let isMatching = false;
    for (let number = start; number <= end; number++) {
        const numberString = number.toString();
        let evenSum = 0;
        let oddSum = 0;

        for (let i = 0; i < numberString.length; i++) {
            const digit = parseInt(numberString[i]);

            if (i % 2 === 0) {
                evenSum += digit;
            } else {
                oddSum += digit;
            }
        }

        if (evenSum === oddSum) {
            isMatching = true;
            console.log(number);
        }
    }

    if (!isMatching) {
        console.log("None");
    }
}

equalSumOfOddAndEvenPositions(100000, 100050);
equalSumOfOddAndEvenPositions(299900, 300000);
equalSumOfOddAndEvenPositions(100115, 100120);
