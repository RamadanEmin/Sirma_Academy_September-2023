function reverseAnArrayOfNumbers(n, arr = []) {
    let array = [];

    for (let i = 0; i < n; i++) {
        array.push(arr[i]);
    }

    array.reverse();

    console.log(array.join(' '));
}

reverseAnArrayOfNumbers(3, [10, 20, 30, 40, 50]);
reverseAnArrayOfNumbers(4, [-1, 20, 99, 5]);
reverseAnArrayOfNumbers(2, [66, 43, 75, 89, 47]);