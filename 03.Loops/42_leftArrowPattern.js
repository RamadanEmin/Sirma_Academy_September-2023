function leftArrowPattern(n){
for (let i = 1; i < n; i++) {
    const spacesBefore = ' '.repeat(n - i);
    const stars = '*'.repeat(i);
    console.log(spacesBefore + stars);
  }

  for (let i = n - 2; i >= 1; i--) {
    const spacesBefore = ' '.repeat(n - i);
    const stars = '*'.repeat(i);
    console.log(spacesBefore + stars);
  }
}

leftArrowPattern(5);
leftArrowPattern(4);
leftArrowPattern(10);