function* flattenGenerator(arr) {
    for (const item of arr) {
        if (Array.isArray(item)) {
            yield* flattenGenerator(item);
        } else {
            yield item;
        }
    }
}

// const nestedArray = [[1, 2], [3, 4]];
const nestedArray = ['a', ['b', 'c'], ['d', 'e']];
// const nestedArray = [[5, 6], 7, [8, 9]];

const flattenedArray = [...flattenGenerator(nestedArray)];

console.log(flattenedArray.join(', '));