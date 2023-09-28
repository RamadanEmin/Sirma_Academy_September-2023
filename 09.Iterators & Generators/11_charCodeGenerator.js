function* charCodeGenerator(str) {
    for (const char of str) {
        yield char.charCodeAt(0);
    }
}

// const input = "ab";
// const input = "cd";
const input = "ef";

const generator = charCodeGenerator(input);
const charCodes = [...generator];
console.log(charCodes.join(', '));