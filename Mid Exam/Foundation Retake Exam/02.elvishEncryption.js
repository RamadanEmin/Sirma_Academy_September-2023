function elvishEncryption(encryptedMessage = '') {
    const result = [];
    const words = encryptedMessage.split(' ');
    for (let word of words) {
        if (word.match(/[A-z]+/g)) {
            const rev = word.split(/[^A-z]+/g).join('').split('').reverse().join('');
            result.push(word.replace(/[A-z]+/g, rev));
        } else {
            result.push(word);
        }
    }

     console.log(result.join(' '));
}

elvishEncryption("neht rof on!")
elvishEncryption("lirpa ot noitseuq")
elvishEncryption("gnir – elvish")
elvishEncryption("!on -> sey!")
elvishEncryption("123 abc ,.!")