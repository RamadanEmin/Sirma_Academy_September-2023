function battleOfHelmDeep(sequence) {
    const result = [];
    let counter = 0;
    
    for (let char of sequence) {
        if (char === '>' || char === ']' || char === '-') {
            if (char === '-' && counter % 2 == 0) {
                result.push(char);
                counter++;
                continue;
            } else if (char === '-' && counter % 2 !== 0) {
                result.pop();
                counter++;
                continue;
            } else {
                result.push(char);
            }
        } else if (char === '<') {
            if (result.pop() !== ']') {
                return "Won";
            }
        } else if (char === '[') {
            if (result.pop() !== '>') {
                return "Won";
            }
        }
    }

    return result.length === 0 ? "Tie" : "Won";
}

console.log(battleOfHelmDeep(">[]<--"));
console.log(battleOfHelmDeep(">--["));
console.log(battleOfHelmDeep(">>[-"));
console.log(battleOfHelmDeep(">>[[>-->[["));
console.log(battleOfHelmDeep("->-[")); 