function substring(str = '', start, end) {
    return str.substring(start, end + 1);
}

console.log(substring('ESentence', 1, 8));
console.log(substring('DropWord', 4, 7));