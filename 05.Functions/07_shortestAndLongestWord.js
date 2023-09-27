function shortestAndLongestWord(sentence = '') {
    const words = sentence.split(' ');
    let longestWord = words[0];
    let shortestWord = words[0];

    for (const word of words) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
        if (word.length < shortestWord.length) {
            shortestWord = word;
        }
    }

    console.log(`Longest -> ${longestWord}`);
    console.log(`Shortest -> ${shortestWord}`);
}

shortestAndLongestWord('Hello how are you today I hope you are fine');
shortestAndLongestWord('Lorem Ipsum is dummy text of the typesetting industry.');