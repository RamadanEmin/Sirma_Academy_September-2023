function charactersInRange(startCharacter, endCharacter) {
    let start = startCharacter.charCodeAt(0);
    let end = endCharacter.charCodeAt(0);
    let result = '';

    if (start > end) {
        let temp = start;
        start = end;
        end = temp;
    }

    for (let i = start + 1; i < end; i++) {
        result += String.fromCharCode(i) + ' ';
    }

    console.log(result);
}

charactersInRange('a', 'd');
charactersInRange('#', ':');
charactersInRange('C', '#');