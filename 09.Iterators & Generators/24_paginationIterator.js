class PaginationIterator {
    constructor(dataset, pageSize) {
        this.dataset = dataset;
        this.pageSize = pageSize;
        this.pageIndex = 0;
    }

    [Symbol.iterator]() {
        return this;
    }

    next() {
        const startIdx = this.pageIndex * this.pageSize;
        const endIdx = Math.min(startIdx + this.pageSize, this.dataset.length);
        if (startIdx >= endIdx) {
            return { done: true };
        }
        const page = this.dataset.slice(startIdx, endIdx);
        const result = {
            done: false,
            value: `page ${this.pageIndex + 1}: ${page.join(',')}`,
        };
        this.pageIndex++;
        return result;
    }
}

const paginated1 = new PaginationIterator([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3);
const paginated2 = new PaginationIterator(['a', 'b', 'c', 'd', 'e', 'f'], 2);

console.log([...paginated1].join(', '));
console.log([...paginated2].join(', '));