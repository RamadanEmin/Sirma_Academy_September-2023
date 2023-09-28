function* transformValues(values, transformFn) {
    for (const value of values) {
        yield transformFn(value);
    }
}

const inputValues1 = [1, 2, 3];
const resultValues1 = [...transformValues(inputValues1, (x) => x * 2)];
console.log(resultValues1.join(', '));

const inputValues2 = ['apple', 'banana'];
const resultValues2 = [...transformValues(inputValues2, (word) => word.length)];
console.log(resultValues2.join(', '));

const inputValues3 = [5, 6, 7];
const resultValues3 = [...transformValues(inputValues3, (x) => x * x)];
console.log(resultValues3.join(', '));