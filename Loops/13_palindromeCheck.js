function palindromeCheck(word = '') {
    let reverse = '';

    for (let i = word.length - 1; i >= 0; i--) {
        reverse += word[i];
    }

    if (word === reverse) {
        console.log(true);
    } else {
        console.log(false);
    }
}

palindromeCheck("radar");
palindromeCheck("hello");
palindromeCheck("racecar");
palindromeCheck("java");
palindromeCheck("madam");