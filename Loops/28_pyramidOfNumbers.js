function pyramidOfNumbers(rows) {
    let num = 1;

    for (let row = 1; row <= rows; row++) {
        for (let col = 1; col <= row; col++) {
            process.stdout.write(num + " ")
            num++;

            if (num > rows) {
                break;
            }
        }

        console.log();
        if (num > rows) {
            break;
        }
    }
}

pyramidOfNumbers(7);
pyramidOfNumbers(10);
pyramidOfNumbers(15);