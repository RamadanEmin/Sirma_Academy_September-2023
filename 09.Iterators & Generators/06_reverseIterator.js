class ReverseIterator {
    constructor(array) {
        this.array = array;
        this.index = array.length - 1;
    }

    [Symbol.iterator]() {
        return {
            next: () => {
                if (this.index >= 0) {
                    return { value: this.array[this.index--], done: false };
                } else {
                    return { done: true };
                }
            },
        };
    }
}

let result = [];
// const arr = [1, 2, 3];
const arr = ['a', 'b', 'c'];
// const arr = [5, 4, 3, 2, 1];

const reverseIter = new ReverseIterator(arr);
console.log([...reverseIter].join(', '));