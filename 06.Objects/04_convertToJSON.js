function convertToJSON(name, surname, eyeColor) {
    return JSON.stringify({
        name,
        lastName: surname,
        eyeColor
    });
}

console.log(convertToJSON("Ivan", "Ivanov", "blue"));
console.log(convertToJSON("Maria", "Petrova", "brown"));