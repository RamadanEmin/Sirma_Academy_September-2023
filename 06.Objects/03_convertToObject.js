function convertToObject(text) {
    const obj = JSON.parse(text);

    for (let key in obj) {
        console.log(`${key} -> ${obj[key]}`);
    }
}

convertToObject('{"name": "Ivan", "age": 40, "town": "Sofia"}');
convertToObject('{"firstName": "Ivan", "lastName": "Ivanov"}');