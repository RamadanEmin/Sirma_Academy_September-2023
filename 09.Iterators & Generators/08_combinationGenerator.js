function* combinationsGenerator(arr) {
    const len = arr.length;

    function* permute(arr, n = arr.length) {
        if (n <= 1) {
            yield arr.slice();
        } else {
            for (let i = 0; i < n; i++) {
                yield* permute(arr, n - 1);
                n % 2 === 0
                    ? [arr[i], arr[n - 1]] = [arr[n - 1], arr[i]]
                    : [arr[0], arr[n - 1]] = [arr[n - 1], arr[0]];
            }
        }
    }

    const permutations = [...permute(arr)];

    for (const permutation of permutations) {
        yield permutation;
    }
}

// const arr = [1, 2];
const arr = ['a', 'b', 'c'];
// const arr = [5, 6];
const gen = combinationsGenerator(arr);

for (const combination of gen) {
    console.log(combination.join(', '));
}