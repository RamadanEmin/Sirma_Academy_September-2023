class Cat {
    constructor(name, age) {
        this.name = name;
        this.age = age
    }

    meow() {
        return `${this.name}, age ${this.age} says meow`;
    }
}

function cats(arr = []) {
    for (let animal of arr) {
        let [name, age] = animal.split(' ');
        let cat = new Cat(name, age);
        console.log(cat.meow());
    }
}

cats(['Mellon 2', 'Tom 3'])
cats(['Branch 1', 'Poppy 3', 'Goldy 2']);