function sumFirstAndLastArrayElement(arr = []) {
    const sum = Number(arr[0]) + Number(arr[arr.length - 1]);
    console.log(sum);
}

sumFirstAndLastArrayElement(['20', '30', '40']);
sumFirstAndLastArrayElement(['10', '17', '22', '33']);
sumFirstAndLastArrayElement(['11', '58', '69']);