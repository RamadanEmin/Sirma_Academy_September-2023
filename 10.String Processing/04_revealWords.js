function revealWords(word, text) {
    const words = word.split(', ').sort((a, b) => b.length - a.length);
    for (const word of words) {
        text = text.replace('*'.repeat(word.length), word);
    }

    console.log(text);
}

revealWords('great', 'JavaScript* is ***** programming language');
revealWords('the, best, learn', 'JavaScript is *** **** language to *****');