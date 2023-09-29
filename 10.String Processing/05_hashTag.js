function hashTag(input) {
    const pattern = /#[A-Za-z]+/g;
    let words = input.match(pattern)

    for (const word of words) {
        console.log(word.slice(1));
    }
}

hashTag('Everyone uses # to tag a #special word in #facebook');
hashTag('The symbol # is known #variously in English-speaking #regions as the #number sign');