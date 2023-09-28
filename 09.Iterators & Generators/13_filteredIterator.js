class FilteredIterator {
    constructor(array, test) {
        this.array = array;
        this.test = test;
        this.index = 0;
    }

    [Symbol.iterator]() {
        return this;
    }

    next() {
        while (this.index < this.array.length) {
            const value = this.array[this.index++];
            if (this.test(value)) {
                return { value, done: false };
            }
        }
        return { done: true };
    }
}

// const arr = [1, 2, 3, 4, 5];
// const filter = x => x % 2 === 0;

// const arr = ['apple', 'banana', 'cherry'];
// const filter = word => word.length > 5;

const arr = [5, 6, 7, 8, 9, 10];
const filter = x => x > 7;

const filteredNumbers = new FilteredIterator(arr, filter);

console.log([...filteredNumbers].join(', '));