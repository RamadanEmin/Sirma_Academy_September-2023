// function calculateFactorial(number) {
//     let factorial = 1;
//     for (let i = 2; i <= number; i++) {
//         factorial *= i;
//     }
//     return factorial;
// }

function calculateFactorial(number) {
    if (number <= 1) {
        return 1;
    } else {
        return number * calculateFactorial(number - 1);
    }
}

function factorialDivision(num1, num2) {
    const factorial1 = calculateFactorial(num1);
    const factorial2 = calculateFactorial(num2);

    const divisionResult = (factorial1 / factorial2).toFixed(2);

    console.log(divisionResult);
}

factorialDivision(5, 2);
factorialDivision(6, 2);