function* setComprehension(inputSet, comprehensionFn) {
    for (const element of inputSet) {
        yield comprehensionFn(element);
    }
}

const inputSet1 = new Set([1, 2, 3, 4, 5]);
const resultSet1 = new Set(setComprehension(inputSet1, (x) => x * 2));
console.log(resultSet1);

const inputSet2 = new Set(['a', 'b', 'c']);
const resultSet2 = new Set(setComprehension(inputSet2, (x) => x.toUpperCase()));
console.log(resultSet2);

const inputSet3 = new Set([5, 6, 7, 8, 9]);
const resultSet3 = new Set(setComprehension(inputSet3, (x) => x - 4));
console.log(resultSet3); 