class List {
    constructor() {
        this.collection = [];
    }

    add(element) {
        this.collection.push(element);
        this.sort();
    }

    remove(index) {
        if (index >= 0 && index < this.collection.length) {
            this.collection.splice(index, 1);
        }
    }

    get(index) {
        if (index >= 0 && index < this.collection.length) {
            return this.collection[index];
        }
    }

    size() {
        return this.collection.length;
    }

    sort() {
        this.collection.sort((a, b) => a - b);
    }
}

let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));
console.log(list.size());