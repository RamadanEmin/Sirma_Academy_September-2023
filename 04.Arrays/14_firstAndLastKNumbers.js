function firstAndLastKNumbers(k, arr = []) {
    console.log(arr.slice(0, k).join(' '));
    console.log(arr.slice(-k).join(' '));
}

firstAndLastKNumbers(2, [7, 8, 9]);
firstAndLastKNumbers(3, [6, 7, 8, 9]);