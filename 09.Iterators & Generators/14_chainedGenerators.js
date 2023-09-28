function* combineGenerators(...generators) {
    for (const generator of generators) {
        yield* generator;
    }
}

function* generator1(par1, par2) {
    yield par1;
    yield par2;
}

function* generator2(par1, par2) {
    yield par1;
    yield par2;
}

// const combinedGenerator = combineGenerators(generator1(1, 2), generator2(3, 4));
const combinedGenerator = combineGenerators(generator1('a', 'b'), generator2('c', 'd'));
// const combinedGenerator = combineGenerators(generator1(5, 6), generator2(7, 8));

console.log([...combinedGenerator].join(', '));