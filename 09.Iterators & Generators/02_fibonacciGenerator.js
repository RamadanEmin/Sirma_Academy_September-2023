function* fibonacci() {
    let current = 1;
    let next = 1;
    while (true) {
        yield current;
        [current, next] = [next, current + next];
    }
}

const fib = fibonacci();

console.log(fib.next().value); // 1
console.log(fib.next().value); // 1
console.log(fib.next().value); // 2
console.log(fib.next().value); // 3
console.log(fib.next().value); // 5
console.log(fib.next().value); // 8