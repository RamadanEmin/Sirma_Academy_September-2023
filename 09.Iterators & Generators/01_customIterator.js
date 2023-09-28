const obj = {
    a: 'apple',
    b: 'banana',
    c: 'cherry'
};

obj[Symbol.iterator] = function () {
    let keys = Object.keys(this);
    let index = 0;

    return {
        next: () => {
            if (index < keys.length) {
                return { value: this[keys[index++]], done: false };
            } else {
                return { done: true };
            }
        }
    };
}

for (const value of obj) {
    console.log(value);
}