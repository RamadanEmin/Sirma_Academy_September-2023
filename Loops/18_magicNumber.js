function magicNumber(start, end, magicNumber) {
    let isFound = false;
    let counter = 0;

    for (let i = start; i <= end; i++) {
        for (let j = start; j <= end; j++) {
            counter++;

            if (i + j == magicNumber) {
                isFound = true;
                console.log(`Combination ${counter} - (${i} + ${j} = ${magicNumber})`);
                break;
            }
        }

        if (isFound) {
            break;
        }
    }

    if (!isFound) {
        console.log(`${counter} combinations - neither equals ${magicNumber}`);
    }
}

magicNumber(1, 10, 5);
magicNumber(23, 24, 20);
magicNumber(1, 2, 3);