function uniqueCodes(firstLimit, secondLimit, thirdLimit) {
    for (let i = 2; i <= firstLimit; i += 2) {
        for (let j = 2; j <= secondLimit; j++) {
            if (j == 2 || j == 3 || j == 5 || j == 7) {
                for (let k = 2; k <= thirdLimit; k += 2) {
                    console.log(`${i}${j}${k}`);
                }
            }
        }
    }
}

uniqueCodes(3, 5, 5);
uniqueCodes(6, 2, 6);