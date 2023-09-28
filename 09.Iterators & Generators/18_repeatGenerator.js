function* repeatGenerator(value, times) {
    for (let i = 0; i < times; i++) {
        yield value;
    }
}

// const repeat = repeatGenerator(2, 3);
const repeat = repeatGenerator('a', 4);
// const repeat = repeatGenerator(7, 2);
console.log([...repeat].join(', '));