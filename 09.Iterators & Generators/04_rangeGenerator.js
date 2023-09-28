function* createRange(start, end) {
    let current = start;
    while (current <= end) {
      yield current;
      current++;
    }
  }

const rangeGen = createRange(2, 6);
console.log(rangeGen.next().value);
console.log(rangeGen.next().value);