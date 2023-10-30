function middleEarthArtifactLocating(str = '', word) {
    const result = [];
    const input = str.split(' ');
    for (let i = 0; i < input.length; i++) {
        let index = input.indexOf(word,i);
        if (index > -1) {
            result.push(index)
            i=index
        }
    }

    if (result.length === 0) {
        console.log('Artifact not found');
    } else {
        console.log(`Found at positions: [${result.join(', ')}]`);
    }
}

middleEarthArtifactLocating("OneRing Palantir OneRing Sting Mithril", "OneRing")
middleEarthArtifactLocating("Vilya Narya Vilya Nenya Vilya Narya","Vilya")
middleEarthArtifactLocating("Sauron Arwen Aragorn Elrond","Narsil")
middleEarthArtifactLocating("FrOdO AragOrn ElrOnd","frOdO")
middleEarthArtifactLocating("OneRing Palantir OneRing Sting Mithril","Palantir")