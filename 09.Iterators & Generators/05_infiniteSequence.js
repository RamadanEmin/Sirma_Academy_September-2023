function* SequenceGenerator() {
    let value = 1;

    while (true) {
        yield value++;
    }
}

const seqGen = SequenceGenerator();

console.log(seqGen.next().value);
console.log(seqGen.next().value);
console.log(seqGen.next().value);
console.log(seqGen.next().value);