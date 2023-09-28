function* stackGenerator(stack) {
    while (stack.length > 0) {
        yield stack.pop();
    }
}

// const myStack = [1, 2, 3];
const myStack = ['a', 'b', 'c'];
// const myStack = [5, 6, 7];
const gen = stackGenerator(myStack);

console.log([...gen].join(', '));