function matchFullName(str) {
    const names = str.split(', ');
    const fullName = [];

    for (const name of names) {
        if (name.match(/(^[A-Z][a-z]+ [A-Z][a-z]+)/)) {
            fullName.push(name);
        }
    }

    console.log(fullName.join(', '));
}

matchFullName("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov");