class Queue {
    constructor() {
        this.queue = [];
    }

    enqueue(item) {
        this.queue.push(item);
    }

    [Symbol.iterator]() {
        let index = 0;
        const queue = this.queue;

        return {
            next() {
                if (index < queue.length) {
                    return { value: queue[index++], done: false };
                } else {
                    return { done: true };
                }
            },
        };
    }
}

const myQueue = new Queue();
myQueue.enqueue(1);
myQueue.enqueue(2);
myQueue.enqueue(3);

myQueue.enqueue('a');
myQueue.enqueue('b');
myQueue.enqueue('c');

myQueue.enqueue(4);
myQueue.enqueue(5);
myQueue.enqueue(6);

console.log([...myQueue].join(', '));