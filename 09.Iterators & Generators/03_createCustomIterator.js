class OddIterator {
    constructor(array) {
        this.array = array;
        this.index = 0;
    }

    [Symbol.iterator]() {
        return this;
    }

    next() {
        while (this.index < this.array.length) {
            const currentValue = this.array[this.index];
            this.index++;

            if (currentValue % 2 !== 0) {
                return { value: currentValue, done: false };
            }
        }

        return { done: true };
    }
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const oddValues = new OddIterator(arr);
for (const value of oddValues) {
    console.log(value);
}