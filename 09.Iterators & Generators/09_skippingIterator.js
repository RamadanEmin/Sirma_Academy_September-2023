class SkippingIterator {
    constructor(array) {
        this.array = array;
        this.index = 0;
    }

    [Symbol.iterator]() {
        let self = this;
        return {
            next() {
                if (self.index >= self.array.length) {
                    return { done: true };
                }

                const value = self.array[self.index];
                self.index += 2;

                return { value, done: false };
            },
        };
    }
}

// const array = [1, 2, 3, 4];
// const array = ['a', 'b', 'c', 'd'];
const array = [5, 6, 7, 8, 9];

const iterator = new SkippingIterator(array);

function printSkippedValues(iterator) {
    let result = [];
    for (let item of iterator) {
        result.push(item);
    }
    console.log(result.join(', '));
}

printSkippedValues(iterator);