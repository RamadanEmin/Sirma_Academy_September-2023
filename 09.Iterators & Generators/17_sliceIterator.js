class SliceIterator {
    constructor(array, start, end) {
        this.array = array;
        this.start = start;
        this.end = end;
        this.currentIndex = start;
    }

    *[Symbol.iterator]() {
        while (this.currentIndex <= this.end) {
            yield this.array[this.currentIndex];
            this.currentIndex++;
        }
    }
}

// const sliceIterator = new SliceIterator([1, 2, 3, 4, 5], 1, 3);
const sliceIterator = new SliceIterator(['apple', 'banana', 'cherry', 'date'], 0, 2);
// const sliceIterator = new SliceIterator([5, 6, 7, 8, 9, 10], 4, 5);

console.log([...sliceIterator].join(', '));