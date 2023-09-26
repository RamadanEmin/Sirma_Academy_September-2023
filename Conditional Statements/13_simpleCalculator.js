function simpleCalculator(num1, num2, operation) {
    let result;

    switch (operation) {
        case 'add':
            result = num1 + num2;
            break;
        case 'subtract':
            result = num1 - num2;
            break;
        case 'divide':
            if (num2 !== 0) {
                result = num1 / num2;
            }
            break;
        case 'multiply':
            result = num1 * num2;
            break;

        default:
            break;
    }

    console.log(result.toFixed(2));
}

simpleCalculator(5, 5, 'add');
simpleCalculator(10, 12, 'subtract');
simpleCalculator(9, 3, 'divide');
simpleCalculator(5, 2, 'divide');
simpleCalculator(3.1, 0.1, 'multiply');