function* powerOfTwoGenerator() {
    let power = 0;
    while (true) {
      yield Math.pow(2, power);
      power++;
    }
  }
  
  const generator = powerOfTwoGenerator();
  
  for (let i = 0; i < 9; i++) {
    console.log(generator.next().value);
  }
  