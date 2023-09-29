function censor(text = '', word) {
    console.log(text.replaceAll(word, '*'.repeat(word.length)));
}

censor('A small sentence with some words', 'small');
censor('Find the hidden word', 'hidden');
censor('A small sentence with small words', 'small');