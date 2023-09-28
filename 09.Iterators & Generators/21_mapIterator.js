class MapIterator {
    constructor(obj) {
        this.obj = obj;
        this.keys = Object.keys(obj);
        this.index = 0;
    }

    *[Symbol.iterator]() {
        while (this.index < this.keys.length) {
            const key = this.keys[this.index];
            const value = this.obj[key];
            yield `${key}-${value}`;
            this.index++;
        }
    }
}

// const obj = { 1: 'a', 2: 'b', 3: 'c' };
// const obj = { 1: 'a', 2: 'b', 3: 'c' };
const obj = { x: 'apple', y: 'banana', z: 'cherry' };

const objIter = new MapIterator(obj);
console.log([...objIter].join(', '));