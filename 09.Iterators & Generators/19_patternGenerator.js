function* patternGenerator(pattern, repeat) {
    for (let i = 0; i < repeat; i++) {
        for (const value of pattern) {
            yield value;
        }
    }
}

// const repeatedPattern = patternGenerator([1, 2, 3], 2);
const repeatedPattern = patternGenerator(['a', 'b'], 3);
// const repeatedPattern = patternGenerator([5, 6], 2);

console.log([...repeatedPattern].join(', '));
