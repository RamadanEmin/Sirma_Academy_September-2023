function* decimalToBinary(decimal) {
    if (decimal === 0) {
        yield '0';
        return;
    }

    let binary = '';
    while (decimal > 0) {
        binary = (decimal % 2) + binary;
        decimal = Math.floor(decimal / 2);
    }

    yield binary;
}

// const binaryGen = decimalToBinary(5);
// const binaryGen = decimalToBinary(8);
const binaryGen = decimalToBinary(15);

console.log([...binaryGen].join(''));