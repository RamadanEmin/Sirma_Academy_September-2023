function replaceRepeatingSymbols(str = '') {
    const result = str.replace(/(.)\1+/g, '$1');
    console.log(result);
}

replaceRepeatingSymbols('aaaaabbbbbcdddeeeedssaa');
replaceRepeatingSymbols('qqqwerqwecccwd');