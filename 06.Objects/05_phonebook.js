function phonebook(arr = []) {
    const obj = {};

    for (const item of arr) {
        const token = item.split(' ');
        let name = token[0];
        let number = token.slice(1).join(' ');

        obj[name] = number;
    }

    for (let key in obj) {
        console.log(`${key} -> ${obj[key]}`);
    }
}

phonebook(["Peter 0888 657 212", "Bob 0899 657 212", "Peter 123123"]);
phonebook(["Maria 123", "Samantha 456", "Nicole 789"]);